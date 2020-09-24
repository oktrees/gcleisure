<style>
    td {Word-wrap: break-Word;}
    .form-check-inline .form-check-input {
        margin-right: 0;
    }
    .dataTables_paginate{
        display:flex;
        align-items:center;
    }
    table.dataTable tbody td {
        vertical-align: middle;
        height: 49px;
    }
    p{
        all: unset;
        margin-bottom: 1rem;
    }
    .my_class {
        text-align: center;
        overflow:hidden;white-space:nowrap;text-overflow:ellipsis;
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
                            <table id="datatable" data-id = '<?php echo $id;?>' class="table table-bordered table-hover" style="table-layout:fixed" >
                                <thead>
                                <tr>
                                    <th>
                                        <div>
                                            <input type="checkbox" id="allCheck" name="allCheck" value="option1">
                                        </div>
                                    </th>
                                    <th>No</th>
                                    <th></th>
                                    <th>제목</th>
                                    <th>내용</th>
                                    <th>날짜</th>
                                    <th>
                                        <i class="fas fa-cog"></i>
                                    </th>
                                </tr>
                                </thead>

                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
                <div class="col-2 offset-md-0">
                    <button type="button" id = '<?php echo $id;?>DelButton' data-id = '<?php echo $id;?>' class="btn btn-block btn-danger btn-flat">삭제</button>
                </div>
                <div class="col-2 offset-md-8">
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
