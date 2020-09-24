<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>관리자</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="/admin/css/all.css">
    <!-- IonIcons -->
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!-- DataTables -->

    <link rel="stylesheet" href="<?php echo base_url('/admin/css/dataTables.bootstrap4.css') . cache;?>">
    <link rel="stylesheet" href="/admin/css/responsive.bootstrap4.css">

    <!-- SweetAlert2 -->
    <link rel="stylesheet" href="/admin/css/bootstrap-4.css">
    <!-- Toastr -->
    <link rel="stylesheet" href="/admin/css/toastr.css">

    <!-- Theme style -->
    <link rel="stylesheet" href="/admin/css/adminlte.css?ver=6">
    <script src="https://cdn.ckeditor.com/ckeditor5/21.0.0/classic/ckeditor.js"></script>

    <!--  jquery calendar  -->
    <!-- jquery UI CDN -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

    <!-- fullCalendar -->
    <link rel="stylesheet" href="/admin/css/fullcalendar/main.css?ver=2">
    <link rel="stylesheet" href="/admin/css/fullcalendar/fullcalendar-daygrid/main.css">
    <link rel="stylesheet" href="/admin/css/fullcalendar/fullcalendar-timegrid/main.css">
    <link rel="stylesheet" href="/admin/css/fullcalendar/fullcalendar-bootstrap/main.css">

<!--    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">-->
<!--    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>-->
<!--    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->
<!--    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery.ui.datepicker-ko.min.js"></script>-->

</head>
<body class="hold-transition sidebar-mini">

<div class="wrapper">
    <header>
        <div>
            <span><?php echo $_SESSION['name'];?> 님이 로그인 중입니다.</span>
        </div>
        <div>
            <a href="/Administrator/admin?type=1">
                <span>로그아웃</span>
            </a>
        </div>
    </header>