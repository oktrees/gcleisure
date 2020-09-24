<?php

namespace App\Controllers;
use CodeIgniter\Controller;
use App\Libraries\View_lb;

class Admin extends Controller
{
    public function __construct()
    {
        $this->view_lb = new View_lb();
    }

    public function index()
    {
        echo $this->view_lb->setView('admin/admin_main_v');
    }
}