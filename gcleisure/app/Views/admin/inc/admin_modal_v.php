<style>
    .ck-content {
        min-height: 450px;
    }
</style>
<div class="modal fade" id="modal-xl" data-backdrop="static" data-keyboard='false'>
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
<!--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                    <span aria-hidden="true">&times;</span>-->
<!--                </button>-->
            </div>
            <div class="modal-body">
                <form name="Form" id="Form">
                    <input type="hidden" name="idx" value="">
                    <div class="row">
                        <div class="col-sm-12">
                            <!-- text input -->
                            <div class="form-group">
                                <label>제목</label>
                                <input type="text" class="form-control" name="title" placeholder="제목 ...">
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label>내용</label>
                                <div id="editor" name="content"></div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="col-12" style="display: none" id="commentButtonDiv">
                    <button class="btn btn-primary" id="commentInsert">답변등록</button>
                </div>
                <div class="col-12" style="display: none;" id="commentDiv">
                    <div class="post">
                        <div class="user-block">
                          <a href="javascript:void(0);" class="float-right btn-tool"><i class="fas fa-times"></i></a>
                        </div>
                        <!-- /.user-block -->
                        <p id="commentContents">

                        </p>
                        <p>
                            <span class="float-right">
                          <a href="javascript:void(0);" class="link-black text-sm" >
                            <i class="far fa-comments mr-1"></i> 답변수정
                          </a>
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="modal-footer justify-content-between" id="boardModalFooter">
                <button type="button" class="btn btn-default" data-dismiss="modal" id="<?php echo $id; ?>CancelButton">
                    취소
                </button>
                <button type="button" class="btn btn-primary" data-id="<?php echo $id; ?>"
                        id="<?php echo $id; ?>InsertButton">저장
                </button>
                <button type="button" class="btn btn-warning" style="display: none" data-id="<?php echo $id; ?>"
                        id="<?php echo $id; ?>ModifyButton">수정
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<div class="modal fade" id="modal-reservation" data-backdrop="static" data-keyboard='false'>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!--            <div class="modal-header">-->
            <!--                <h4 class="modal-title"></h4>-->
            <!--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
            <!--                    <span aria-hidden="true">&times;</span>-->
            <!--                </button>-->
            <!--            </div>-->
            <div class="modal-body">
                <form name="reservationForm" id="reservationForm">
                    <input type="hidden" name="idx" value="">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="reservationModalTable">
                            <tbody>
                            <tr>
                                <th style="width:12%">글쓴이 :</th>
                                <td><input type="text" name="name" value=""></td>
                            </tr>
                            <tr>
                                <th>예약일 :</th>
                                <td><input type="text" name="reservation_date" id="datepicker" value=""></td>
                            </tr>
                            <tr>
                                <th>예약시간 :</th>
                                <td>

                                    <input type="time" id="default-picker" class="form-control" name="reservation_time"
                                           style="width: 25%"
                                           placeholder="Select time">

                                </td>
                            </tr>
                            <tr>
                                <th>렌탈종류 :</th>
<!--                                <td><input type="text" name="division" value=""></td>-->
                                <td style="display: block">
                                    <select class="custom-select" id="division" name="division">
                                        <?php foreach (rental as $key=>$value){?>
                                            <option value="<?php echo $value?>"><?php echo $value;?></option>
                                        <?php }?>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>작성일 :</th>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="col-3 form-group">
                            <label>예약상태</label>
                            <select class="custom-select" id="typeSelect" name="type">
                                <option class="redColor" value="1">대기</option>
                                <option class="greenColor" value="2">예약완료</option>
                                <option class="greenColor" value="3">예약취소</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-between" id="boardModalFooter">
                <button type="button" class="btn btn-default" data-dismiss="modal" id="<?php echo $id; ?>CancelButton">
                    취소
                </button>
                <button type="button" class="btn btn-primary" data-id="<?php echo $id; ?>"
                        id="<?php echo $id; ?>ReservationButton">저장
                </button>
                <button type="button" class="btn btn-warning" style="display:none" data-id="<?php echo $id; ?>"
                        id="<?php echo $id; ?>ReservationModifyButton">수정
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<div class="modal fade" id="modal-comment" data-backdrop="static" data-keyboard='false'>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title comment"></h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-12">
                    <div class="form-group">
                        <label>답변 </label>
                        <textarea class="form-control" rows="3" name="commentText" placeholder="답변 등록 ..."></textarea>
                    </div>
                </div>

            </div>
            <div class="modal-footer justify-content-between" id="commentModalFooter">
                <button type="button" class="btn btn-default" data-dismiss="modal" id="<?php echo $id; ?>CancelButton">
                    취소
                </button>
                <button type="button" class="btn btn-primary" data-id="<?php echo $id; ?>"
                        id="commentInsertButton">저장
                </button>
                <button type="button" class="btn btn-warning" style="display: none" data-id="<?php echo $id; ?>"
                        id="commentModifyButton">수정
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->
