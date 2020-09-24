<?php namespace App\Controllers;

use App\Controllers\BaseController;
use App\Libraries\View_lb;
use App\Libraries\Libraries_lb;
use App\Models\Admin_board_m;
use App\Models\Admin_reservation_m;
use Config\Services;
use App\Libraries\Admin_lb;

class Home extends BaseController
{

    public function __construct()
    {
        $this->view_lb = new View_lb();
        $this->libraries_lb = new Libraries_lb();
        $this->admin_lb = new Admin_lb();
        $this->request = \Config\Services::request();
        $this->Admin_board_m = new Admin_board_m($this->request);
        $this->Admin_reservation_m = new Admin_reservation_m($this->request);
    }

    public function test(){

        $res = $this->libraries_lb->weather();
        var_dump($res);
    }
	public function index()
	{
	    $data['gallery'] = $this->getGallery();
        $data['communityList'] = $this->Admin_board_m->getCommunityList();
        $data['communityList']['reservation'] = $this->Admin_reservation_m->reservationPager();
        $data['communityList'] = json_encode($data['communityList']);

//		return view('welcome_message');
        echo $this->view_lb->setView('index_v',$data);
	}
	public function getServiceViews(){
        try {
            $data['segment'] = $this->admin_lb->_getSegment(3);
            echo json_encode(view('/service/'.$data['segment']));
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function indexTest()
    {
//		return view('welcome_message');
        echo $this->view_lb->setViewTest('main_v');
    }
    public function getGallery(){
        $data = $this->Admin_board_m->boardFindGallery();
        $res = $this->libraries_lb->gcLeigureGallerySrc($data);
        return $res ;
    }
    public function getWeather(){
        try {

            $res = $this->libraries_lb->weather();

            echo json_encode($res);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function reservation(){
        try {
            $post = $this->request->getPost();
            foreach($post as $key => $val){
                if($key === 'package'){
                    unset($post[$key]);
                    $post['division'] = $val;
                    $post['title'] = $val;
                }else if($key == 'agree') {
                    unset($post[$key]);
                }else if($key == 'date') {
                    unset($post[$key]);
                    $post['reservation_date'] = $val;
                }
            }

            $post['password'] = $this->libraries_lb->encrypt($post['password']);
            $this->Admin_reservation_m->reservationInsert($post);
            $data['res'] = 'success';
            echo json_encode($data['res']);
        }catch(\Exception $e) {
            echo $e;
        }

        //echo var_dump($reservation);
    }
    public function updateReservation(){
        try {
            $post = $this->request->getPost();
            foreach($post as $key => $val){
                if($key === 'package'){
                    unset($post[$key]);
                    $post['division'] = $val;
                    $post['title'] = $val;
                }else if($key == 'agree') {
                    unset($post[$key]);
                }else if($key == 'date') {
                    unset($post[$key]);
                    $post['reservation_date'] = $val;
                }
            }

            $post['password'] = $this->libraries_lb->encrypt($post['password']);
            $this->Admin_reservation_m->reservationModify($post);
            $data['res'] = 'success';
            echo json_encode($data['res']);
        }catch(\Exception $e) {
            echo $e;
        }

        //echo var_dump($reservation);
    }
    public function changeCommunityPager(){
        try {

            $post = $this->request->getPost();

            if((int)$post['type'] === 1 ){
                if(!empty($post['search'])){
                    $data = $this->Admin_board_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange'],$post['search']);
                }else {
                    $data = $this->Admin_board_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange']);
                }
                $data['top'] = $this->Admin_board_m->findNoticeTop();
            }else if((int)$post['type'] === 2){
                if(!empty($post['search'])){
                    $data = $this->Admin_board_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange'],$post['search']);
                }else {
                    $data = $this->Admin_board_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange']);
                }
            }else if((int)$post['type'] === 3){
                if(!empty($post['search'])){
                    $data = $this->Admin_reservation_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange'],$post['search']);
                }else {
                    $data = $this->Admin_reservation_m->pager($post['type'],$post['limit'],$post['offset'],$post['listNum'],$post['navRange']);
                }
            }

            echo json_encode($data);
        }catch(\Exception $e) {
            echo $e;
        }
    }
	public function getPopupList(){
        try {
            $post = $this->request->getPost();
            $board_idx = $post['idx'];
            $notice_cookie = [];

            if(!empty($_COOKIE['notice'])){
                $notice_cookie = json_decode($_COOKIE['notice']);
                if(!in_array($board_idx, $notice_cookie)){
                    array_push($notice_cookie, $board_idx);
                    $this->Admin_board_m->updateViews($board_idx);
                }
            }else{
                array_push($notice_cookie, $board_idx);
                $this->Admin_board_m->updateViews($board_idx);
            }
            setcookie('notice', json_encode($notice_cookie) , time() + 86400, "/");

//            $result = $this->Admin_board_m->getPopupList($post['idx'],$post['search']);
            $result['success'] = true;
            echo json_encode($result);
        }catch(\Exception $e) {
            echo $e;
        }
    }
    public function confirmPassword(){
        try {
            $post = $this->request->getPost();
            if((int)$post['type'] === 2){
                $data = $this->Admin_board_m->confirmPassword($post);
            }else if((int)$post['type'] === 3){
                $data = $this->Admin_reservation_m->confirmPassword($post);
            }

            if($data){
                $res['isConfirm'] = true;
                echo json_encode($data);
            }else {
                $res['isConfirm'] = false;
                echo json_encode($data);
            }

        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function selectBoardWhere(){
        try {
            $post = $this->request->getPost();
            if((int)$post['type'] === 2){
                $data = $this->Admin_board_m->boardFind($post['idx'])[0];
                $data->password = $this->libraries_lb->decrypt($data->password);
            }else if((int)$post['type'] === 3){
                $data = $this->Admin_reservation_m->reservationFind($post['idx'])[0];
                $data->password = $this->libraries_lb->decrypt($data->password);
            }
            echo json_encode($data);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function insertInquiry(){
        try {
            $post = $this->request->getPost();
            foreach($post as $key => $val){
                if($key == 'agree' ) {
                    unset($post[$key]);
                }else if($key == 'subject') {
                    unset($post[$key]);
                    $post['title'] = $val;
                }
            }
            $post['type'] = '2';
            if($this->Admin_board_m->insertInquiry($post)){
                $data = $this->Admin_board_m->pager(2);
            };
            echo json_encode($data);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function deleteInquiry(){
        try {
            $post = $this->request->getPost();
            if($this->Admin_board_m->deleteInquiry($post)) {
                $data = $this->Admin_board_m->pager(2);
            }

            echo json_encode($data);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function updateInquiry(){
        try {
            $post = $this->request->getPost();
            foreach($post as $key => $val){
                if($key == 'agree' ) {
                    unset($post[$key]);
                }else if($key == 'subject') {
                    unset($post[$key]);
                    $post['title'] = $val;
                }
            }
            $data = $this->Admin_board_m->boardModify($post);
            
            echo json_encode($data);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
    public function cancleReservation(){
        try {
            $post = $this->request->getPost();
            $data = $this->Admin_reservation_m->reservationModify($post);

            echo json_encode($data);
        }catch(\Exception $e) {
            $res['error'] = $e->getMessage() . ', line : ' . $e->getLine();
            echo json_encode($res);
        }
    }
}
