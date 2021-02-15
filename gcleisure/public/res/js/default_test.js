var _fn = null,
    _html = null,
    _select_day = null,
    _interval = null,
    $DOCUMENT = $(document);


function getGoogleMap(){
    try {
        var gc = {
            lat: 37.804623,
            lng: 127.637552
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14, center: gc
        });
        new google.maps.Marker({
            position: gc,
            map: map,
        });
    }catch(e){
        console.log(e);
    }
}

(function () {
    _fn = (function () {
        return {
            live_hyphen: function(text){
                var key = event.charCode || event.keyCode || 0;
                $text = text;
                if (key !== 8 && key !== 9) {
                    if ($text.val().length === 3) {
                        $text.val($text.val() + '-');
                    }
                    if ($text.val().length === 8) {
                        $text.val($text.val() + '-');
                    }
                }
                return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
            },
            popup_html_height: function($this, class_name, section_id) {
                var offset = $this.offset().top;
                var content_height = $(document).find('#popup_view').children('.wrapper').height();
                if(section_id === 'offer_service') {
                    if (class_name === 'offer_bike offer_img' || class_name === 'offer_rafting offer_img' || class_name === 'offer_canu offer_img' || class_name === undefined) {
                        var height = (offset - $('body').height()) + 350;
                    } else {
                        var height = (offset - $('body').height());
                    }
                }
                    // else if(section_id === 'reservation_bottom') {
                    //     var height = (offset - $('body').height());
                // }
                else {
                    var height = (offset - $('body').height());
                }

                $(document).find('#popup_view').children('.wrapper').css({ // 팝업 위치 조절
                    top: height+'px'
                });
            },
        }
    })();

    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        loopFillGroupWithBlank: false,
        centeredSlides: false,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 50
            },
            // when window width is >= 480px
            767: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            }
        }
    });

    /*********************************************      스크롤 이동 시 이벤트 *************************************************/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#top_button').fadeIn();
        } else {
            $('#top_button').fadeOut();
        }
    }).on('click','body',function() {
        alert("df");
    });
    /*********************************************      스크롤 이동 시 이벤트 끝 *************************************************/

    /*********************************************      팝업 관련  이벤트 *************************************************/

    $DOCUMENT.on('click','header > div > nav > ul > li', function() { // 메인 탭 해당 section 이동 이벤트
        var $this = $(this);

        var scroll_top = $($(this).attr("data-target")).offset().top;

        $('html,body').animate({
            scrollTop: scroll_top
        }, 400);

    }).on('click','#top_button', function() { //스크롤 최상단 이벤트
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    }).on('click', '#info div.wrapper > div > div.to_more', function() { //info 더보기 클릭 팝업 이벤트
        var $this = $(this),
            offset = $this.offset();

        _html.visit_html();
    }).on('click','#popup_view .close, #list_button, #close_button, #cancel', function() { // 팝업 닫기 이벤트
        $('#popup_view').empty().addClass('hide');
    }).on('click','#notice nav ul li, #package_service > div > nav > ul > li', function() { // 게시판 공지사항 / 문의하기  / 예약확인 탭 클릭 이벤트 & 패키지 탭 클릭 이벤트
        let $this = $(this),
            section_id = $this.parents('section').attr('id'),
            index = $this.index(),
            select_class = $this.hasClass('nav_select'),
            content_node;

        if(section_id === 'notice') {
            let select_text = $this.children('div:nth-child(1)').text();

            if(select_text === '공지사항') {
                $('#notice > div > div.sec_title > div:nth-child(2) > h2').text('NOTICE');
            }else if(select_text === '문의하기') {
                $('#notice > div > div.sec_title > div:nth-child(2) > h2').text('INQUIRY');
            }else if(select_text === '예약확인') {
                $('#notice > div > div.sec_title > div:nth-child(2) > h2').text('RESERVATION');
            }
            content_node = $('#notice > div > div.content_box > div').eq(index + 1);
        }else if(section_id === 'package_service'){
            let class_name;
            if(index === 0){
                class_name = '.package_2';
            }else if(index === 1){
                class_name = '.package_3';
            }else if(index === 2){
                class_name = '.package_4';
            }else if(index === 3){
                class_name = '.group_package';
            }
            content_node = $('#package_service > div > div.content_box').find(class_name);
        }

        if(select_class === false) {
            $this.siblings().removeClass('nav_select');
            $this.addClass('nav_select');
            content_node.removeClass('hide').addClass('show');
            if(section_id === 'notice') {
                content_node.siblings('div:not(.search_box)').addClass('hide').removeClass('show');
            }else if(section_id === 'package_service'){
                content_node.siblings().addClass('hide').removeClass('show');
            }
        }
    }).on('click','#notice .content_container.notice ul li', function() { //공지사항 목록 클릭 이벤트

        // 서버 통신후 데이터 받아서 함수에 대입 수정
        var $this = $(this),
            idx = $this.find('div:first-child').text();
        console.log(idx);

        _html.check_notice_html()
    }).on('click', '#notice .content_container.inquiry ul li:not(.confirm)', function() { // 문의하기 목록 글 리스트 클릭 이벤트

        // 서버 통신후 데이터 받아서 함수에 대입 수정
        var $this = $(this),
            idx = $this.data('idx');

        console.log(idx);


        // _html.check_inquiry_html(); // 문의하기 글보기 함수
        _html.inquiry_confirm_html(idx, $this);
    }).on('click','#notice .content_container.inquiry .write_button', function() { // 문의하기 글쓰기 클릭 이벤트
        var $this = $(this),
            class_name = '',
            section_id = $this.parents('section').attr('id');

        _html.write_inquiry_html($this, class_name, section_id);
    }).on('click','#make_inquiry > div.consent_container > div.content_box > div.nav_box > div,' +
        ' #make_reservation > div.consent_container > div.content_box > div.nav_box > div', function() { // 문의하기 글쓰기 창 이용약관 개인정보 클릭 이벤트
        var $this = $(this),
            index = $this.index(),
            type_id = $this.parents('form').attr('id'),
            select_class = $this.hasClass('consent_select');

        if(select_class === false){
            $this.siblings().removeClass('consent_select');
            $this.addClass('consent_select');
            if(index === 0){
                _html.consent_form_1(type_id);
            }else if(index === 1){
                _html.consent_form_2(type_id);
            }else if(index === 2){
                _html.consent_form_3(type_id);
            }else if(index === 3){
                _html.consent_form_4(type_id);
            }
        }

    }).on('click', '#make_inquiry > div.consent_container > div.content_box > div.consent_confirm > div,#make_reservation > div.consent_container > div.content_box > div.consent_confirm > div', function() { // 반응형 동의하기 더보기 아이콘 클릭 이벤트
        var $this = $(this),
            form_id = $this.parents('form').attr('id'),
            select_id,
            has_class = $this.hasClass('next_arrow');

        if(has_class === true) {
            $this.attr('class', 'prev_arrow');
            $this.removeProp('display');
            $this.css('display','block');
            $('#'+form_id+' > div.consent_container > div.content_box > div.consent_confirm').css('border-top','0');
            $('#'+form_id+' > div.consent_container > div.content_box > div.text_box').addClass('show').removeClass('hide');
        }else {
            $this.attr('class', 'next_arrow');
            $this.css('display','none');
            $('#'+form_id+' > div.consent_container > div.content_box > div.consent_confirm').css('border-top','1px solid #d7d7d7');
            $('#'+form_id+' > div.consent_container > div.content_box > div.text_box').addClass('hide').removeClass('show');
        }

    }).on('click','#notice .content_container.reservation ul li', function() { // 예약확인 목록 글 리스트 클릭 이벤트

        // 서버 통신후 데이터 받아서 함수에 대입 수정
        var $this = $(this),
            class_name = '',
            type = $this.children('div:last-child').children().attr('class'),
            section_id = $this.parents('section').attr('id'),
            idx = $this.find('div:first-child').text();
        console.log(idx);

        _html.check_reservation_html($this, class_name, section_id, type);
    }).on('click','#reservation_submit', function() { // 예약 하기 클릭 이벤트
        var $this = $(this),
            section_id = $this.parents('section').attr('id'),
            class_name = $this.find('div').attr('class'),
            package_val = $('#res_type').val(),
            name_val = $('#res_name').val(),
            phone_val = $('#res_phone').val();

        console.log(package_val);
        console.log(name_val);
        console.log(phone_val);
        _html.make_reservation_html(package_val, name_val, phone_val, section_id, $this, class_name);
    }).on('click','#make_reservation > div.reservation_container > div.content_box > div:nth-child(5) > div.calendar> div', function() { // 달력 클릭
        var $this = $(this),
            //max = moment().add(7, 'days').format('YYYY-MM-DD'),
            popup_node = $this.siblings('.date_popup'),
            popup_class = popup_node.attr('class');

        //console.log(max);
        console.log($this);
        $this.siblings('.date_popup').removeClass('hide');

        if (popup_class == 'date_popup hide' || popup_class == 'date_popup hasDatepicker hide') {
            var height = $("#make_reservation > div.reservation_container > div.content_box > div:nth-child(5) > div.calendar").offset();
            var point = $this[0].offsetTop;
            var divTop = point + 37 ; //상단 좌표 위치 안맞을시 e.pageY
            var divLeft = '23.5%'; //좌측 좌표 위치 안맞을시 e.pageX
            $this.siblings('.date_popup').css({
                position: 'absolute',
                top: divTop,
                left: divLeft
            });
            $this.siblings('.date_popup').datepicker({
                // $this.parents('#soccer_list').siblings('#date').datepicker({
                showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
                buttonImage: "/application/db/jquery/images/calendar.gif", // 버튼 이미지
                buttonImageOnly: true, // 버튼에 있는 이미지만 표시한다.
                // changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
                // changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.
                // minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.
                //minDate: -7,
                //maxDate: max,
                nextText: '다음 달', // next 아이콘의 툴팁.
                prevText: '이전 달', // prev 아이콘의 툴팁.
                numberOfMonths: [1, 1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.
                stepMonths: 1, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가.
                // yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.
                // showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다.
                // currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널
                // closeText: '닫기',  // 닫기 버튼 패널
                dateFormat: "yy-mm-dd", // 텍스트 필드에 입력되는 날짜 형식.
                showAnim: "slide", //애니메이션을 적용한다.
                // showMonthAfterYear: true , // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다.
                dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'], // 요일의 한글 형식.
                monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'], // 월의 한글 형식.
                autoHide: true,
                /* beforeShow: function(input, inst) {
                    console.log(input);
                    console.log(inst);

                    setTimeout(function(){
                        $('.ui-datepicker').css('z-index', 99999999999999);
                        //alert(":dfdf");
                        //$('#main_nav > div.first_nav > div.select_nav > div.calender').css('z-index', 99999999999999);
                        // $ ( '#ui-datepicker-div'). css ( 'z-index', 10);
                    }, 500);
                } */
                afterShow: function () {
                    //_Fn.game_count(_game_count_json);
                },
                onSelect: function (dateText, input) {
                    event.preventDefault();
                    _select_day = dateText;

                    var main_text = _select_day.replace(/-/gi, '.'); // 날짜 .형식으로 변환할때 사용
                    $('#make_reservation > div.reservation_container > div.content_box > div:nth-child(5) > div.calendar> div > div:nth-child(1)').text(_select_day);
                    $('#res_day').val(_select_day);
                    $('#make_reservation > div.reservation_container > div.content_box > div:nth-child(5) > div.calendar> div.date_popup').addClass('hide');
                }
            });
        } else {
            $this.siblings('.date_popup').addClass('hide');
        }
    }).on('click' ,'#offer_service li', function() { // 레저 안내 이미지 클릭 이벤트
        var $this = $(this),
            section_id = $this.parents('section').attr('id'),
            class_name = $this.find('div').attr('class');

        _html.leisure_info_html($this, class_name, section_id);
    }).on('mouseenter','#offer_service .grid li.photo, #offer_service .grid li.photo_2', function() { // 레저 안내 이미지 마우스 오버 이벤트
        var $this = $(this);

        $this.children('div.offer_img').css({
            'transform':'scale(1.3)'
        });
        $this.children('p').addClass('hide');
        $this.find('.add_box').removeClass('hide');
    }).on('mouseleave', '#offer_service .grid li.photo, #offer_service .grid li.photo_2', function() { // 레저 안내 이미지 마우스 리브 이벤트
        var $this = $(this);

        $this.children('div.offer_img').css({
            'transform':'scale(1)'
        });
        $this.children('p').removeClass('hide');
        $this.find('.add_box').addClass('hide');
    }).on('click','#popup_view > div > div.leisure_container > div.leisure_course_box > nav > div', function() { // 서바이벌 & 아르고 코스 클릭 이벤트
        var $this = $(this),
            index = $this.index(),
            has_class = $this.hasClass('course_select');

        if(has_class === false) {
            $this.addClass('course_select');
            $this.siblings().removeClass('course_select');

            $('#popup_view > div > div.leisure_container > div.leisure_course_box > div > div').eq(index).removeClass('hide').addClass('show');
            $('#popup_view > div > div.leisure_container > div.leisure_course_box > div > div').eq(index).siblings().addClass('hide').removeClass('show');

            $('#popup_view > div > div.leisure_container > div.leisure_price_box_multi.grid > div').eq(index).addClass('price_select');
            $('#popup_view > div > div.leisure_container > div.leisure_price_box_multi.grid > div').eq(index).siblings().removeClass('price_select');
        }
    }).on('click','#popup_view > div > div.leisure_container > div.leisure_price_box_multi.grid > div', function() {
        var $this = $(this),
            index = $this.index(),
            has_class = $this.hasClass('price_select');

        if(has_class === false){
            $this.addClass('price_select');
            $this.siblings().removeClass('price_select');

            $('#popup_view > div > div.leisure_container > div.leisure_course_box > div > div').eq(index).removeClass('hide').addClass('show');
            $('#popup_view > div > div.leisure_container > div.leisure_course_box > div > div').eq(index).siblings().addClass('hide').removeClass('show');

            $('#popup_view > div > div.leisure_container > div.leisure_course_box > nav > div').eq(index).addClass('course_select');
            $('#popup_view > div > div.leisure_container > div.leisure_course_box > nav > div').eq(index).siblings().removeClass('course_select');
        }
    }).on('click','#price_res_b', function() { // 레저 안내에서 예약하기 클릭 이벤트
        var $this = $(this),
            package_val = '',
            name_val = '',
            phone_val = '',
            section_id = $this.parents('section').attr('id'),
            class_name = '';

        _html.make_reservation_html(package_val, name_val, phone_val, section_id, $this, class_name);
    }).on('click','#package_service .content_box > ul > li > div.package_content > div.reservation_button', function() { // 패키지 서비스 예약하기 클릭 이벤트
        var $this = $(this),
            section_id = $this.parents('section').attr('id'),
            class_name = '',
            package_val = $this.parents('li').data('type'),
            name_val = '',
            phone_val = '';

        _html.make_reservation_html(package_val, name_val, phone_val, section_id, $this, class_name);
    }).on('click','#tour > div > nav > ul > li', function() { // 관광지 탭 클릭 이벤트
        var $this = $(this),
            index = $this.index(),
            has_class = $this.hasClass('nav_select');

        if(has_class === false) {
            $this.addClass('nav_select');
            $this.siblings().removeClass('nav_select');

            $('#tour > div > div.content_box > ul > li').eq(index).removeClass('hide').addClass('show');
            $('#tour > div > div.content_box > ul > li').eq(index).siblings().addClass('hide').removeClass('show');

        }
    }).on('click','#tour > div > div.content_box > div', function() { // 관광지 화살표 클릭 이벤트
        var $this = $(this),
            nav_index = $this.parents('.content_box').siblings('nav').find('.nav_select').index(),
            this_class = $this.attr('class'),
            nav_node = $('#tour > div > nav > ul > li'),
            content_node = $('#tour > div > div.content_box > ul > li');

        if(this_class === 'right_arrow p_ab') {
            console.log(nav_index+1)
            if((nav_index+1) > 6){
                nav_index = 0;
                nav_node.eq(nav_index).addClass('nav_select');
                nav_node.eq(nav_index).siblings().removeClass('nav_select');
                content_node.eq(nav_index).removeClass('hide').addClass('show');
                content_node.eq(nav_index).siblings().addClass('hide').removeClass('show');
            }else {
                nav_node.eq(nav_index + 1).addClass('nav_select');
                nav_node.eq(nav_index + 1).siblings().removeClass('nav_select');
                content_node.eq(nav_index + 1).removeClass('hide').addClass('show');
                content_node.eq(nav_index + 1).siblings().addClass('hide').removeClass('show');
            }
        }else if(this_class === 'left_arrow p_ab') {
            if((nav_index-1) < 0){
                nav_index = 6;
                nav_node.eq(nav_index).addClass('nav_select');
                nav_node.eq(nav_index).siblings().removeClass('nav_select');
                content_node.eq(nav_index).removeClass('hide').addClass('show');
                content_node.eq(nav_index).siblings().addClass('hide').removeClass('show');
            }else {
                nav_node.eq(nav_index - 1).addClass('nav_select');
                nav_node.eq(nav_index - 1).siblings().removeClass('nav_select');
                content_node.eq(nav_index - 1).removeClass('hide').addClass('show');
                content_node.eq(nav_index - 1).siblings().addClass('hide').removeClass('show');
            }
        }
    });
    /*********************************************      팝업 관련  이벤트   끝끝 ************************************************/
})(jQuery);
(function(){
    //*************************** 핸드폰번호 입력 자동 하이픈 ****************************//
    $('#res_phone').keyup(function(event){
        var this_text = $(this);
        _fn.live_hyphen(this_text);
    }); // 예약하기 전화번호 핸드폰 하이픈 자동입력
})(); // 핸드폰 번호 입력 하이픈 이벤트
