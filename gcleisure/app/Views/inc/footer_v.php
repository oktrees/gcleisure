
<!--<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=ow9j2t0xij"></script>-->
<!--<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>-->
<!--<script src="https://d3js.org/d3.v5.js"></script>-->
<!--<script src="https://unpkg.com/textures@1.2.0/dist/textures.js"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js" integrity="sha512-WNLxfP/8cVYL9sj8Jnp6et0BkubLP31jhTG9vhL/F5uEZmg5wEzKoXp1kJslzPQWwPT1eyMiSxlKCgzHLOTOTQ==" crossorigin="anonymous"></script>-->
<!--<script src="--><?php //echo base_url('/res/js/jquery-3.5.0.js') . cache;?><!--"></script>-->
<!--<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbYuxZrpwgPuhTUw_56jRqXjrO8HokVw0&callback=getGoogleMap"></script>-->
<!--<script async src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>-->
<!--<script async src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>-->
<!--<script async src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" integrity="sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==" crossorigin="anonymous"></script>-->
<!--<script async src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js" integrity="sha512-p55Bpm5gf7tvTsmkwyszUe4oVMwxJMoff7Jq3J/oHaBk+tNQvDKNz9/gLxn9vyCjgd6SAoqLnL13fnuZzCYAUA==" crossorigin="anonymous"></script>-->
<!--<script async src="https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.5.0/js/jquery.sliderPro.min.js" integrity="sha512-kE/Z39UCtQFV6heGkVHzcQuswQW8t4Hn96hv8p/dO00rsbtBDrK8kaiePj72kZEYdWoczavC7Ib2u14SzW6Wzg==" crossorigin="anonymous"></script>-->
<!--<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>-->
<!--<script src="--><?php //echo base_url('/res/gcleisure/js/ckeditor.js') . cache;?><!--"></script>-->
<!--<script src="--><?php ////echo base_url('/res/gcleisure/js/default.js') . cache;?><!--"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js" integrity="sha512-rmZcZsyhe0/MAjquhTgiUcb4d9knaFc7b5xAfju483gbEXTkeJRUMIPk6s3ySZMYUHEcjKbjLjyddGWMrNEvZg==" crossorigin="anonymous"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.js" integrity="sha512-9yoLVdmrMyzsX6TyGOawljEm8rPoM5oNmdUiQvhJuJPTk1qoycCK7HdRWZ10vRRlDlUVhCA/ytqCy78+UujHng==" crossorigin="anonymous"></script>-->



<link href="<?php echo base_url('/res/css/datepicker.min.css') . cache;?>" rel="stylesheet">
<link href="<?php echo base_url('/res/css/layout.css') . cache;?>" rel="stylesheet">

<script src="<?php echo base_url('/res/js/ckeditor.js') . cache;?>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
        crossorigin="anonymous"></script>
<script type="text/javascript"
        src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=1a0ee66b9001d70f4937e1f8798004c6&libraries=services"></script>
<script src="<?php echo base_url('/res/js/datepicker.min.js')  . cache;;?>"></script>

<script src="https://unpkg.com/swiper@6.2.0/swiper-bundle.min.js"></script>
<script src="<?php echo base_url('/res/js/javascript.js')  . cache;;?>" defer></script>
<script>
    var ADDRESS = '강원도 춘천시 남산면 방곡리 385';
    var TITLE = '<div class="maptitle">강촌레저</div>';
    var mapContainer = document.getElementById('map');
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 2
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(ADDRESS, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            var infowindow = new kakao.maps.InfoWindow({
                content: TITLE
            });
            infowindow.open(map, marker);
            map.setCenter(coords);
        }
    });
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    map.setZoomable(false);
</script>