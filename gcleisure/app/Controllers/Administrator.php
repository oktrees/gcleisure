<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Libraries\View_lb;
use App\Libraries\Admin_lb;
use App\Models\Admin_board_m;
use App\Models\Admin_reservation_m;
use Config\Services;

class Administrator extends BaseController
{
    public function __construct()
    {
        $this->view_lb = new View_lb();
        $this->admin_lb = new Admin_lb();
        $this->request = \Config\Services::request();
        $this->Admin_board_m = new Admin_board_m($this->request);
        $this->Admin_reservation_m = new Admin_reservation_m($this->request);

        helper('custom_helpers');
    }

    public function index()
    {
//        var_dump($this->config->table());
        $data['segment'] = $this->admin_lb->_getSegment(2);
        echo $this->view_lb->setView('admin/admin_main_v', $data);
    }
    public function admin(){
        $data = $this->request->getPost();
        $get = $this->request->getGetPost('type');

        if((int)$get === 1){
            session_destroy();
            header('Location: https://new.gcleisure.com/Administrator/admin');
        }

        if(!empty($_SESSION['isValidation']) && $_SESSION['isValidation']) {
            header('Location: https://new.gcleisure.com/Administrator/board/notice');
        }else if (empty($data)) {
            echo view('admin/admin_login_v', $data);
        }else {
            $validation_data= $this->Admin_board_m->adminSelect();
            $validation = $this->admin_lb->validation_login($data, $validation_data);

            $_SESSION['isValidation'] = true;
            if(empty($validation['error'])){
                $_SESSION['isValidation'] = true;
                header('Location: https://new.gcleisure.com/Administrator/admin');
            }else {
                $_SESSION['isValidation'] = false;
                alert($validation['error']['message'], 'Administrator/admin?id='.$data['id']);
            }
        }
    }

    public function board($arg)
    {
        $data['segment'] = $this->admin_lb->_getSegment(3);
        switch ($arg) {
            case 'notice' :
                $data['title'] = '공지사항';
                $data['id'] = 'notice';
                break;
            case 'question' :
                $data['title'] = '문의하기';
                $data['id'] = 'question';
                break;
            case 'photo' :
                $data['title'] = '포토갤러리';
                $data['id'] = 'photo';
                break;
            case 'reviews' :
                $data['title'] = '이용후기';
                $data['id'] = 'reviews';
                break;
        }
        echo $this->view_lb->setView('admin/admin_board_v', $data);
    }

    public function reservation($arg)
    {
        $data['segment'] = $this->admin_lb->_getSegment(3);
        switch ($arg) {
            case 'calendar' :
                $data['title'] = '예약현황';
                $data['id'] = 'calendar';
                echo $this->view_lb->setView('admin/admin_calendar_v', $data);
                break;
            case 'confirm' :
                $data['title'] = '예약확인';
                $data['id'] = 'confirm';
                echo $this->view_lb->setView('admin/admin_reservation_v', $data);
                break;
        }
    }

    public function ajax_calendar_list()
    {
        $data = $this->Admin_reservation_m->reservationAll();
        $result = array();
        foreach ($data as $d) {
            switch ($d->type) {
                case "1" :
                    $bgcolor = '#6c757d';
                    break;
                case "2" :
                    $bgcolor = '#28a745';
                    break;
            }
            $row = array(
                'id' => $d->idx,
                'title' => $d->name .' '. rental[$d->division],
                'start' => $d->reservation_date.' '.$d->reservation_time,
                'backgroundColor' => $bgcolor, //Blue
            );
            array_push($result,$row);
        }

        return $this->response->setJSON($result);
    }

    public function ajax_list()
    {
        $request = Services::request();
        $Admin_board_m = new Admin_board_m($request);
        if ($request->getMethod(true) == 'POST') {
            $lists = $Admin_board_m->get_datatables();
            $data = [];
            $no = $request->getPost("start");

            $i = 0;
//            $totalpage = ceil($Admin_board_m->count_filtered() / $no);
            if ($no == 0) {
                $page = 1;
            } else {
                $page = ceil($no / 10) + 1;
            }
            foreach ($lists as $list) {
                if ($Admin_board_m->count_filtered() > 10) {
                    $buyNum = $Admin_board_m->count_filtered() - (10 * ($page - 1));
                } else {
                    $buyNum = $Admin_board_m->count_filtered();
                }

                $re = '/img src="(.+?)"/m';
                preg_match_all($re, $list->contents, $matches, PREG_SET_ORDER, 0);
                if($matches){
                    $contents = '<img src="'.$matches[0][1].'" height="49px;">';
                }else{
                    $contents = $list->contents;
                }

                $row = [];
                $row[] = $list->idx;
                $row[] = $buyNum - $i;
                $row[] = $list->contents;
                $row[] = $list->title;
                $row[] = $contents;
                $row[] = date('Y-m-d', strtotime($list->date));
                $data[] = $row;
//                $no++;
                $i++;
            }
            $output = ["draw" => $request->getPost('draw'),
                "recordsTotal" => $Admin_board_m->count_all(),
                "recordsFiltered" => $Admin_board_m->count_filtered(),
                "data" => $data];
//            echo json_encode($output);
            return $this->response->setJSON($output);
        } else {
            return $this->response->setJSON(null);
        }
    }

    public function boardInsert()
    {
        $data = array();
        $form = $this->request->getVar('form');
        $data['contents'] = $this->request->getVar('editor');
        foreach ($form as $f) {
            $data[$f['name']] = $f['value'];
        }
        $insertId = $this->Admin_board_m->boardInsert($data);
        $result = $this->Admin_board_m->boardFind($insertId);
        return $this->response->setJSON($insertId);
    }

    public function boardModify()
    {
        $data = array();
        $form = $this->request->getVar('form');
        $data['contents'] = $this->request->getVar('editor');
        foreach ($form as $f) {
            $data[$f['name']] = $f['value'];
        }
        $result = $this->Admin_board_m->boardModify($data);

        return $this->response->setJSON($result);
    }

    public function boardDelete()
    {
        $data = $this->request->getVar('data');
        $link = $this->request->getVar('link');

        var_dump($data);
        var_dump($link);
        $result = $this->Admin_board_m->boardDelete($data);
        if ($result) {
            $this->boardImgUnlink($link);
        }

        return $this->response->setJSON($result);
    }

    public function commentCheck()
    {
        $idx = $this->request->getVar('idx');
        $result  = $this->Admin_board_m->commentCheck($idx);
        return $this->response->setJSON($result);
    }

    public function commentDel()
    {
        $idx = $this->request->getVar('p_idx');
        $result  = $this->Admin_board_m->commentDel($idx);
        return $this->response->setJSON($result);
    }

    public function commentInsert()
    {
        $data = $this->request->getVar('data');
        $result = $this->Admin_board_m->commentInsert($data);
        return $this->response->setJSON($result);
    }

    public function commentModify()
    {

        $data = $this->request->getVar('data');
        $result = $this->Admin_board_m->commentModify($data);
        return $this->response->setJSON($result);
        $result = $this->Admin_board_m->commentModify($data);

        return $this->response->setJSON($result);
    }

    public function reservation_ajax_list()
    {
        $request = Services::request();
        $Admin_reservation_m = new Admin_reservation_m($request);
        if ($request->getMethod(true) == 'POST') {
            $lists = $Admin_reservation_m->get_datatables();
            $data = [];
            $no = $request->getPost("start");

            $i = 0;
//            $totalpage = ceil($Admin_board_m->count_filtered() / $no);
            if ($no == 0) {
                $page = 1;
            } else {
                $page = ceil($no / 10) + 1;
            }
            foreach ($lists as $list) {
                if ($Admin_reservation_m->count_filtered() > 10) {
                    $buyNum = $Admin_reservation_m->count_filtered() - (10 * ($page - 1));
                } else {
                    $buyNum = $Admin_reservation_m->count_filtered();
                }

                if(rental[$list->division]){
                    $contents = rental[$list->division];
                }else{
                    $contents = $list->division;
                }

                $row = [];
                $row[] = $list->idx;
                $row[] = $buyNum - $i;
                $row[] = $list->title;
                $row[] = $list->name;
                $row[] = $list->reservation_date;
//                $row[] = $list->division;
                $row[] = $contents;
                $row[] = $list->date;
                $row[] = $list->type;
                $row[] = $list->reservation_time;
//                $row[] = strip_tags($list->contents);
//                $row[] = date('Y-m-d', strtotime($list->date));
                $data[] = $row;
//                $no++;
                $i++;
            }
            $output = ["draw" => $request->getPost('draw'),
                "recordsTotal" => $Admin_reservation_m->count_all(),
                "recordsFiltered" => $Admin_reservation_m->count_filtered(),
                "data" => $data];
//            echo json_encode($output);
            return $this->response->setJSON($output);
        } else {
            return $this->response->setJSON(null);
        }
    }

    public function reservationFind()
    {
        $idx = $this->request->getVar('idx');
        $result = $this->Admin_reservation_m->reservationFind($idx);
        return $this->response->setJSON($result);
    }
    public function reservationInsert()
    {
        $data = array();
        $form = $this->request->getVar('form');
//        $data['contents'] = $this->request->getVar('editor');
        foreach ($form as $f) {
            $data[$f['name']] = $f['value'];
        }
        $insertId = $this->Admin_reservation_m->reservationInsert($data);

        $result = $this->Admin_reservation_m->reservationFind($insertId);

        return $this->response->setJSON($result);
    }
    public function reservationModify()
    {
        $data = array();
        $form = $this->request->getVar('form');
//        $data['contents'] = $this->request->getVar('editor');
        foreach ($form as $f) {
            $data[$f['name']] = $f['value'];
        }
        $result = $this->Admin_reservation_m->reservationModify($data);

        return $this->response->setJSON($result);
    }

    public function reservationDelete()
    {
        $data = $this->request->getVar('data');
//        $link = $this->request->getVar('link');

        $result = $this->Admin_reservation_m->reservationDelete($data);

        return $this->response->setJSON($result);
    }

    private function boardImgUnlink($link)
    {
        try {
            if ($link) {
                foreach ($link as $lk) {
                    $is_file_exist = file_exists(ROOTPATH . 'public/res/img/upload/' . $lk);

                    if ($is_file_exist) {
                        unlink(ROOTPATH . 'public/res/img/upload/' . $lk);
                    } else {
                        echo 'Not found.';
                    }
                }
            }
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }

    public function upload()
    {
        $file = $this->request->getFile('upload');
        $name = $file->getName();

        if ($file->isValid() && !$file->hasMoved()) {
            $file->move(ROOTPATH . 'public/res/img/upload/', milliseconds . '_' . $name);
            echo json_encode(array('uploaded' => true, 'url' => '/res/img/upload/' . milliseconds . '_' . $name));
            exit;
        } else {
            echo json_encode(array('uploaded' => false, 'url' => '/res/img/upload/' . milliseconds . '_' . $name));
            exit;
        }
    }

    public function unlink()
    {
        $link = $this->request->getPost('unlink[]');

        if ($link) {
            foreach ($link as $lk) {
                unlink(ROOTPATH . 'public/res/img/upload/' . $lk);
            }
        }
        echo json_encode($link);
    }
}