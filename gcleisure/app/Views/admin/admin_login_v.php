<!doctype html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/admin/css/admin_login.css?ver=<?php echo date("Y-m-d H:i:s") ?>">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="/img/jl_favicon.png">
    <link rel="icon" href="/img/jl_favicon.png">
    <title>Document</title>

</head>
<body>
<div id="wrap">
    <header>
        <!--           <div>-->
        <!--               <img src="/img/svg/logo.svg?ver=4" alt="" class="svg">-->
        <!--               <span class="iconLogo"></span>-->
        <!--           </div>-->
    </header>
    <section>
        <form action="/administrator/admin" method="post"/>
        <div><span>Admin Login</span></div>
        <div><span>관리자아이디</span></div>
        <div>
            <?php if(!empty($id)): ?>
                <input type="text" name="id" value="<?php echo $id?>">
            <?php else:?>
                <input type="text" name="id" value="">
            <?php endif; ?>
        </div>
        <div><span>비밀번호</span></div>
        <div>
            <input type="password" name="password">
        </div>
        <div><button><span>로그인</span></button></div>
        </form>
    </section>
</div>

<!--<script src="/js/admin_login.js?ver=--><?php //echo date("Y-m-d H:i:s") ?><!--"></script>-->
</body>
</html>