<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->

<!-- Main Footer -->
<footer class="main-footer">
    <strong>Copyright &copy; 2019-2020 <a href="#">JLCOMPANY</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.1.0-pre
    </div>
</footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="/admin/js/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="/admin/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE -->
<script src="/admin/js/adminlte.js"></script>

<!-- DataTables -->
<script src="/admin/js/jquery.dataTables.js"></script>
<script src="<?php echo base_url('/admin/js/dataTables.bootstrap4.js') . cache;?>"></script>
<!--<script src="/admin/js/dataTables.bootstrap4.js"></script>-->
<script src="/admin/js/dataTables.responsive.js"></script>
<script src="/admin/js/responsive.bootstrap4.js"></script>

<!-- OPTIONAL SCRIPTS -->
<script src="/admin/js/Chart.min.js"></script>
<!-- AdminLTE for demo purposes -->

<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<!--<script src="/admin/js/dashboard3.js"></script>-->

<!-- SweetAlert2 -->
<script src="/admin/js/sweetalert2.js"></script>
<!-- Toastr -->
<script src="/admin/js/toastr.min.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<!-- 언어 별 CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/i18n/jquery.ui.datepicker-ko.min.js"></script>
<!-- Date 라이브러리 -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<!-- fullCalendar 2.2.5 -->
<!--<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.21/datatables.min.js"></script>-->
<script src="/admin/js/fullcalendar/main.min.js"></script>
<script src="/admin/js/fullcalendar/fullcalendar-daygrid/main.min.js"></script>
<script src="/admin/js/fullcalendar/fullcalendar-timegrid/main.min.js"></script>
<script src="/admin/js/fullcalendar/fullcalendar-interaction/main.min.js"></script>
<script src="/admin/js/fullcalendar/fullcalendar-bootstrap/main.min.js"></script>

<script src="<?php echo base_url('/admin/js/UploadAdapter.js') . cache;?>"></script>
<script src="<?php echo base_url('/admin/js/admin.js') . cache;?>"></script>

<?php if($segment == 'calendar'){?>
<script src="<?php echo base_url('/admin/js/calendar.js') . cache;?>"></script>
<?php }?>
</body>
</html>