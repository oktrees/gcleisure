<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/administrator/board/notice" class="brand-link">
        <!--            <img src="#" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
        <span class="brand-text font-weight-light">관리자</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item menu-open">
                    <a href="#" class="nav-link" style="display: none">
                        <i class="nav-icon fas fa-table"></i>
                        <p>
                            게시판
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/administrator/board/notice" class="nav-link <?php echo ($segment == 'notice')? 'active' : ''?>">
                                <i class="far fa-clipboard nav-icon"></i>
                                <p>공지사항</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/administrator/board/question" class="nav-link <?php echo ($segment == 'question')? 'active' : ''?>"">
                            <span>
                                <i class="far fa-edit nav-icon"></i>
                            </span>
                                <p>문의하기</p>
                            </a>
                        </li>
<!--                        <li class="nav-item">-->
<!--                            <a href="/administrator/board/photo" class="nav-link --><?php //echo ($segment == 'photo')? 'active' : ''?><!--">-->
<!--                                <i class="far fa-image nav-icon"></i>-->
<!--                                <p>포토갤러리</p>-->
<!--                            </a>-->
<!--                        </li>-->
<!--                        <li class="nav-item">-->
<!--                            <a href="/administrator/board/reviews" class="nav-link --><?php //echo ($segment == 'reviews')? 'active' : ''?><!--">-->
<!--                                <i class="far fa-newspaper nav-icon"></i>-->
<!--                                <p>이용후기</p>-->
<!--                            </a>-->
<!--                        </li>-->
                    </ul>
                </li>
<!--                <li class="nav-header">예약 현황</li>-->
                <li class="nav-item menu-open">
                    <a href="#" class="nav-link" style="display: none">
                        <!--                            <i class="nav-icon fas fa-copy"></i>-->
                        <i class="nav-icon fas fa-calendar"></i>
                        <p>
                            예약
                            <i class="fas fa-angle-left right"></i>
<!--                            <span class="badge badge-info right">6</span>-->
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/administrator/reservation/calendar" class="nav-link <?php echo ($segment == 'calendar')? 'active' : ''?>">
                                <i class="far fa-calendar-alt nav-icon"></i>
                                <p>예약현황</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="/administrator/reservation/confirm" class="nav-link <?php echo ($segment == 'confirm')? 'active' : ''?>">
                                <i class="far fa-calendar-check nav-icon"></i>
                                <p>예약확인</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>