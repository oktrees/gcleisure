(function ($) {
    /* initialize the calendar
 -----------------------------------------------------------------*/
    var data;

    $.ajax({
        url: "/administrator/ajax_calendar_list",
        async: false,
        type: 'POST',
        success: function (res) {
            data = res;
            console.log(res)
        },
        error: function (request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });

    //Date for the calendar events (dummy data)
    var date = new Date()
    var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear()

    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;

    var containerEl = document.getElementById('external-events');
    var checkbox = document.getElementById('drop-remove');
    var calendarEl = document.getElementById('calendar');

    var calendar = new Calendar(calendarEl, {
        plugins: ['bootstrap', 'interaction', 'dayGrid', 'timeGrid'],
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        'themeSystem': 'bootstrap',
        locale: 'ko',
        buttonText: {
            today: "오늘",
            month: "월별",
            week: "주별",
            day: "일별",
        },
        //Random default events
        events: data,
        editable: false,
        droppable: false, // this allows things to be dropped onto the calendar !!!
        drop: function (info) {
            // is the "remove after drop" checkbox checked?
            if (checkbox.checked) {
                // if so, remove the element from the "Draggable Events" list
                info.draggedEl.parentNode.removeChild(info.draggedEl);
            }
        },
        eventClick: function (info) {
            calendar.customEvent(info.event.id)
        }
    });
    calendar.setOption('height', 700);
    calendar.render();

    $("#calendarButton").on('click', function () {
        var table = $("#reservationModalTable");
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1
        var day = date.getDate();
        if(month < 10){
            month = "0"+month;
        }
        if(day < 10){
            day = "0"+day;
        }
        var today = year+"-"+month+"-"+day;
        // $(table).find("tr:eq(3)").css('display','none')
        $(table).find("tr:eq(4)").css('display', 'none')
        $('#calendarReservationButton').css('display','block');
        $(table).find("td:eq(0)").html('<input type="text" name="name" value="">')
        $("input[name='idx']").val("")
        $(table).find("td:eq(1) input").val(today)
        // $(table).find("td:eq(3) input").val("")
        $("#default-picker").val('00:00');
        $("#typeSelect").val(1)
        $("#division").val(1)

        $('#calendarReservationModifyButton').css('display','none');
        $('#modal-reservation').modal('show')
    })

    $("#calendarReservationButton").on('click', function () {
        const data = $("#reservationForm").serializeArray();
        // data.shift();
        console.log(data)
        if (data[1]['value'] == "") {
            Swal.fire(
                {
                    text: "예약자(글쓴이) 명을 입력하세요!",
                    icon: 'error',
                }
            )
        } else {
            sweetalert.insert(data, null, 'calendar')
        }
    })

    $("#calendarReservationModifyButton").on('click', function () {
        const data = $("#reservationForm").serializeArray();
        console.log(data)
        sweetalert.modify(data,null,'modify')
    })

    var sweetalert = {};
    sweetalert.insert = function (data, getData) {
        Swal.fire({
            title: '예약등록',
            text: "등록 하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: '취소',
            confirmButtonText: '등록'
        }).then((result) => {
            if (result.value) {
                console.log(data)
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
                            timer: 1500
                        }
                    ).then((result) => {
                        switch (insertData[0]['type']) {
                            case "1" :
                                bgcolor = '#6c757d';
                                break;
                            case "2" :
                                bgcolor = '#28a745';
                                break;
                        }
                        var event = {
                            id: insertData[0]['idx'],
                            title: insertData[0]['name'],
                            // start: insertData[0]['reservation_date'] + 'T' + insertData[0]['reservation_time'],
                            backgroundColor: bgcolor
                        }
                        calendar.addEvent(event);
                        // $('#calendar').FullCalendar( 'refetchEvents' );
                        $('#modal-reservation').modal('hide')
                    })
                }
            } else {
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
                var insertId = sweetalert.ajax(data, getData, 'modify')

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
                        console.log(data)
                        switch (data[4]['value']) {
                            case "1" :
                                bgcolor = '#6c757d';
                                break;
                            case "2" :
                                bgcolor = '#28a745';
                                break;
                        }
                        var event = {
                            id: data[0]['value'],
                            title: $("#reservationModalTable").find("td:eq(0)").text(),
                            // start: data[1]['value'] + 'T' + data[2]['value'],
                            backgroundColor: bgcolor
                        }

                        var eventid = calendar.getEventById(data[0]['value']);
                        // alert(eventid)
                        eventid.remove();
                        // calendar.removeAllEvents(data[0]['value'])
                        calendar.addEvent(event);

                        $('#modal-reservation').modal('hide')
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
                    $('#modal-reservation').modal('hide')
                }
            } else {

                $('#modal-reservation').modal('hide')
                // console.log(test)
            }
        })
    }

    sweetalert.ajax = function (data, getData = null, division = null) {
        const obj = {};
        var url;
        switch (division) {
            case 'insert':
                obj.form = data;
                obj.editor = getData;
                url = '/administrator/reservationInsert';
                break;
            case 'find':
                obj.idx = data;
                url = '/administrator/reservationFind';
                break;
            case 'modify' :
                obj.form = data;
                url = '/administrator/reservationModify';
                break;
        }
        // console.log(obj)
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
    calendar.customEvent = function (id) {
        var data = sweetalert.ajax(id, null, 'find');

        console.log(data)
        var table = $("#reservationModalTable");
        $("input[name='idx']").val(id)
        $(table).find("td:eq(0)").text(data[0]['name'])
        $(table).find("td:eq(1) input").val(data[0]['reservation_date'])
        $("#default-picker").val(data[0]['reservation_time']);
        $(table).find("td:eq(3) input").val(data[0]['division'])
        $(table).find("td:eq(4)").text(data[0]['date'])
        $("#typeSelect").val(data[0]['type'])
        $("#division").val(data[0]['division'])
        $('#calendarReservationButton').css('display', 'none')
        $("#calendarReservationModifyButton").css('display', 'block')
        $('#modal-reservation').modal('show')
    }
})(jQuery)