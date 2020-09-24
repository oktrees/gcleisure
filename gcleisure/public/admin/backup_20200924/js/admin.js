(function ($) {
    'use strict'
    const xhr = new XMLHttpRequest();

    $("#datepicker").datepicker();

    $('.nav-treeview .nav-link').on('click', function () {
        console.log($(this).attr('class'))
        $('.nav-treeview .nav-link').removeClass('active');
        $(this).addClass('active')
    })

    var lang_kor = {
        "decimal": "",
        "emptyTable": "데이터가 없습니다.",
        "info": "_START_ - _END_ (총 _TOTAL_ 개)",
        "infoEmpty": "0개",
        "infoFiltered": "(전체 _MAX_ 개 중 검색결과)",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "_MENU_ 개씩 보기",
        "loadingRecords": "로딩중...",
        "processing": "처리중...",
        "search": "검색 : ",
        "zeroRecords": "검색된 데이터가 없습니다.",
        "paginate": {
            "first": "첫 페이지",
            "last": "마지막 페이지",
            "next": "다음",
            "previous": "이전"
        },
        "aria": {
            "sortAscending": " :  오름차순 정렬",
            "sortDescending": " :  내림차순 정렬"
        }
    };
var test = function(data){
    return "<input type='checkbox' name='check' value='" + data + "'>";
}
    var table = $('#datatable').DataTable({
        // "processing": true,
        "serverSide": true,
        "paging": true,
        "info": true,
        "order": [],
        "ajax": {
            "url": "/administrator/ajax_list",
            "type": "POST",
            "data": {
                "type": $("#datatable").attr('data-id')
            }
        },

        "lengthChange": false,

        //optional
        // "lengthMenu": [[5, 10, 25], [5, 10, 25]],
        "columnDefs": [
            {
                "render": function (data, type, row) {
                    return "<input type='checkbox' name='check' value='" + data + "'>";
                },
                "targets": [0],
                "width": "1%",
            },
            {
                "targets": [1], // your case first column
                "className": "text-center",
                "width": "6%"
            },
            {
                "targets": [2],
                "visible": false
            },
            {
                "targets": [3],
                "className": "text-center",
                "width": "25%",
                "sClass": "my_class"
            },
            {
                "targets": [4],
                "className": "text-center",
                "sClass": "my_class"
            },
            {
                "targets": [5], // your case first column
                "className": "text-center",
                "width": "10%"
            },
            {
                "targets": [],
                "orderable": false,
            },
            {
                "targets": -1,
                "className": "text-center",
                "data": null,
                "defaultContent": "<button type='button' class='btn btn-block btn-outline-warning btn-xs'>수정</button>",
                "width": "6%"
            }
        ],
        "autoWidth": false,
        "ordering": false,

        'language': lang_kor
    })

    // $('#datatable').on('page.dt', function () {
    //     var page = table.page.info().page;
    //     $('#page').attr('data-page', page + 1)
    //     console.log(page)
    // });

    //수정 버튼 이벤트
    $('#datatable tbody').on('click', 'tr button.btn', function () {
        var data = table.row($(this).closest('tr')).data();
        // console.log(data)
        var type = $("#datatable").attr('data-id');
        switch (type) {
            case 'notice':
                $('.modal-title').text('공지사항 수정')
                break;
            case 'question':
                $('.modal-title').text('문의하기 수정')
                break;
            case 'photo':
                $('.modal-title').text('포토갤러리 수정')
                break;
            case 'reviews':
                $('.modal-title').text('이용후기 수정')
                break;
        }
        $("input[name='idx']").val(data[0])
        $("input[name='title']").val(data[3])
        myEditor.setData(data[2])

        console.log(data[2])

        $("#boardModalFooter > button:nth-child(2)").css('display', 'none')
        $("#boardModalFooter > button:nth-child(3)").css('display', 'block')

        if (type == 'question') {
            //ajax 확인
            console.log(data[0])
            var commentCheck = sweetalert.ajax(data[0], null, 'commentCheck');
            console.log(commentCheck)
            console.log(commentCheck.length)
            if (commentCheck.length > 0) {
                $("#commentButtonDiv").css('display', 'none')
                $('#commentContents').text(commentCheck[0].comment)
                $('#commentDiv').css('display', 'block')
            } else {
                $("#commentButtonDiv").css('display', 'block')
                $('#commentDiv').css('display', 'none')
            }

        }

        $('#modal-xl').modal('show')
    });

    //답변하기
    $("#commentInsert").on('click', function () {
        $('.modal-title.comment').text('답변등록')
        $('textarea[name="commentText"]').val("");
        $('#commentModifyButton').css('display','none');
        $('#commentInsertButton').css('display','block');
        $('#modal-comment').modal('show')
    })
    $("#commentInsertButton").on('click', function () {
        var p_idx = $('input[name="idx"]').val();
        var comment = $('textarea[name="commentText"]').val();
        var obj = {};
        obj.data = {'p_idx': p_idx, 'comment': comment};
        $.ajax({
            url: '/administrator/commentInsert',
            data: obj,
            async: false,
            type: 'POST',
            success: function (res) {
                console.log(res)
                Swal.fire({
                    icon: 'success',
                    title: '답변등록 완료',
                    showConfirmButton: false,
                    timer: 1500
                })
                $('#modal-comment').modal('hide')
                $("#commentButtonDiv").css('display', 'none')
                $('#commentDiv').css('display', 'block')
                $('#commentContents').text(comment)
                // $('#modal-xl').modal('hide')
            },
            error: function (e) {
                sweetalert.error();
            }
        });
    })
    //답변 삭제 이벤트
    $('.float-right.btn-tool').on('click', function () {
        var p_idx = $('input[name="idx"]').val()
        sweetalert.del(p_idx, null, 'comment')
    })
    //답변 수정 이벤트
    $('.link-black.text-sm').on('click',function(){
        $('.modal-title.comment').text('답변수정')
        $('#commentInsertButton').css('display','none');
        $('#commentModifyButton').css('display','block');
        $('textarea[name="commentText"]').val($('#commentContents').text())
        $('#modal-comment').modal('show')
    })
    $('#commentModifyButton').on('click',function(){
        var p_idx = $('input[name="idx"]').val()
        var comment = $('textarea[name="commentText"]').val();

        var data = {'p_idx':p_idx,'comment':comment}
        sweetalert.modify(data,null,'comment_modify')
    })


    //모달 설정
    $('#noticeButton,#questionButton,#photoButton,#reviewsButton').on('click', function () {
        $("#commentDiv").css('display','none');
        $("input[name='idx']").val("");
        var type = $(this).attr('data-id');
        switch (type) {
            case 'notice':
                $('.modal-title').text('공지사항')
                break;
            case 'question':
                $('.modal-title').text('문의하기')
                break;
            case 'photo':
                $('.modal-title').text('포토갤러리')
                break;
            case 'reviews':
                $('.modal-title').text('이용후기')
                break;
        }

        $("#boardModalFooter > button:nth-child(2)").css('display', 'block')
        $("#boardModalFooter > button:nth-child(3)").css('display', 'none')
        $('#modal-xl').modal('show')
    })

    //모달 초기화
    $('#modal-xl').on('hidden.bs.modal', function (e) {
        $("input[name='title']").val("")
        // console.log(myEditor.getData())
        myEditor.setData("")
    })


    // 에디터 초기화
    var myEditor;
    var editorSet = {
        // removePlugins: ['Heading', 'Link', 'MediaEmbed'],
        removePlugins: ['Link', 'MediaEmbed'],
        extraPlugins: [MyCustomUploadAdapterPlugin],
    }
    if(location.pathname.split('/')[3] === 'question'){
        editorSet.toolbar = [];
    }

    ClassicEditor
        .create(document.querySelector('#editor'), editorSet ).then(editor => {
        // console.log('Editor was initialized', editor);
        myEditor = editor;
        myEditor.plugins.get( 'TextTransformation' ).isEnabled = false;
        myEditor.plugins.get( 'ImageCaption' ).isEnabled = false;
        myEditor.model.document.on('change:data', (evt, data) => {
            console.log(editor.getData());
        });
    }).catch(error => {
        console.error(error);
    });

    $('#noticeCancelButton,#questionCancelButton,#photoCancelButton,#reviewsCancelButton').on('click', function () {

        const regex = /img src="\/res\/img\/(.+?)"\>/gm;
        let m;
        var arr = [];
        while ((m = regex.exec(myEditor.getData())) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
                if (groupIndex == 1) {
                    arr.push(match)
                }
            });
        }
        const data = new FormData()
        for (var i = 0; i < arr.length; i++) {
            data.append('unlink[]', arr[i]);
        }
        $.ajax({
            url: '/administrator/unlink',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                // alert(data);
            }
        });
    });

    //등록 이벤트
    $('#noticeInsertButton,#questionInsertButton,#photoInsertButton,#reviewsInsertButton').on('click', function () {
        const getData = myEditor.getData();
        const data = $("#Form").serializeArray();
        var type = $(this).attr('data-id');
        switch (type) {
            case 'notice':
                type = 1;
                break;
            case 'question':
                type = 2;
                break;
            case 'photo':
                type = 3;
                break;
            case 'reviews':
                type = 4;
                break;
        }
        var obj = {'name': 'type', 'value': type};
        data.push(obj);
        if (data[1]['value'] == "") {
            Swal.fire(
                {
                    text: "제목을 입력하세요!",
                    icon: 'error',
                }
            )
        } else if (getData == "") {
            Swal.fire(
                {
                    text: "내용을 입력하세요!",
                    icon: 'error',
                }
            )
        } else {
            sweetalert.insert(data, getData);
        }
        /*
        Modal window position, can be
        'top', 'top-start', 'top-end', 'center',
        'center-start', 'center-end', 'bottom',
        'bottom-start', or 'bottom-end'.
         */

        // $('#modal-xl').modal('hide')
    })

    //수정 이벤트
    $('#noticeModifyButton,#questionModifyButton,#photoModifyButton,#reviewsModifyButton').on('click', function () {
        const getData = myEditor.getData();
        const data = $("#Form").serializeArray();
        var type = $(this).attr('data-id');
        switch (type) {
            case 'notice':
                type = 1;
                break;
            case 'question':
                type = 2;
                break;
            case 'photo':
                type = 3;
                break;
            case 'reviews':
                type = 4;
                break;
        }
        console.log(data)
        var obj = {'name': 'type', 'value': type};
        data.push(obj);
        if (data[1]['value'] == "") {
            Swal.fire(
                {
                    text: "제목을 입력하세요!",
                    icon: 'error',
                }
            )
        } else if (getData == "") {
            Swal.fire(
                {
                    text: "내용을 입력하세요!",
                    icon: 'error',
                }
            )
        } else {
            sweetalert.modify(data, getData, 'board');
        }
    })

    //삭제 이벤트
    $('#noticeDelButton,#questionDelButton,#photoDelButton,#reviewsDelButton').on('click', function () {
        var checked = $('input[name="check"]:checked');
        var arrDel = [];
        var arrData = [];
        if (checked.length > 0) {
            checked.each(function () {
                var idx = $(this).val();
                arrDel.push(Number(idx))
                var data = table.row($(this).closest('tr')).data();
                const regex = /img src="\/res\/img\/(.+?)"\>/gm;
                var m = regex.exec(data[2]);
                if (m !== null) {
                    arrData.push(m[1])
                }
            });
            console.log(arrDel)
            sweetalert.del(arrDel, arrData, 'board');
        } else {

        }
    })

    var checkAll = $('input[name="allCheck"]');
    checkAll.change(function () {
        var $this = $(this);
        var checked = $this.prop('checked'); // checked 문자열 참조(true, false)
        // console.log(checked);
        $('input[name="check"]').prop('checked', checked);
    });
    $('#datatable,#reservationtable').on('change', 'input[name="check"]', function () {
        var boxLength = $('input[name="check"]').length;
        var checkedLength = $('input[name="check"]:checked').length;
        var selectAll = (boxLength == checkedLength);

        checkAll.prop('checked', selectAll);
    });

    /*
    에약 테이블
     */
    var reservationtable = $('#reservationtable').DataTable({
        // "processing": true,
        "serverSide": true,
        "paging": true,
        "info": true,
        "order": [],
        "ajax": {
            "url": "/administrator/reservation_ajax_list",
            "type": "POST",
            "data": {
                "type": $("#reservationtable").attr('data-id')
            }
        },
        'drawCallback': function () {
            // console.log(this.api().page.info());
        },
        "lengthChange": false,
        //optional
        // "lengthMenu": [[5, 10, 25], [5, 10, 25]],
        "columnDefs": [
            {
                "render": function (data, type, row) {
                    return "<input type='checkbox' name='check' value='" + data + "'>";
                },
                "targets": [0],
                "width": "1%"
            },
            {
                "targets": [1], // your case first column
                "className": "text-center",
                "width": "3%",
                "sClass": "my_class"
            },
            {
                "targets": [2],
                "visible": false
            },
            {
                "targets": [3],
                "className": "text-center",
                "width": "10%"
            },
            {
                "targets": [4],
                "className": "text-center",
                "width": "10%"
            },
            {
                "targets": [5], // your case first column
                "className": "text-center",
                "width": "10%"
            },
            {
                "targets": [6],
                "className": "text-center",
                "width": "15%"
            },
            {
                "targets": [7],
                "className": "text-center",
                "render": function (data, type, row) {
                    var color;
                    if (data == 1) {
                        color = 'secondary'
                        data = '대기';
                    } else if (data == 2) {
                        color = 'success'
                        data = '완료';

                    } else if (data == 3){
                        color = 'cancle';
                        data = '취소';
                    }
                    return "<div class='color-palette-set'><div class='bg-" + color + " color-palette'>" +
                        "<span style='color:#eee'>" + data + "</span>" +
                        "</div>";
                },
                "width": "10%"
            },
            {
                "targets": -1,
                "className": "text-center",
                "data": null,
                "defaultContent": "<button type='button' class='btn btn-block btn-outline-warning btn-xs'>수정</button>",
                "width": "6%"
            }
        ],
        "autoWidth": false,
        "ordering": false,

        'language': lang_kor
    })

    $('#reservationtable tbody').on('click', 'tr button.btn', function () {
        var data = reservationtable.row($(this).closest('tr')).data();
        $("#division.custom-select").val(data[2]).prop("selected", true);
        
        console.log($("#default-picker"))
        var table = $("#reservationModalTable");
        $("input[name='idx']").val(data[0])
        $(table).find("td:eq(0)").text(data[3])
        $(table).find("td:eq(1) input").val(data[4])
        $("#default-picker").val(data[8]);
        $(table).find("td:eq(3) input").val(data[5])
        // $(table).find("td:eq(2)").text(data[5])
        $(table).find("td:eq(4)").text(data[6])
        $("#typeSelect").val(data[7])
        $('#modal-reservation').modal('show')
    })
    $("#typeSelect").on('change', function () {
        console.log($(this).val())
    })
    $("#confirmReservationButton").on('click', function () {
        var data = $("#reservationForm").serializeArray()
        sweetalert.modify(data, null, 'reservation');
    })
    $("#confirmReservationDelButton").on('click', function () {
        var checked = $('input[name="check"]:checked');
        var arrDel = [];
        var arrData = [];
        if (checked.length > 0) {
            checked.each(function () {
                var idx = $(this).val();
                arrDel.push(Number(idx))
                // var data = table.row($(this).closest('tr')).data();
                // const regex = /img src="\/res\/img\/(.+?)"\>/gm;
                // var m = regex.exec(data[2]);
                // if (m !== null) {
                //     arrData.push(m[1])
                // }
            });
            console.log(arrDel)
            sweetalert.del(arrDel, arrData, 'reservation');
            checkAll.prop('checked', false);
        } else {

        }
    })
    /*
    Alert Obj
     */
    var sweetalert = {};
    sweetalert.insert = function (data, getData) {
        Swal.fire({
            title: '신규등록',
            text: "등록 하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '취소',
            confirmButtonText: '등록'
        }).then((result) => {
            if (result.value) {
                // console.log(data)
                // console.log(getData)
                var insertData = sweetalert.ajax(data, getData, 'insert')
                console.log(insertData)
                if (insertData) {
                    Swal.fire(
                        {
                            position: 'center',
                            icon: 'success',
                            title: '등록 되었습니다.',
                            showConfirmButton: false,
                            timer: 1000
                        }
                    ).then((result) => {
                        // table.destroy()
                        table.draw(false);
                        // $('#datatable').DataTable().clear().destroy();
                        $('#modal-xl').modal('hide')
                    })
                }
            } else {
                const regex = /img src=(.+?)\>/gm;
                var test = regex.exec(myEditor.getData());

                // console.log(test)
            }
        })
    }
    sweetalert.modify = function (data, getData, division) {
        Swal.fire({
            title: '수정 ',
            text: "수정 하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '취소',
            confirmButtonText: '수정'
        }).then((result) => {
            if (result.value) {
                if (division == 'board') {
                    var insertId = sweetalert.ajax(data, getData, 'modify')
                } else if(division == 'comment_modify'){
                    var insertId = sweetalert.ajax(data, getData, 'comment_modify')
                } else {
                    var insertId = sweetalert.ajax(data, getData, 'reservation_modify')
                }

                if (insertId) {
                    Swal.fire(
                        {
                            position: 'center',
                            icon: 'success',
                            title: '수정 되었습니다.',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    ).then((result) => {
                        console.log(result)
                        if (division == 'board') {
                            table.draw(false);
                            $('#modal-xl').modal('hide')
                        } else if(division == 'comment_modify'){
                            $('#commentContents').text(data['comment'])
                            $('#modal-comment').modal('hide')
                        } else {
                            reservationtable.draw(false);
                            $('#modal-reservation').modal('hide')
                        }
                    })
                }else{
                    Swal.fire(
                        {
                            position: 'center',
                            icon: 'warning',
                            title: '수정된 내용이 없습니다.',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    )
                    if (division == 'board') {
                        table.draw(false);
                        $('#modal-xl').modal('hide')
                    } else if(division == 'comment_modify'){
                        $('#commentContents').text(data['comment'])
                        $('#modal-comment').modal('hide')
                    } else {
                        reservationtable.draw(false);
                        $('#modal-reservation').modal('hide')
                    }
                }
            } else {
                if (division == 'board') {
                    table.draw(false);
                    $('#modal-xl').modal('hide')
                } else if(division == 'comment_modify'){
                    $('#commentContents').text(data['comment'])
                    $('#modal-comment').modal('hide')
                } else {
                    reservationtable.draw(false);
                    $('#modal-reservation').modal('hide')
                }
                // console.log(test)
            }
        })
    }
    sweetalert.del = function (arr, data, division) {
        var title;
        if (division == 'board') {
            title = '게시물 삭제';
        } else if (division == 'comment') {
            title = '답변 삭제';
        } else {
            title = '예약 삭제';
        }
        Swal.fire({
            title: title,
            text: "삭제 하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#6c757d',
            cancelButtonText: '취소',
            confirmButtonText: '삭제'
        }).then((result) => {
            if (result.value) {
                if (division == 'board') {
                    var delIdx = sweetalert.ajax(arr, data, 'del')
                } else if (division == 'comment') {
                    var delIdx = sweetalert.ajax(arr, null, 'comment_del')
                } else {
                    var delIdx = sweetalert.ajax(arr, null, 'reservation_del')
                }
                // var delIdx = sweetalert.ajax(arr, data, 'del')
                if (delIdx) {
                    Swal.fire(
                        {
                            position: 'center',
                            icon: 'success',
                            title: '삭제 되었습니다.',
                            showConfirmButton: false,
                            timer: 1500
                        }
                    ).then((result) => {
                        // console.log(result)
                        // table.ajax.reload(null, false);
                        checkAll.prop('checked', false);
                        if (division == 'board') {
                            table.draw(false);
                            $('#modal-xl').modal('hide')
                        } else if (division == 'comment') {
                            $('#modal-xl').modal('hide')
                        } else {
                            reservationtable.draw(false);
                            $('#modal-reservation').modal('hide')
                        }
                    })
                }
            } else {
                const regex = /img src=(.+?)\>/gm;

                // console.log(test)
            }
        })
    }
    sweetalert.error = function () {
        Swal.fire(
            {
                position: 'center',
                icon: 'error',
                title: '요청이 정상적으로 처리되지 않았습니다.',
                showConfirmButton: false,
                timer: 1500
            }
        )
    }
    sweetalert.ajax = function (data, getData = null, division = null) {
        const obj = {};
        var url;
        switch (division) {
            case 'insert':
                obj.form = data;
                obj.editor = getData;
                url = '/administrator/boardInsert';
                break;
            case 'del':
                obj.data = data;
                obj.link = getData;
                url = '/administrator/boardDelete';
                break;
            case 'modify':
                obj.form = data;
                obj.editor = getData;
                url = '/administrator/boardModify';
                break;
            case 'reservation_modify':
                obj.form = data;
                obj.editor = getData;
                url = '/administrator/reservationModify';
                break;
            case 'reservation_del':
                obj.data = data;
                // obj.link = getData;
                url = '/administrator/reservationDelete';
                break;
            case 'commentCheck':
                obj.idx = data;
                url = '/administrator/commentCheck';
                break;
            case 'comment_del':
                obj.p_idx = data;
                url = '/administrator/commentDel';
                break;
            case 'comment_modify':
                obj.data = data;
                url = '/administrator/commentModify';
                break;
        }

        var result = [];
        $.ajax({
            url: url,
            data: obj,
            async: false,
            type: 'POST',
            success: function (res) {
                result = res;
            },
            error: function (e) {
                sweetalert.error();
            }
        });
        return result;
    }
})(jQuery)

function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new UploadAdapter(loader)
    }
}