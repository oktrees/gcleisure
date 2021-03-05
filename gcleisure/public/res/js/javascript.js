$(function () {
    var e = $("#overlay"),
        t = $("header nav"),
        a = $("header"),
        i = $("#tour"),
        n = $("#package"),
        s = $("#service"),
        r = $("#bbs"),
        l = $("#info"),
        c = $("#reservationLayer"),
        o = $("#reservationForm"),
        p = $("#reservationSelectbox"),
        d = $("#reservationSelectForm"),
        h = $("#reservationSelectLayer"),
        u = $("#packageList"),
        m = $("#serviceLayer"),
        v = $("#bbsLayer"),
        y = $(".js-bbsSelectbox"),
        b = $(".js-bbsSelectLayer"),
        f = $(".js-bbsSearchForm"),
        g = $("#bbsWriteForm"),
        _ = $("#bbsPasswordForm"),
        x = $("#infoLayer"),
        k = $(".closeLayer"),
        w = $(".popupLayer"),
        L = $("#scrollTop"),
        P = $('[data-type="phoneNumber"]'),
        j = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
        N = /^\d{3}-\d{3,4}-\d{4}$/,
        C = "https://new.gcleisure.com/",
        q = function (e, t = null) {
            return $.ajax({ url: e, type: "POST", data: t, dataType: "json", processData: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8" });
        },
        T = new Swiper(".tour-swiper", {
            navigation: { nextEl: ".tour-button-prev", prevEl: ".tour-button-next" },
            loop: !0,
            autoplay: { delay: 5e3 },
            on: {
                slideChange: function (e) {
                    var t = i.find(".tab"),
                        a = 8 == e.activeIndex ? 0 : e.activeIndex - 1;
                    t.find("li").removeClass("on"), t.find("li.active:eq(" + a + ")").addClass("on");
                },
            },
        }),
        I =
            (new Swiper(".gallery-swiper", { navigation: { nextEl: ".gallery-button-next", prevEl: ".gallery-button-prev" }, loop: !0, autoplay: { delay: 5e3 } }),
            {
                layerPos: function (t, a) {
                    var i = $(document).scrollTop() + 100;
                    t.css("top", i), null != a && t.find(a).show(), e.fadeIn(), t.fadeIn();
                },
                layerClose: function () {
                    e.hide(), w.hide(), v.find(".wrapper").hide(), o[0].reset(), g[0].reset(), _[0].reset();
                    var t = a.find("nav");
                    e.hide(), t.css("right", "-290px"), a.find(".nav_close").hide();
                },
                posSize: function () {
                    var e = $(window).width();
                    e > 768 ? (topPos = 100) : e <= 768 && (topPos = 30);
                },
            });
    t.on("click", "a", function () {
        var e = $(this).data("id"),
            t = $("#" + e).offset();
        $("html, body").animate({ scrollTop: t.top }, 300);
    }),
        a
            .on("click", "nav a", function () {
                var e = $(this).data("id"),
                    t = $("#" + e).offset();
                $("html, body").animate({ scrollTop: t.top }, 300), I.layerClose();
            })
            .on("click", "button.nav", function () {
                var t = a.find("nav");
                e.fadeIn(),
                    t.css("right", "-290px").animate({ right: 0 }, 150, function () {
                        a.find(".nav_close").show();
                    });
            })
            .on("click", "button.nav_close", function () {
                I.layerClose();
            }),
        i.on("click", "li.active", function () {
            var e = $(this).index() + 1;
            T.slideTo(e);
        }),
        p.on("click", function () {
            var e = $(this).parent();
            e.is(".on")
                ? (e.removeClass("on"),
                  h.animate({ top: 120, opacity: 0 }, 150, "swing", function () {
                      $(this).hide();
                  }))
                : (e.addClass("on"), h.show().animate({ top: 80, opacity: 1 }, 150, "swing"));
        }),
        h
            .on("click", "dd", function () {
                $(this).find(".tips").remove();
                var e = $(this).parent().data("main") + " / " + $(this).text();
                p.val(e).parent().removeClass("on"),
                    h.animate({ top: 120, opacity: 0 }, 150, "swing", function () {
                        $(this).hide();
                    });
            })
            .on("mouseover", "dd", function () {
                var e = $(this).data("title");
                e &&
                    ($(this).find(".tips").length > 0
                        ? $(this)
                              .find(".tips")
                              .html('<div class="tips">' + e + "</div>")
                        : $(this).append('<div class="tips">' + e + "</div>"));
            })
            .on("mouseout", "dd", function () {
                $(this).find(".tips").remove();
            }),
        d.on("submit", function (e) {
            e.preventDefault(),
                e.stopPropagation(),
                $("#reservationLayer > .wrapper > h2").text("예약하기"),
                $("#reservationLayer > .wrapper > h2").append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>'),
                $("#reservationForm > .btnbox > button[type=submit]").text("예약하기");
            var t = $(this),
                a = t.find("input[name=package]"),
                i = t.find("input[name=name]"),
                n = t.find("input[name=phone]"),
                s = n.val().trim();
            return "" == a.val()
                ? (alert("패키지가 선택되지 않았습니다."), a.click())
                : "" == i.val()
                ? (alert("예약자 성함을 입력해주세요."), i.focus())
                : "" == n.val()
                ? (alert("전화번호를 입력해 주세요."), n.focus())
                : !1 === N.test(s)
                ? (alert("전화번호 형식이 올바르지 않습니다."), n.focus())
                : (o.find("input[name=package]").val(a.val()), o.find("input[name=name]").val(i.val()), o.find("input[name=phone]").val(n.val()), void I.layerPos(c, null));
        }),
        o.on("submit", function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = $(this),
                a = t.find("input[name=agree]"),
                i = t.find("input[name=package]"),
                n = t.find("input[date]"),
                s = t.find("input[name=name]"),
                r = t.find("input[name=phone]"),
                l = t.find("input[name=email]"),
                c = t.find("input[name=password]"),
                p = t.find("input[name=requirement]");
            if ("" == i.val()) return alert("패키지가 선택되지 않았습니다."), i.focus();
            if ("" == n.val()) return alert("예약일을 선택해주세요."), n.focus();
            if ("" == s.val()) return alert("예약자 성함을 입력해주세요."), s.focus();
            if ("" == r.val()) return alert("전화번호를 입력해 주세요."), r.focus();
            if (!1 === N.test(r.val())) return alert("전화번호 형식이 올바르지 않습니다."), r.focus();
            if ("" != l.val() && !1 === j.test(l.val())) return alert("이메일 형식이 올바르지 않습니다."), l.focus();
            if ("" == c.val()) return alert("비밀번호를 입력해주세요.\n비밀번호는 예약수정 및 확인에 필요합니다."), c.focus();
            if ("" == p.val()) return alert("상세내용을 입력해 주세요."), !1;
            if (!1 === a.is(":checked")) return alert("개인정보 수집 및 이용에 동의후 예약이 신청이 가능합니다."), !1;
            var d = t.serializeArray();
            console.log($($("#reservationLayer > .wrapper > h2").contents()[0]).text().trim());
            var h = $($("#reservationLayer > .wrapper > h2").contents()[0]).text().trim();
            if ("예약하기" === h)
                console.log("tet"),
                    q(C + "/home/reservation", d).then((e) => {
                        alert("예약이 완료되었습니다."), console.log(e), I.layerClose();
                    });
            else if ("예약수정" === h) {
                d.push({ name: "idx", value: o.data("idx") }),
                    q(C + "/home/updateReservation", d).then((e) => {
                        alert("수정이 완료되었습니다."), I.layerClose(), $("#bbs .tab > .active.on").trigger("click");
                    });
            }
            return !1;
        }),
        e.on("click", function () {
            I.layerClose();
        }),
        k.on("click", function () {
            I.layerClose();
        }),
        P.on("keyup", function () {
            var e = $(this)
                .val()
                .replace(/[^0-9]/g, "");
            (e = e.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3")), $(this).val(e);
        }),
        n.on("click", ".tab > .active", function () {
            var e = $(this).parent(),
                t = $(this).index() - 1;
            e.find("li.active").removeClass("on"), $(this).addClass("on"), n.find(".listitem").fadeOut(150), n.find(".listitem:eq(" + t + ")").fadeIn(150);
        }),
        u.on("click", "button", function (e) {
            var t = $(this),
                a = t.parents("ul").data("type") + " / " + t.parents(".card").find("h3").text();
            o.find("input[name=package]").val(a), I.layerPos(c, null);
        }),
        s.on("click", "li", function (e) {
            var t = $(this).data("type");
            console.log(t),
                q(C + "/home/getServiceViews/" + t).then((e) => {
                    I.layerClose(),
                        m.empty().append(e),
                        I.layerPos(m, null),
                        $(".closeLayer").on("click", function () {
                            I.layerClose();
                        });
                });
        }),
        m
            .on("click", ".cTns button", function (e) {
                var t = $(this),
                    a = t.data("type"),
                    i = t.data("content");
                I.layerClose(), o.find("input[name=package]").val(a), o.find("textarea[name=requirement]").val(i), I.layerPos(c, null);
            })
            .on("click", ".tab dd", function () {
                var e = $(this),
                    t = e.parents(".galleryBox").find(".mainImg"),
                    a = e.css("background-image").replace(/url\(|\)/g, "");
                if ((t.css("background-image", "url(" + a + ")"), !0 === e.is(".cContent"))) {
                    var i = e.index(),
                        n = m.find(".textBox > .cTns").hide();
                    n.fadeOut(150), n.eq(i).fadeIn(150);
                }
            }),
        r
            .on("click", "button.write", function (e) {
                $("#bbsLayer > .wrapper > h2").text("문의하기"), $("#bbsWriteForm > .btnbox > button[type=submit]").text("문의하기"), I.layerPos(v, ".writeLayer");
            })
            .on("click", "li.item", function (e) {
                $(this).data("idx");
                "공지사항" === $(this).closest(".wrapper").find(".sp2.active.on").children("span").text() && I.layerPos(v, ".viewLayer");
            })
            .on("click", ".tab > .active", function () {
                var e = $(this).parent(),
                    t = $(this).index() - 2;
                if (0 === t) var a = "notice";
                if (1 === t) a = "inquiry";
                if (2 === t) a = "reservation";
                $("#js-click-community-btn").trigger("click." + a), e.find("li.active").removeClass("on"), $(this).addClass("on"), r.find(".listC").hide(), r.find(".listC:eq(" + t + ")").show();
            }),
        y.on("click", function () {
            var e = $(this).parent();
            e.is(".on")
                ? (e.removeClass("on"),
                  b.animate({ top: 120, opacity: 0 }, 150, "swing", function () {
                      $(this).hide();
                  }))
                : (e.addClass("on"), b.show().animate({ top: 80, opacity: 1 }, 150, "swing"));
        }),
        b.on("click", "dd", function () {
            $(this).find(".tips").remove();
            var e = $(this).data("type"),
                t = $(this).text();
            f.find("input[name=type]").val(e),
                y.val(t).parent().removeClass("on"),
                b.animate({ top: 120, opacity: 0 }, 150, "swing", function () {
                    $(this).hide();
                });
        }),
        f.on("submit", function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = $(this),
                a = t.find("input[name=type]"),
                i = t.find("input[name=keyword]");
            if ("" == a.val()) return alert("검색조건을 선택해주세요."), y.click();
            if ("" == i.val()) return alert("검색어를 입력해주세요."), i.focus();
            var n = t.serialize();
            alert(n);
        }),
        v.on("click", "button.modify", function () {
            var e = $(this).closest(".btnbox").data("idx");
            $(this).data("type");
            if ((console.log($("#bbs .tab > .active.on").text()), "예약확인" === $("#bbs .tab > .active.on").text()))
                q(C + "/home/selectBoardWhere", { idx: e, type: 3 }).then((t) => {
                    I.layerClose(),
                        I.layerPos(c, null),
                        o.data("idx", e),
                        o.find("input[name=agree]").val(),
                        o.find("input[name=package]").val(t.division),
                        o.find("input[name=date]").val(t.reservation_date),
                        o.find("input[name=name]").val(t.name),
                        o.find("input[name=phone]").val(t.phone),
                        o.find("input[name=email]").val(t.email),
                        o.find("input[name=password]").val(t.password),
                        o.find("textarea[name=contents]").val(t.contents),
                        $("#reservationLayer > .wrapper > h2").text("예약수정"),
                        $("#reservationForm > .btnbox > button[type=submit]").text("예약수정"),
                        $("#reservationLayer > .wrapper > h2").append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>');
                });
            else if ("문의하기" === $("#bbs .tab > .active.on").text()) {
                q(C + "/home/selectBoardWhere", { idx: e, type: 2 }).then((t) => {
                    console.log(t),
                        I.layerClose(),
                        I.layerPos(v, ".writeLayer"),
                        g.data("idx", e),
                        g.find("input[name=agree]").val(),
                        g.find("input[name=name]").val(t.name),
                        g.find("input[name=phone]").val(t.phone),
                        g.find("input[name=email]").val(t.email),
                        g.find("input[name=password]").val(t.password),
                        g.find("input[name=subject]").val(t.title),
                        g.find("textarea[name=contents]").val(t.contents),
                        $("#bbsLayer > .wrapper > h2").text("수정하기"),
                        $("#bbsLayer > .wrapper > h2").append('<i class="icon_necessary"></i><span>정보는 필수정보 입니다.</span>'),
                        $("#bbsWriteForm > .btnbox > button[type=submit]").text("수정하기");
                });
            }
        }),
        v.on("click", "button.cancel", function () {
            var e = $(this).closest(".btnbox").data("idx"),
                t = $(this).data("type");
            console.log(e, t);
            var a = { idx: e, type: 3 };
            confirm("예약을 취소하시겠습니까?") &&
                q("https://new.gcleisure.com//home/cancleReservation", a).then((e) => {
                    alert("예약이 취소되었습니다."),
                        console.log(v.find(".section.date").children(".val:eq(4)")),
                        v.find(".section.date").children(".val:eq(4)").text("예약취소"),
                        $("#bbsLayer > .viewLayer .btnbox").children().css("display", "none"),
                        $("#bbsLayer > .viewLayer .btnbox > .closeLayer").css("display", "block"),
                        $(".listC .btn-pager-selected").trigger("click");
                });
        }),
        _.on("submit", function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = $(this),
                a = t.find("input[name=idx]"),
                i = t.find("input[name=type]"),
                n = t.find("input[name=password]");
            if ("" == a.val() || "" == i.val()) return alert("올바른 접근이 아닙니다."), I.layerClose();
            if ("" == n.val()) return alert("비밀번호를 입력해주세요."), n.focus();
            var s = t.serialize();
            return (
                q("https://new.gcleisure.com//home/confirmPassword", s).then((e) => {
                    e ? (I.layerClose(), $("#js-trigger-popup").trigger("click", i.val()), I.layerPos(v, ".viewLayer")) : alert("비밀번호가 틀립니다.");
                }),
                !1
            );
        }),
        g.on("submit", function (e) {
            e.preventDefault(), e.stopPropagation(), console.log("test");
            var t = $(this),
                a = t.find("input[name=agree]"),
                i = t.find("input[name=name]"),
                n = t.find("input[name=phone]"),
                s = t.find("input[name=email]"),
                r = t.find("input[name=password]"),
                l = t.find("input[name=subject]"),
                c = t.find("input[name=requirement]");
            if ("" == i.val()) return alert("이름을 입력해주세요."), i.focus();
            if ("" == n.val()) return alert("전화번호를 입력해 주세요."), n.focus();
            if (!1 === N.test(n.val())) return alert("전화번호 형식이 올바르지 않습니다."), n.focus();
            if ("" != s.val() && !1 === j.test(s.val())) return alert("이메일 형식이 올바르지 않습니다."), s.focus();
            if ("" == r.val()) return alert("비밀번호를 입력해주세요.\n비밀번호는 문의수정 및 확인에 필요합니다."), r.focus();
            if ("" == l.val()) return alert("제목을 입력해주세요."), l.focus();
            if ("" == c.val()) return alert("문의내용을 입력해 주세요."), !1;
            if (!1 === a.is(":checked")) return alert("개인정보 수집 및 이용에 동의후 예약이 신청이 가능합니다."), !1;
            var o = t.serializeArray();
            console.log($("#bbsWriteForm > .btnbox > button[type=submit]").text());
            var p = $("#bbsWriteForm > .btnbox > button[type=submit]").text();
            if ("문의하기" === p)
                q((d = C + "/home/insertInquiry"), o).then((e) => {
                    alert("게시글이 작성되었습니다."), $("#bbs .tab > .active.on").trigger("click"), I.layerClose();
                });
            else if ("수정하기" === p) {
                var d = C + "/home/updateInquiry";
                o.push({ name: "idx", value: g.data("idx") }),
                    q(d, o).then((e) => {
                        alert("게시글이 수정되었습니다."), $("#bbs .tab > .active.on").trigger("click"), I.layerClose();
                    });
            }
            return !1;
        }),
        l.on("click", "button", function () {
            I.layerPos(x, null);
        }),
        x.on("click", ".tab dd", function () {
            var e = $(this),
                t = e.data("target"),
                a = e.index(),
                i = x.find(".textBox .cTns");
            console.log(a),
                x.find(".mContent").find("div").hide(),
                x
                    .find(".mContent")
                    .find("." + t)
                    .show(),
                i.hide(),
                i.eq(a).fadeIn(150);
        }),
        L.on("click", "button", function () {
            return $("html, body").animate({ scrollTop: 0 }, 300), !1;
        }),
        $(".setPassword").on("click", function (e, t, a) {
            (t = t), (a = a);
            $("#bbsLayer > .wrapper > h2").text("비밀번호입력"), _.find("input[name=idx]").val(t), _.find("input[name=type]").val(a), I.layerPos(v, ".passwordLayer");
        }),
        ($.fn.datepicker.languages["ko-KR"] = {
            format: "yyyy. mm. dd",
            days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            daysShort: ["일", "월", "화", "수", "목", "금", "토"],
            daysMin: ["일", "월", "화", "수", "목", "금", "토"],
            months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            weekStart: 1,
            yearFirst: !0,
            yearSuffix: "년",
        }),
        $('[data-toggle="datepicker"]').datepicker({ language: "ko-KR", format: "yyyy-mm-dd" }),
        $(window).scroll(function () {
            $(this).scrollTop() > 200 ? L.fadeIn() : L.fadeOut();
        }),
        $(window).resize(function () {
            var e = $(this).width(),
                t = a.find("nav").css("right");
            e > 768 && "0px" == t && I.layerClose(), I.posSize();
        }),
        I.posSize();
    const S = { _jqueryAjax: (e, t = null, a = null) => $.ajax({ url: e, type: "POST", data: t, dataType: "json", cache: !1, processData: null == a, contentType: null == a && "application/x-www-form-urlencoded; charset=UTF-8" }) },
        B = {
            origin_url: "https://new.gcleisure.com",
            __proto__: S,
            _clickPagerBtn() {
                $(this.pagerDomName)
                    .off("click")
                    .on("click", (e) => {
                        if ("pagination" !== $(e.target).prop("id")) {
                            $(this.pagerDomName).off("click");
                            var t = $(e.target).closest(".btn-pager").children().text();
                            "‹" === t ? (console.log("test"), this._ajaxPager(1)) : "›" === t ? this._ajaxPager(0) : this._ajaxPager(t);
                        }
                    });
            },
            _search() {
                var e = $(".listC:eq(" + this.listCIdx + ") .searchbox");
                e.off("submit").on("submit", (t) => {
                    t.preventDefault(), t.stopPropagation();
                    var a = e.find("input[name=type]"),
                        i = e.find("input[name=keyword]");
                    if ("" == a.val()) return alert("검색조건을 선택해주세요."), y.click();
                    if ("" == i.val()) return alert("검색어를 입력해주세요."), i.focus();
                    if ((console.log($(".js-bbsSelectbox").val()), "제목" === $(".js-bbsSelectbox").val())) a = "title";
                    else if ("글쓴이" === $(".js-bbsSelectbox").val()) a = "name";
                    (this.search = { val: i.val(), type: a }), console.log(this.search), this._ajaxPager();
                });
            },
            _clickSearchSeletBox() {},
            _ajaxPager(e = 1) {
                var t = { type: this.communityType, limit: 10, offset: e, listNum: 10, navRange: 5 };
                null !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                var a = this.origin_url + "/home/changeCommunityPager";
                this._jqueryAjax(a, t).then((e) => {
                    (this[this.listName] = e), this._createTable(), this._clickPagerBtn();
                });
            },
            _createPager(e) {
                $(this.pagerDomName).empty();
                var t = e.navRange.map((t, a) =>
                    e.selectPage === t
                        ? `<li class="active btn-pager btn-pager-selected">\n                            <span>${t}</span>\n                            <em class="hover"></em>\n                        </li>`
                        : `<li class="btn-pager">\n                            <span>${t}</span>\n                            <em class="hover"></em>\n                        </li>`
                );
                $(this.pagerDomName).append(
                    `<li class="prev btn-pager">\n                    <span>‹</span>\n                    <em class="hover"></em>\n                </li>\n                ${t.join(
                        ""
                    )}\n                <li class="btn-pager">\n                    <span>›</span>\n                    <em class="hover"></em>\n                </li>\n                `
                ),
                    this._clickPagerBtn();
            },
        },
        D = {
            __proto__: B,
            constructor() {
                (this.name = "inquiry"),
                    (this.communityType = 2),
                    (this.listCIdx = 1),
                    (this.className = "#bbs > .wrapper div:nth-child(6) .post > ul"),
                    (this.listName = "inquiryList"),
                    (this.pagerDomName = $(".pagination").eq(1).children("ul")),
                    (this.pager = { listNum: 10, navRange: 5 }),
                    this._clickNavBtn(this.name),
                    this._clickInpuiryPopup(),
                    this._clickPopupSubmitBtn(),
                    this._triggerPopup();
            },
            _clickPopupSubmitBtn() {
                $("#js-popup-submit-btn")
                    .off("click.inquiry")
                    .on("click.inquiry", (e) => {
                        $("#make_inq_submit")
                            .off("click")
                            .on("click", (e) => {
                                $("#make_inq_submit").off("click");
                                var t = $(e.target).closest("#make_inquiry").serializeArray();
                                if (this._insertVerification(t)) {
                                    t = this._changeDbData(t);
                                    var a = this.origin_url + "/home/insertInquiry";
                                    this._jqueryAjax(a, data).then((e) => {
                                        alert("게시글이 등록되었습니다."), (this[this.listName] = e), this._createTable(), this._clickPagerBtn(), $(".make_inq .close").trigger("click"), $("#js-popup-submit-btn").trigger("click.inquiry");
                                    });
                                } else $("#js-popup-submit-btn").trigger("click.inquiry");
                            });
                    });
            },
            _changeDbData(e) {
                for (var t of ((data = e.filter((e, t) => {
                    if ("consent_check" !== e.name) return e;
                })),
                data))
                    "inquiry_name" === t.name ? (t.name = "name") : "inquiry_pass" === t.name ? (t.name = "password") : "info_area" === t.name ? (t.name = "contents") : "inquiry_title" === t.name && (t.name = "title");
                return data.push({ name: "type", value: 2 }), data;
            },
            _insertVerification(e) {
                if (!$("#consent_check").prop("checked")) return alert("개인정보 수집 및 이용항목에 동의해주세요."), !1;
                for (var t of e) {
                    var a = ["inquiry_name", "inquiry_pass", "inquiry_title", "phone", "info_area"];
                    if ("consent_check" === t.name);
                    else {
                        if (-1 !== a.indexOf(t.name) && "" === t.value) {
                            var i = a.indexOf(t.name);
                            return alert(["예약자명을 입력해주세요.", "비밀번호를 입력해주세요.", "제목을 입력해주세요.", "전화번호를 입력해주세요.", "내용을 입력해주세요."][i]), !1;
                        }
                        if ("inquiry_pass" === t.name && t.value.length < 4) return alert("비밀번호를 4자 이상으로 입력해주세요."), !1;
                        if ("inquiry_name" === t.name && t.value.length < 2) return alert("예약자명을 2자 이상으로 입력해주세요."), !1;
                    }
                }
                return !0;
            },
            _confirmPassword() {},
            _clickInpuiryPopup() {
                $(this.className)
                    .children("li")
                    .off("click")
                    .on("click", (e) => {
                        (this.selectedIdx = $(e.target).closest("li").data("idx")), $(".setPassword").trigger("click", [this.selectedIdx, this.communityType]);
                    });
            },
            _triggerPopup() {
                $("#js-trigger-popup").on("click", (e, t) => {
                    Number(t) === Number(this.communityType) && this._createPopup();
                });
            },
            _createPopup() {
                var e = this[this.listName].data,
                    t = this.selectedIdx,
                    a = {};
                for (var i of e) Number(i.idx) === Number(t) && (a = i);
                var n = this.inquiryList.comment[t],
                    s = "";
                0 !== n.length &&
                    (console.log(n),
                    (s += `<div class="contentbox view comment">\n                        <div>\n                            <div class="read_content_box reply" >\n                            <div class="read_title reply" >\n                                <div class="subject">${n[0].name}</div>\n                                <div class="read_date">${n[0].date}</div>\n                            </div>\n                            <div class="content_text reply">${n[0].comment}</div>\n                            </div>                                \n                        </div>        \n                    </div>`)),
                    $("#bbsLayer > .viewLayer .btnbox").children().css("display", "block"),
                    $("#bbsLayer > .viewLayer .btnbox > .modify").text("수정"),
                    $("#bbsLayer > .viewLayer .btnbox > .cancel").css("display", "none"),
                    $("#bbsLayer > .viewLayer .btnbox").data("idx", a.idx),
                    $("#bbsLayer > .viewLayer").children().not("button, .btnbox").remove(),
                    $("#bbsLayer > .viewLayer").prepend(
                        `<h2>문의하기</h2>\n                <div class="subjectbox view">\n                    <h3>${a.title}</h3>\n                    <span class="date">${a.date}</span>\n                </div>\n                <div class="contentbox view">\n                    <div class="scroll">     \n                        <pre>${a.contents}</pre>                      \n                    </div>                  \n                </div>\n                ${s}`
                    ),
                    this._clickPopupUpdateBtn(),
                    this._clickPopupDeleteBtn(),
                    this._clickCloseLayer();
            },
            _clickCloseLayer() {
                $("#bbsLayer > .viewLayer .btnbox > .closeLayer")
                    .off("click")
                    .on("click", (e) => {
                        $("#bbsLayer > .viewLayer > .closeLayer").trigger("click");
                    });
            },
            _createUpdatePopup() {
                var e = this[this.listName].data,
                    t = this.selectedIdx;
                for (var a of e) Number(a.idx) === Number(t) && a;
                this._clickPopupUpdateSubmit();
            },
            _clickPopupUpdateSubmit() {
                $(".js_update_inquiry_submit")
                    .off("click")
                    .on("click", (e) => {
                        $(".js_update_inquiry_submit").off("click");
                        var t = { idx: this.selectedIdx },
                            a = $(".js_update_inquiry").serializeArray();
                        for (var i of a) t[i.name] = i.value;
                        console.log(a);
                        var n = this.origin_url + "/home/updateInquiry";
                        this._jqueryAjax(n, t).then((e) => {
                            alert("게시글이 수정되었습니다."), $(".btn-pager-selected").trigger("click"), $(".make_inq .close").trigger("click"), this._clickPopupUpdateSubmit();
                        });
                    });
            },
            _clickPopupUpdateBtn() {
                $(".js_inquiry_update_btn")
                    .off("click")
                    .on("click", (e) => {
                        console.log(e.target), console.log(this.selectedIdx), this._createUpdatePopup();
                    });
            },
            _clickPopupDeleteBtn() {
                $(".js_inquiry_delete_btn")
                    .off("click")
                    .on("click", (e) => {
                        if (confirm("게시글을 삭제하시겠습니까?")) {
                            var t = { idx: this.selectedIdx },
                                a = this.origin_url + "/home/deleteInquiry";
                            this._jqueryAjax(a, t).then((e) => {
                                alert("게시글이 삭제되었습니다."), (this[this.listName] = e), this._createTable(), this._clickPagerBtn(), $(".read_notice .close").trigger("click");
                            });
                        }
                    });
            },
            _clickNavBtn(e) {
                $("#js-click-community-btn").on("click." + e, (e) => {
                    (this.search = null), $(".root_community_pager").empty();
                    var t = { type: this.communityType, limit: 10, offset: 1, listNum: 10, navRange: 5 };
                    null !== this.search && void 0 !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                    var a = this.origin_url + "/home/changeCommunityPager";
                    this._jqueryAjax(a, t).then((e) => {
                        $(this.className).empty(), (this[this.listName] = e), this._createTable(), this._clickPagerBtn(), this._search();
                    });
                });
            },
            _createTable() {
                var e = this[this.listName];
                this._createTableList(e), console.log(e.pager), this._createPager(e.pager);
            },
            _createTableList(e) {
                $(this.className).empty();
                var t =
                    '<li class="title">\n                    <span class="no">번호</span>\n                    <span class="subject">제목</span>\n                    <span class="name">글쓴이</span>\n                    <span class="date">작성일</span>\n                </li>';
                e.data.map((e, a) => {
                    (e.views = null === e.views ? 0 : e.views),
                        (t += `<li class="item" data-idx="${e.idx}">\n                        <span class="no f12">${e.tr_idx}</span>\n                        <span class="subject">${
                            e.title
                        }</span>\n                        <span class="name">${e.name}</span>\n                        <span class="date f12">${e.date.split(" ")[0]}</span>\n                    </li>`),
                        0 !== this.inquiryList.comment[e.idx].length &&
                            (t += `<li class="item" data-idx="${
                                e.idx
                            }">\n                            <span class="no f12"></span>\n                            <span class="subject subject_comment">\n                                <div class="chain"></div><div class="lock"></div><div class="comment">고객님 답변합니다.</div>\n                            </span>\n                            <span class="name">관리자</span>\n                            <span class="date f12">${
                                e.date.split(" ")[0]
                            }</span>\n                        </li>`);
                }),
                    $(this.className).append(t),
                    this._clickInpuiryPopup();
            },
        },
        A = {
            __proto__: B,
            constructor() {
                (this.name = "reservation"),
                    (this.communityType = 3),
                    (this.listCIdx = 2),
                    (this.className = "#bbs > .wrapper div:nth-child(7) .post > ul"),
                    (this.listName = "reservationList"),
                    (this.pagerDomName = $(".pagination").eq(2).children("ul")),
                    (this.pager = { listNum: 10, navRange: 5 }),
                    this._clickNavBtn(this.name),
                    this._clickPopup(),
                    this._triggerPopup();
            },
            _clickNavBtn(e) {
                $("#js-click-community-btn").on("click." + e, (e) => {
                    (this.search = null), $(".root_community_pager").empty();
                    var t = { type: this.communityType, limit: 10, offset: 1, listNum: 10, navRange: 5 };
                    null !== this.search && void 0 !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                    var a = this.origin_url + "/home/changeCommunityPager";
                    this._jqueryAjax(a, t).then((e) => {
                        $(this.className).empty(), (this[this.listName] = e), this._createTable(), this._clickPagerBtn(), this._search();
                    });
                });
            },
            _createTable() {
                var e = this[this.listName];
                this._createTableList(e), this._createPager(e.pager);
            },
            _createTableList(e) {
                $(this.className).empty();
                var t =
                    ' <li class="title">\n                    <span class="no">번호</span>\n                    <span class="name">예약자</span>\n                    <span class="date">예약일</span>\n                    <span class="subject">레저종류</span>\n                    <span class="date">등록일</span>\n                    <span class="state">예약상태</span>\n                </li>';
                e.data.map((e, a) => {
                    if (((e.views = null === e.views ? 0 : e.views), console.log(e.type), 1 === Number(e.type)))
                        var i = "대기",
                            n = "wait";
                    else if (2 === Number(e.type)) (i = "예약완료"), (n = "ok");
                    else if (3 === Number(e.type)) (i = "예약취소"), (n = "cancle");
                    t += `<li class="item" data-idx="${e.idx}">\n                        <span class="no">${e.tr_idx}</span>\n                        <span class="name">${e.name}</span>\n                        <span class="date">${
                        e.reservation_date
                    }</span>\n                        <span class="subject">${e.title}</span>\n                        <span class="date">${
                        e.date.split(" ")[0]
                    }</span>\n                        <span class="state"><label class="${n}">${i}</label></span>\n                    </li>`;
                }),
                    $(this.className).append(t),
                    this._clickPopup();
            },
            _clickPopup() {
                $(this.className)
                    .children("li")
                    .off("click")
                    .on("click", (e) => {
                        (this.selectedIdx = $(e.target).closest("li").data("idx")), $(".setPassword").trigger("click", [this.selectedIdx, this.communityType]);
                    });
            },
            _clickCancle() {
                $(".js_reservation_cancle")
                    .off("click")
                    .on("click", (e) => {
                        if (confirm("예약을 취소하시겠습니까?")) {
                            $(".js_reservation_cancle").off("click"), console.log(this.selectedIdx);
                            var t = { idx: this.selectedIdx, type: 3 },
                                a = this.origin_url + "/home/cancleReservation";
                            this._jqueryAjax(a, t).then((e) => {
                                alert("예약이 취소되었습니다."), $(".btn-pager-selected").trigger("click"), $(".make_inq .close").trigger("click"), $(".js_reservation_cancle").css("display", "none"), this._clickCancle();
                            });
                        }
                    });
            },
            _triggerPopup() {
                $("#js-trigger-popup").on("click", (e, t) => {
                    Number(t) === Number(this.communityType) && this._createPopup();
                });
            },
            _createPopup() {
                var e = this[this.listName].data,
                    t = this.selectedIdx,
                    a = {};
                for (var i of e) Number(i.idx) === Number(t) && (a = i);
                if (
                    ($("#bbsLayer > .viewLayer .btnbox").children().css("display", "none"),
                    $("#bbsLayer > .viewLayer .btnbox > .modify").text("예약수정"),
                    $("#bbsLayer > .viewLayer .btnbox > .closeLayer").css("display", "block"),
                    1 === Number(a.type))
                ) {
                    var n = "대기중";
                    $("#bbsLayer > .viewLayer .btnbox").children().css("display", "block"), $("#bbsLayer > .viewLayer .btnbox").data("idx", a.idx);
                } else if (2 === Number(a.type)) n = "예약완료";
                else if (3 === Number(a.type)) n = "예약취소";
                $("#bbsLayer > .viewLayer").children().not("button, .btnbox").remove(),
                    $("#bbsLayer > .viewLayer").prepend(
                        `<h2>예약하기</h2>\n                <ul>\n                    <li>\n                        <div class="section package">\n                            <span class="key">패키지명</span>\n                            <span class="val">${a.division}</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="section date">\n                            <span class="key">예약일</span>\n                            <span class="val">${a.reservation_date}</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="section date">\n                            <span class="key">이름</span>\n                            <span class="val">${a.name}</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="section date">\n                            <span class="key">전화번호</span>\n                            <span class="val">${a.phone}</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="section date">\n                            <span class="key">이메일주소</span>\n                            <span class="val">${a.email}</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class="section date">\n                            <span class="key">예약상태</span>\n                            <span class="val">${n}</span>\n                        </div>\n                    </li>\n                </ul>\n                <div class="contentbox view">\n                    <div class="scroll">                   \n                        <pre>${a.contents}</pre>\n                    </div>\n                </div>`
                    ),
                    this._clickCancle();
            },
        };
    ({
        __proto__: B,
        libraries: S,
        ckeditor: ckeditor,
        constructor() {
            this._editorConstructor(),
                (this.name = "notice"),
                (this.communityType = 1),
                (this.listCIdx = 0),
                (this.className = "#bbs > .wrapper div:nth-child(5) .post > ul"),
                (this.listName = "noticeList"),
                (this.pagerDomName = $(".pagination").eq(0).children("ul")),
                (this.pager = { listNum: 10, navRange: 5 }),
                this._clickNavBtn(this.name);
        },
        _editorConstructor() {
            this.ckeditor
                .constructor({
                    rootId: ".content_text",
                    originUrl: "https://new.gcsnow.net/",
                    imgUrl: "res/img/",
                    crudUrl: "https://new.gcsnow.net/home/ckeditor",
                    uploadUrl: "https://new.gcsnow.net/home/upload",
                    folderName: "base",
                    tmpFolderName: "tmp",
                    createBtnClass: "#notice .content_container.notice ul li",
                    createSubmitBtnClass: ".editor_create_Submit_btn",
                    readBtnClass: ".editor_read_btn",
                    updateBtnClass: ".editor_update_btn",
                    updateSubmitBtnClass: ".editor_update_Submit_btn",
                    deleteBtnClass: ".editor_delete_btn",
                    isReadOnly: !1,
                })
                .then((e) => {
                    console.log(this.ckeditor.getData()), this.ckeditor._setEvtBtn();
                });
        },
        _clickPopup() {
            $(this.className)
                .children("li")
                .off("click")
                .on("click", (e) => {
                    (this.selectedIdx = $(e.target).closest("li").data("idx")), this._createPopup();
                    var t = { idx: this.selectedIdx },
                        a = this.origin_url + "/home/getPopupList";
                    this._jqueryAjax(a, t).then((e) => {
                        console.log(e);
                    });
                });
        },
        _createPopup(e = null) {
            var t = this[this.listName].data,
                a = this.selectedIdx,
                i = {};
            for (var n of t) Number(n.idx) === Number(a) && (i = n);
            $("#bbsLayer > .viewLayer .btnbox").children().css("display", "none"),
                $("#bbsLayer > .viewLayer .btnbox > .closeLayer").css("display", "block"),
                $("#bbsLayer > .viewLayer").children().not("button, .btnbox").remove(),
                $("#bbsLayer > .viewLayer").prepend(
                    `<h2>공지사항</h2>\n                <div class="subjectbox view">\n                    <h3>${i.title}</h3>\n                    <span class="date">${i.date}</span>\n                </div>\n                <div class="contentbox view">\n                    <div class="scroll">     \n                        <div class="content_text">${i.contents}</div>                      \n                    </div>\n                </div>`
                ),
                this._clickCloseLayer(),
                this.ckeditor._ckeditor($(".content_text")[0]);
        },
        _clickCloseLayer() {
            $("#bbsLayer > .viewLayer .btnbox > .closeLayer")
                .off("click")
                .on("click", (e) => {
                    $("#bbsLayer > .viewLayer > .closeLayer").trigger("click");
                });
        },
        _clickPopupPrevNext() {
            $(".js_prev_list")
                .off("click")
                .on("click", (e) => {
                    if (((this.selectedIdx = $(e.target).closest(".js_prev_list").data("idx")), null !== this.selectedIdx && void 0 !== this.selectedIdx)) {
                        var t = { idx: this.selectedIdx, search: { val: "", type: "" } };
                        null !== this.search && void 0 !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                        var a = this.origin_url + "/home/getPopupList";
                        this._jqueryAjax(a, t).then((e) => {
                            this._createPopup(e), console.log(this.ckeditor), this.ckeditor._ckeditor($(".content_text")[0]);
                        });
                    }
                }),
                $(".js_next_list")
                    .off("click")
                    .on("click", (e) => {
                        if (((this.selectedIdx = $(e.target).closest(".js_next_list").data("idx")), null !== this.selectedIdx && void 0 !== this.selectedIdx)) {
                            var t = { idx: this.selectedIdx, search: { val: "", type: "" } };
                            null !== this.search && void 0 !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                            var a = this.origin_url + "/home/getPopupList";
                            this._jqueryAjax(a, t).then((e) => {
                                this._createPopup(e), this.ckeditor._ckeditor($(".content_text")[0]);
                            });
                        }
                    });
        },
        _clickNavBtn(e) {
            $("#js-click-community-btn").on("click." + e, (e) => {
                (this.search = null), $(".root_community_pager").empty();
                var t = { type: this.communityType, limit: 10, offset: 1, listNum: 10, navRange: 5 };
                null !== this.search && void 0 !== this.search && (0 === Number(this.search.type) ? (this.search.type = "title") : 1 === Number(this.search.type) && (this.search.type = "name"), (t.search = this.search));
                var a = this.origin_url + "/home/changeCommunityPager";
                this._jqueryAjax(a, t).then((e) => {
                    console.log(e), $(this.className).empty(), (this[this.listName] = e), this._createTable(), this._clickPagerBtn(), this._search(), console.log("test");
                });
            });
        },
        _createTable() {
            var e = this[this.listName];
            this._createTableList(e), this._createPager(e.pager);
        },
        _createTableList(e) {
            $(this.className).empty();
            var t =
                '<li class="title">\n                    <span class="no">번호</span>\n                    <span class="subject">제목</span>\n                    <span class="name">글쓴이</span>\n                    <span class="date">작성일</span>\n                    <span class="hit">조회수</span>                    \n                </li>';
            e.data.map((e, a) => {
                (e.views = null === e.views ? 0 : e.views),
                    (t += `<li class="item" data-idx="${e.idx}">\n                        <span class="no f12">${e.tr_idx}</span>\n                        <span class="subject">${
                        e.title
                    }</span>\n                        <span class="name">${e.name}</span>\n                        <span class="date f12">${e.date.split(" ")[0]}</span>\n                        <span class="hit f12">${
                        e.views
                    }</span>    \n                    </li>`);
            }),
                $(this.className).append(t),
                this._clickPopup();
        },
    }.constructor(),
        D.constructor(),
        A.constructor(),
        $("#bbs .tab > .active.on").trigger("click"));
    (() => {
        const e = {
            _jqueryAjax: (e, t = null, a = null) => $.ajax({ url: e, type: "POST", data: t, dataType: "json", cache: !1, processData: null == a, contentType: null == a && "application/x-www-form-urlencoded; charset=UTF-8" }),
            _getAjaxWeather() {
                this._jqueryAjax("https://new.gcleisure.com/home/getWeather")
                    .then((e) => {
                        e.hasOwnProperty("error") ? console.log("php ajaxReturn getWeather error! : " + e.error) : ((e = this._addDiffTemperature(e)), this._createWeatherMainDom(e));
                    })
                    .catch((e) => {
                        console.log("php ajaxReturn getWeather error! : ", e);
                    });
            },
            _createWeatherMainDom(e) {
                var t = "#weather ul > li:nth-child(4) > .red",
                    a = "#weather ul > li:nth-child(5) > .green",
                    i = e.now.info_text.split(",")[0];
                $(".js_weather > p").css("visibility", "visible"),
                    "비" === i ? $("#weather .icon").addClass("iconRain") : "맑음" === i ? $("#weather .icon").addClass("iconSunny") : $("#weather .icon").addClass("iconCloud"),
                    $("#weather .temperature").text(e.now.temperature_now),
                    $("#weather ul > li:nth-child(1) > strong").text(e.now.info_text),
                    $("#weather ul > li:nth-child(2) > .blue").text(e.now.temperature_low + "°"),
                    $("#weather ul > li:nth-child(2) > .red").text(e.now.temperature_high + "°"),
                    $("#weather ul > li:nth-child(2) > b").text(e.now.temperature_sensible + "°"),
                    $(t).text(e.now.uv.lev),
                    $(t).css("color", e.now.uv.font_color),
                    $(a).text(e.now.dust.num + "㎍/㎥ " + e.now.dust.lev),
                    $(a).css("color", e.now.dust.font_color);
            },
            _addDiffTemperature: (e) => (
                e.weekly.map((t, a) => {
                    if (0 !== a) {
                        var i = e.weekly[a - 1].temperature_high,
                            n = t.temperature_high - i;
                        e.weekly[a].temperature_diff = n > 0 ? "어제보다 " + Math.abs(n) + "&deg; 높음" : n < 0 ? "어제보다 " + Math.abs(n) + "&deg; 낮음" : "어제랑 같아요";
                    } else {
                        n = e.now.info_text.split(" ")[2];
                        var s = e.now.info_text.split(" ")[3];
                        (n = n.substr(0, n.length - 1)), (e.weekly[a].temperature_diff = "어제보다 " + n + "&deg; " + s.replace("아요", "음"));
                    }
                }),
                -1 !== e.now.info_text.indexOf("아요") && (e.now.info_text = e.now.info_text.replace("아요", "음")),
                e
            ),
        };
        e._getAjaxWeather();
    })();
});
