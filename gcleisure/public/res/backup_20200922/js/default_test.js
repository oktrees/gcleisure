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

    _html = (function () {
        return {
            visit_html: function() {
                var html = '',
                    subway_title = ['상봉','망우','갈매','퇴계원','시능','평내/호평','대성리','청평','삼천','가평','경강','백암리','강촌'],
                    car_title = ['서울/강남','올림픽대로','서울춘천고속도로','강촌IC','충효로','소주고개로','강촌로','강촌하수종말 처리장','강촌레저'];

                html += '<div class="wrapper visit">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">찾아오시는길</div>';
                html += '<div class="map_content">';
                html += '<div class="visit_map" id="map" style="width:100%; height:100%;"></div>';
                html += '</div>';
                html += '<div class="guide_content subway">';
                html += '<div class="guide_title">';
                html += '<div class="subway_img"></div>';
                html += '<div>복선전철 (경춘선)이용시</div>';
                html += '</div>';
                html += '<div class="navi">';
                html += '<div>';
                for(var i=0; i<subway_title.length; i++) {
                    if(i === subway_title.length-1){
                        html += '<div class="arrival">'+subway_title[i]+'</div>';
                    }else {
                        html += '<div>'+subway_title[i]+'</div>';
                    }
                }
                html += '</div>';
                html += '<div>';
                for(var i=0; i<subway_title.length; i++) {
                    if(i === subway_title.length-1){
                        html += '<div>';
                        html += '<div class="point arrival"></div>';
                        html += '</div>';
                    } else {
                        html += '<div>';
                        html += '<div class="point p_line"></div>';
                        html += '</div>';
                    }
                }
                html += '</div>';
                html += '</div>';
                html += '<div class="comment_navi">';
                html += '<div>';
                html += '<p>강촌역 1번출구로 나와서 강원도 춘천시 남산면 방곡리 385(강촌로151-1)까지 약 291M 이동 (4분소요)</p>';
                html += '<p>환승역 : 상봉(7호선, 중앙선)/망우(중앙선)</p>';
                html += '</div>';
                html += '<div>';
                html += '<p>- 출발역은 상봉역입니다.열차 시간표는 코레일 홈페이지를 참조하시기 바랍니다.</p>';
                html += '<p>- 하차 하시기전 전화연락을 주시면 강촌역에서 픽업해드립니다.</p>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="guide_content car">';
                html += '<div class="guide_title">';
                html += '<div class="car_img"></div>';
                html += '<div>자가용 이용 (서울출발)</div>';
                html += '</div>';
                html += '<div class="navi">';
                html += '<div>';
                for(var i=0; i<car_title.length; i++) {
                    if(i === car_title.length-1){
                        html += '<div class="arrival">'+car_title[i]+'</div>';
                    }else {
                        html += '<div>'+car_title[i]+'</div>';
                    }
                }
                html += '</div>';
                html += '<div>';
                for(var i=0; i<car_title.length; i++) {
                    if(i === car_title.length-1){
                        html += '<div>';
                        html += '<div class="point arrival"></div>';
                        html += '</div>';
                    } else {
                        html += '<div>';
                        html += '<div class="point p_line"></div>';
                        html += '</div>';
                    }
                }
                html += '</div>';
                html += '</div>';
                html += '<div class="comment_navi">';
                html += '<div>';
                html += '<p>서울/강남역을 출발지로 설정한 경로 입니다.</p>';
                html += '<p>총 73.9km를 주행하며 예상 통행료는 4,400원 입니다.</p>';
                html += '</div>';
                html += '<div>';
                html += '<p>- 강촌IC교차로에서 춘천, 강촌 방면으로 좌회전 하신 후 충효로를 따라 400미터 정도 이동하신 후 춘천, 강촌 방향으로 우회전하십시오.</p>';
                html += '<p>- 소주터널 진입후 소주고개로를 따라 이동해주세요.</p>';
                html += '<p>- 강촌로를 따라 2KM정도 가면 강촌 하수종말 처리장이 보입니다.</p>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';

                $('#popup_view').empty().removeClass('hide').append(html);

                $(document).find('#popup_view').children('.wrapper').css({ // 팝업 위치 조절
                    top: '-700px'
                });
                $('#map').removeClass('hide');
                var clone = $('#map').clone();
                $('#map').remove();

                $DOCUMENT.find('#popup_view').children('.wrapper').children('.map_content').append(clone);

                _interval = setTimeout(function() {
                    getGoogleMap();
                },0)
            },
            check_notice_html: function() {
                var html = '';

                html += '<div class="wrapper read_notice" style="top: -950px;">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">공지사항</div>';
                html += '<div class="read_container">';
                html += '<div class="read_title">';
                html += '<div class="subject">2020 겨울시즌 스키&보드 오픈 날짜 공지 </div>';
                html += '<div class="read_date">2020.11.15</div>';
                html += '</div>';
                html += '<div class="read_content_box">';
                html += '<div class="content_text">';
                html += '<pre>안녕하세요.<br>';
                html += '강촌 스키&보드입니다.<br>';
                html += '최근 신종 코로나 바이러스 감염증 사태가 확산되어 11월 중에 예정이였던 오픈식이 연기 되었던점 죄송합니다.<br>';
                html += '다시 코로나가 잠잠해져 재오픈 일정을 공지해 드립니다.<br>';
                html += '감사합니다.<br>';
                html += '<br>';
                html += '1)2020 강촌레저 스키&보드<br>';
                html += '- 변경전 : 2020년 11월 15일<br>';
                html += '- 변경후 : 2020년 11월 30일';
                html += '</pre>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="list_container">';
                html += '<div class="prev_list">';
                html += '<div>이전글</div>';
                html += '<div class="bin"><div class="prev_arrow"></div></div>';
                html += '<div class="title_text">2020년 오픈기념 쿠폰 안내</div>';
                html += '</div>';
                html += '<div class="next_list">';
                html += '<div>다음글</div>';
                html += '<div class="bin"><div class="next_arrow"></div></div>';
                html += '<div class="title_text">2020년 오픈기념 쿠폰 안내</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="submit_container">';
                html += '<button type="button" id="list_button">목록</button>';
                html += '</div>';
                html += '</div>';

                $('#popup_view').empty().removeClass('hide').append(html);
            },
            check_inquiry_html: function() {
                var html = '';

                html += '<div class="wrapper read_inq" style="top: -950px;">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">문의하기</div>';
                html += '<div class="del_button">';
                html += '<div>삭제</div>';
                html += '<div class="under_line"></div>';
                html += '</div>';
                html += '<div class="read_container">';
                html += '<div class="read_title">';
                html += '<div class="subject">문의합니다</div>';
                html += '<div class="read_date">2020.11.15</div>';
                html += '</div>';
                html += '<div class="read_content_box">';
                html += '<div class="content_text">';
                html += '<pre>안녕하세요.<br>강촌 스키&보드입니다.<br><br>';
                html += '</pre>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="list_container">';
                html += '<div class="prev_list">';
                html += '<div>이전글</div>';
                html += '<div class="bin"><div class="prev_arrow"></div></div>';
                html += '<div class="title_text">2020년 오픈기념 쿠폰 안내</div>';
                html += '</div>';
                html += '<div class="next_list">';
                html += '<div>다음글</div>';
                html += '<div class="bin"><div class="next_arrow"></div></div>';
                html += '<div class="title_text">2020년 오픈기념 쿠폰 안내</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="submit_container">';
                html += '<button type="button" id="list_button">목록</button>';
                html += '</div>';
                html += '</div>';

                $('#popup_view').empty().removeClass('hide').append(html);
            },
            check_reservation_html: function($this, class_name, section_id, type) {
                var html = '';

                html += '<div class="wrapper read_res" style="top: -950px;">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">예약확인</div>';
                html += '<div class="del_button">';
                if(type === 'complete'){
                    html += '<div class="hide">예약취소</div>';
                }else {
                    html += '<div>예약취소</div>';
                }
                html += '<div class="under_line"></div>';
                html += '</div>';
                html += '<div class="read_container">';
                html += '<div class="read_info_content">';
                html += '<div>';
                html += '<div>예약자명</div>';
                html += '<div>유소민</div>';
                html += '<div>예약자 전화번호</div>';
                html += '<div>010-3558-5310</div>';
                html += '</div>';
                html += '<div>';
                html += '<div>이메일</div>';
                html += '<div>yusomin73@naver.com</div>';
                html += '<div>예약일</div>';
                html += '<div>2020-06-24</div>';
                html += '</div>';
                html += '<div>';
                html += '<div>패키지</div>';
                html += '<div>패키지 2가지</div>';
                html += '<div></div>';
                html += '<div></div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="read_content_box">';
                html += '<div>요청내용</div>';
                html += '<div class="content_text">';
                html += '<pre>';
                html += '바베큐 8시쯤 먹을 수 있게 해주시고';
                html += '1시 도착 예정니까 1시 15분까지 역으로 픽업 부탁드려용~';
                html += '</pre>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="submit_container">';
                html += '<button type="button" id="close_button">닫기</button>';
                html += '</div>';
                html += '</div>';

                $('#popup_view').empty().removeClass('hide').append(html);
                _fn.popup_html_height($this, class_name, section_id);
            },
            write_inquiry_html: function($this, class_name, section_id) {
                var html = '';

                html += '<div class="wrapper make_inq" style="top: -950px;">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">문의하기</div>';
                html += '<form id="make_inquiry" action="" method="post">';
                html += '<div class="consent_container">';
                html += '<div class="content_title">개인정보 수집 및 이용 동의</div>';
                html += '<div class="content_box">';
                html += '<div class="nav_box">';
                html += '<div class="consent_select">개인정보수집 및 이용목적</div>';
                html += '<div>수집하는 개인정보의 향목</div>';
                html += '<div>개인정보보유 및 이용기간</div>';
                html += '<div>개인정보의 위탁처리</div>';
                html += '<div class="hide"></div>';
                html += '</div>';
                html += '<div class="text_box">';
                html += '<p>\'OOO\'는 (이하 \'회사\'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>';
                html += '<p>회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>';
                html += '<br>';
                html += '<p>ο 본 방침은 : OOOO년 OO월 OO일 부터 시행됩니다.</p>';
                html += '<br>';
                html += '<br>';
                html += '<p>개인정보의 수집 및 이용목적</p>';
                html += '<br>';
                html += '<p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>';
                html += '<br>';
                html += '<p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>';
                html += '<p>콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지등 발송</p>';
                html += '<p>ο 회원 관리</p>';
                html += '<p>회원제 서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인,</p>';
                html += '<p>만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 고지사항 전달</p>';
                html += '<p>ο 마케팅 및 광고에 활용</p>';
                html += '<p>이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>';
                html += '</div>';
                html += '<div class="consent_confirm">';
                html += '<label for="consent_check">';
                html += '<span>개인정보 수집 및 이용에 동의합니다. <span>(필수)</span></span>';
                html += '<input type="checkbox" id="consent_check" value="1" name="consent_check">';
                html += '<span class="checkmark"></span>';
                html += '</label>';
                html += '<div class="next_arrow" style="display: none;"></div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="inquiry_container">';
                html += '<div class="content_title">문의내용 입력</div>';
                html += '<div class="content_box">';
                html += '<div>';
                html += '<div>이름</div>';
                html += '<div><input type="text" id="inquiry_name" name="inquiry_name"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>비밀번호 <span class="warning">*</span></div>';
                html += '<div><input type="password" id="inquiry_pass" name="inquiry_pass" autocomplete="off"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>전화번호</div>';
                html += '<div><input type="text" id="phone" name="phone"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>제목</div>';
                html += '<div><input type="text" id="inquiry_title" name="inquiry_title"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>내용</div>';
                html += '<div>';
                html += '<textarea id="info_area" name="info_area"></textarea>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="submit_container">';
                html += '<button type="button" id="cancel">취소</button>';
                html += '<button type="submit" id="make_inq_submit">확인</button>';
                html += '</div>';
                html += '</form>';
                html += '</div>';

                $('#popup_view').empty().removeClass('hide').append(html);
                _fn.popup_html_height($this, class_name, section_id);
            },
            consent_form_1: function(type) {
                var html = '';

                html += '<p>\'OOO\'는 (이하 \'회사\'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>';
                html += '<p>회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>';
                html += '<br>';
                html += '<p>ο 본 방침은 : OOOO년 OO월 OO일 부터 시행됩니다.</p>';
                html += '<br>';
                html += '<br>';
                html += '<p>개인정보의 수집 및 이용목적</p>';
                html += '<br>';
                html += '<p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>';
                html += '<br>';
                html += '<p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>';
                html += '<p>콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지등 발송</p>';
                html += '<p>ο 회원 관리</p>';
                html += '<p>회원제 서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인,</p>';
                html += '<p>만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 고지사항 전달</p>';
                html += '<p>ο 마케팅 및 광고에 활용</p>';
                html += '<p>이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>';

                if(type === 'make_inquiry') {
                    $('#make_inquiry .consent_container .content_box .text_box').empty().append(html);
                }else if(type === 'make_reservation') {
                    $('#make_reservation .consent_container .content_box .text_box').empty().append(html);
                }
            },
            consent_form_2: function(type) {
                var html = '';

                html += '<p>수집하는 개인정보의 항목</p>';
                html += '<br>';
                html += '<p>회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>';
                html += '<p>ο 수집항목 : 이름, 생년월일, 성별, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 회사명, 부서, 직책, 회사전화번호, 결혼여부, 기념일, 접속 로그, 쿠키, 접속IP 정보</p>';
                html += '<p>ο 개인정보 수집방법 : 웹사이트(www.new.gcleisure.com)</p>';

                if(type === 'make_inquiry') {
                    $('#make_inquiry .consent_container .content_box .text_box').empty().append(html);
                }else if(type === 'make_reservation') {
                    $('#make_reservation .consent_container .content_box .text_box').empty().append(html);
                }
            },
            consent_form_3: function(type) {
                var html = '';

                html += '<p>개인정보의 보유 및 이용기간</p>';
                html += '<br>';
                html += '<p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>';
                html += '<p>보존 항목 : 이름, 성별, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 이메일</p>';
                html += '<p>보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>';
                html += '<p>보존 기간 : 회원탈퇴시까지</p>';
                html += '<br>';
                html += '<p>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>';
                html += '<p>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>';
                html += '<p>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</p>';
                html += '<br>';
                html += '<p>개인정보의 파기 절차 및 방법</p>';
                html += '<br>';
                html += '<p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>';
                html += '<p>ο 파기절차</p>';
                html += '<p>회원님이 회원가입 등을 위해 입력하신 정보는 DB에 저장되며, 저장된 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.</p>';
                html += '<p>ο 파기방법</p>';
                html += '<p>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>';

                if(type === 'make_inquiry') {
                    $('#make_inquiry .consent_container .content_box .text_box').empty().append(html);
                }else if(type === 'make_reservation') {
                    $('#make_reservation .consent_container .content_box .text_box').empty().append(html);
                }
            },
            consent_form_4: function(type) {
                var html = '';

                html += '<p>개인 정보 제공</p>';
                html += '<br>';
                html += '<p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>';
                html += '<p>- 이용자들이 사전에 동의한 경우</p>';
                html += '<p>- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>';
                html += '<br>';
                html += '<p>수집한 개인정보의 위탁</p>';
                html += '<br>';
                html += '<p>회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.</p>';
                html += '<br>';
                html += '<p>이용자 및 법정대리인의 권리와 그 행사방법</p>';
                html += '<br>';
                html += '<p>이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.</p>';
                html += '<p>이용자 혹은 만 14세 미만 아동의 개인정보 조회·수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭 하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.</p>';
                html += '<p>혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.</p>';
                html += '<p>귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자 에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.</p>';
                html += '<p>(주)이지소프트는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “OOO가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>';
                html += '<br>';
                html += '<p>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>';
                html += '<br>';
                html += '<p>회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 OOO의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>';
                html += '<br>';
                html += '<p>▶ 쿠키 등 사용 목적</p>';
                html += '<p>- 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공</p>';
                html += '<p>- 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>';
                html += '<br>';
                html += '<p>▶ 쿠키 설정 거부 방법</p>';
                html += '<p>쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</p>';
                html += '<br>';
                html += '<p>설정방법 예(인터넷 익스플로어의 경우) :</p>';
                html += '<p>웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보</p>';
                html += '<br>';
                html += '<p>단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>';
                html += '<br>';
                html += '<p>개인정보에 관한 민원서비스</p>';
                html += '<br>';
                html += '<p>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.</p>';
                html += '<br>';
                html += '<p>고객서비스담당 부서 :</p>';
                html += '<p>전화번호 :</p>';
                html += '<p>이메일 :</p>';
                html += '<br>';
                html += '<p>개인정보관리책임자 성명 :</p>';
                html += '<p>전화번호 :</p>';
                html += '<p>이메일 :</p>';
                html += '<br>';
                html += '<p>귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>';
                html += '<br>';
                html += '<p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>';
                html += '<p>1.개인분쟁조정위원회 (www.1336.or.kr/1336)</p>';
                html += '<p>2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</p>';
                html += '<p>3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</p>';
                html += '<p>4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</p>';

                if(type === 'make_inquiry') {
                    $('#make_inquiry .consent_container .content_box .text_box').empty().append(html);
                }else if(type === 'make_reservation') {
                    $('#make_reservation .consent_container .content_box .text_box').empty().append(html);
                }
            },
            make_reservation_html: function(type,name,phone, section_id, $this, class_name) {
                var html = '',
                    today = moment().format('YYYY-MM-DD');
                val_key = ['2_A','2_B','2_C','2_D','2_E','2_F','2_G','3_A','3_B','3_C','3_D','3_E','3_F','3_G','3_H','3_I','3_J','3_K','4_A','4_B','4_C','4_D','4_E','DAY_A',
                    'DAY_B','DAY_C'],
                    name_key = ['2가지 - A 패키지','2가지 - B 패키지','2가지 - C 패키지','2가지 - D 패키지','2가지 - E 패키지','2가지 - F 패키지','2가지 - G 패키지','3가지 - A 패키지',
                        '3가지 - B 패키지','3가지 - C 패키지','3가지 - D 패키지','3가지 - E 패키지','3가지 - F 패키지','3가지 - G 패키지','3가지 - H 패키지','3가지 - I 패키지',
                        '3가지 - J 패키지','3가지 - K 패키지','4가지 - A 패키지','4가지 - B 패키지','4가지 - C 패키지','4가지 - D 패키지','4가지 - E 패키지','1박2일 - A 패키지',
                        '1박2일 - B 패키지','1박2일 - C 패키지'];

                html += '<div class="wrapper make_res" style="top: -7800px;">';
                html += '<div class="close"></div>';
                html += '<div class="popup_title">예약하기</div>';
                html += '<form id="make_reservation" action="" method="post">';
                html += '<div class="consent_container">';
                html += '<div class="content_title">개인정보 수집 및 이용 동의</div>';
                html += '<div class="content_box">';
                html += '<div class="nav_box">';
                html += '<div class="consent_select">개인정보수집 및 이용목적</div>';
                html += '<div>수집하는 개인정보의 향목</div>';
                html += '<div>개인정보보유 및 이용기간</div>';
                html += '<div>개인정보의 위탁처리</div>';
                html += '<div class="hide"></div>';
                html += '</div>';
                html += '<div class="text_box">';
                html += '<p>\'OOO\'는 (이하 \'회사\'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.</p>';
                html += '<p>회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>';
                html += '<br>';
                html += '<p>ο 본 방침은 : OOOO년 OO월 OO일 부터 시행됩니다.</p>';
                html += '<br>';
                html += '<br>';
                html += '<p>개인정보의 수집 및 이용목적</p>';
                html += '<br>';
                html += '<p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>';
                html += '<br>';
                html += '<p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산</p>';
                html += '<p>콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지등 발송</p>';
                html += '<p>ο 회원 관리</p>';
                html += '<p>회원제 서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인,</p>';
                html += '<p>만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 고지사항 전달</p>';
                html += '<p>ο 마케팅 및 광고에 활용</p>';
                html += '<p>이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</p>';
                html += '</div>';
                html += '<div class="consent_confirm">';
                html += '<label for="consent_check">';
                html += '<span>개인정보 수집 및 이용에 동의합니다. <span>(필수)</span></span>';
                html += '<input type="checkbox" id="consent_check" value="1" name="consent_check">';
                html += '<span class="checkmark"></span>';
                html += '</label>';
                html += '<div class="next_arrow" style="display: none;"></div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="reservation_container">';
                html += '<div class="content_title">예약 정보 입력 <span>(<span class="warning">*</span> 정보는 필수정보 입니다.)</span></div>';
                html += '<div class="content_box">';
                html += '<div>';
                html += '<div>예약자명 <span class="warning">*</span></div>';
                html += '<div><input type="text" id="reservation_name" name="reservation_name"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>비밀번호 <span class="warning">*</span></div>';
                html += '<div><input type="password" id="reservation_pass" name="reservation_pass"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>예약자 전화번호 <span class="warning">*</span></div>';
                html += '<div><input type="text" id="phone" name="phone"></div>';
                html += '</div>';
                html += '<div>';
                html += '<div>이메일</div>';
                html += '<div>';
                html += '<input type="text" id="email" name="email">';
                html += '</div>';
                html += '</div>';
                html += '<div>';
                html += '<div>예약일 <span class="warning">*</span></div>';
                html += '<div class="calendar">';
                html += '<div>';
                html += '<div>'+today+'</div>';
                html += '<div class="cal_img"></div>';
                html += '</div>';
                html += '<div class="date_popup hide"></div>';
                html += '</div>';
                html += '</div>';
                html += '<div>';
                html += '<div>패키지 <span class="warning">*</span></div>';
                html += '<div>';
                html += '<select id="package_select" name="package_select">';
                html += '<option value="0">패키지를 선택하세요.</option>';
                for(var i=0; i<val_key.length; i++) {
                    html += '<option value="'+val_key[i]+'">'+name_key[i]+'</option>';
                }
                html += '</select>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="info_text_container">';
                html += '<div class="content_title">예약 정보 입력</div>';
                html += '<div class="content_box">';
                html += '<div>';
                html += '<div>입력내용</div>';
                html += '<div>';
                html += '<textarea id="info_area" name="info_area"></textarea>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="submit_container">';
                html += '<button type="submit" id="make_res_submit">예약하기</button>';
                html += '<input type="hidden" id="res_day" name="res_day" value="">'
                html += '</div>';
                html += '</form>';
                html += '</div>';

                console.log(section_id)
                var top = $(document).find('#popup_view .wrapper').css('top');
                if(section_id === 'reservation_bottom' || section_id === 'package_service') {
                    $('#popup_view').empty().removeClass('hide').append(html);
                    _fn.popup_html_height($this, class_name, section_id)
                    $(document).find('#reservation_name').val(name);
                    $(document).find('#phone').val(phone);
                    $(document).find('#package_select').val(type);
                }else{
                    console.log('불일치~~~~~~~~~~~~~~~~~~~~~~~~~');

                    console.log(top);
                    $('#popup_view').empty().removeClass('hide').append(html);
                    $(document).find('#popup_view .wrapper').css({
                        'top': top
                    });

                }
            },
            leisure_info_html: function($this, class_name, section_id) {
                let html = '';
                let title1 = ['A코스', 'B코스', 'C코스'];
                let title2 = ['강촌 레저 40분투어코스', '강촌 레저 1시간 투어코스', '강촌 레저 3시간 투어코스'];
                let price1 = ['50,000', '25,000', '75,000'];
                let price2 = ['38,000', '20,000', '50,000'];

                let water_title1 = ['수상스키&웨이크보드','바나나보트','수상스키','웨이크보드','더블 땅콩 보트','플라이 피쉬'];
                let water_title1_sub = ['보트관광','보트관광','보트관광'];
                let water_title2 = ['왕초보자 지상교육 실습2회','5인이상 픽업가능','물위를 달리는 레포츠','묘기를 부리는맛','PVC나 고무로 만든 보트','하늘을 나는듯한 짜릿함'];
                let water_title2_sub = ['A코스','B코스','C코스'];
                let water_price1 = ['50,000','20,000','25,000','25,000','20,000','20,000'];
                let water_price1_sub = ['50,000','70,000','100,000'];
                let water_price2 = ['45,000','10,000','20,000','20,000','15,000','15,000'];

                let water_pac_title = ['A패키지','B패키지','C패키지'];

                if(class_name === 'offer_bike offer_img') {
                    html += '<div class="wrapper atv_bike leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">ATV 사륜바이크</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>원래 농장용 기계로 개발되어 농업용이나 운송용으로 사용을 하였으나, 점차 레저 스포츠로 발전하여 외국의 경우 대규모의 ATV 대회까지 열리고 있습니다.</p>';
                    html += '<p>국내에 도입된지는 약 10여 년 정도 되어가며, 몇 년 전부터 동호인들이 늘어나면서 새로운 레저로 각방 받고 있습니다.</p>';
                    html += '<br>';
                    html += '<p>ATV는 피포장도로는 물론 자갈이나 모래밭, 작은 웅덩이나 둔 턱, 억덩에이르기까지 원만한 곳은 거침없이 나아갑니다.</p>';
                    html += '<p>ATV 바퀴가 4개이다 보니 웬만하면 넘어질 일이 없으며, 부행방법도 아주 간단하여 남녀노소 누구나 5분 정도의 안전 교육만 받으면</p>';
                    html += '<p>ATV의 매력을 마음껏 느끼실 수 있습니다.</p>';
                    html += '<br>';
                    html += '<p>도로교통법상 농기계로 분류되어 도로주행을 할 수 없다는 단점이 있어 개인적으로 즐기기 위해서는 레저용 차량이나 트럭 등으로 운반하여</p>';
                    html += '<p>이용해야 하는 불편함이 있으므로 ATV 체험장에서 이용하시는 것이 가장 편리합니다.</p>';
                    html += '<br>';
                    html += '<p>우리나라는 산이 많은 지형여건상 ATV를 즐기기에는 최적의 요소를 자추고 있으며 현재 많은 동호인들이 국내 코스 개발에 힘을 쏟고 있어 ATV가 활성화가 많이 되었습니다.</p>';
                    html += '<p>작은 몸체에 4개의 큼직한 바퀴가 매력적이며, 강력한 성능을 자랑하는 ATV를 지금 강촌 레저에서 가족과 연인과 친구들과 함께 체험해 보시기 바랍니다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="atv_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_course_box">';
                    html += '<nav class="grid">';
                    html += '<div class="course_select">A코스</div>';
                    html += '<div>B코스</div>';
                    html += '<div>C코스</div>';
                    html += '</nav>';
                    html += '<div class="course_img">';
                    html += '<div class="a_course"></div>';
                    html += '<div class="b_course hide"></div>';
                    html += '<div class="c_course hide"></div>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi grid">';
                    for (var i = 0; i < title1.length; i++) {
                        if (i === 0) {
                            html += '<div class="price_select">';
                        } else {
                            html += '<div>';
                        }
                        html += '<strong>' + title1[i] + '</strong>';
                        html += '<p>' + title2[i] + '</p>';
                        html += '<div>';
                        html += '<div>';
                        html += '<div><span>' + price1[i] + '</span><span>원</span></div>';
                        html += '<div class="arrow_price"></div>';
                        html += '</div>';
                        html += '<div><span>' + price2[i] + '</span><span>원</span></div>';
                        html += '</div>';
                        html += '</div>';
                    }
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_rafting offer_img'){
                    html += '<div class="wrapper rafting leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">래프팅</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>래프팅이란 인간의 발길이 미치지 않는 계곡의 장엄함과 신비스런 자태를 래프팅 보트에 몸을 싣고 살아 숨쉬는 대자연의 경이로움에 자신도 모르는 감격을 맛볼것입니다.</p>';
                    html += '<br>';
                    html += '<p>래프팅은 자연과 더불어 적극적 사고와 지취적 기상을 기르고 호연지기 정신과 공동체 의식을 함양하고, 체력단련을 겸 할수 있는 전천후 수상체험 모험</p>';
                    html += '<p>레포츠입니다.</p>';
                    html += '<br>';
                    html += '<p>래프팅을 함으로서 여러 사람이 힘을 모아야 가능한 운동이기 때문에 협동심과 인내심을 기르는데 좋고 온몸의 힘을 모아 물살을 헤치며 노를 저어야</p>';
                    html += '<p>하기에 전신운동의 효과가 크고 신선한 공기를 마음껏 마실 수 있어 건강에 더없이 좋다는 장점도 있습니다.</p>';
                    html += '<br>';
                    html += '<p>강촌레저는 고객 여러분의 안전을 최우선으로 생각하며 최고의 서비스를 제공하고자 직원일동이 최선을 다할 것을 약속드립니다.</p>';
                    html += '<p>올여름 강촌레저와함께 시원한 여름을 보내시길 바랍니다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="rafting_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_one">';
                    html += '<div class="price_title">';
                    html += '<strong>강촌레저<br>이용요금안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p>강촌레저 20%할인 행사</p>';
                    html += '<div><span>25,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>20,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '<div class="price_res_button">';
                    html += '<button type="button" id="price_res_b">예약하기</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_canu offer_img'){
                    html += '<div class="wrapper canu leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">카누 · 카약</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="canu_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_one">';
                    html += '<div class="price_title">';
                    html += '<strong>강촌레저<br>이용요금안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p>강촌레저 할인행사</p>';
                    html += '<div><span>20,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>15,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '<div class="price_res_button">';
                    html += '<button type="button" id="price_res_b">예약하기</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_survival offer_img'){
                    html += '<div class="wrapper survival leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">서바이벌 게임</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>서바이벌 게임은 본래 모의 전투라 한다. 인간의 광적인 전쟁본능을 순화시킨다는 긍정론이 인정되면서 생명존중 또는 생존을 뜻하는 서바이벌 게임이 파생되었다.</p>';
                    html += '<br>';
                    html += '<p>게임의 기원은 유럽과 미국에서 모의전투로 시작하였고 2차 대전을 기념하여 전쟁터를 재현해 보자라는 참전 용사들의 제안으로 시작되었다.</p>';
                    html += '<br>';
                    html += '<p>1970년 중반 이를 바탕으로 한 워(WER)게임 의 새로운 형태 인 페인트볼 게임이 미국에서 시작되어 유럽은 물론 일본까지 유래되어 정착되었다.</p>';
                    html += '<p>이후 80년대 중반 일본에서는 가스를 이용한 비비탄과 플라스틱 게임총이 나왔고 이후 90년 부터는 밧데리 방식의 전동건이 출시되어</p>';
                    html += '<p>우리나라의 서바이벌 게임의 기원이 된다.</p>';
                    html += '<br>';
                    html += '<p>강원도에서는 매년 4월, 10월중 1년에 2회에 걸쳐 관내 주둔 포병훈련장에서 전국의 게임매니아 및 동호인들이 서바이벌축제</p>';
                    html += '<p>(백마고지를 사수하라 : 팀별 개인대항슈팅대회 및 팀대항 메인게임)을 개최하고 있으며, 과거 인근 폐교에서 하는 게임보다 실제 군부대 훈련장에서 게임을 하므로써</p>';
                    html += '<p>실제 전쟁을 방불케 하는 생생한 현실감과 예비역들의 군대생활의 향수를 느낄 수 있어 전국의 많은 게임매니아 및 동호인들이 참여하고 있다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="survival_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_one">';
                    html += '<div class="price_title">';
                    html += '<strong>강촌레저<br>이용요금안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p>강촌레저 20%할인 행사</p>';
                    html += '<div><span>25,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>20,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '<div class="price_res_button">';
                    html += '<button type="button" id="price_res_b">예약하기</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_cart offer_img') {
                    html += '<div class="wrapper cart leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">카트</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>모터스포츠의 최고라 할 수 있는 카트는 포뮬러의 특징을 잘 살린 “미니포뮬러”로써 유원지 등에서 탈수 있는 카트로 일명“고카트” 또는 “레져카트”라고 한다.</p>';
                    html += '<br>';
                    html += '<p>2싸이클과 4싸이클 엔진이 장착되어 있고 프레임에 최소한의 기본 장치만으로 오른발의 가속페달과 왼발의 브레이크로 이루어져 처음 배우는 사람을 위해</p>';
                    html += '<p>클러치와 원터치 시동방식을 택하여 간단한 핸들동작으로 운전이 가능하다.</p>';
                    html += '<br>';
                    html += '<p>또한, 지상고와 차체가 5cm 정도로 매우 낮으므로 코너링시 차체가 전복되는 일이 거의 없어 안정성이 뛰어나고, 서스펜션이 없기 때문에 스피드를 내며</p>';
                    html += '<p>질주할 때 레이서가 된 짜릿한 묘미를 즐길 수 있다.</p>';
                    html += '<br>';
                    html += '<p>현재 국내의 카트경기장에서 일반인을 대상으로 간단한 안전교육 후 주행이 가능한 스포츠 카트이다.</p>';
                    html += '<p>카트는 덮개가 없는 개방형이면서(open car) 차체가 낮아, 최고 속도는 시속 40km에 불과하지만 체감 속도는 실제 속도의 2∼3배에 달한다.</p>';
                    html += '<br>';
                    html += '<p>세계적인 자동차 명가들을 포함, 포뮬러카를 운전하기 전 드라이빙 감각을 익히기 위한 수단으로도 많이 이용되고, 효과적인 코너링 방법, 주행테크닉등의 스터디가 가능하며</p>';
                    html += '<p>레저카트 보다 좀 더 강하고 탄력적인 스피드를 원하시는 분들에게 각광받고 있는 것이 바로 \'레이싱카트\'이다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="cart_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_one price_two">';
                    html += '<div class="price_title">';
                    html += '<strong>강촌레저<br>이용요금안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<div>';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p><span></span>1인용</p>';
                    html += '<div><span>20,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>15,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p><span></span>2인용</p>';
                    html += '<div><span>30,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>20,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="price_res_button">';
                    html += '<button type="button" id="price_res_b">예약하기</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_leisure offer_img'){
                    html += '<div class="wrapper water leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">수상레저</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>수상레저(water leisure) 는 물에서 하는 레저스포츠의 총칭이다.</p>';
                    html += '<br>';
                    html += '<p>쉽게 말하면 수상레저 활동이란 바다나 강 , 호수 등 내수면에서 수상레저 기구를 이용하여 취미, 오락, 체육 교육 등의 목적으로이루어지는 모든 활동을 말한다.</p>';
                    html += '<p>수상레저에는 수상스키(water ski), 웨이크보드 (wakeboard), 바나나보트(banana boat), 플라 이피쉬(fly fish), 모터보트(motor boat), 땅콩 보트(peanut boat) 등이 있다.</p>';
                    html += '<br>';
                    html += '<p>물 위에서 하는 레저스포츠이기 때문에 그만큼 안전이 중요하다.</p>';
                    html += '<p>따라서 2000년 2월 9일부터 시행된 법률로, 수상 레저활동에서 일어날 수 있는 위험을 사전에 방치하기 위해 국가에서는 여러가지 규정을 두고 있다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="water_leisure_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_package">';
                    html += '<div class="price_wrapper">';
                    html += '<div class="price_title">';
                    html += '<strong>이용요금 안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<ul>';
                    for(let i=0; i<water_title1.length; i++) {
                        if(i === 0) {
                            html += '<li class="price_select">';
                        }else {
                            html += '<li>';
                        }
                        html += '<strong>'+water_title1[i]+'</strong>';
                        html += '<p>'+water_title2[i]+'</p>';
                        html += '<div>';
                        html += '<div class="p_rel">';
                        html += '<div><span>'+water_price1[i]+'</span><span>원</span></div>';
                        html += '<div class="arrow_price"></div>';
                        html += '</div>';
                        html += '<div><span>'+water_price2[i]+'</span><span>원</span></div>';
                        html += '</div>';
                        html += '</li>';
                    }
                    for(let i=0; i<water_title1_sub.length; i++) {
                        html += '<li class="boat_course">';
                        html += '<strong>'+water_title1_sub[i]+'</strong>';
                        html += '<p>'+water_title2_sub[i]+'</p>';
                        html += '<div>';
                        html += '<div><span>'+water_price1_sub[i]+'</span><span>원</span></div>';
                        html += '</div>';
                        html += '</li>';
                    }
                    html += '</ul>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="price_wrapper">';
                    html += '<div class="price_title">';
                    html += '<strong>패키지 요금 안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<ul>';
                    for(let i=0; i<water_pac_title.length; i++) {
                        html += '<li class="package_info">';
                        html += '<strong>'+water_pac_title[i]+'</strong>';
                        html += '<p>수상레저 놀이기구 2가지 + 워터파크</p>';
                        html += '<div>';
                        html += '<div><span>25,000</span><span>원 /</span></div>';
                        html += '<div><span> 10인이상</span><span>20,000</span><span>원</span></div>';
                        html += '</div>';
                        html += '</li>';
                    }
                    html += '</ul>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === 'offer_argo offer_img'){
                    html += '<div class="wrapper argo leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">수륙양용 아르고</h3>';
                    html += '<p class="popup_title_sub">계절에 관계없이 가족들과 연인들이 즐길 수 있는 아르고 체험</p>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_img_box">';
                    html += '<ul>';
                    html += '<li>';
                    html += '<strong class="img_box_title">뱅가드(프론티어)</strong>';
                    html += '<p>짜릿한 경험을 하고 싶으신 연인들에게 강추!</p>';
                    html += '<div class="argo_content_img"></div>';
                    html += '</li>';
                    html += '<li>';
                    html += '<strong class="img_box_title">어벤저</strong>';
                    html += '<p>가족과 함께 친구들과 함께 신나는 경험을 하실 수 있습니다.</p>';
                    html += '<div class="argo_content_img2"></div>';
                    html += '</li>';
                    html += '</ul>';
                    html += '</div>';
                    html += '<div>*체험예약시 지급항목 - 구명조끼, 헬멧</div>';
                    html += '<div class="leisure_course_box">';
                    html += '<nav class="grid">';
                    html += '<div class="course_select">A코스-30분 투어</div>';
                    html += '<div>B코스-1시간 투어</div>';
                    html += '<div>C코스-3시간 투어</div>';
                    html += '</nav>';
                    html += '<div class="course_img">';
                    html += '<div class="argo_a_course"></div>';
                    html += '<div class="argo_b_course hide"></div>';
                    html += '<div class="argo_c_course hide"></div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }else if(class_name === undefined){
                    html += '<div class="wrapper scooter leisure" style="top: -6300px;">';
                    html += '<div class="close"></div>';
                    html += '<h3 class="popup_title">스쿠터</h3>';
                    html += '<div class="leisure_container">';
                    html += '<div class="leisure_content">';
                    html += '<p>바퀴의 지름이 보통의 오토바이보다 작고 소형의 기관(50∼600cc)을 좌석 아래에 장착하고 있다. 따라서 보통의 복장으로 걸터앉아 운전할 수 있고, 여성이 타기에도 편하다.</p>';
                    html += '<p>그러나 장거리의 고속 주행용으로는 적합하지 않고, 사용범위도 주로 시가지에서의 통근·통학·배달 및 근교에서의 가벼운 스포츠에 한정된다.</p>';
                    html += '<p>고성능보다도 경쾌함과 저가격에 특징이 있다.</p>';
                    html += '<br>';
                    html += '<p>스쿠터는 1912년 미국에서 현재의 스쿠터와 비슷한 것을 군용으로 만들었고, 1921년 독일에서, 1925년 영국에서도 생산했다.</p>';
                    html += '<p>그러나 일반인에게 보급된 것은 제2차 세계대전 이후의 유럽, 특히 패전국인 서독과 이탈리아에서 승용차 대용으로 이용하면서부터다.</p>';
                    html += '<br>';
                    html += '<p>예전부터 오토바이 전문제조회사에서 생산한 것도 있었으나 대부분은 군수산업으로부터의 전향에 의한 것이었다.</p>';
                    html += '<p>스쿠터에는 운전자 1인 이외에 필요에 따라 한 사람 또는 60∼70kg의 하물을 적재할 수 있으며, 평지에서의 최고속도는 70∼100km/시이고,</p>';
                    html += '<p>경제속도 30∼40km/h로 주행하면 1ℓ로 45∼75km 주행할 수 있다.</p>';
                    html += '<p>등판능력은 승용차 정도이고 차량 중량은 120∼150kg이며, 중심이 낮아 안정성이 좋다.</p>';
                    html += '</div>';
                    html += '<div class="leisure_img_box">';
                    html += '<div class="scooter_content_img"></div>';
                    html += '</div>';
                    html += '<div class="leisure_price_box_multi_one price_two">';
                    html += '<div class="price_title">';
                    html += '<strong>강촌레저<br>이용요금안내</strong>';
                    html += '</div>';
                    html += '<div class="price_content">';
                    html += '<div>';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p><span></span>1시간</p>';
                    html += '<div><span>15,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>12,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '<div>';
                    html += '<div class="p_rel">';
                    html += '<p><span></span>24시간</p>';
                    html += '<div><span>50,000</span><span>원</span></div>';
                    html += '<div class="arrow_price long"></div>';
                    html += '</div>';
                    html += '<div><span>30,000</span><span>원</span></div>';
                    html += '</div>';
                    html += '</div>';
                    html += '<div class="price_res_button">';
                    html += '<button type="button" id="price_res_b">예약하기</button>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }

                $('#popup_view').empty().removeClass('hide').append(html);

                _fn.popup_html_height($this, class_name, section_id);
            },
            inquiry_confirm_html: function(idx, $this) {
                var html = '';

                html += '<li class="list_num_' + idx + ' confirm">';
                html += '<div></div>';
                html += '<div>';
                html += '<form id="inquiry_confirm">';
                html += '<div>비밀번호</div>';
                html += '<input type="password" id="inquiry_pass" name="inquiry_pass">';
                html += '<button id="inquiry_submit" type="submit">확인</button>';
                html += '<input type="hidden" id="list_idx" name="list_idx" value="' + idx + '">';
                html += '</form>';
                html += '</div>';
                html += '<div></div>';
                html += '<div></div>';
                html += '</li>';

                // $DOCUMENT.find('#notice .content_container.inquiry ul li.list_num_'+idx+'.confirm').remove();
                $DOCUMENT.find('#notice .content_container.inquiry ul li.confirm').remove();
                $this.after(html);
            }
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