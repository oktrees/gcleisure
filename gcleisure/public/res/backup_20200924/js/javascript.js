$(function () {
    var overlay = $('#overlay');
    var navTab = $('header nav');
    var header = $('header');
    var tour = $('#tour');
    var package = $('#package');
    var service = $('#service');
    var bbs = $('#bbs');
    var info = $('#info');
    var reservationLayer = $('#reservationLayer');
    var reservationForm = $('#reservationForm');
    var reservationSelectbox = $('#reservationSelectbox');
    var reservationSelectForm = $('#reservationSelectForm');
    var reservationSelectLayer = $('#reservationSelectLayer');
    var packageList = $('#packageList');
    var serviceLayer = $('#serviceLayer');
    var bbsLayer = $('#bbsLayer');
    var bbsSelectbox = $('.js-bbsSelectbox');
    var bbsSelectLayer = $('.js-bbsSelectLayer');
    var bbsSearchForm = $('.js-bbsSearchForm');
    var bbsWriteForm = $('#bbsWriteForm');
    var bbsPasswordForm = $('#bbsPasswordForm');
    var infoLayer = $('#infoLayer');
    var closeLayer = $('.closeLayer');
    var popupLayer = $('.popupLayer');
    var scrollTop = $('#scrollTop');
    var phoneNumber = $('[data-type="phoneNumber"]');
    var emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var phoneFilter = /^\d{3}-\d{3,4}-\d{4}$/;
    var originUrl = 'https://new.gcleisure.com/';
    var _jqueryAjax = function(url, data = null) {
        return $.ajax({
            url: url,
            type: "POST",
            data: data,
            dataType: "json",
            processData: true ,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        });
    }
    var tourSwiper = new Swiper('.tour-swiper', {
        navigation: {
            nextEl: '.tour-button-prev',
            prevEl: '.tour-button-next',
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
        on: {
            slideChange: function (res) {
                var tab = tour.find('.tab');
                var idx = res.activeIndex == 8 ? 0 : res.activeIndex - 1;
                tab.find('li').removeClass('on');
                tab.find('li.active:eq(' + idx + ')').addClass('on');
            },
        }
    });
    var gallerySwiper = new Swiper('.gallery-swiper', {
        navigation: {
            nextEl: '.gallery-button-next',
            prevEl: '.gallery-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });
    var system = (function () {
        return {
            layerPos: function ($el, option) {
                var pos = $(document).scrollTop() + 100;
                $el.css('top', pos);
                if (option != null) $el.find(option).show();
                overlay.fadeIn();
                $el.fadeIn();
            },
            layerClose: function () {
                overlay.hide();
                popupLayer.hide();
                bbsLayer.find('.wrapper').hide();
                reservationForm[0].reset();
                bbsWriteForm[0].reset();
                bbsPasswordForm[0].reset();
                //추가 2020-09-23
                var content = header.find('nav');
                overlay.hide();
                content.css('right', '-290px');
                header.find('.nav_close').hide();
                //추가 2020-09-23
            },
            //추가 2020-09-23
            posSize: function () {
                var width = $(window).width();
                if (width > 768) {
                    topPos = 100;
                } else if (width <= 768) {
                    topPos = 30;
                }
            }
            //추가 2020-09-23
        }
    })();
    navTab
        .on('click', 'a', function () {
            var targetid = $(this).data('id');
            var offset = $("#" + targetid).offset();
            $('html, body').animate({
                scrollTop: offset.top
            }, 300);
        });
    //추가 2020-09-23
    header
        .on('click', 'nav a', function () {
            var targetid = $(this).data('id');
            var offset = $("#" + targetid).offset();
            $('html, body').animate({
                scrollTop: offset.top
            }, 300);
            system.layerClose();
        })
        .on('click', 'button.nav', function () {
            var content = header.find('nav');
            overlay.fadeIn();
            content.css('right', '-290px').animate({
                right: 0
            }, 150, function () {
                header.find('.nav_close').show();
            });
        })
        .on('click', 'button.nav_close', function () {
            system.layerClose();
        });
    //추가 2020-09-23
    tour
        .on('click', 'li.active', function () {
            var to = $(this).index() + 1;
            tourSwiper.slideTo(to);
        });
    reservationSelectbox
        .on('click', function () {
            var content = $(this);
            var parent = content.parent();
            if (parent.is('.on')) {
                parent.removeClass('on');
                reservationSelectLayer.animate({
                    top: 120,
                    opacity: 0,
                }, 150, 'swing', function () {
                    $(this).hide();
                });
            } else {
                parent.addClass('on');
                reservationSelectLayer.show().animate({
                    top: 80,
                    opacity: 1,
                }, 150, 'swing');
            }
        });
    reservationSelectLayer
        .on('click', 'dd', function () {
            $(this).find('.tips').remove();
            var main = $(this).parent().data('main');
            var sub = $(this).text();
            var value = main + ' / ' + sub;
            reservationSelectbox.val(value).parent().removeClass('on');
            reservationSelectLayer.animate({
                top: 120,
                opacity: 0,
            }, 150, 'swing', function () {
                $(this).hide();
            });
        })
        .on('mouseover', 'dd', function () {
            var title = $(this).data('title');
            if (title) {
                if ($(this).find('.tips').length > 0) {
                    $(this).find('.tips').html('<div class="tips">' + title + '</div>');
                } else {
                    $(this).append('<div class="tips">' + title + '</div>');
                }
            }
        })
        .on('mouseout', 'dd', function () {
            $(this).find('.tips').remove();
        });
    reservationSelectForm
        .on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('#reservationLayer > .wrapper > h2').text('예약하기')
            $('#reservationLayer > .wrapper > h2').append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>');
            $('#reservationForm > .btnbox > button[type=submit]').text('예약하기');
            var content = $(this);
            var package = content.find('input[name=package]');
            var name = content.find('input[name=name]');
            var phone = content.find('input[name=phone]');
            var phoneNum = phone.val().trim();
            if (package.val() == '') {
                alert('패키지가 선택되지 않았습니다.');
                return package.click();
            }
            if (name.val() == '') {
                alert('예약자 성함을 입력해주세요.');
                return name.focus();;
            }
            if (phone.val() == '') {
                alert('전화번호를 입력해 주세요.');
                return phone.focus();
            }
            if (phoneFilter.test(phoneNum) === false) {
                alert('전화번호 형식이 올바르지 않습니다.');
                return phone.focus();
            }
            reservationForm.find('input[name=package]').val(package.val());
            reservationForm.find('input[name=name]').val(name.val());
            reservationForm.find('input[name=phone]').val(phone.val());
            system.layerPos(reservationLayer, null);
        });
    reservationForm
        .on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var content = $(this);
            var agree = content.find('input[name=agree]');
            var package = content.find('input[name=package]');
            var date = content.find('input[date]');
            var name = content.find('input[name=name]');
            var phone = content.find('input[name=phone]');
            var email = content.find('input[name=email]');
            var password = content.find('input[name=password]');
            var requirement = content.find('input[name=requirement]');
            if (package.val() == '') {
                alert('패키지가 선택되지 않았습니다.');
                return package.focus();
            }
            if (date.val() == '') {
                alert('예약일을 선택해주세요.');
                return date.focus();
            }
            if (name.val() == '') {
                alert('예약자 성함을 입력해주세요.');
                return name.focus();;
            }
            if (phone.val() == '') {
                alert('전화번호를 입력해 주세요.');
                return phone.focus();
            }
            if (phoneFilter.test(phone.val()) === false) {
                alert('전화번호 형식이 올바르지 않습니다.');
                return phone.focus();
            }

            if (email.val() != '' && emailFilter.test(email.val()) === false) {
                alert('이메일 형식이 올바르지 않습니다.');
                return email.focus();
            }

            if (password.val() == '') {
                alert('비밀번호를 입력해주세요.\n비밀번호는 예약수정 및 확인에 필요합니다.');
                return password.focus();
            }
            if (requirement.val() == '') {
                alert('상세내용을 입력해 주세요.');
                return false;
            }
            if (agree.is(":checked") === false) {
                alert('개인정보 수집 및 이용에 동의후 예약이 신청이 가능합니다.');
                return false;
            }
            var params = content.serializeArray();
            /**
             * 제이쿼리 form 전송
             */
            console.log($($('#reservationLayer > .wrapper > h2').contents()[0]).text().trim());
            var titleText = $($('#reservationLayer > .wrapper > h2').contents()[0]).text().trim();
            if(titleText === '예약하기') {
                console.log('tet');
                var url = originUrl + '/home/reservation';
                _jqueryAjax(url, params).then((val) => {
                    alert('예약이 완료되었습니다.');
                    console.log(val);
                    system.layerClose();
                })
            }else if(titleText === '예약수정'){
                params.push({
                    name : 'idx',
                    value : reservationForm.data('idx')
                })
                var url = originUrl + '/home/updateReservation';
                _jqueryAjax(url, params).then((val) => {
                    alert('수정이 완료되었습니다.');
                    system.layerClose();
                    $('#bbs .tab > .active.on').trigger('click');
                })
            }

            // console.log(tableAjax())
            // alert(params);
            return false;
        });
    overlay
        .on('click', function () {
            system.layerClose();
        });
    closeLayer
        .on('click', function () {
            system.layerClose();
        })
    phoneNumber
        .on('keyup', function () {
            var tmp = $(this).val().replace(/[^0-9]/g, '');
            tmp = tmp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
            $(this).val(tmp);
        });
    package
        .on('click', '.tab > .active', function () {
            var content = $(this).parent();
            var idx = $(this).index() - 1;
            var speed = 150;
            content.find('li.active').removeClass('on');
            $(this).addClass('on');
            package.find('.listitem').fadeOut(speed);
            package.find('.listitem:eq(' + idx + ')').fadeIn(speed);
        });
    packageList
        .on('click', 'button', function (e) {
            var el = $(this);
            var main = el.parents('ul').data('type');
            var sub = el.parents('.card').find('h3').text();
            var value = main + ' / ' + sub;
            reservationForm.find('input[name=package]').val(value);
            system.layerPos(reservationLayer, null);
        });
    service
        .on('click', 'li', function (e) {
            var el = $(this);
            var type = el.data('type');
            console.log(type);
            /**
             * ajax로 타입 에 해당하는 html 호출후
             * serviceLayer.html(html);
             */
            var url = originUrl + '/home/getServiceViews/' + type;
            _jqueryAjax(url).then((val)=>{
                system.layerClose();
                serviceLayer.empty().append(val);
                system.layerPos(serviceLayer, null);
                $('.closeLayer')
                    .on('click', function () {
                        system.layerClose();
                    })
            })
        });
    serviceLayer
        .on('click', '.cTns button', function (e) {
            var el = $(this);
            var package = el.data('type');
            var requirement = el.data('content');
            system.layerClose();
            reservationForm.find('input[name=package]').val(package);
            reservationForm.find('textarea[name=requirement]').val(requirement);
            system.layerPos(reservationLayer, null);
        })
        .on('click', '.tab dd', function () {
            var el = $(this);
            var mainImg = el.parents('.galleryBox').find('.mainImg');
            var backgroundURL = el.css('background-image').replace(/url\(|\)/g, '');
            mainImg.css('background-image', 'url(' + backgroundURL + ')');
            if (el.is('.cContent') === true) {
                var idx = el.index();
                var targetContent = serviceLayer.find('.textBox > .cTns').hide();
                var speed = 150;
                targetContent.fadeOut(speed);
                targetContent.eq(idx).fadeIn(speed);
            }
        })
    bbs
        .on('click', 'button.write', function (e) {
            $('#bbsLayer > .wrapper > h2').text('문의하기');
            $('#bbsWriteForm > .btnbox > button[type=submit]').text('문의하기');
            system.layerPos(bbsLayer, '.writeLayer');
        })
        .on('click', 'li.item', function (e) {
            var idx = $(this).data('idx');
            var activeOnText = $(this).closest('.wrapper').find('.sp2.active.on').children('span').text();
            if(activeOnText !== '공지사항'){
                return;
            }
            /*
            $.ajax({
                url: "호출주소"",
                method: "POST",
                data: {
                    idx: idx
                },
                dataType: "json"
            }).done(function (res) {
                //여기에  추가
                system.layerPos(bbsLayer, '.viewLayer');
                //여기에  추가
            }).fail(function (jqXHR, textStatus) {
                alert("Request failed: " + textStatus);
            });
            */
            //글보기 페이지
            system.layerPos(bbsLayer, '.viewLayer');

        })
        .on('click', '.tab > .active', function () {
            var content = $(this).parent();
            var idx = $(this).index() - 2;
            var speed = 150;
            if(idx === 0) var name = 'notice';
            if(idx === 1) var name = 'inquiry';
            if(idx === 2) var name = 'reservation';
            $('#js-click-community-btn').trigger('click.' + name);
            content.find('li.active').removeClass('on');
            $(this).addClass('on');
            bbs.find('.listC').hide();
            bbs.find('.listC:eq(' + idx + ')').show();

        });
    bbsSelectbox
        .on('click', function () {
            var content = $(this);
            var parent = content.parent();
            if (parent.is('.on')) {
                parent.removeClass('on');
                bbsSelectLayer.animate({
                    top: 120,
                    opacity: 0,
                }, 150, 'swing', function () {
                    $(this).hide();
                });
            } else {
                parent.addClass('on');
                bbsSelectLayer.show().animate({
                    top: 80,
                    opacity: 1,
                }, 150, 'swing');
            }
        });
    bbsSelectLayer
        .on('click', 'dd', function () {
            $(this).find('.tips').remove();
            var type = $(this).data('type');
            var text = $(this).text();
            bbsSearchForm.find('input[name=type]').val(type);
            bbsSelectbox.val(text).parent().removeClass('on');
            bbsSelectLayer.animate({
                top: 120,
                opacity: 0,
            }, 150, 'swing', function () {
                $(this).hide();
            });
        });
    bbsSearchForm
        .on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var content = $(this);
            var type = content.find('input[name=type]');
            var keyword = content.find('input[name=keyword]');
            if (type.val() == '') {
                alert('검색조건을 선택해주세요.');
                return bbsSelectbox.click();
            }
            if (keyword.val() == '') {
                alert('검색어를 입력해주세요.');
                return keyword.focus();
            }
            var params = content.serialize();
            /**
             * Ajax로 form 전송 리스트 처리
             */
            alert(params);
        });
    bbsLayer
        .on('click', 'button.modify', function () {
            var idx = $(this).closest('.btnbox').data('idx')
            var type = $(this).data('type');
            // var viewLayer = $($(this.closest('.viewLayer')).find('.section'));
            // var viewContentBox = $($(this.closest('.viewLayer')).find('.contentbox.view').children());

            console.log($('#bbs .tab > .active.on').text());
            if($('#bbs .tab > .active.on').text() === '예약확인') {
                var url = originUrl + '/home/selectBoardWhere';
                var data = {
                    idx : idx,
                    type : 3,
                }
                _jqueryAjax(url, data).then((res) => {
                    system.layerClose();
                    system.layerPos(reservationLayer, null);
                    reservationForm.data('idx', idx)
                    reservationForm.find('input[name=agree]').val();
                    reservationForm.find('input[name=package]').val(res.division);
                    reservationForm.find('input[name=date]').val(res.reservation_date);
                    reservationForm.find('input[name=name]').val(res.name);
                    reservationForm.find('input[name=phone]').val(res.phone);
                    reservationForm.find('input[name=email]').val(res.email);
                    reservationForm.find('input[name=password]').val(res.password);
                    reservationForm.find('textarea[name=contents]').val(res.contents);
                    $('#reservationLayer > .wrapper > h2').text('예약수정');
                    $('#reservationForm > .btnbox > button[type=submit]').text('예약수정');
                    $('#reservationLayer > .wrapper > h2').append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>');
                })
            }else if($('#bbs .tab > .active.on').text() === '문의하기'){
                var url = originUrl + '/home/selectBoardWhere';
                var data = {
                    idx : idx,
                    type : 2,
                }
                _jqueryAjax(url, data).then((res) => {
                    console.log(res);
                    system.layerClose();
                    system.layerPos(bbsLayer, '.writeLayer');
                    bbsWriteForm.data('idx', idx)
                    bbsWriteForm.find('input[name=agree]').val();
                    bbsWriteForm.find('input[name=name]').val(res.name);
                    bbsWriteForm.find('input[name=phone]').val(res.phone);
                    bbsWriteForm.find('input[name=email]').val(res.email);
                    bbsWriteForm.find('input[name=password]').val(res.password);
                    bbsWriteForm.find('input[name=subject]').val(res.title);
                    bbsWriteForm.find('textarea[name=contents]').val(res.contents);
                    $('#bbsLayer > .wrapper > h2').text('수정하기');
                    $('#bbsLayer > .wrapper > h2').append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>');
                    $('#bbsWriteForm > .btnbox > button[type=submit]').text('수정하기');
                })
            }
            // console.log('modify');
            // bbsPasswordForm.find('input[name=idx]').val(idx);
            // bbsPasswordForm.find('input[name=type]').val(type);

            // system.layerPos(bbsLayer, '.passwordLayer');
        });
    bbsLayer
        .on('click', 'button.cancel', function () {
            var idx = $(this).closest('.btnbox').data('idx');
            var type = $(this).data('type');
            console.log(idx , type);
            var url = originUrl + '/home/cancleReservation';
            var data = {
                idx : idx,
                type : 3,
            }
            if(confirm('예약을 취소하시겠습니까?')) {
                _jqueryAjax(url, data).then((val) => {
                    alert('예약이 취소되었습니다.')
                    console.log(bbsLayer.find('.section.date').children('.val:eq(4)'));
                    bbsLayer.find('.section.date').children('.val:eq(4)').text('예약취소');
                    $('#bbsLayer > .viewLayer .btnbox').children().css('display','none');
                    $('#bbsLayer > .viewLayer .btnbox > .closeLayer').css('display','block');
                    $('.listC .btn-pager-selected').trigger('click');
                })
            }
        });
    bbsPasswordForm
        .on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var content = $(this);
            var idx = content.find('input[name=idx]');
            var type = content.find('input[name=type]');
            var password = content.find('input[name=password]');
            if (idx.val() == '' || type.val() == '') {
                alert('올바른 접근이 아닙니다.');
                return system.layerClose();
            }
            if (password.val() == '') {
                alert('비밀번호를 입력해주세요.');
                return password.focus();
            }
            var params = content.serialize();

            var url = originUrl + '/home/confirmPassword';

            _jqueryAjax(url, params).then((val) => {
                if(val){
                    system.layerClose();
                    $('#js-trigger-popup').trigger('click',type.val());
                    system.layerPos(bbsLayer, '.viewLayer');
                }else {
                    alert('비밀번호가 틀립니다.');
                }
            })
            /**
             * Ajax로 form 전송 후 수적 삭제처리
             * 게시판 타입을 받아서 아래 예제를 IF 처리
             */
            /*
            문의하기일경우
            bbsWriteForm.find('input[name=agree]').val();
            bbsWriteForm.find('input[name=name]').val();
            bbsWriteForm.find('input[name=phone]').val();
            bbsWriteForm.find('input[name=email]').val();
            bbsWriteForm.find('input[name=password]').val();
            bbsWriteForm.find('input[name=subject]').val();
            bbsWriteForm.find('input[name=requirement]').val();
            레이어보여주기
            system.layerPos(bbsLayer, '.writeLayer');
            */

            /*
            예약일경우 Ajax로 받은 데이터 필드에 입력
            reservationForm.find('input[name=agree]').val();
            reservationForm.find('input[name=package]').val();
            reservationForm.find('input[name=date]').val();
            reservationForm.find('input[name=name]').val();
            reservationForm.find('input[name=phone]').val();
            reservationForm.find('input[name=email]').val();
            reservationForm.find('input[name=password]').val();
            reservationForm.find('input[name=requirement]').val();
            */
            // system.layerPos(reservationLayer, null);
            return false;
        });
    bbsWriteForm
        .on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('test');;
            var content = $(this);
            var agree = content.find('input[name=agree]');
            var name = content.find('input[name=name]');
            var phone = content.find('input[name=phone]');
            var email = content.find('input[name=email]');
            var password = content.find('input[name=password]');
            var subject = content.find('input[name=subject]');
            var requirement = content.find('input[name=requirement]');
            if (name.val() == '') {
                alert('이름을 입력해주세요.');
                return name.focus();;
            }
            if (phone.val() == '') {
                alert('전화번호를 입력해 주세요.');
                return phone.focus();
            }
            if (phoneFilter.test(phone.val()) === false) {
                alert('전화번호 형식이 올바르지 않습니다.');
                return phone.focus();
            }

            if (email.val() != '' && emailFilter.test(email.val()) === false) {
                alert('이메일 형식이 올바르지 않습니다.');
                return email.focus();
            }
            if (password.val() == '') {
                alert('비밀번호를 입력해주세요.\n비밀번호는 문의수정 및 확인에 필요합니다.');
                return password.focus();
            }
            if (subject.val() == '') {
                alert('제목을 입력해주세요.');
                return subject.focus();;
            }
            if (requirement.val() == '') {
                alert('문의내용을 입력해 주세요.');
                return false;
            }
            if (agree.is(":checked") === false) {
                alert('개인정보 수집 및 이용에 동의후 예약이 신청이 가능합니다.');
                return false;
            }
            var params = content.serializeArray();
            /**
             * 제이쿼리 form 전송
             */
            console.log($('#bbsWriteForm > .btnbox > button[type=submit]').text());
            var submitText = $('#bbsWriteForm > .btnbox > button[type=submit]').text();
            if(submitText === '문의하기'){
                var url = originUrl + '/home/insertInquiry';
                _jqueryAjax(url,params).then((val)=>{
                    alert('게시글이 작성되었습니다.');
                    $('#bbs .tab > .active.on').trigger('click');
                    system.layerClose();
                })
            }else if(submitText === '수정하기'){
                var url = originUrl + '/home/updateInquiry';
                params.push({
                    name : 'idx',
                    value : bbsWriteForm.data('idx')
                })
                _jqueryAjax(url,params).then((val)=>{
                    alert('게시글이 수정되었습니다.');
                    $('#bbs .tab > .active.on').trigger('click');
                    system.layerClose();
                })
            }
            return false;
        });
    info
        .on('click', 'button', function () {
            system.layerPos(infoLayer, null);
        });
    infoLayer
        .on('click', '.tab dd', function () {
            var el = $(this);
            var target = el.data('target');
            var idx = el.index();
            var targetContent = infoLayer.find('.textBox .cTns');
            var speed = 150;
            console.log(idx);
            infoLayer.find('.mContent').find('div').hide();
            infoLayer.find('.mContent').find('.' + target).show();
            targetContent.hide();
            targetContent.eq(idx).fadeIn(speed);
        });

    scrollTop
        .on('click', 'button', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });
    //테스트영역 비밀번호 영역 보여주기
    $('.setPassword').on('click', function (e,idx,type) {
        var idx = idx
        var type = type
        $('#bbsLayer > .wrapper > h2').text('비밀번호입력');
        bbsPasswordForm.find('input[name=idx]').val(idx);
        bbsPasswordForm.find('input[name=type]').val(type);
        system.layerPos(bbsLayer, '.passwordLayer');
    });
    //테스트영역 비밀번호 영역 보여주기
    $.fn.datepicker.languages['ko-KR'] = {
        format: 'yyyy. mm. dd',
        days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        daysShort: ['일', '월', '화', '수', '목', '금', '토'],
        daysMin: ['일', '월', '화', '수', '목', '금', '토'],
        months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthsShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        weekStart: 1,
        yearFirst: true,
        yearSuffix: '년'
    };
    $('[data-toggle="datepicker"]').datepicker({
        language: 'ko-KR',
        format: 'yyyy-mm-dd'
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            scrollTop.fadeIn();
        } else {
            scrollTop.fadeOut();
        }
    });
    //추가 2020-09-23
    $(window).resize(function () {
        var width = $(this).width();
        var right = header.find('nav').css('right');
        if (width > 768 && right == '0px') {
            system.layerClose();
        }
        system.posSize();
    });
    system.posSize();
    //추가 2020-09-23


    const libraries = {
        _jqueryAjax: (url, data = null, type = null) => {
            return $.ajax({
                url: url,
                type: "POST",
                data: data,
                dataType: "json",
                cache: false,
                processData: type == null ? true : false,
                contentType: type == null ? "application/x-www-form-urlencoded; charset=UTF-8" : false
            });
        },
    }
    const community = {
        origin_url: 'https://new.gcleisure.com',
        __proto__: libraries,
        _clickPagerBtn() {
            $(this.pagerDomName).off('click').on('click', (e) => {
                if($(e.target).prop('id') === 'pagination'){
                    return ;
                }
                $(this.pagerDomName).off('click');
                var targetText = $(e.target).closest('.btn-pager').children().text();
                if (targetText === '‹') {

                    console.log('test');
                    this._ajaxPager(1);
                } else if (targetText === '›') {
                    this._ajaxPager(0);
                } else {
                    this._ajaxPager(targetText);
                }
            })
        },
        _search() {
            // $('#search_text').val('');
            var content = $('.listC:eq(' + this.listCIdx + ') .searchbox');
            content.off('submit').on('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                var type = content.find('input[name=type]');
                var keyword = content.find('input[name=keyword]');
                if (type.val() == '') {
                    alert('검색조건을 선택해주세요.');
                    return bbsSelectbox.click();
                }
                if (keyword.val() == '') {
                    alert('검색어를 입력해주세요.');
                    return keyword.focus();
                }
                console.log($('.js-bbsSelectbox').val());
                if($('.js-bbsSelectbox').val() === '제목'){
                    var type = 'title';
                }else if($('.js-bbsSelectbox').val() === '글쓴이'){
                    var type = 'name';
                }
                this.search = {
                    val: keyword.val(),
                    type: type,
                }

                console.log(this.search);
                this._ajaxPager();
            })
        },
        _clickSearchSeletBox(){

        },
        _ajaxPager(targetText = 1) {
            var data = {
                type: this.communityType,
                limit: 10,
                offset: targetText,
                listNum: 10,
                navRange: 5
            }
            if (this.search !== null) {
                if (Number(this.search.type) === 0 ) {
                    this.search.type = 'title';
                } else if (Number(this.search.type) === 1) {
                    this.search.type = 'name';
                }
                data.search = this.search;
            }

            var url = this.origin_url + '/home/changeCommunityPager';
            this._jqueryAjax(url, data).then((val) => {
                this[this.listName] = val;
                this._createTable();
                this._clickPagerBtn();
            })
        },
        _createPager(pager) {
            $(this.pagerDomName).empty();
            var numBtn = pager.navRange.map((val, key) => {
                if (pager.selectPage === val) {
                    return (
                        `<li class="active btn-pager btn-pager-selected">
                            <span>${val}</span>
                            <em class="hover"></em>
                        </li>`
                    )
                } else {
                    return (
                        `<li class="btn-pager">
                            <span>${val}</span>
                            <em class="hover"></em>
                        </li>`
                    )
                }
            });
            $(this.pagerDomName).append(
                `<li class="prev btn-pager">
                    <span>‹</span>
                    <em class="hover"></em>
                </li>
                ${numBtn.join('')}
                <li class="btn-pager">
                    <span>›</span>
                    <em class="hover"></em>
                </li>
                `
            );
            this._clickPagerBtn();
        },
    }
    const notice = {
        __proto__: community, libraries, ckeditor,
        constructor() {
            this._editorConstructor();
            this.name = 'notice';
            this.communityType = 1;
            this.listCIdx = 0;
            this.className = '#bbs > .wrapper div:nth-child(5) .post > ul';
            this.listName = 'noticeList';
            this.pagerDomName = $('.pagination').eq(0).children('ul')
            this.pager = {
                listNum: 10,
                navRange: 5
            }
            this._clickNavBtn(this.name);
        },
        _editorConstructor() {
            var editorSet = {
                rootId: '.content_text',
                originUrl: 'https://new.gcsnow.net/',
                imgUrl: 'res/img/',
                crudUrl: 'https://new.gcsnow.net/home/ckeditor',
                uploadUrl: 'https://new.gcsnow.net/home/upload',
                folderName: 'base',
                tmpFolderName: 'tmp',
                createBtnClass: '#notice .content_container.notice ul li',
                createSubmitBtnClass: '.editor_create_Submit_btn',
                readBtnClass: '.editor_read_btn',
                updateBtnClass: '.editor_update_btn',
                updateSubmitBtnClass: '.editor_update_Submit_btn',
                deleteBtnClass: '.editor_delete_btn',
                isReadOnly: false,
            }

            this.ckeditor.constructor(editorSet).then((editorRes) => {
                console.log(this.ckeditor.getData());
                this.ckeditor._setEvtBtn();
            })
        },
        _clickPopup() {
            $(this.className).children('li').off('click').on('click', (e) => {

                this.selectedIdx = $(e.target).closest('li').data('idx');
                this._createPopup();
                var data = {
                    idx: this.selectedIdx,
                    // search: {
                    //     val: '',
                    //     type: '',
                    // }
                };
                // if (this.search !== null && this.search !== undefined) {
                //     if (Number(this.search.type) === 0) {
                //         this.search.type = 'title';
                //     } else if (Number(this.search.type) === 1) {
                //         this.search.type = 'name';
                //     }
                //     data.search = this.search;
                // }
                var url = this.origin_url + '/home/getPopupList';
                this._jqueryAjax(url, data).then((val) => {
                    console.log(val);
                    // this._createPopup(val);
                    // this.ckeditor.config.isReadOnly = true;
                    // this.ckeditor._ckeditor($('.content_text')[0]);
                    // console.log(this.ckeditor)
                })
            })
        },
        _createPopup(listData=null) {
            var data = this[this.listName].data;
            var idx = this.selectedIdx;
            var selectData = {};
            for (var val of data) {
                if (Number(val.idx) === Number(idx)) {
                    selectData = val;
                }
            }
            $('#bbsLayer > .viewLayer .btnbox').children().css('display','none');
            $('#bbsLayer > .viewLayer .btnbox > .closeLayer').css('display','block');
            $('#bbsLayer > .viewLayer').children().not('button, .btnbox').remove()
            $('#bbsLayer > .viewLayer').prepend(
                `<h2>공지사항</h2>
                <div class="subjectbox view">
                    <h3>${selectData.title}</h3>
                    <span class="date">${selectData.date}</span>
                </div>
                <div class="contentbox view">
                    <div class="scroll">     
                        <div class="content_text">${selectData.contents}</div>                      
                    </div>
                </div>`
            );
            this._clickCloseLayer();

            this.ckeditor._ckeditor($('.content_text')[0]);
            // this._clickPopupPrevNext();
        },
        _clickCloseLayer(){
            $('#bbsLayer > .viewLayer .btnbox > .closeLayer').off('click').on('click',(e)=>{
                $('#bbsLayer > .viewLayer > .closeLayer').trigger('click');
            })
        },
        _clickPopupPrevNext() {
            $('.js_prev_list').off('click').on('click', (e) => {
                this.selectedIdx = $(e.target).closest('.js_prev_list').data('idx');
                if (this.selectedIdx === null || this.selectedIdx === undefined) {
                    return;
                }
                var data = {
                    idx: this.selectedIdx,
                    search: {
                        val: '',
                        type: '',
                    }
                };
                if (this.search !== null && this.search !== undefined) {
                    if (Number(this.search.type) === 0) {
                        this.search.type = 'title';
                    } else if (Number(this.search.type) === 1) {
                        this.search.type = 'name';
                    }
                    data.search = this.search;
                }
                var url = this.origin_url + '/home/getPopupList';
                this._jqueryAjax(url, data).then((val) => {
                    this._createPopup(val);
                    console.log(this.ckeditor);
                    this.ckeditor._ckeditor($('.content_text')[0]);
                })
            })
            $('.js_next_list').off('click').on('click', (e) => {
                this.selectedIdx = $(e.target).closest('.js_next_list').data('idx');
                if (this.selectedIdx === null || this.selectedIdx === undefined) {
                    return;
                }
                var data = {
                    idx: this.selectedIdx,
                    search: {
                        val: '',
                        type: '',
                    }
                };
                if (this.search !== null && this.search !== undefined) {
                    if (Number(this.search.type) === 0) {
                        this.search.type = 'title';
                    } else if (Number(this.search.type) === 1) {
                        this.search.type = 'name';
                    }
                    data.search = this.search;
                }
                var url = this.origin_url + '/home/getPopupList';
                this._jqueryAjax(url, data).then((val) => {
                    this._createPopup(val);
                    this.ckeditor._ckeditor($('.content_text')[0]);
                })
            })
        },
        _clickNavBtn(name) {
            $('#js-click-community-btn').on('click.' + name, (e) => {
                this.search = null;
                $('.root_community_pager').empty();
                var data = {
                    type: this.communityType,
                    limit: 10,
                    offset: 1,
                    listNum: 10,
                    navRange: 5
                }
                if (this.search !== null && this.search !== undefined) {
                    if (Number(this.search.type) === 0) {
                        this.search.type = 'title';
                    } else if (Number(this.search.type) === 1) {
                        this.search.type = 'name';
                    }
                    data.search = this.search;
                }

                var url = this.origin_url + '/home/changeCommunityPager';
                this._jqueryAjax(url, data).then((val) => {
                    console.log(val);
                    $(this.className).empty();
                    this[this.listName] = val;
                    this._createTable();
                    this._clickPagerBtn();
                    this._search();
                    console.log('test');
                })
            })
        },
        _createTable() {
            var list = this[this.listName];
            this._createTableList(list);
            this._createPager(list.pager)
        },
        _createTableList(data) {
            $(this.className).empty();
            var liList =
                `<li class="title">
                    <span class="no">번호</span>
                    <span class="subject">제목</span>
                    <span class="name">글쓴이</span>
                    <span class="date">작성일</span>
                    <span class="hit">조회수</span>                    
                </li>`;
            data.data.map((val, key) => {
                val.views = val.views === null ? 0 : val.views;
                liList +=
                    `<li class="item" data-idx="${val.idx}">
                        <span class="no f12">${val.tr_idx}</span>
                        <span class="subject">${val.title}</span>
                        <span class="name">${val.name}</span>
                        <span class="date f12">${val.date.split(' ')[0]}</span>
                        <span class="hit f12">${val.views}</span>    
                    </li>`
            })
            $(this.className).append(liList)
            this._clickPopup();
        }
    }
    const inquiry = {
        __proto__: community,
        constructor() {
            this.name = 'inquiry';
            this.communityType = 2;
            this.listCIdx = 1;
            this.className = '#bbs > .wrapper div:nth-child(6) .post > ul';
            this.listName = 'inquiryList';
            this.pagerDomName = $('.pagination').eq(1).children('ul');
            this.pager = {
                listNum: 10,
                navRange: 5
            }
            this._clickNavBtn(this.name);
            this._clickInpuiryPopup();
            this._clickPopupSubmitBtn();
            this._triggerPopup();
        },
        _clickPopupSubmitBtn() {
            $('#js-popup-submit-btn').off('click.inquiry').on('click.inquiry', (e) => {
                $('#make_inq_submit').off('click').on('click', (e) => {
                    $('#make_inq_submit').off('click');
                    var formData = $(e.target).closest('#make_inquiry').serializeArray();
                    if (!this._insertVerification(formData)) {
                        $('#js-popup-submit-btn').trigger('click.inquiry');
                        return;
                    }
                    formData = this._changeDbData(formData);

                    var url = this.origin_url + '/home/insertInquiry';
                    this._jqueryAjax(url, data).then((val) => {
                        alert('게시글이 등록되었습니다.');
                        this[this.listName] = val;
                        this._createTable();
                        this._clickPagerBtn();
                        $('.make_inq .close').trigger('click');
                        $('#js-popup-submit-btn').trigger('click.inquiry');
                    })
                })
            })
        },
        _changeDbData(formData) {
            data = formData.filter((val, key) => {
                if (val.name !== 'consent_check') {
                    return val;
                }
            })

            for (var val of data) {
                if (val.name === 'inquiry_name') {
                    val.name = 'name';
                } else if (val.name === 'inquiry_pass') {
                    val.name = 'password';
                } else if (val.name === 'info_area') {
                    val.name = 'contents';
                } else if (val.name === 'inquiry_title') {
                    val.name = 'title';
                }
            }

            data.push({
                'name': 'type',
                'value': 2
            })
            return data;
        },
        _insertVerification(formData) {
            if (!$('#consent_check').prop('checked')) {
                alert('개인정보 수집 및 이용항목에 동의해주세요.');
                return false;
            }
            for (var val of formData) {
                var verificationKey = ['inquiry_name', 'inquiry_pass', 'inquiry_title', 'phone', 'info_area'];
                var verificationText = ['예약자명을 입력해주세요.', '비밀번호를 입력해주세요.', '제목을 입력해주세요.', '전화번호를 입력해주세요.', '내용을 입력해주세요.'];

                if (val.name === 'consent_check') {

                } else if (verificationKey.indexOf(val.name) !== -1 && val.value === '') {
                    var arrIdx = verificationKey.indexOf(val.name);
                    alert(verificationText[arrIdx]);
                    return false;
                } else if (val.name === 'inquiry_pass' && val.value.length < 4) {
                    alert('비밀번호를 4자 이상으로 입력해주세요.')
                    return false;
                } else if (val.name === 'inquiry_name' && val.value.length < 2) {
                    alert('예약자명을 2자 이상으로 입력해주세요.')
                    return false;
                }
            }
            return true;
        },
        _confirmPassword() {
            // '<input type="password" id="inquiry_pass" name="inquiry_pass" data-idx="'+idx+'">';
            // html += '<button id="inquiry_submit" type="submit" data-idx="'+idx+'">확인</button>';

        },
        _clickInpuiryPopup() {
            $(this.className).children('li').off('click').on('click', (e) => {
                this.selectedIdx = $(e.target).closest('li').data('idx');
                $('.setPassword').trigger('click',[this.selectedIdx, this.communityType]);
                // this._createPopup();
            });
        },
        _triggerPopup(){
            $('#js-trigger-popup').on('click',(e,type)=>{
                if(Number(type) === Number(this.communityType)) {
                    this._createPopup();
                }
            })
        },
        _createPopup() {
            var data = this[this.listName].data;
            var idx = this.selectedIdx;
            var selectData = {};
            for (var val of data) {
                if (Number(val.idx) === Number(idx)) {
                    selectData = val;
                }
            }
            var comment = this.inquiryList.comment[idx];
            var commentDom = '';
            if (comment.length !== 0) {
                console.log(comment);
                commentDom +=
                    `<div class="contentbox view comment">
                        <div>
                            <div class="read_content_box reply" >
                            <div class="read_title reply" >
                                <div class="subject">${comment[0].name}</div>
                                <div class="read_date">${comment[0].date}</div>
                            </div>
                            <div class="content_text reply">${comment[0].comment}</div>
                            </div>                                
                        </div>        
                    </div>`
            }
            $('#bbsLayer > .viewLayer .btnbox').children().css('display','block');
            $('#bbsLayer > .viewLayer .btnbox > .modify').text('수정');
            $('#bbsLayer > .viewLayer .btnbox > .cancel').css('display','none');
            $('#bbsLayer > .viewLayer .btnbox').data('idx',selectData.idx);
            $('#bbsLayer > .viewLayer').children().not('button, .btnbox').remove()
            $('#bbsLayer > .viewLayer').prepend(
                `<h2>문의하기</h2>
                <div class="subjectbox view">
                    <h3>${selectData.title}</h3>
                    <span class="date">${selectData.date}</span>
                </div>
                <div class="contentbox view">
                    <div class="scroll">     
                        <pre>${selectData.contents}</pre>                      
                    </div>                  
                </div>
                ${commentDom}`
            );
            this._clickPopupUpdateBtn();
            this._clickPopupDeleteBtn();
            this._clickCloseLayer();
        },
        _clickCloseLayer(){
            $('#bbsLayer > .viewLayer .btnbox > .closeLayer').off('click').on('click',(e)=>{
                $('#bbsLayer > .viewLayer > .closeLayer').trigger('click');
            })
        },
        _createUpdatePopup() {
            var data = this[this.listName].data;
            var idx = this.selectedIdx;
            var selectData = {};
            for (var val of data) {
                if (Number(val.idx) === Number(idx)) {
                    selectData = val;
                }
            }

            this._clickPopupUpdateSubmit();
        },
        _clickPopupUpdateSubmit() {
            $('.js_update_inquiry_submit').off('click').on('click', (e) => {
                $('.js_update_inquiry_submit').off('click');
                var data = {
                    idx: this.selectedIdx

                };
                var formData = $('.js_update_inquiry').serializeArray();
                for (var val of formData) {
                    data[val.name] = val.value;
                }
                console.log(formData);
                var url = this.origin_url + '/home/updateInquiry';
                this._jqueryAjax(url, data).then((val) => {
                    alert('게시글이 수정되었습니다.');
                    $('.btn-pager-selected').trigger('click');
                    $('.make_inq .close').trigger('click');
                    this._clickPopupUpdateSubmit();
                })
            })
        },
        _clickPopupUpdateBtn() {
            $('.js_inquiry_update_btn').off('click').on('click', (e) => {
                console.log(e.target);
                console.log(this.selectedIdx);
                this._createUpdatePopup();
            })
        },
        _clickPopupDeleteBtn() {
            $('.js_inquiry_delete_btn').off('click').on('click', (e) => {
                if (!confirm('게시글을 삭제하시겠습니까?')) {
                    return;
                }
                var data = {
                    idx: this.selectedIdx
                };
                var url = this.origin_url + '/home/deleteInquiry';
                this._jqueryAjax(url, data).then((val) => {
                    alert('게시글이 삭제되었습니다.');
                    this[this.listName] = val;
                    this._createTable();
                    this._clickPagerBtn();
                    $('.read_notice .close').trigger('click');
                })
            })
        },
        _clickNavBtn(name) {
            $('#js-click-community-btn').on('click.' + name, (e) => {
                this.search = null;
                $('.root_community_pager').empty();
                var data = {
                    type: this.communityType,
                    limit: 10,
                    offset: 1,
                    listNum: 10,
                    navRange: 5
                }
                if (this.search !== null && this.search !== undefined) {
                    if (Number(this.search.type) === 0) {
                        this.search.type = 'title';
                    } else if (Number(this.search.type) === 1) {
                        this.search.type = 'name';
                    }
                    data.search = this.search;
                }

                var url = this.origin_url + '/home/changeCommunityPager';
                this._jqueryAjax(url, data).then((val) => {
                    $(this.className).empty();
                    this[this.listName] = val;
                    this._createTable();
                    this._clickPagerBtn();
                    this._search();
                })
            })
        },
        _createTable() {
            var list = this[this.listName];
            this._createTableList(list);
            console.log(list.pager);
            this._createPager(list.pager);
        },
        _createTableList(data) {
            $(this.className).empty();
            var liList = 
                `<li class="title">
                    <span class="no">번호</span>
                    <span class="subject">제목</span>
                    <span class="name">글쓴이</span>
                    <span class="date">작성일</span>
                </li>`;
            data.data.map((val, key) => {
                val.views = val.views === null ? 0 : val.views;
                liList +=
                    `<li class="item" data-idx="${val.idx}">
                        <span class="no f12">${val.tr_idx}</span>
                        <span class="subject">${val.title}</span>
                        <span class="name">${val.name}</span>
                        <span class="date f12">${val.date.split(' ')[0]}</span>
                    </li>`;
                if (this.inquiryList.comment[val.idx].length !== 0) {
                    liList +=
                        `<li class="item" data-idx="${val.idx}">
                            <span class="no f12"></span>
                            <span class="subject subject_comment">
                                <div class="chain"></div><div class="lock"></div><div class="comment">고객님 답변합니다.</div>
                            </span>
                            <span class="name">관리자</span>
                            <span class="date f12">${val.date.split(' ')[0]}</span>
                        </li>`
                }
            })


            $(this.className).append(liList);
            this._clickInpuiryPopup();
        }
    }
    const reservation = {
        __proto__: community,
        constructor() {
            this.name = 'reservation';
            this.communityType = 3;
            this.listCIdx = 2;
            this.className = '#bbs > .wrapper div:nth-child(7) .post > ul';
            this.listName = 'reservationList';
            this.pagerDomName = $('.pagination').eq(2).children('ul')
            this.pager = {
                listNum: 10,
                navRange: 5
            }
            this._clickNavBtn(this.name);
            this._clickPopup();
            this._triggerPopup();
        },
        _clickNavBtn(name) {
            $('#js-click-community-btn').on('click.' + name, (e) => {
                this.search = null;
                $('.root_community_pager').empty();
                var data = {
                    type: this.communityType,
                    limit: 10,
                    offset: 1,
                    listNum: 10,
                    navRange: 5
                }
                if (this.search !== null && this.search !== undefined) {
                    if (Number(this.search.type) === 0) {
                        this.search.type = 'title';
                    } else if (Number(this.search.type) === 1) {
                        this.search.type = 'name';
                    }
                    data.search = this.search;
                }

                var url = this.origin_url + '/home/changeCommunityPager';
                this._jqueryAjax(url, data).then((val) => {
                    $(this.className).empty();
                    this[this.listName] = val;
                    this._createTable();
                    this._clickPagerBtn();
                    this._search();
                })
            })
        },
        _createTable() {
            var list = this[this.listName];
            this._createTableList(list);
            this._createPager(list.pager)
        },
        _createTableList(data) {
            $(this.className).empty();
            var liList =
                ` <li class="title">
                    <span class="no">번호</span>
                    <span class="name">예약자</span>
                    <span class="date">예약일</span>
                    <span class="subject">레저종류</span>
                    <span class="date">등록일</span>
                    <span class="state">예약상태</span>
                </li>`;
            data.data.map((val, key) => {
                val.views = val.views === null ? 0 : val.views;
                console.log(val.type);
                if (Number(val.type) === 1) {
                    var reservationText = '대기'
                    var reservationClass = 'wait';
                } else if (Number(val.type) === 2) {
                    var reservationText = '예약완료';
                    var reservationClass = 'ok';
                } else if (Number(val.type) === 3) {
                    var reservationText = '예약취소';
                    var reservationClass = 'cancle';
                }
                liList +=
                    `<li class="item" data-idx="${val.idx}">
                        <span class="no">${val.tr_idx}</span>
                        <span class="name">${val.name}</span>
                        <span class="date">${val.reservation_date}</span>
                        <span class="subject">${val.title}</span>
                        <span class="date">${val.date.split(' ')[0]}</span>
                        <span class="state"><label class="${reservationClass}">${reservationText}</label></span>
                    </li>`
            })
            $(this.className).append(liList)
            this._clickPopup();
        },
        _clickPopup() {
            $(this.className).children('li').off('click').on('click', (e) => {
                    this.selectedIdx = $(e.target).closest('li').data('idx');
                $('.setPassword').trigger('click',[this.selectedIdx, this.communityType]);
            })
        },
        _clickCancle() {
            $('.js_reservation_cancle').off('click').on('click', (e) => {
                if (!confirm('예약을 취소하시겠습니까?')) {
                    return;
                }
                $('.js_reservation_cancle').off('click');
                console.log(this.selectedIdx);
                var data = {
                    idx: this.selectedIdx,
                    type: 3,
                }
                var url = this.origin_url + '/home/cancleReservation';
                this._jqueryAjax(url, data).then((val) => {
                    alert('예약이 취소되었습니다.')
                    $('.btn-pager-selected').trigger('click');
                    $('.make_inq .close').trigger('click');
                    $('.js_reservation_cancle').css('display', 'none');
                    this._clickCancle();
                })
            })
        },
        _triggerPopup(){
            $('#js-trigger-popup').on('click',(e,type)=>{
                if(Number(type) === Number(this.communityType)) {
                    this._createPopup();
                }
            })
        },
        _createPopup() {
            var data = this[this.listName].data;
            var idx = this.selectedIdx;
            var selectData = {};
            for (var val of data) {
                if (Number(val.idx) === Number(idx)) {
                    selectData = val;
                }
            }


            $('#bbsLayer > .viewLayer .btnbox').children().css('display','none');
            $('#bbsLayer > .viewLayer .btnbox > .modify').text('예약수정');
            $('#bbsLayer > .viewLayer .btnbox > .closeLayer').css('display','block');

            if (Number(selectData.type) === 1) {
                var reservationText = '대기중'
                $('#bbsLayer > .viewLayer .btnbox').children().css('display','block');
                $('#bbsLayer > .viewLayer .btnbox').data('idx',selectData.idx);
            } else if (Number(selectData.type) === 2) {
                var reservationText = '예약완료';
            } else if (Number(selectData.type) === 3) {
                var reservationText = '예약취소';
            }
            $('#bbsLayer > .viewLayer').children().not('button, .btnbox').remove()
            $('#bbsLayer > .viewLayer').prepend(
                `<h2>예약하기</h2>
                <ul>
                    <li>
                        <div class="section package">
                            <span class="key">패키지명</span>
                            <span class="val">${selectData.division}</span>
                        </div>
                    </li>
                    <li>
                        <div class="section date">
                            <span class="key">예약일</span>
                            <span class="val">${selectData.reservation_date}</span>
                        </div>
                    </li>
                    <li>
                        <div class="section date">
                            <span class="key">이름</span>
                            <span class="val">${selectData.name}</span>
                        </div>
                    </li>
                    <li>
                        <div class="section date">
                            <span class="key">전화번호</span>
                            <span class="val">${selectData.phone}</span>
                        </div>
                    </li>
                    <li>
                        <div class="section date">
                            <span class="key">이메일주소</span>
                            <span class="val">${selectData.email}</span>
                        </div>
                    </li>
                    <li>
                        <div class="section date">
                            <span class="key">예약상태</span>
                            <span class="val">${reservationText}</span>
                        </div>
                    </li>
                </ul>
                <div class="contentbox view">
                    <div class="scroll">                   
                        <pre>${selectData.contents}</pre>
                    </div>
                </div>`
            );

            this._clickCancle();
        }
    }

    notice.constructor();
    inquiry.constructor();
    reservation.constructor();
    $('#bbs .tab > .active.on').trigger('click');
    const weather = () =>{
        const method =  {
            _jqueryAjax: (url, data = null, type = null) => {
                return $.ajax({
                    url: url,
                    type: "POST",
                    data: data,
                    dataType: "json",
                    cache: false,
                    processData: type == null ? true : false,
                    contentType: type == null ? "application/x-www-form-urlencoded; charset=UTF-8" : false
                });
            },
            _getAjaxWeather(){
                var url = 'https://new.gcleisure.com/home/getWeather';
                this._jqueryAjax(url).then((val) => {
                    if (!val.hasOwnProperty('error')) {
                        val = this._addDiffTemperature(val);
                        this._createWeatherMainDom(val);
                    } else {
                        console.log('php ajaxReturn getWeather error! : ' + val.error);
                    }
                }).catch((error) => {
                    console.log('php ajaxReturn getWeather error! : ' , error);
                });
            },
            _createWeatherMainDom(data){
                var nowWeather = '#weather .temperature';
                var weatherIcon = '#weather .icon';
                var infoText = '#weather ul > li:nth-child(1) > strong';
                var temperatureLow = '#weather ul > li:nth-child(2) > .blue';
                var temperatureHigh = '#weather ul > li:nth-child(2) > .red';
                var temperatureSensible = '#weather ul > li:nth-child(2) > b';
                var precipitation = '.js_weather > p:nth-child(5) > span:nth-child(1)';
                var uv = '#weather ul > li:nth-child(4) > .red';
                var dust = '#weather ul > li:nth-child(5) > .green';

                var nowWeatherName = data.now.info_text.split(',')[0];
                $('.js_weather > p').css('visibility','visible');
                if(nowWeatherName === '비') {
                    $(weatherIcon).addClass('iconRain');
                }else if(nowWeatherName === '맑음') {
                    $(weatherIcon).addClass('iconSunny');
                }else if(nowWeatherName === '구름') {
                    $(weatherIcon).addClass('iconCloud');
                }else {
                    $(weatherIcon).addClass('iconCloud');
                }
                $(nowWeather).text(data.now.temperature_now);
                $(infoText).text(data.now.info_text);
                $(temperatureLow).text(data.now.temperature_low + '°');
                $(temperatureHigh).text(data.now.temperature_high + '°');
                $(temperatureSensible).text(data.now.temperature_sensible + '°');
                // $(precipitation).text(data.now.precipitation + 'mm');
                $(uv).text(data.now.uv.lev);
                $(uv).css('color',data.now.uv.font_color);
                $(dust).text(data.now.dust.num + '㎍/㎥ ' + data.now.dust.lev );
                $(dust).css('color',data.now.dust.font_color);
            },
            _addDiffTemperature(data){
                data.weekly.map((val,key)=>{
                    if( key !== 0){
                        var tomorrowWeather = data.weekly[key-1].temperature_high;
                        var diff = val.temperature_high - tomorrowWeather;
                        if(diff > 0){
                            data.weekly[key].temperature_diff = '어제보다 '+ Math.abs(diff) +'&deg; 높음';
                        }else if (diff < 0){
                            data.weekly[key].temperature_diff = '어제보다 '+ Math.abs(diff) +'&deg; 낮음';
                        }else {
                            data.weekly[key].temperature_diff = '어제랑 같아요';
                        }
                    }else {
                        var diff = data.now.info_text.split(' ')[2];
                        var diffText = data.now.info_text.split(' ')[3];
                        diff = diff.substr(0, diff.length -1);
                        data.weekly[key].temperature_diff = '어제보다 ' +diff + '&deg; ' +diffText.replace('아요','음');
                    }
                })

                if(data.now.info_text.indexOf('아요') !== -1){
                    data.now.info_text = data.now.info_text.replace('아요','음');
                }

                return data;
            }
        }
        method._getAjaxWeather();
        return method;
    }
    weather();
});
