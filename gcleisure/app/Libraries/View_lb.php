<?php

namespace App\Libraries;

class View_lb
{
    public function __construct()
    {
        $this->uri = current_url(true);
        $this->segments = $this->uri->getSegments();
    }

    public function setView($view, $data = array())
    {

        if ($view == 'login_v') {
            echo view($view, $data);
        }else if($view == 'main_v'){
            echo view('/inc/header_v', $data);
            echo view($view, $data);
            echo view('/inc/footer_v');
        } else if($view == 'admin/admin_main_v' || $view == 'admin/admin_board_v' || $view == 'admin/admin_reservation_v' || $view == 'admin/admin_calendar_v'){
            if(!empty($_SESSION['id'])) {
                echo view('/admin/inc/admin_header_v', $data);
                echo view('/admin/inc/admin_nav_v', $data);
                echo view('/admin/inc/admin_aside_v', $data);
                echo view($view, $data);
                echo view('/admin/inc/admin_modal_v');
                echo view('/admin/inc/admin_footer_v', $data);
            }else {
                header('Location: https://new.gcleisure.com/Administrator/admin');
            }
        } else {
            echo view('/inc/header_v', $data);

            if (count($this->segments) >= 2) {
                if ($this->uri->getSegment(3) !== 'analysis' && $this->uri->getSegment(3) !== 'team' && $this->uri->getSegment(3) !== 'player' && $this->uri->getSegment(3) !== 'league') {
                    echo view('/inc/nav_v', $data);
                    echo view('/inc/left_v', $data);
                }
            }
            echo view($view, $data);
            echo view('/inc/footer_v');
        }
    }

    public function setViewTest($view, $data = array())
    {


        if ($view == 'login_v') {
            echo view($view, $data);
        }else if($view == 'main_v'){
            echo view('/inc/header_v', $data);
            echo view($view, $data);
            echo view('/inc/footer_v');
        } else if($view == 'admin/admin_main_v' || $view == 'admin/admin_board_v' || $view == 'admin/admin_reservation_v' || $view == 'admin/admin_calendar_v'){
            echo view('/admin/inc/admin_header_v', $data);
            echo view('/admin/inc/admin_nav_v', $data);
            echo view('/admin/inc/admin_aside_v', $data);
            echo view($view, $data);
            echo view('/admin/inc/admin_modal_v');
            echo view('/admin/inc/admin_footer_test_v',$data);
        } else {
            echo view('/inc/header_v', $data);

            if (count($this->segments) >= 2) {
                if ($this->uri->getSegment(3) !== 'analysis' && $this->uri->getSegment(3) !== 'team' && $this->uri->getSegment(3) !== 'player' && $this->uri->getSegment(3) !== 'league') {
                    echo view('/inc/nav_v', $data);
                    echo view('/inc/left_v', $data);
                }
            }
            echo view($view, $data);
            echo view('/inc/footer_v');
        }
    }
}