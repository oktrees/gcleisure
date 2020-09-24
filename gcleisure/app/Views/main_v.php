<?php
    $IMG_PATH = '//new.gcleisure.com/res/gcleisure/img/';
    $main_img = 'main_top';
?>
<div>
    <header>
        <h1 class="hide">사륜바이크 서바이벌 수상레저 워크샵 단체 MT - 강촌레저</h1>
        <div class="wrapper">
            <div>
               <span class="logo bg_icon"></span>
            </div>
            <nav>
                <ul class="bold">
                    <li data-target="#offer_service">레저안내</li>
                    <li data-target="#package_service">패키지안내</li>
                    <li data-target="#gallery">포토갤러리</li>
                    <li data-target="#notice">예약및문의</li>
                    <li data-target="#info">위치안내</li>
                </ul>
            </nav>
        </div>
    </header>
</div>
<section id="main"class="p_rel">
    <ul class="main_top_slider wrapper">
        <li class="item item1">
            <div class="main_jpg1"></div>
        </li>
    </ul>
    <div class="main_top wrapper">
        <p>WIND, WATER, LIFESTYLE.</p>
        <h2>EXCITING SUMMER</h2>
        <div class="weather js_weather" >
            <h3>TODAY WEATHER</h3>
            <div>
                <div class="weather_img cloud"></div>
                <div><span>--</span><span>℃</span></div>
            </div>
            <p>구름많음, 어제보다 2°높음</p>
            <p><span>20°</span>/<span>32°</span><span>|</span>체감온도 <span>24.8°</span></p>
            <p>시간당 강수량 <span>0mm</span></p>
            <p>자외선 <span>매우높음</span></p>
            <p>미세먼지 <span>26㎍/㎥ 보통</span></p>
        </div>
        <div class="chat_bot">
            <p>챗봇상담</p>
            <span class="bg_icon"></span>
        </div>
    </div>
</section>
<section id="reservation_bottom">
    <div class="wrapper reservation_content">
        <div class="reservation_box">
            <form id="reservation">
                <dl class="form">
                    <dd>
                        <select name="type" id="res_type">
                            <option value="0">패키지</option>
                            <option value="1_atv">1가지 - ATV</option>
                            <option value="1_rafting">1가지 - 래프팅</option>
                            <option value="1_canoe">1가지 - 카누,카약</option>
                            <option value="1_survival">1가지 - 서바이벌</option>
                            <option value="1_cart">1가지 - 카트</option>
                            <option value="1_water_leisure">1가지 - 수상레져</option>
                            <option value="1_argo">1가지 - 수륙양용 아르고</option>
                            <option value="2_A">2가지 - A 패키지</option>
                            <option value="2_B">2가지 - B 패키지</option>
                            <option value="2_C">2가지 - C 패키지</option>
                            <option value="2_D">2가지 - D 패키지</option>
                            <option value="2_E">2가지 - E 패키지</option>
                            <option value="2_F">2가지 - F 패키지</option>
                            <option value="2_G">2가지 - G 패키지</option>
                            <option value="3_A">3가지 - A 패키지</option>
                            <option value="3_B">3가지 - B 패키지</option>
                            <option value="3_C">3가지 - C 패키지</option>
                            <option value="3_D">3가지 - D 패키지</option>
                            <option value="3_E">3가지 - E 패키지</option>
                            <option value="3_F">3가지 - F 패키지</option>
                            <option value="3_G">3가지 - G 패키지</option>
                            <option value="3_H">3가지 - H 패키지</option>
                            <option value="3_I">3가지 - I 패키지</option>
                            <option value="3_J">3가지 - J 패키지</option>
                            <option value="3_K">3가지 - K 패키지</option>
                            <option value="4_A">4가지 - A 패키지</option>
                            <option value="4_B">4가지 - B 패키지</option>
                            <option value="4_C">4가지 - C 패키지</option>
                            <option value="4_D">4가지 - D 패키지</option>
                            <option value="4_E">4가지 - E 패키지</option>
                            <option value="DAY_A">1박2일 - A 패키지</option>
                            <option value="DAY_B">1박2일 - B 패키지</option>
                            <option value="DAY_C">1박2일 - C 패키지</option>
                        </select>
                    </dd>
                    <dd>
                        <input type="text" name="name" placeholder="이름" id="res_name" autocomplete="off">
                    </dd>
                    <dd>
                        <input type="text" name="phone" placeholder="연락처" id="res_phone" autocomplete="off">
                    </dd>
                    <dd>
                        <button id="reservation_submit" type="button">예약하기</button>
                    </dd>
                </dl>
            </form>
            <div>
                <h2>지금바로 예약 상담!</h2>
                <p>010-4858-0255</p>
            </div>
        </div>
    </div>
</section>
<section id="leisure_service">
    <div class="wrapper sec_title">
        <div>
            <span class="ban_97"></span>
        </div>
        <div>
            <h2 class="m_top_30 poppins_50">LEISURE SERVICE<span class="hide">강촌레저 이용 서비스 안내</span></h2>
            <p class="m_top_30"><strong class="normal">강촌레저</strong>로 떠나는 스릴있는 휴가</p>
        </div>
        <div class="service_content m_top_60">
            <div>
                <div class="foot_volley p_rel">
                    <img src="<?php echo $IMG_PATH;?>foot_volley.jpg"><p>족구장</p>
<!--                    <div></div>-->
                </div>
                <p>강촌 레저 이용 시</p><p>FREE</p>
            </div>
            <div>
                <div class="soccer p_rel">
                    <img src="<?php echo $IMG_PATH;?>soccer.jpg"><p>미니 축구장</p>
<!--                    <div></div>-->
                </div>
                <p>강촌 레저 이용 시</p><p>FREE</p>
            </div>
            <div>
                <div class="basketball p_rel">
                    <img src="<?php echo $IMG_PATH;?>basketball.jpg"><p>농구장</p>
<!--                    <div></div>-->
                </div>
                <p>강촌 레저 이용 시</p><p>FREE</p>
            </div>
            <div class="col-3 p_rel">
                <span class="plus">
                    <span class="x_plus"></span>
                    <span class="y_plus"></span>
                </span>
                <div class="babeQ2 p_rel">
                    <img src="<?php echo $IMG_PATH;?>babeQ2.jpg"><p>단체바베큐장</p>
                    <p>1인 20,000원</p>
<!--                    <div></div>-->
                </div>
                <p>돼지목살 200g, 닭갈비 200g,</p><p>밑반찬 4~5가지, 공깃밥, 된장찌개</p><p>소주&맥주 추가 시 (무한대) 1인 5,000원 추가</p>
            </div>
        </div>
    </div>
</section>
<section id="offer_service">
    <div class="wrapper p_rel">
        <ul class="grid">
            <li class="p_rel photo">
                <div class="offer_bike offer_img"></div>
                <p># 사륜바이크 (ATV)</p>
                <div class="add_box p_ab hide">
                    <strong># 사륜바이크 (ATV)</strong>
                    <p>작은 몸체에 4개의 큼직한 바퀴가 매력인 ATV</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel sec_title col-2">
                <div>
                    <span class="ban_97"></span>
                </div>
                <div>
                    <h2 class="m_top_30 poppins_50">OFFER SERVICE<span class="hide">강촌레저 제공 서비스 안내</span></h2>
                    <p class="m_top_30">강촌 레저에서 제공하는 서비스로 스릴을 즐기세요.</p>
                </div>
            </li>
            <li class="p_rel photo">
                <div class="offer_rafting offer_img"></div>
                <p># 래프팅</p>
                <div class="add_box p_ab hide">
                    <strong># 래프팅</strong>
                    <p>시원한 물살을 가르며, 즐기는 레프팅</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel photo">
                <div class="offer_canu offer_img"></div>
                <p># 카누,카약</p>
                <div class="add_box p_ab hide">
                    <strong># 카누,카약</strong>
                    <p>강물을 벗삼아 노를 젓는다</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel photo">
                <div class="offer_survival offer_img"></div>
                <p># 서바이벌게임</p>
                <div class="add_box p_ab hide">
                    <strong># 서바이벌게임</strong>
                    <p>인간의 광적인 전쟁본능을 순화시킨다</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel photo_2 col-2">
                <div class="offer_cart offer_img"></div>
                <p># 카트</p>
                <div class="add_box p_ab hide">
                    <strong># 카트</strong>
                    <p>스릴과 스피드가 함께하는 엄청난 체감속도</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel photo">
                <div class="offer_leisure offer_img"></div>
                <p># 수상레저</p>
                <div class="add_box p_ab hide">
                    <strong># 수상레저</strong>
                    <p>물위에서 즐기는 수상 레포츠</p>
                    <div>더보기</div>
                </div>
            </li>
            <li class="p_rel photo">
                <div class="offer_argo offer_img"></div>
                <p># 수륙양용 아르고</p>
                <div class="add_box p_ab hide">
                    <strong># 수륙양용 아르고</strong>
                    <p>물살을 가를때 느끼는 짜릿함</p>
                    <div>더보기</div>
                </div>
            </li>
        </ul>
        <div class="bg_gray"></div>
    </div>
</section>
<section id="package_service">
    <div class="wrapper">
        <div class="sec_title">
            <div>
                <span class="ban_97"></span>
            </div>
            <div>
                <h2 class="m_top_30 poppins_50">PACKAGE SERVICE<span class="hide">강촌레저 할인 패키지 안내</span></h2>
                <p class="m_top_30">강촌 레저만의 특별한 패키지 서비스</p>
            </div>
        </div>
        <nav>
            <ul>
                <li class="nav_select">
                    <div>레저 2가지</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>레저 3가지</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>레저 4가지</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div><span>단체 1박2일패키지</span><span style="display: none">1박2일패키지</span></div>
                    <div class="bottom_bar"></div>
                </li>
            </ul>
        </nav>
        <div class="content_box">
            <ul class="package_2 grid">
                <li class="item a_pac" data-type="2_A">
                    <div class="p_rel">
                        <div class="a_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">A 패키지<span>추천</span></div>
                            <p>ATV + 서바이벌</p>
                        </div>
                        <div>
                            <p><span>50,000</span><span>원</span></p>
                            <p><span>35,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item b_pac" data-type="2_B">
                    <div class="p_rel">
                        <div class="cart_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">B 패키지<span>추천</span></div>
                            <p>ATV + 카트</p>
                        </div>
                        <div>
                            <p><span>40,000</span><span>원</span></p>
                            <p><span>32,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item c_pac" data-type="2_C">
                    <div class="p_rel">
                        <div class="pac_3_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">C 패키지</div>
                            <p>ATV + 수상스키</p>
                        </div>
                        <div>
                            <p><span>50,000</span><span>원</span></p>
                            <p><span>38,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item d_pac" data-type="2_D">
                    <div class="p_rel">
                        <div class="pac_4_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">D 패키지</div>
                            <p>ATV + 웨이크보드</p>
                        </div>
                        <div>
                            <p><span>50,000</span><span>원</span></p>
                            <p><span>38,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item e_pac" data-type="2_E">
                    <div class="p_rel">
                        <div class="pac_5_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">E 패키지</div>
                            <p>ATV + 바나나보트</p>
                        </div>
                        <div>
                            <p><span>45,000</span><span>원</span></p>
                            <p><span>30,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item f_pac" data-type="2_F">
                    <div class="p_rel">
                        <div class="pac_6_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">F 패키지</div>
                            <p>ATV + 더블땅콩보트</p>
                        </div>
                        <div>
                            <p><span>43,000</span><span>원</span></p>
                            <p><span>35,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item g_pac" data-type="2_G">
                    <div class="p_rel">
                        <div class="pac_7_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">G 패키지</div>
                            <p>ATV + 플라이피쉬</p>
                        </div>
                        <div>
                            <p><span>50,000</span><span>원</span></p>
                            <p><span>38,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
            </ul>
            <ul class="package_3 grid hide">
                <li class="item a_pac" data-type="3_A">
                    <div class="p_rel">
                        <div class="a_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">A 패키지<span>추천</span></div>
                            <p>ATV + 서바이벌 + 카트</p>
                        </div>
                        <div>
                            <p><span>65,000</span><span>원</span></p>
                            <p><span>45,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item b_pac" data-type="3_B">
                    <div class="p_rel">
                        <div class="cart_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">B 패키지</div>
                            <p>ATV + 서바이벌 + 수상스키</p>
                        </div>
                        <div>
                            <p><span>75,000</span><span>원</span></p>
                            <p><span>50,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item c_pac" data-type="3_C">
                    <div class="p_rel">
                        <div class="pac_4_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">C 패키지</div>
                            <p>ATV + 서바이벌 + 웨이크보드</p>
                        </div>
                        <div>
                            <p><span>75,000</span><span>원</span></p>
                            <p><span>50,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item d_pac" data-type="3_D">
                    <div class="p_rel">
                        <div class="pac_8_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">D 패키지</div>
                            <p>ATV + 서바이벌 + 바나나보트</p>
                        </div>
                        <div>
                            <p><span>70,000</span><span>원</span></p>
                            <p><span>40,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item e_pac" data-type="3_E">
                    <div class="p_rel">
                        <div class="pac_9_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">E 패키지</div>
                            <p>ATV + 서바이벌 + 더블땅콩보트</p>
                        </div>
                        <div>
                            <p><span>70,000</span><span>원</span></p>
                            <p><span>45,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item f_pac" data-type="3_F">
                    <div class="p_rel">
                        <div class="pac_7_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">F 패키지</div>
                            <p>ATV + 서바이벌 + 플라이피쉬</p>
                        </div>
                        <div>
                            <p><span>75,000</span><span>원</span></p>
                            <p><span>50,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item g_pac" data-type="3_G">
                    <div class="p_rel">
                        <div class="pac_10_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">G 패키지</div>
                            <p>ATV + 카트 + 수상스키</p>
                        </div>
                        <div>
                            <p><span>65,000</span><span>원</span></p>
                            <p><span>50,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item h_pac" data-type="3_H">
                    <div class="p_rel">
                        <div class="pac_11_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">H 패키지</div>
                            <p>ATV + 카트 + 웨이크보드</p>
                        </div>
                        <div>
                            <p><span>65,000</span><span>원</span></p>
                            <p><span>50,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item i_pac" data-type="3_I">
                    <div class="p_rel">
                        <div class="pac_5_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">I 패키지</div>
                            <p>ATV + 카트 + 바나나보트</p>
                        </div>
                        <div>
                            <p><span>65,000</span><span>원</span></p>
                            <p><span>45,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item j_pac" data-type="3_J">
                    <div class="p_rel">
                        <div class="pac_12_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">J 패키지</div>
                            <p>ATV + 카트 + 더블땅콩보트</p>
                        </div>
                        <div>
                            <p><span>60,000</span><span>원</span></p>
                            <p><span>48,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item k_pac" data-type="3_K">
                    <div class="p_rel">
                        <div class="pac_7_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">K 패키지</div>
                            <p>ATV + 카트 + 플라이피쉬</p>
                        </div>
                        <div>
                            <p><span>65,000</span><span>원</span></p>
                            <p><span>48,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
            </ul>
            <ul class="package_4 grid hide">
                <li class="item a_pac" data-type="4_A">
                    <div class="p_rel">
                        <div class="a_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">A 패키지<span>추천</span></div>
                            <p>ATV + 서바이벌<br>+ 카트 + 수상스키</p>
                        </div>
                        <div>
                            <p><span>90,000</span><span>원</span></p>
                            <p><span>65,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item b_pac" data-type="4_B">
                    <div class="p_rel">
                        <div class="cart_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">B 패키지</div>
                            <p>ATV + 서바이벌<br>+ 카트 + 웨이크보드</p>
                        </div>
                        <div>
                            <p><span>90,000</span><span>원</span></p>
                            <p><span>65,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item c_pac" data-type="4_C">
                    <div class="p_rel">
                        <div class="pac_4_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">C 패키지</div>
                            <p>ATV + 서바이벌<br>+ 카트 + 바나나보트</p>
                        </div>
                        <div>
                            <p><span>85,000</span><span>원</span></p>
                            <p><span>55,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item d_pac" data-type="4_D">
                    <div class="p_rel">
                        <div class="pac_8_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">D 패키지</div>
                            <p>ATV + 서바이벌<br>+ 카트 + 더블땅콩보트</p>
                        </div>
                        <div>
                            <p><span>85,000</span><span>원</span></p>
                            <p><span>60,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
                <li class="item e_pac" data-type="4_E">
                    <div class="p_rel">
                        <div class="pac_9_img"></div>
                    </div>
                    <div class="package_content">
                        <div>
                            <div class="package_title">E 패키지</div>
                            <p>ATV + 서바이벌<br>+ 카트 + 플라이피쉬</p>
                        </div>
                        <div>
                            <p><span>90,000</span><span>원</span></p>
                            <p><span>65,000</span><span>원</span></p>
                        </div>
                        <div class="reservation_button">예약하기</div>
                    </div>
                </li>
            </ul>
            <div class="group_package hide">
                <div class="group_title">
                    <div>패키지 구분</div>
                    <div>주중요금</div>
                    <div>주말요금</div>
                </div>
                <div class="group_content">
                    <div class="a_type">
                        <div>
                            <p>1박 2일 패키지 A타입</p>
                            <p>숙박&레저 1가지 (ATV, 서바이벌, 래프팅, 카트 중 택 1)</p>
                        </div>
                        <div>35,000원</div>
                        <div>45,000원</div>
                    </div>
                    <div class="b_type">
                        <div>
                            <p>1박 2일 패키지 B타입</p>
                            <p>숙박&레저 2가지 (ATV, 서바이벌, 래프팅, 카트 중 택 1)</p>
                        </div>
                        <div>50,000원</div>
                        <div>55,000원</div>
                    </div>
                    <div class="c_type">
                        <div>
                            <p>1박 2일 패키지 C타입</p>
                            <p>숙박&레저 3가지 (ATV, 서바이벌, 래프팅, 카트 중 택 1)</p>
                        </div>
                        <div>65,000원</div>
                        <div>70,000원</div>
                    </div>
                    <div>*단체 패키지의 경우 10인 이상 신청 가능하며, 상기 요금은 1인당 요금입니다.</div>
                </div>
                <div class="group_service">
                    <ul class="grid">
                        <li class="babeQ">
                            <div>바베큐 세트</div>
                            <p>돼지목살 200g, 숯불닭갈비 200g,</p>
                            <p>밑반찬 4~5가지, 된장찌개, 공깃밥</p>
                            <p><span>25,000</span><span>원</span></p>
                        </li>
                        <li class="breakfast">
                            <div>조식</div>
                            <p>황태 해장국, 밑반찬 3~5가지</p>
                            <p><span>6,000</span><span>원</span></p>
                        </li>
                        <li class="beer">
                            <div>주류</div>
                            <p>바비큐 세트 주문 시 추가 주문 가능하며,</p>
                            <p>소주와 맥주가 무제한 제공됩니다.</p>
                            <p><span>5,000</span><span>원</span></p>
                        </li>
                    </ul>
                    <div>*패키지 외 별도 추가사항이며, 상기 요금은 1인당 요금입니다.</div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="tour">
    <div class="wrapper">
        <div class="sec_title">
            <div>
                <span class="ban_97"></span>
            </div>
            <div>
                <h2 class="m_top_30 poppins_50">TOUR<span class="hide">강촌 주변 추천 관광지 안내</span></h2>
                <p class="m_top_30">강촌레저가 추천하는 주변 관광지!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li class="nav_select">
                    <div>구곡폭포</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>엘리시안강촌</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>제이드가든</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>남이섬</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>청평사</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>소양댐</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>등선폭포</div>
                    <div class="bottom_bar"></div>
                </li>
            </ul>
        </nav>
        <div class="content_box m_top_30 p_rel">
            <ul>
                <li class="item grid p_rel li_gugoc">
                    <div class="img_box">
                        <div class="gugoc"></div>
                    </div>
                    <div>
                        <strong>구곡폭포</strong>
                        <p>아홉 굽이를 돌아서 떨어지는 구곡폭포</p>
                        <p>
                            강원도 춘천시 남산면 강론리에 위치한 높이 50m의 폭포다.
                            <br><br>
                            물줄기가 아홉구비 돌아 떨어진다는 뜻으로 해발 486m 봉화산 계곡에 있는데 규모는 작으나 계곡과 수목이
                            잘조화되어 경관이 매우 아름답다.
                            <br><br>
                            구구리폭포라고도 불리는데, 아홉구비 굽이 돌아 나타나는
                            거대한 바위벽을 타고 떨어지는선녀의 날개옷처럼 하늘 거리는 시원한 물줄기가 봉화산 근처에서 다시
                            아홉 굽이를 돌아서 떨어지는 폭포라 하여 붙여진 이름의 조화로운 물소리가 아름답고 단아한 폭포이다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 남산면 강촌 1리</address> <a href="https://map.naver.com/v5/entry/place/11491586?c=14204943.8753033,4550591.2929726,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_elysian">
                    <div class="img_box">
                        <div class="elysian"></div>
                    </div>
                    <div>
                        <strong>엘리시안 강촌</strong>
                        <p>온가족이 함께할 수 있는 공간</p>
                        <p>
                            GS건설(주)이 건설·운영하는 종합 레저단지이다.
                            <br><br>
                            1997년 4월1일 골프장으로 문을 연뒤, 2002년 7월 콘도미니엄을 개장하고, 같은 해 12월 스키장을 개장하였다.
                            서울에서 자동차로 40분 거리에 있으며, 인근에 경춘선 철도가 지나 교통이 편리하다.
                            <br><br>
                            제일먼저문을연 골프장은 산악지역의 자연 특성을 최대한 살려 설계하였고, 슬로프는 길이가 모두 1,000m
                            가 넘고 초급자, 중급자, 상급자 별로 실력에 따라 다양하게선택할 수 있다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 남삼면 백양리</address> <a href="https://map.naver.com/v5/entry/place/11555876?c=14202796.4725399,4554317.5981015,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_jden">
                    <div class="img_box">
                        <div class="jden"></div>
                    </div>
                    <div>
                        <strong>제이든가든</strong>
                        <p>내 생에 처음 만나는 숲속의 작은 유럽</p>
                        <p>
                            제이드가든 (Jade Garden)은 웃고, 이야기하고, 추억을 만들기 위해 만들어진 숲 속 정웝입니다.
                            <br><br>
                            1만가지 병을 고친다는 만병초처럼 1만가지 표정을 간직한 만병초원에는
                            새소리와 물소리가 어우러지고, 웨딩가든에서는 초원을 배경으로 프로포즈 하는 젊은 이들의
                            사랑 노래가 울려퍼집니다.
                            <br><br>
                            어릴적 즐겨 읽고 보던 신데렐라, 백설공주, 스머프의 배경인 유럽의 숲 속은 우리에게 동심의 향기를 기억하게
                            하는 곳입니다. 숲 속을 거닐지만 동화 속에 있는 듯한 감성의정원 제이드 가든에서 느리게 걷기의
                            새로운 의미를 경험해 보세요.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원 춘천시 남산면 햇골길 80 제이드가든수목원</address> <a href="https://map.naver.com/v5/entry/place/19928010?c=14197570.0907309,4555456.9875544,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_namisum">
                    <div class="img_box">
                        <div class="namisum"></div>
                    </div>
                    <div>
                        <strong>남이섬</strong>
                        <p>북한강 위에 떠 있는 나무들의 나라</p>
                        <p>
                            북한강 위에 반달 모양으로 떠 있는 남이섬은 1944년 청평댐이 만들어지면서 생겨난 섬으로
                            배를 타고 들어가야 한다. 1970년대와 80년대 강변가요제가 열렸고 TV드라마 “겨울연가” 의 촬영지로
                            내국인에게 너무나도 잘 알려진 이 섬은 조선 세조 때 병조판서를 지내다 역적으로 물려 요절한 남이 장군의
                            묘가 있어  남이섬이라고 불리게 되었다.
                            <br><br>
                            이미 고인이 된 수재 민병도 선생이 1965년 모래뿐인 불모지 남이섬을 매입해 나무를 심기 시작한 것이
                            관광지로서의 남이섬이 시작된 출발점으로, 남이섬은 나무들이 만들어 준 천국이라 해도 과언이 아닐 만큼
                            아름다운 숲길이 섬 전체를 매우고 있다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 방하리 198</address> <a href="https://map.naver.com/v5/entry/place/11491866?c=14195594.6712811,4551790.3988538,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_temple">
                    <div class="img_box">
                        <div class="temple"></div>
                    </div>
                    <div>
                        <strong>청평사</strong>
                        <p>오랜역사를 지닌 댐 속의 절</p>
                        <p>
                            973(광종 24)승헌이 창건하고 백암선원이라 하였으나, 그 뒤 폐사 되었다.
                            <br><br>
                            1068년(문종 2) 이의가 중건, 보헌원이라 하였다. 이의의 아들 자현이 이곳으로 내려와 은거하자 오봉산에
                            도적이 없어지고 호랑이와 이리가 없어졌다고 하여 산 이름을 청평이라 하고 사찰 이름을 문수원으로 하고
                            증창하였다.
                            <br><br>
                            1550년(명종 5) 보우가 청평사로 개칭하였다. 6.25 전쟁으로 구광전과 사성전등은
                            소실되고, 현재 보물 제 164호인 청평사 회전문과 극락보전 등이 있다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 북산면 청평리 오봉산</address> <a href="https://map.naver.com/v5/entry/place/13343438?c=14227034.1764777,4577535.3454431,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_soyang">
                    <div class="img_box">
                        <div class="soyang"></div>
                    </div>
                    <div>
                        <strong>소양댐</strong>
                        <p>북한강 유역의 유일한 다목적 댐</p>
                        <p>
                            소양댐은 강원도 춘천시 신북읍과 동면의 소양강에 위차한, 북한강 유역의 유일한 다목적 댐이다.
                            <br><br>
                            1967년 4월15일 착공되어 1973년 10월 15일 완공되었다.
                            흙과 돌로 만들어진 사력댐으로, 댐의 길이는 530m, 높이는 123m 달한다.
                            <br><br>
                            대한민국에서 가장 큰 사력식댐으로, 저수량이 29톤에 달하는 인공 호수인 소양호가 위치해 있다.
                            다목적 댐 그리고 호수 전체를 한 바퀴도는 유람선과 청평사로 가는 유람선이 운행되고 있다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 신복읍과 동면의 소양강</address> <a href="https://map.naver.com/v5/entry/place/19903261?c=14227151.3419998,4571971.9839360,13,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
                <li class="item grid p_rel hide li_deungsun">
                    <div class="img_box">
                        <div class="deungsun"></div>
                    </div>
                    <div>
                        <strong>등선폭포</strong>
                        <p>절벽과 기암되석이 만들어낸 아름다운 절경</p>
                        <p>
                            강촌역 부근에 있는 삼악산(654m)의 대표적인 폭포이다.
                            <br><br>
                            삼악산에는 절벽과 기암괴석 사이로 크고 작은폭포가 연이어 있는데 그 가운데 삼악산 입구 협곡 속에 있는
                            높이10m의 폭포이다.
                            <br><br>
                            선녀와 나무꾼 전설이 전하는 선녀탕과 절벽이 어우러져 절경을 이루며, 춘천에서 남서쪽으로 10km떨어진곳에
                            있어 수도권의 주말여행이나 하루 관광코스로 적당하다.주변에 의암호, 강촌유원지, 소양강, 청평사, 구곡폭포,
                            봉화산 등 관광명소가 많다.
                        </p>
                        <div>
                            <span class="location bg_icon"></span><span>위치</span><address class="normal_s">강원도 춘천시 서면 덕두원3리</address> <a href="https://map.naver.com/v5/entry/place/13491645?c=14210378.0702829,4555222.8991552,15,0,0,0,dh" target="_blank">지도 보기</a>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="left_arrow p_ab"><span class="bg_icon"></span></div>
            <div class="right_arrow p_ab"><span class="bg_icon"></span></div>
        </div>
    </div>
</section>
<section id="gallery">
    <div class="wrapper bg_gray">
        <div class="sec_title">
            <div>
                <span class="ban_97"></span>
            </div>
            <div>
                <h2 class="m_top_30 poppins_50">GALLERY</h2>
                <p class="m_top_30">강촌 레저로 떠나는 스릴 있는 휴가</p>
            </div>
        </div>
        <div class="content_box m_top_60 p_rel swiper-container" id="g_slider">
            <ul class="gallery_slider p_rel swiper-wrapper">
                <?php foreach($gallery as $key => $val):?>
                <li class="item num_<?php echo $key?> swiper-slide">
                    <div class="black_screen">
                        <img src="<?php echo $val?>">
                    </div>
                </li>
                <?php endforeach; ?>
            </ul>
<!--            <div class="btn_box p_ab">-->
                <div class="prev_btn bg_icon swiper-button-next" data-btn="0"></div>
                <div class="next_btn bg_icon swiper-button-prev" data-btn="1"></div>
<!--            </div>-->
        </div>
    </div>
</section>
<section id="notice">
    <div class="wrapper">
        <div class="sec_title">
            <div>
                <span class="ban_97"></span>
            </div>
            <div>
                <h2 class="m_top_30 poppins_50">NOTICE</h2>
                <p class="m_top_30">강촌 레저의 새로운 소식을 가장 먼저 알려드립니다.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li class="nav_select">
                    <div>공지사항</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>문의하기</div>
                    <div class="bottom_bar"></div>
                </li>
                <li>
                    <div>예약확인</div>
                    <div class="bottom_bar"></div>
                </li>
            </ul>
        </nav>
        <div class="content_box">
            <div class="search_box">
                <from id="search_notice" action="" method="post">
                    <dl>
                        <dd>
                            <select id="search_type">
                                <option value="0">제목</option>
                                <option value="1">글쓴이</option>
                            </select>
                        </dd>
                        <dd>
                            <input type="text" name="search_text" id="search_text">
                        </dd>
                        <dd>
                            <button id="search_submit" type="submit">검색</button>
                        </dd>
                    </dl>
                </from>
            </div>
            <div class="content_container notice">
                <div class="notice content_title bg_gray">
                    <div>번호</div>
                    <div>제목</div>
                    <div>글쓴이</div>
                    <div>작성일</div>
                    <div>조회수</div>
                </div>
                <ul class="js_notice">
<!--                    <li class="list list_num_15">-->
<!--                        <div>15</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div>5,786</div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_14">-->
<!--                        <div>14</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div>5,786</div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_13">-->
<!--                        <div>13</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div>5,786</div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_12">-->
<!--                        <div>12</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div>5,786</div>-->
<!--                    </li>-->
                </ul>
            </div>
            <div class="content_container inquiry hide">
                <div><div class="write_button">글쓰기</div></div>
                <div class="inquiry content_title bg_gray">
                    <div>번호</div>
                    <div>제목</div>
                    <div>글쓴이</div>
                    <div>작성일</div>
                </div>
                <ul class="js_inquiry">
<!--                    <li data-idx="15" class="list list_num_15">-->
<!--                        <div>15</div>-->
<!--                        <div>오늘 비온다는데 예약이 가능할까요?</div>-->
<!--                        <div>연예인</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                    </li>-->
<!--                    <li data-idx="15" class="list_num_15 answer">-->
<!--                        <div></div>-->
<!--                        <div>-->
<!--                            <div class="chain"></div><div class="lock"></div><div class="comment">고객님 답변합니다.</div>-->
<!--                        </div>-->
<!--                        <div>관리자</div>-->
<!--                        <div style="opacity: 0;">2020-09-02</div>-->
<!--                    </li>-->
<!--                    <li data-idx="14" class="list list_num_14">-->
<!--                        <div>14</div>-->
<!--                        <div>수온이 수상스키를 즐길수 있는 온도인가요?</div>-->
<!--                        <div>브라덜</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                    </li>-->
<!--                    <li data-idx="14" class="list_num_14 answer">-->
<!--                        <div></div>-->
<!--                        <div>-->
<!--                            <div class="chain"></div><div class="lock"></div><div class="comment">고객님 답변합니다.</div>-->
<!--                        </div>-->
<!--                        <div>관리자</div>-->
<!--                        <div style="opacity: 0;">2020-09-02</div>-->
<!--                    </li>-->
<!--                    <li data-idx="13" class="list list_num_13">-->
<!--                        <div>13</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                    </li>-->
<!--                    <li data-idx="12" class="list list_num_12">-->
<!--                        <div>12</div>-->
<!--                        <div>우천시 수성레저 이용안내</div>-->
<!--                        <div>관리자</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                    </li>-->
                </ul>
            </div>
            <div class="content_container reservation hide">
                <div class="reservation content_title bg_gray">
                    <div>번호</div>
                    <div>글쓴이</div>
                    <div>예약일</div>
                    <div>렌탈종류</div>
                    <div>작성일</div>
                    <div>예약상태</div>
                </div>
                <ul class="js_reservation">
<!--                    <li class="list list_num_15">-->
<!--                        <div>15</div>-->
<!--                        <div>유소라</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div>1월 18일 2인 4시간 장비 의류 렌탈</div>-->
<!--                        <div>2020.09.01</div>-->
<!--                        <div><div class="wating">대기</div></div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_14">-->
<!--                        <div>14</div>-->
<!--                        <div>유소민</div>-->
<!--                        <div>2020.08.20</div>-->
<!--                        <div>6시간 / 보드 2명 / 의류 2명 / 리프트 2명</div>-->
<!--                        <div>2020.08.11</div>-->
<!--                        <div><div class="wating">대기</div></div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_13">-->
<!--                        <div>13</div>-->
<!--                        <div>강남인</div>-->
<!--                        <div>2020.08.15</div>-->
<!--                        <div>3시간 / 보드 4명 / 의류 2명 / 리프트 2명</div>-->
<!--                        <div>2020.08.09</div>-->
<!--                        <div><div class="wating">대기</div></div>-->
<!--                    </li>-->
<!--                    <li class="list list_num_12">-->
<!--                        <div>12</div>-->
<!--                        <div>박력</div>-->
<!--                        <div>2020.07.29</div>-->
<!--                        <div>3시간 / 보드 4명 / 의류 2명 / 리프트 2명</div>-->
<!--                        <div>2020.07.27</div>-->
<!--                        <div><div class="complete">예약완료</div></div>-->
<!--                    </li>-->
                </ul>
            </div>
        </div>
        <div class="root_community_pager"></div>
    </div>
</section>
<section id="info">
    <div class="wrapper">
        <div>
            <div>
                <h2 class="m_top_30 poppins_50">Call Now 010 4858 0255<span class="hide">문의 전화 안내</span></h2>
                <address class="m_top_30 normal_s">강원도 춘천시 남산면 방곡리 385번지 강촌 레저</address>
            </div>
            <div class="to_more m_top_60">더보기</div>
            <div class="call"><a href="tel:01048580255">전화하기</a></div>
        </div>
    </div>
    <div class="map bg_icon"></div>
</section>
<footer>
    <div class="wrapper">
        <div>
            <span class="footer_logo bg_icon"></span>
            <address class="normal_s">
                <div>
                    <span>강원도 춘천시 남산면 방곡리 385번지 강촌레저</span>
                    <span><u class="normal_s">사업자등록번호</u> 221-12-46800</span>
                    <span><u class="normal_s">대표</u> 김인수</span>
                    <span><u class="normal_s">TEL</u> <a href="tel:01048580255">010-4858-0255</a></span>
                </div>
                <div>
                    Copyrights ⓒ 2012 www.gangchonleisure.com All Rights Reserved.
                </div>
            </address>
        </div>
    </div>
</footer>
<div id="top_button" class="bg_icon"></div>

<div id="popup_view" class="hide"></div>
<div class="visit_map hide" id="map" style="width:100%; height:100%;"></div>
<div id="php_json" style="display:none"><?php echo $communityList ?></div>
<div id="js-click-community-btn" style="display: none"></div>
<div id="js-confirm-password-btn" style="display: none"></div>
<div id="js-popup-submit-btn" style="display: none"></div>
