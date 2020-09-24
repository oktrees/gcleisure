<style>
    .fc-sun {
        color: red !important;
    }
    .fc-sat{
        color: blue !important;
    }
</style>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1><?php echo $title;?></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">게시판</a></li>
                        <li class="breadcrumb-item active"><?php echo $title;?></li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-between">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div id="calendar"></div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
<!--                <div class="col-2 offset-md-0" style="margin-bottom: 10px;">-->
<!--                    <button type="button" id = '--><?php //echo $id;?><!--DelButton' data-id = '--><?php //echo $id;?><!--' class="btn btn-block btn-danger btn-flat">삭제</button>-->
<!--                </div>-->
                <div class="col-2 offset-md-10" style="margin-bottom: 10px;">
                    <button type="button" id = '<?php echo $id;?>Button' data-id = '<?php echo $id;?>' class="btn btn-block btn-primary btn-flat">등록</button>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>