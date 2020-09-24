
<header>
    <div class="wrapper flex">
        <a class="logo flex" href="/" title="강촌레저"><span class="icon"></span>강촌레저</a>
        <button class="nav hide"></button>
        <button class="nav_close hide"></button>
        <nav>
            <ul class="flex">
                <li><a href="#leisure" data-id="leisure">레저안내</a></li>
                <li><a href="#package" data-id="package">패키지안내</a></li>
                <li><a href="#gallery" data-id="gallery">포토갤러리</a></li>
                <li><a href="#bbs" data-id="bbs">예약및문의</a></li>
                <li><a href="#info" data-id="info">위치안내</a></li>
            </ul>
        </nav>
    </div>
</header>
<section id="cover">
    <div class="wrapper flex relative">
        <div>
            <p>WIND, WATER, LIFESTYLE.</p>
            <h1>EXCITING SUMMER</h1>
        </div>
        <div id="weather">
            <h2>WEATHER</h2>
            <div class="flex">
                <span class="icon"></span>
                <span class="temperature">--</span>
            </div>
            <ul>
<!--                <li><strong>구름많음, 어제보다 2˚높음</strong></li>-->
<!--                <li><span class="blue">20˚</span>/<span class="red">32˚</span><span class="split"></span>체감온도-->
<!--                    <b>24.8˚</b></li>-->
<!--                <li>시간당 강수량 <b class="blue">0mm</b></li>-->
<!--                <li>자외선 <b class="red">매우높음</b></li>-->
<!--                <li>미세먼지 <b class="green">26㎍/㎥ 보통</b></li>-->
                <li><strong>-</strong></li>
                <li><span class="blue">-</span>/<span class="red">-</span><span class="split">
                    </span>체감온도
                    <b>-</b></li>
                <li>시간당 강수량 <b class="blue">0mm</b></li>
                <li>자외선 <b class="red">-</b></li>
                <li>미세먼지 <b class="green">-</b></li>
            </ul>
        </div>
    </div>
</section>
<section id="reservation">
    <div class="wrapper">
        <form id="reservationSelectForm">
            <ul>
                <li class="selectbox relative">
                    <input type="text" name="package" value="" placeholder="패키지" id="reservationSelectbox"
                           readonly />
                    <div class="arrowbox"><span class="icon arrow"></span></div>
                    <div class="selectLayer" id="reservationSelectLayer">
                        <div class="wrapper">
                            <h2>PACKAGE SERVICE</h2>
                            <p>강촌 레저만의 특별한 패키지 서비스</p>
                            <ul>
                                <li>
                                    <dl data-main="레저1">
                                        <dt>레저 단독 패키지</dt>
                                        <dd>ATV</dd>
                                        <dd>래프팅</dd>
                                        <dd>카누,카약</dd>
                                        <dd>서바이벌</dd>
                                        <dd>카트</dd>
                                        <dd>수상레져</dd>
                                        <dd>수륙양용 아르고</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl data-main="레저2">
                                        <dt>레저 2 패키지</dt>
                                        <dd data-title="ATV + 서바이벌">A 패키지</dd>
                                        <dd data-title="ATV + 카트">B 패키지</dd>
                                        <dd data-title="ATV + 수상스키">C 패키지</dd>
                                        <dd data-title="ATV + 웨이크보드">D 패키지</dd>
                                        <dd data-title="ATV + 바나나보트">E 패키지</dd>
                                        <dd data-title="ATV + 더블땅콩보트">F 패키지</dd>
                                        <dd data-title="ATV + 플라이피쉬">G 패키지</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl data-main="레저3">
                                        <dt>레저 3 패키지</dt>
                                        <dd data-title="ATV + 서바이벌 + 카트">A 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 수상스키">B 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 웨이크보드">C 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 바나나보트">D 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 더블땅콩보트">E 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 플라이피쉬">F 패키지</dd>
                                        <dd data-title="ATV + 카트 + 수상스키">G 패키지</dd>
                                        <dd data-title="ATV + 카트 + 웨이크보트">H 패키지</dd>
                                        <dd data-title="ATV + 카트 + 바나나보트">I 패키지</dd>
                                        <dd data-title="ATV + 카트 + 더블땅콩보트">J 패키지</dd>
                                        <dd data-title="ATV + 카트 + 플라이피쉬">K 패키지</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl data-main="레저4">
                                        <dt>레저 4 패키지</dt>
                                        <dd data-title="ATV + 서바이벌 + 카트 + 수상스키">A 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 카트 + 웨이크보드">B 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 카트 + 바나나보트">C 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 카트 + 더블땅콩보트">D 패키지</dd>
                                        <dd data-title="ATV + 서바이벌 + 카트 + 플라이피쉬">E 패키지</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl data-main="단체">
                                        <dt>단체 1박2일패키지</dt>
                                        <dd data-title="숙박&레저 1가지">A 패키지</dd>
                                        <dd data-title="숙박&레저 2가지">B 패키지</dd>
                                        <dd data-title="숙박&레저 3가지">C 패키지</dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><input type="text" name="name" value="" placeholder="이름"></input></li>
                <li><input type="text" name="phone" value="" placeholder="연락처" data-type="phoneNumber"></input></li>
                <li><button type="submit" title="예약하기">예약하기</button></li>
                <li class="text"><a href="tel:01048580255"><span>지금바로 예약
                                상담!</span><strong>010-4858-0255</strong></a>
                </li>
            </ul>
        </form>
    </div>
</section>
<section id="leisure" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>LEISURE SERVICE</h2>
        <p class="p2">강촌 레저로 떠나는 스릴있는 휴가</p>
        <ul>
            <li class="sp2">
                <div class="imagebox">
                    <div class="overimg img1"><span>족구장</span></div>
                </div>
                <p>강촌 레저 이용 시</p>
                <strong>FREE</strong>
            </li>
            <li class="sp2">
                <div class="imagebox">
                    <div class="overimg img2"><span>미니축구장</span></div>
                </div>
                <p>강촌 레저 이용 시</p>
                <strong>FREE</strong>
            </li>
            <li class="sp2">
                <div class="imagebox">
                    <div class="overimg img3"><span>농구장</span></div>
                </div>
                <p>강촌 레저 이용 시</p>
                <strong>FREE</strong>
            </li>
            <li class="sp1">
                <div class="flex">
                    <span class="icon"></span>
                </div>
            </li>
            <li class="sp3">
                <div class="imagebox">
                    <div class="overimg img4"><span>단체바베큐</span></div>
                </div>
                <p>
                    돼지목살 200g, 닭갈비 200g<br>
                    밑반찬 4~5가지, 공깃밥, 된장찌개<br>
                    <b>소주&맥주 추가 시 (무한대) 1인 5,000원 추가</b>
                </p>
                <strong class="red">1인 20,000원</strong>
            </li>
        </ul>
    </div>
</section>
<section id="service" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>OFFER SERVICE</h2>
        <p class="p2">강촌 레저에서 제공하는 서비스로 스릴을 즐기세요</p>
        <ul>
            <li class="sp2" data-type="serviceP01">
                <div class="bgimg service_01">
                    <strong>
                        <h3># ATV(사륜바이크)</h3>
                        <p>작은 몸체에 4개의 큼직한 바퀴가 매력인 ATV</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP02">
                <div class="bgimg service_02">
                    <strong>
                        <h3># 레프팅</h3>
                        <p>시원한 물살을가르며 즐기는 레프팅</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP03">
                <div class="bgimg service_03">
                    <strong>
                        <h3># 카누,카약</h3>
                        <p>강물을 벗삼아 노를 젓는다</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP04">
                <div class="bgimg service_04">
                    <strong>
                        <h3># 서바이벌게임</h3>
                        <p>인간의 광적인 전쟁본능을 순화시킨다</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP05">
                <div class="bgimg service_05">
                    <strong>
                        <h3># 카트</h3>
                        <p>스릴과 스피드가 함께하는 엄청난 체감속도</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp2" data-type="serviceP06">
                <div class="bgimg service_06">
                    <strong>
                        <h3># 수상레저</h3>
                        <p>물위에서 즐기는 수상 레포츠</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP07">
                <div class="bgimg service_07">
                    <strong>
                        <h3># 수륙양용 아르고</h3>
                        <p>물살를 가를때 느끼는 짜릿함</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
            <li class="sp1" data-type="serviceP08">
                <div class="bgimg service_08">
                    <strong>
                        <h3># 스쿠터</h3>
                        <p>사랑하는 연인과 함께하는 드라이브</p>
                        <button>더보기</button>
                    </strong>
                </div>
            </li>
        </ul>
    </div>
</section>
<section id="package" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>PACKAGE SERVICE</h2>
        <p class="p2">강촌 레저만의 특별한 패키지 서비스</p>
        <ul class="tab">
            <li class="sp3"></li>
            <li class="sp2 active on"><span>레저2가지</span></li>
            <li class="sp2 active"><span>레저3가지</span></li>
            <li class="sp2 active"><span>레저4가지</span></li>
            <li class="sp2 active"><span>단체 1박2일</span></li>
            <li class="sp3"></li>
        </ul>
        <div class="listbox" id="packageList">
            <div class="listitem">
                <ul data-type="레저2">
                    <li>
                        <div class="card">
                            <div class="image pkg0101">
                                <h3>A패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌<label class="tag">추천</label></p>
                                <div class="price flex">
                                    <span>50,000원</span>
                                    <strong>35,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0102">
                                <h3>B패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트<label class="tag">추천</label></p>
                                <div class="price flex">
                                    <span>40,000원</span>
                                    <strong>32,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0103">
                                <h3>C패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+수상스키</p>
                                <div class="price flex">
                                    <span>55,000원</span>
                                    <strong>38,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0104">
                                <h3>D패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+웨이크보드</p>
                                <div class="price flex">
                                    <span>50,000원</span>
                                    <strong>38,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0105">
                                <h3>E패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+바나나보트</p>
                                <div class="price flex">
                                    <span>45,000원</span>
                                    <strong>30,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0106">
                                <h3>F패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+더블땅콩보트</p>
                                <div class="price flex">
                                    <span>43,000원</span>
                                    <strong>35,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0107">
                                <h3>G패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+플라이피쉬</p>
                                <div class="price flex">
                                    <span>50,000원</span>
                                    <strong>38,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="listitem">
                <ul data-type="레저3">
                    <li>
                        <div class="card">
                            <div class="image pkg0101">
                                <h3>A패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트<label class="tag">추천</label></p>
                                <div class="price flex">
                                    <span>65,000원</span>
                                    <strong>45,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0202">
                                <h3>B패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+수상스키<label class="tag">추천</label></p>
                                <div class="price flex">
                                        <span>75,000원</span>
                                        <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0203">
                                <h3>C패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+웨이크보드</p>
                                <div class="price flex">
                                    <span>75,000원</span>
                                    <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0204">
                                <h3>D패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+바나나보트</p>
                                <div class="price flex">
                                    <span>70,000원</span>
                                    <strong>40,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0205">
                                <h3>E패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+더블땅콩보트</p>
                                <div class="price flex">
                                    <span>70,000원</span>
                                    <strong>45,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0206">
                                <h3>F패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+플라이피쉬</p>
                                <div class="price flex">
                                    <span>75,000원</span>
                                    <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0207">
                                <h3>G패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트+수상스키</p>
                                <div class="price flex">
                                    <span>65,000원</span>
                                    <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0208">
                                <h3>H패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트+웨이크보드</p>
                                <div class="price flex">
                                    <span>65,000원</span>
                                    <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0209">
                                <h3>I패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트+바나나보트</p>
                                <div class="price flex">
                                    <span>65,000원</span>
                                    <strong>45,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0210">
                                <h3>J패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트+더블땅콩보트</p>
                                <div class="price flex">
                                    <span>60,000원</span>
                                    <strong>48,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0211">
                                <h3>K패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+카트+플라이피쉬</p>
                                <div class="price flex">
                                    <span>65,000원</span>
                                    <strong>48,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="listitem">
                <ul data-type="레저4">
                    <li>
                        <div class="card">
                            <div class="image pkg0301">
                                <h3>A패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트+수상스키<label class="tag">추천</label></p>
                                <div class="price flex">
                                    <span>90,000원</span>
                                    <strong>65,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0302">
                                <h3>B패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트+웨이크보드</p>
                                <div class="price flex">
                                    <span>90,000원</span>
                                    <strong>65,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0303">
                                <h3>C패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트+바나나보트</p>
                                <div class="price flex">
                                    <span>85,000원</span>
                                    <strong>55,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0304">
                                <h3>D패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트+더블땅콩보트</p>
                                <div class="price flex">
                                    <span>85,000원</span>
                                    <strong>60,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0305">
                                <h3>E패키지</h3>
                            </div>
                            <div class="description">
                                <p>ATV+서바이벌+카트+플라이피쉬</p>
                                <div class="price flex">
                                    <span>90,000원</span>
                                    <strong>65,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="listitem">
                <ul data-type="단체">
                    <li>
                        <div class="card">
                            <div class="image pkg0401">
                                <h3>A패키지</h3>
                            </div>
                            <div class="description">
                                <p>숙박+레저1가지</p>
                                <div class="price flex">
                                    <span>40,000원</span>
                                    <strong>32,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0402">
                                <h3>B패키지</h3>
                            </div>
                            <div class="description">
                                <p>숙박+레저2가지</p>
                                <div class="price flex">
                                    <span>68,000원</span>
                                    <strong>50,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0403">
                                <h3>C패키지</h3>
                            </div>
                            <div class="description">
                                <p>숙박+레저3가지</p>
                                <div class="price flex">
                                    <span>85,000원</span>
                                    <strong>62,000원</strong>
                                </div>
                            </div>
                            <button>예약하기</button>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0404">
                                <h3>부가서비스</h3>
                            </div>
                            <div class="description add">
                                <p>바베큐세트<label class="tag blue">추가</label></p>
                                <div class="add">돼지목살 200g, 숯불닭갈비 200g, 밑반찬 4~5가지, 된장찌개, 공깃밥</div>
                                <div class="price flex">
                                    <span>15,000원</span>
                                    <strong>10,000원</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0405">
                                <h3>부가서비스</h3>
                            </div>
                            <div class="description add">
                                <p>조식<label class="tag blue">추가</label></p>
                                <div class="add">황태 해장국, 밑반찬 3~5가지</div>
                                <div class="price flex">
                                    <span>10,000원</span>
                                    <strong>8,000원</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card">
                            <div class="image pkg0406">
                                <h3>부가서비스</h3>
                            </div>
                            <div class="description add">
                                <p>무한리필 주류<label class="tag blue">추가</label></p>
                                <div class="add">바비큐 세트 주문 시 추가 주문 가능하며, 소주와 맥주가 무제한 제공됩니다.</div>
                                <div class="price flex">
                                    <strong>10,000원</strong>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</section>
<section id="tour" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>TOUR</h2>
        <p class="p2">강촌레저가 추천하는 주변 관광지!</p>
        <ul class="tab">
            <li class="sp2 active on"><span>구곡폭포</span></li>
            <li class="sp2 active"><span>엘리시안강촌</span></li>
            <li class="sp2 active"><span>제이드가든</span></li>
            <li class="sp2 active"><span>남이섬</span></li>
            <li class="sp2 active"><span>청평사</span></li>
            <li class="sp2 active"><span>소양댐</span></li>
            <li class="sp2 active"><span>등선폭포</span></li>
        </ul>
        <div class="relative">
            <div class="tour-swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" data-index="0">
                        <div class="slideContent">
                            <div class="imgbox i01"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>구곡폭포</h3>
                                <p>아홉 굽이를 돌아서 떨어지는 아름다운 폭포</p>
                                <div class="text">
                                    강원도 춘천시 남산면 강촌리에 위치한 높이 50m의 폭포다.
                                    물줄기가 아홉구비 돌아 떨어진다는 뜻으로 해발 486m 봉화산 계곡에 있는데 규모는 작으나 계곡과 수목이 잘조화되어 경관이 매우 아름답다.
                                    구구리폭포라고도 불리는데, 아홉구비 굽이 돌아 나타나는 거대한 바위벽을 타고 떨어지는선녀의 날개옷처럼 하늘 거리는 시원한 물줄기가 봉화산
                                    근처에서 다시
                                    아홉
                                    굽이를 돌아서 떨어지는 폭포라 하여 붙여진 이름의 조화로운 물소리가 아름답고 단아한 폭포이다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 남산면 강촌 1리</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/11491586?c=14204943.8753033,4550591.2929726,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="1">
                        <div class="slideContent">
                            <div class="imgbox i02"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>엘리시안 강촌</h3>
                                <p>온가족이 함께할 수 있는 공간</p>
                                <div class="text">
                                    GS건설(주)이 건설·운영하는 종합 레저단지이다. 1997년 4월1일 골프장으로 문을 연뒤, 2002년 7월 콘도미니엄을 개장하고, 같은 해
                                    12월 스키장을 개장하였다. 서울에서 자동차로 40분 거리에 있으며, 인근에 경춘선 철도가 지나 교통이 편리하다.제일먼저문을연 골프장은
                                    산악지역의 자연 특성을 최대한 살려 설계하였고, 슬로프는 길이가 모두 1,000m 가 넘고 초급자, 중급자, 상급자 별로 실력에 따라
                                    다양하게선택할 수 있다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 남삼면 백양리</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/11555876?c=14202796.4725399,4554317.5981015,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="2">
                        <div class="slideContent">
                            <div class="imgbox i03"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>제이든가든</h3>
                                <p>내 생에 처음 만나는 숲속의 작은 유럽</p>
                                <div class="text">
                                    제이드가든 (Jade Garden)은 웃고, 이야기하고, 추억을 만들기 위해 만들어진 숲 속 정웝입니다. 1만가지 병을 고친다는 만병초처럼
                                    1만가지 표정을 간직한 만병초원에는 새소리와 물소리가 어우러지고, 웨딩가든에서는 초원을 배경으로 프로포즈 하는 젊은 이들의 사랑 노래가
                                    울려퍼집니다. 어릴적 즐겨 읽고 보던 신데렐라, 백설공주, 스머프의 배경인 유럽의 숲 속은 우리에게 동심의 향기를 기억하게 하는 곳입니다. 숲
                                    속을 거닐지만 동화 속에 있는 듯한 감성의정원 제이드 가든에서 느리게 걷기의 새로운 의미를 경험해 보세요.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원 춘천시 남산면 햇골길 80 제이드가든수목원</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/19928010?c=14197570.0907309,4555456.9875544,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="3">
                        <div class="slideContent">
                            <div class="imgbox i04"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>남이섬</h3>
                                <p>북한강 위에 떠 있는 나무들의 나라</p>
                                <div class="text">
                                    북한강 위에 반달 모양으로 떠 있는 남이섬은 1944년 청평댐이 만들어지면서 생겨난 섬으로 배를 타고 들어가야 한다. 1970년대와 80년대
                                    강변가요제가 열렸고 TV드라마 “겨울연가” 의 촬영지로 내국인에게 너무나도 잘 알려진 이 섬은 조선 세조 때 병조판서를 지내다 역적으로 물려
                                    요절한 남이 장군의 묘가 있어 남이섬이라고 불리게 되었다. 이미 고인이 된 수재 민병도 선생이 1965년 모래뿐인 불모지 남이섬을 매입해 나무를
                                    심기 시작한 것이 관광지로서의 남이섬이 시작된 출발점으로, 남이섬은 나무들이 만들어 준 천국이라 해도 과언이 아닐 만큼 아름다운 숲길이 섬
                                    전체를 매우고 있다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 방하리 198</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/11491866?c=14195594.6712811,4551790.3988538,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="4">
                        <div class="slideContent">
                            <div class="imgbox i05"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>청평사</h3>
                                <p>오랜역사를 지닌 댐 속의 절</p>
                                <div class="text">
                                    973년(광종 24)승헌이 창건하고 백암선원이라 하였으나, 그 뒤 폐사 되었다. 1068년(문종 2) 이의가 중건, 보헌원이라 하였다. 이의의
                                    아들 자현이 이곳으로 내려와 은거하자 오봉산에 도적이 없어지고 호랑이와 이리가 없어졌다고 하여 산 이름을 청평이라 하고 사찰 이름을 문수원으로
                                    하고 증창하였다. 1550년(명종 5) 보우가 청평사로 개칭하였다. 6.25 전쟁으로 구광전과 사성전등은 소실되고, 현재 보물 제 164호인
                                    청평사 회전문과 극락보전 등이 있다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 북산면 청평리 오봉산</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/13343438?c=14227034.1764777,4577535.3454431,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="5">
                        <div class="slideContent">
                            <div class="imgbox i06"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>소양댐</h3>
                                <p>북한강 유역의 유일한 다목적 댐</p>
                                <div class="text">
                                    소양댐은 강원도 춘천시 신북읍과 동면의 소양강에 위차한, 북한강 유역의 유일한 다목적 댐이다. 1967년 4월15일 착공되어 1973년 10월
                                    15일 완공되었다. 흙과 돌로 만들어진 사력댐으로, 댐의 길이는 530m, 높이는 123m 달한다. 대한민국에서 가장 큰 사력식댐으로, 저수량이
                                    29톤에 달하는 인공 호수인 소양호가 위치해 있다. 다목적 댐 그리고 호수 전체를 한 바퀴도는 유람선과 청평사로 가는 유람선이 운행되고 있다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 신복읍과 동면의 소양강</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/19903261?c=14227151.3419998,4571971.9839360,13,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" data-index="6">
                        <div class="slideContent">
                            <div class="imgbox i07"></div>
                            <div class="split"></div>
                            <div class="description">
                                <h3>등선폭포</h3>
                                <p>절벽과 기암되석이 만들어낸 아름다운 절경</p>
                                <div class="text">
                                    강촌역 부근에 있는 삼악산(654m)의 대표적인 폭포이다. 삼악산에는 절벽과 기암괴석 사이로 크고 작은폭포가 연이어 있는데 그 가운데 삼악산
                                    입구 협곡 속에 있는 높이10m의 폭포이다. 선녀와 나무꾼 전설이 전하는 선녀탕과 절벽이 어우러져 절경을 이루며, 춘천에서 남서쪽으로
                                    10km떨어진곳에 있어 수도권의 주말여행이나 하루 관광코스로 적당하다.주변에 의암호, 강촌유원지, 소양강, 청평사, 구곡폭포, 봉화산 등
                                    관광명소가 많다.
                                </div>
                                <div class="address">
                                    <span class="icon marker"></span>
                                    <strong>위치</strong>
                                    <span class="addr">강원도 춘천시 서면 덕두원3리</span>
                                    <span class="icon link"></span>
                                    <a href="https://map.naver.com/v5/entry/place/13491645?c=14210378.0702829,4555222.8991552,15,0,0,0,dh"
                                       target="_blank" title="네이버 지도보기">지도보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn prev tour-button-next" title="이전보기"></div>
            <div class="btn next tour-button-prev" title="다음보기"></div>
        </div>
    </div>
</section>
<section id="bbs" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>NOTICE</h2>
        <p class="p2">강촌 레저의 새로운 소식을 가장 먼저 알려드립니다</p>
        <ul class="tab">
            <li class="sp2"></li>
            <li class="sp2"></li>
            <li class="sp2 active on"><span>공지사항</span></li>
            <li class="sp2 active"><span>문의하기</span></li>
            <li class="sp2 active"><span>예약확인</span></li>
            <li class="sp2"></li>
            <li class="sp2"></li>
        </ul>
        <div class="listC">
            <div class="searchbox">
                <form id="bbsSearchForm" class="bbsSearchForm">
                    <ul>
                        <li class="sp1"><button type="button" class="setPassword" data-idx="123"
                                                data-type="modify">비밀번호테스트</button></li>
                        <li class="sp1 selectbox relative">
                            <input type="hidden" name="type" value="subject">
                            <input type="text" value="제목" id="bbsSelectbox" class="js-bbsSelectbox" readonly>
                            <div class="arrowbox"><span class="icon arrow"></span></div>
                            <div class="selectLayer js-bbsSelectLayer" id="bbsSelectLayer">
                                <dl>
                                    <dt>검색조건선택</dt>
                                    <dd data-type="title">제목</dd>
                                    <dd data-type="name">글쓴이</dd>
                                </dl>
                            </div>
                        </li>
                        <li class="sp2"><input type="text" name="keyword" value="" placeholder="검색어를 입력해주세요."></li>
                        <li class="sp1"><button type="submit" class="search">검색</button></li>
                        <li class="sp1"><button type="button" class="write">문의하기</button></li>
                    </ul>
                </form>
            </div>
            <div class="post">
                <ul>
                    <li class="title">
                        <span class="no">번호</span>
                        <span class="subject">제목</span>
                        <span class="name">글쓴이</span>
                        <span class="date">작성일</span>
                        <span class="hit">조회수</span>
                    </li>
<!--                    <li class="item" data-idx="124">-->
<!--                        <span class="no f12">124</span>-->
<!--                        <span class="subject">우천시 수상레저 이용안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="123">-->
<!--                        <span class="no f12">123</span>-->
<!--                        <span class="subject">긴급 휴장 결정에 따른 안내사항</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="122">-->
<!--                        <span class="no f12">122</span>-->
<!--                        <span class="subject">광복절 할인 행사 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="121">-->
<!--                        <span class="no f12">121</span>-->
<!--                        <span class="subject">사전 온라인예약 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="120">-->
<!--                        <span class="no f12">120</span>-->
<!--                        <span class="subject">무료픽업 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="119">-->
<!--                        <span class="no f12">119</span>-->
<!--                        <span class="subject">온라인 사전예약 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="118">-->
<!--                        <span class="no f12">118</span>-->
<!--                        <span class="subject">긴급 휴장 결정에 따른 안내사항</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                        <span class="hit f12">5,758</span>-->
<!--                    </li>-->
                </ul>
            </div>
            <div class="pagination">
                <ul id="pagination">
                    <li class="prev">
                        <span>‹</span>
                        <em class="hover"></em>
                    </li>
                    <li class="active">
                        <span>1</span>
                        <em class="hover"></em>
                    </li>
                    <li>
                        <span>›</span>
                        <em class="hover"></em>
                    </li>
                </ul>
            </div>
        </div>
        <div class="listC hide">
            <div class="searchbox">
                <form id="bbsSearchForm" class="bbsSearchForm">
                    <ul>
                        <li class="sp1"><button type="button" class="setPassword" data-idx="123"
                                                data-type="modify">비밀번호테스트</button></li>
                        <li class="sp1 selectbox relative">
                            <input type="hidden" name="type" value="subject">
                            <input type="text" value="제목" id="bbsSelectbox" class="js-bbsSelectbox" readonly>
                            <div class="arrowbox"><span class="icon arrow"></span></div>
                            <div class="selectLayer js-bbsSelectLayer" id="bbsSelectLayer">
                                <dl>
                                    <dt>검색조건선택</dt>
                                    <dd data-type="title">제목</dd>
                                    <dd data-type="name">글쓴이</dd>
                                </dl>
                            </div>
                        </li>
                        <li class="sp2"><input type="text" name="keyword" value="" placeholder="검색어를 입력해주세요."></li>
                        <li class="sp1"><button type="submit" class="search">검색</button></li>
                        <li class="sp1"><button type="button" class="write" style="display: block">문의하기</button></li>
                    </ul>
                </form>
            </div>
            <div class="post">
                <ul>
                    <li class="title">
                        <span class="no">번호</span>
                        <span class="subject">제목</span>
                        <span class="name">글쓴이</span>
                        <span class="date">작성일</span>
                    </li>
<!--                    <li class="item" data-idx="124">-->
<!--                        <span class="no f12">124</span>-->
<!--                        <span class="subject">우천시 수상레저 이용안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="123">-->
<!--                        <span class="no f12">123</span>-->
<!--                        <span class="subject">긴급 휴장 결정에 따른 안내사항</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="122">-->
<!--                        <span class="no f12">122</span>-->
<!--                        <span class="subject">광복절 할인 행사 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="121">-->
<!--                        <span class="no f12">121</span>-->
<!--                        <span class="subject">사전 온라인예약 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="120">-->
<!--                        <span class="no f12">120</span>-->
<!--                        <span class="subject">무료픽업 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="119">-->
<!--                        <span class="no f12">119</span>-->
<!--                        <span class="subject">온라인 사전예약 안내</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="118">-->
<!--                        <span class="no f12">118</span>-->
<!--                        <span class="subject">긴급 휴장 결정에 따른 안내사항</span>-->
<!--                        <span class="name">관리자</span>-->
<!--                        <span class="date f12">2020.09.01</span>-->
<!--                    </li>-->
                </ul>
            </div>
            <div class="pagination">
                <ul id="pagination">
                    <li class="prev">
                        <span>‹</span>
                        <em class="hover"></em>
                    </li>
                    <li class="active">
                        <span>1</span>
                        <em class="hover"></em>
                    </li>
                    <li>
                        <span>›</span>
                        <em class="hover"></em>
                    </li>
                </ul>
            </div>
        </div>
        <div class="listC hide">
            <div class="searchbox">
                <form id="bbsSearchForm" class="bbsSearchForm">
                    <ul>
                        <li class="sp1"><button type="button" class="setPassword" data-idx="123"
                                                data-type="modify">비밀번호테스트</button></li>
                        <li class="sp1 selectbox relative">
                            <input type="hidden" name="type" value="subject">
                            <input type="text" value="제목" id="bbsSelectbox" class="js-bbsSelectbox" readonly>
                            <div class="arrowbox"><span class="icon arrow"></span></div>
                            <div class="selectLayer js-bbsSelectLayer" id="bbsSelectLayer">
                                <dl>
                                    <dt>검색조건선택</dt>
                                    <dd data-type="subject">제목</dd>
                                    <dd data-type="name">글쓴이</dd>
                                </dl>
                            </div>
                        </li>
                        <li class="sp2"><input type="text" name="keyword" value="" placeholder="검색어를 입력해주세요."></li>
                        <li class="sp1"><button type="submit" class="search">검색</button></li>
                        <li class="sp1"><button type="button" class="write">문의하기</button></li>
                    </ul>
                </form>
            </div>
            <div class="post reservation">
                <ul>
                    <li class="title">
                        <span class="no">번호</span>
                        <span class="name">예약자</span>
                        <span class="date">예약일</span>
                        <span class="subject">레저종류</span>
                        <span class="date">등록일</span>
                        <span class="state">예약상태</span>
                    </li>
<!--                    <li class="item" data-idx="124">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="wait">대기</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="123">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="wait">대기</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="122">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="wait">대기</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="121">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="ok">예약완료</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="120">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="ok">예약완료</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="119">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="ok">예약완료</label></span>-->
<!--                    </li>-->
<!--                    <li class="item" data-idx="118">-->
<!--                        <span class="no">4</span>-->
<!--                        <span class="name">홍길동</span>-->
<!--                        <span class="date">2020.09.05</span>-->
<!--                        <span class="subject">레저1 / ATV 사륜바이크</span>-->
<!--                        <span class="date">2020.09.01</span>-->
<!--                        <span class="state"><label class="ok">예약완료</label></span>-->
<!--                    </li>-->
                </ul>
            </div>
            <div class="pagination">
                <ul id="pagination">
                    <li class="prev">
                        <span>‹</span>
                        <em class="hover"></em>
                    </li>
                    <li class="active">
                        <span>1</span>
                        <em class="hover"></em>
                    </li>
                    <li>
                        <span>›</span>
                        <em class="hover"></em>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
<section id="gallery" class="section_p center">
    <div class="wrapper">
        <span class="line"></span>
        <h2>GALLERY</h2>
        <p class="p2">강촌 레저로 떠나는 스릴 있는 휴가</p>
        <div class="gallerylist">
            <div class="gallery-swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <ul>
                            <li><img src="res/files/gallery/thum/01.jpg" data-origin="res/files/gallery/01.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/02.jpg" data-origin="res/files/gallery/02.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/03.jpg" data-origin="res/files/gallery/03.jpg"
                                     title="원본이미지">
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul>
                            <li><img src="res/files/gallery/thum/04.jpg" data-origin="res/files/gallery/01.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/05.jpg" data-origin="res/files/gallery/02.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/06.jpg" data-origin="res/files/gallery/03.jpg"
                                     title="원본이미지">
                            </li>
                        </ul>
                    </div>
                    <div class="swiper-slide">
                        <ul>
                            <li><img src="res/files/gallery/thum/07.jpg" data-origin="res/files/gallery/01.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/08.jpg" data-origin="res/files/gallery/02.jpg"
                                     title="원본이미지">
                            </li>
                            <li><img src="res/files/gallery/thum/09.jpg" data-origin="res/files/gallery/03.jpg"
                                     title="원본이미지">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="btn prev gallery-button-prev" title="이전보기"></div>
            <div class="btn next gallery-button-next" title="다음보기"></div>
        </div>
    </div>
</section>
<section id="info" class="section_p center">
    <div class="wrapper">
        <h2>Call Now 010 4858 0255</h2>
        <p class="p2">강원도 춘천시 남산면 방곡리 385번지 강촌 레저</p>
        <button>더보기</button>
    </div>
</section>
<footer class="section_p">
    <div class="wrapper flex">
        <a class="logo flex" href="/" title="강촌레저"><span class="icon"></span>강촌레저</a>
        <div class="address">
            <div class="top">
                <span>강원도 춘천시 남산면 방곡리 385번지 강촌레저</span>
                <span>사업자등록번호 221-12-46800</span>
                <span>대표 김인수</span>
                <span>TEL 010-4858-0255</span>
            </div>
            <div class="bottom">COPYRIGHTS Ⓒ 2012 GCLEISURE.COM ALL RIGHTS RESERVED</div>
        </div>
    </div>
</footer>
<div id="overlay"></div>
<div id="reservationLayer" class="popupLayer">
    <div class="wrapper relative">
        <button class="top closeLayer" title="닫기"></button>
        <h2>예약하기 <i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span></h2>
        <form id="reservationForm">
            <ul>
                <li>
                    <input type="text" name="package" value="" placeholder="패키지" readonly>
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="date" value="" placeholder="예약일" readonly data-toggle="datepicker">
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="name" value="" placeholder="이름">
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="phone" value="" placeholder="전화번호" data-type="phoneNumber">
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="email" value="" placeholder="이메일주소">
                </li>
                <li>
                    <input type="password" name="password" value="" placeholder="비밀번호">
                    <i class="icon_necessary"></i>
                </li>
            </ul>
            <div class="contentbox">
                    <textarea name="contents"
                              placeholder="인원/성별/숙박여부 등 자세한 내용을 입력해주시면 예약접수에 큰 도움이 됩니다. 감사합니다."></textarea>
            </div>
            <div class="privacybox">
                <div class="privacy">
                    <p>강촌레저는 (이하 회사는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여
                        고객님께서
                        제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우
                        웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                    <p>ο 본 방침은 : 2012년 01월 01일 부터 시행됩니다.</p>
                    <p>개인정보의 수집 및 이용목적</p>
                    <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                    <p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지등 발송</p>
                    <p>ο 회원 관리</p>
                    <p>회원제 서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부
                        확인,
                        고지사항 전달</p>
                    <p>ο 마케팅 및 광고에 활용</p>
                    <p>이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                        수집하는 개인정보의 항목 회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <p>ο 수집항목 : 이름, 비밀번호, 전화번호, 이메일, 접속로그, 쿠키, 접속IP 정보</p>
                    <p>ο 개인정보 수집방법 : 웹사이트(gcleisure.com)</p>
                    <p>개인정보의 보유 및 이용기간</p>
                    <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이
                        관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                    <p>보존 항목 : 이름, 성별, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 이메일</p>
                    <p>보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                    <p>보존 기간 : 회원탈퇴시까지</p>
                    <p>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>개인정보의 파기 절차 및 방법</p>
                    <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <p>ο 파기절차</p>
                    <p>회원님이 회원가입 등을 위해 입력하신 정보는 DB에 저장되며, 저장된 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                    </p>
                    <p>ο 파기방법</p>
                    <p>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                    <p>개인 정보 제공</p>
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <p>- 이용자들이 사전에 동의한 경우</p>
                    <p>- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                    <p>수집한 개인정보의 위탁</p>
                    <p>회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고
                        필요한 경우
                        사전 동의를 받도록 하겠습니다.</p>
                    <p>이용자 및 법정대리인의 권리와 그 행사방법</p>
                    <p>이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                        이용자 혹은 만 14세 미만 아동의 개인정보 조회·수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭 하여
                        본인
                        확인
                        절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
                        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자 에게 이미
                        제공한
                        경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는
                        “회사가
                        수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                    <p>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>
                    <p>회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는
                        아주 작은
                        텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
                    <p>▶ 쿠키 등 사용 목적</p>
                    <p>- 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟
                        마케팅 및
                        개인 맞춤 서비스 제공</p>
                    <p>- 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                        거치거나,
                        아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                    <p>▶ 쿠키 설정 거부 방법</p>
                    <p>쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을
                        거부할
                        수 있습니다.</p>
                    <p>설정방법 예(인터넷 익스플로어의 경우) :</p>
                    <p>웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보</p>
                    <p>단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
                    <p>개인정보에 관한 민원서비스</p>
                    <p>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.</p>
                    <p>고객서비스담당 부서 : 개인정보처리부서</p>
                    <p>전화번호 : 010-4858-0255</p>
                    <p>이메일 : service@gcleisure.com</p>
                    <p>개인정보관리책임자 성명 : 김인수</p>
                    <p>전화번호 : 010-4858-0255</p>
                    <p>이메일 : service@gcleisure.com</p>
                    <p>귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해
                        신속하게 충분한 답변을 드릴 것입니다.</p>
                    <p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
                    <p>1.개인분쟁조정위원회 (www.1336.or.kr/1336)</p>
                    <p>2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</p>
                    <p>3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</p>
                    <p>4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</p>
                </div>
                <div class="agree">
                    <label class="checkbox">개인정보 수집 및 이용에 동의합니다.
                        <input type="checkbox" name="agree">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="btnbox">
                <button type="submit">예약하기</button>
            </div>
        </form>
    </div>
</div>
<div id="serviceLayer" class="popupLayer">
    <div class="wrapper relative serviceP08">
        <button class="top closeLayer" title="닫기"></button>
        <div class="serviceGrid">
            <div class="galleryBox">
                <div class="mainImg"></div>
                <div class="tab">
                    <dl>
                        <dd class=""></dd>
                        <dd class=""></dd>
                        <dd class=""></dd>
                        <dd class=""></dd>
                    </dl>
                </div>
            </div>
            <div class="textBox">
                <div class="cTns">
                    <div class="flex">
                        <h2>스쿠터</h2>
                        <strong>남, 녀 누구나 쉽게 운전 가능한 스쿠터입니다.
                            운전면허만 있으시다면 누구나! 쉽고 재미있는 스쿠터로 낭만을 즐겨보세요.</strong>
                        <div class="description">
                            낭만적인 길을 스쿠터와 함께 즐겨보는건 어떠세요?
                            다양한 색상의 예쁜 스쿠터를 타고 강촌 구석구석을 달릴 수 있어요.
                            친구는 물론 연인들과 데이트로도 정말 추천한답니다.
                            현장 보다 할인된 가격에 미리 예약하고 이용해보세요!
                            여행에 특별함을 더하고 싶다면, 스쿠터에 탑승해보세요.
                        </div>
                        <ul>
                            <li>
                                <strong class="topm">1시간가격</strong>
                                <div class="price">
                                    <span class="at">15,000원</span>
                                    <span class="end">12,000원</span>
                                </div>
                            </li>
                            <li>
                                <strong class="topm">1일가격</strong>
                                <div class="price">
                                    <span class="at">50,000원</span>
                                    <span class="end">30,000원</span>
                                </div>
                            </li>
                        </ul>
                        <button type="buttom" data-type="레저1 / 스쿠터" data-content="스쿠터 / 1시간 12,000원, 1일 30,000원">스쿠터
                            예약하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="bbsLayer" class="popupLayer">
    <div class="wrapper relative writeLayer">
        <button class="top closeLayer" title="닫기"></button>
        <h2>문의하기 <i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span></h2>
        <form id="bbsWriteForm">
            <ul>
                <li>
                    <input type="text" name="name" value="" placeholder="이름">
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="phone" value="" placeholder="전화번호" data-type="phoneNumber">
                    <i class="icon_necessary"></i>
                </li>
                <li>
                    <input type="text" name="email" value="" placeholder="이메일주소">
                </li>
                <li>
                    <input type="password" name="password" value="" placeholder="비밀번호">
                    <i class="icon_necessary"></i>
                </li>
            </ul>
            <div class="subjectbox">
                <input type="text" name="subject" value="" placeholder="제목">
                <i class="icon_necessary"></i>
            </div>
            <div class="contentbox">
                <textarea name="contents" placeholder="문의하실 내용을 입력해주세요."></textarea>
            </div>
            <div class="privacybox">
                <div class="privacy">
                    <p>강촌레저는 (이하 회사는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다. 회사는 개인정보취급방침을 통하여
                        고객님께서
                        제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우
                        웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
                    <p>ο 본 방침은 : 2012년 01월 01일 부터 시행됩니다.</p>
                    <p>개인정보의 수집 및 이용목적</p>
                    <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
                    <p>ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지등 발송</p>
                    <p>ο 회원 관리</p>
                    <p>회원제 서비스 이용에 따른 본인확인, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부
                        확인,
                        고지사항 전달</p>
                    <p>ο 마케팅 및 광고에 활용</p>
                    <p>이벤트 등 광고성 정보 전달, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계
                        수집하는 개인정보의 항목 회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
                    <p>ο 수집항목 : 이름, 비밀번호, 전화번호, 이메일, 접속로그, 쿠키, 접속IP 정보</p>
                    <p>ο 개인정보 수집방법 : 웹사이트(gcleisure.com)</p>
                    <p>개인정보의 보유 및 이용기간</p>
                    <p>원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이
                        관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                    <p>보존 항목 : 이름, 성별, 로그인ID, 비밀번호, 자택 전화번호, 자택 주소, 휴대전화번호, 이메일</p>
                    <p>보존 근거 : 전자상거래등에서의 소비자보호에 관한 법률</p>
                    <p>보존 기간 : 회원탈퇴시까지</p>
                    <p>계약 또는 청약철회 등에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>대금결제 및 재화 등의 공급에 관한 기록 : 5년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 (전자상거래등에서의 소비자보호에 관한 법률)</p>
                    <p>개인정보의 파기 절차 및 방법</p>
                    <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.</p>
                    <p>ο 파기절차</p>
                    <p>회원님이 회원가입 등을 위해 입력하신 정보는 DB에 저장되며, 저장된 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                    </p>
                    <p>ο 파기방법</p>
                    <p>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</p>
                    <p>개인 정보 제공</p>
                    <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
                    <p>- 이용자들이 사전에 동의한 경우</p>
                    <p>- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                    <p>수집한 개인정보의 위탁</p>
                    <p>회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고
                        필요한 경우
                        사전 동의를 받도록 하겠습니다.</p>
                    <p>이용자 및 법정대리인의 권리와 그 행사방법</p>
                    <p>이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
                        이용자 혹은 만 14세 미만 아동의 개인정보 조회·수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭 하여
                        본인
                        확인
                        절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다.
                        귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자 에게 이미
                        제공한
                        경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는
                        “회사가
                        수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p>
                    <p>개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</p>
                    <p>회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는
                        아주 작은
                        텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
                    <p>▶ 쿠키 등 사용 목적</p>
                    <p>- 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟
                        마케팅 및
                        개인 맞춤 서비스 제공</p>
                    <p>- 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                        거치거나,
                        아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
                    <p>▶ 쿠키 설정 거부 방법</p>
                    <p>쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을
                        거부할
                        수 있습니다.</p>
                    <p>설정방법 예(인터넷 익스플로어의 경우) :</p>
                    <p>웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보</p>
                    <p>단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</p>
                    <p>개인정보에 관한 민원서비스</p>
                    <p>회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.</p>
                    <p>고객서비스담당 부서 : 개인정보처리부서</p>
                    <p>전화번호 : 010-4858-0255</p>
                    <p>이메일 : service@gcleisure.com</p>
                    <p>개인정보관리책임자 성명 : 김인수</p>
                    <p>전화번호 : 010-4858-0255</p>
                    <p>이메일 : service@gcleisure.com</p>
                    <p>귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해
                        신속하게 충분한 답변을 드릴 것입니다.</p>
                    <p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p>
                    <p>1.개인분쟁조정위원회 (www.1336.or.kr/1336)</p>
                    <p>2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)</p>
                    <p>3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)</p>
                    <p>4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)</p>
                </div>
                <div class="agree">
                    <label class="checkbox">개인정보 수집 및 이용에 동의합니다.
                        <input type="checkbox" name="agree">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="btnbox">
                <button type="submit">문의하기</button>
            </div>
        </form>
    </div>
    <div class="wrapper relative viewLayer">
        <button class="top closeLayer" title="닫기"></button>
        <!-- 공지사항 or 문의하기-->
        <h2>공지사항</h2>
        <div class="subjectbox view">
            <h3>긴급 휴장 결정에 따른 안내사항</h3>
            <span class="date">2020.09.01 14:12:13</span>
        </div>
        <!-- 공지사항 or 문의하기-->
        <!-- 예약확인 -->
        <h2>예약확인</h2>
        <ul>
            <li>
                <div class="section package">
                    <span class="key">패키지명</span>
                    <span class="val">레저3 / E패키지</span>
                </div>
            </li>
            <li>
                <div class="section date">
                    <span class="key">예약일</span>
                    <span class="val">2020.09.03</span>
                </div>
            </li>
            <li>
                <div class="section date">
                    <span class="key">이름</span>
                    <span class="val">홍길동</span>
                </div>
            </li>
            <li>
                <div class="section date">
                    <span class="key">전화번호</span>
                    <span class="val">010-1234-5678</span>
                </div>
            </li>
            <li>
                <div class="section date">
                    <span class="key">이메일주소</span>
                    <span class="val">abc@google.com</span>
                </div>
            </li>
            <li>
                <div class="section date">
                    <span class="key">예약상태</span>
                    <span class="val">대기중</span>
                </div>
            </li>
        </ul>
        <!-- 예약확인 -->
        <div class="contentbox view">
            <div class="scroll">
                <pre></pre>
<!--                <p style="text-align: center;"><img-->
<!--                        src='https://data2.bepick.net/bbs/2020/09/ad7c54e13081fb464365aa1b17249afb_1363779296.jpg'><br><br>-->
<!--                </p>-->
<!--                <p>[스포츠서울-->
<!--                    이용수기자] 스페인 라리가 개막전에서 2개의 도움으로 맹활약한 이강인이 ESPN 선정 유럽 축구 주간 베스트 11에 이름을 올렸다.<br> 다국적 스포츠 매체‘ ESPN’-->
<!--                    의-->
<!--                    스페인어판은 15 일 라리가, 잉글랜드 프리미어리그(EPL), 프랑스 리그앙 등 유럽 주요 리그를 대상으로 주간 베스트 11 을 선정했다. < br> 4 - 4 - 2-->
<!--                    포메이션으로-->
<!--                    선정한 11 명의 선수 이름에는 이강인도 포함됐다.지난 14 일 라리가 개막전 레반테전에서 2 도움으로 팀의 4 - 2 승리를 이끈 이강인은‘ ESPN’ 이 선정한-->
<!--                    주간-->
<!--                    베스트 11 에서 맞대결한 상대팀 공격수 호세 모랄레스와 함께 투톱의 자리를 차지했다. <br> 2 선에는 EPL 개막전 해트트릭으로 리버풀의 승리를 이끈 모하메드-->
<!--                    살라가-->
<!--                    이름을 올렸다.-->
<!--                </p>-->
            </div>
        </div>
        <div class="btnbox">
            <!-- 예약확인 예약 확정되면 수정 취소 버튼이 없음 -->
            <button type="button" class="modify" data-idx="123" data-type="modify">예약수정</button>
            <button type="button" class="cancel" data-idx="123" data-type="delete">예약취소</button>
            <!-- 예약확인 -->
            <button type="button" class="closeLayer">닫기</button>
        </div>
    </div>
    <div class="wrapper relative passwordLayer">
        <button class="top closeLayer" title="닫기"></button>
        <h2>비밀번호입력</h2>
        <form id="bbsPasswordForm">
            <!-- 게시물의 idx -->
            <input type="hidden" name="idx" value="">
            <!-- 타입 modify => 수정 , delete => 삭제 취소 -->
            <input type="hidden" name="type" value="">
            <div class="passwordbox">
                <input type="password" name="password" value="" placeholder="비밀번호">
            </div>
            <div class="btnbox">
                <button type="submit">확인</button>
            </div>
        </form>
    </div>
</div>
<div id="infoLayer" class="popupLayer">
    <div class="wrapper relative">
        <button class="top closeLayer" title="닫기"></button>
        <div class="mapGrid">
            <div class="galleryBox">
                <div class="mContent">
                    <div class="map01"></div>
                    <div class="map02 hide" id="map"></div>
                </div>
                <div class="tab">
                    <dl>
                        <dd data-target="map01">
                            <div class="flex">경춘선이용</div>
                        </dd>
                        <dd data-target="map02">
                            <div class="flex">자가용이용</div>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="textBox">
                <div class="flex">
                    <h2>오시는 길</h2>
                    <strong>강촌레져는 언제나 안전하고 친절하게 여러분을 맞이합니다.</strong>
                    <div class="description">
                        강촌레져는 고객님들의 편의를 위해 언제나 친절과 미소로 맞이할 준비가 되어 있습니다.
                        오시는 길을 모르시면 언제든지 전화주세요. 자세히 설명드립니다.
                    </div>
                    <div class="addr">
                        <b>주소</b><span>강원도 춘천시 남산면 방곡리 385번지 강촌 레저</span>
                    </div>
                    <div class="tel">
                        <b>연락처</b><span>010 - 4858 - 0255</span>
                    </div>
                    <div class="cTns">
                        <h3>경춘선 (복선전철)을 이용하실 때</h3>
                        <div class="description">
                            강촌역 1번출구로 나와서 강원도 춘천시 남산면 방곡리 385(강촌로151-1)까지 약 291M
                            환승역 : 상봉(7호선, 중앙선)/망우(중앙선)
                            <br><br>
                            출발역은 상봉역입니다.열차 시간표는 코레일 홈페이지를 참조하시기 바랍니다. 하차 하시기전 전화연락을 주시면 강촌역에서 픽업해드립니다.
                        </div>
                    </div>
                    <div class="cTns hide">
                        <h3>자가용을 이용하실 때</h3>
                        <div class="description">
                            서울/강남역을 출발지로 설정한 경로 입니다.<br>
                            총 73.9km를 주행하며 예상 통행료는 4,400원 입니다.<br><br>
                            강촌IC교차로에서 춘천, 강촌 방면으로 좌회전 하신 후 충효로를 따라 400미터 정도 이동 후
                            춘천, 강촌 방향으로 우회전하십시오. 강촌로를 따라 2KM정도 가면 강촌 하수종말 처리장이 보입니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="scrollTop">
    <button class="topbtn" title="상단으로 이동"><span></span></button>
</div>


<div id="js-click-community-btn" style="display: none"></div>
<div id="js-trigger-popup" style="display: none"></div>