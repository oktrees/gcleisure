<?php

//--------------------------------------------------------------------
// App Namespace
//--------------------------------------------------------------------
// This defines the default Namespace that is used throughout
// CodeIgniter to refer to the Application directory. Change
// this constant to change the namespace that all application
// classes should use.
//
// NOTE: changing this will require manually modifying the
// existing namespaces of App\* namespaced-classes.
//
defined('APP_NAMESPACE') || define('APP_NAMESPACE', 'App');

/*
|--------------------------------------------------------------------------
| Composer Path
|--------------------------------------------------------------------------
|
| The path that Composer's autoload file is expected to live. By default,
| the vendor folder is in the Root directory, but you can customize that here.
*/
defined('COMPOSER_PATH') || define('COMPOSER_PATH', ROOTPATH . 'vendor/autoload.php');

/*
|--------------------------------------------------------------------------
| Timing Constants
|--------------------------------------------------------------------------
|
| Provide simple ways to work with the myriad of PHP functions that
| require information to be in seconds.
*/
defined('SECOND') || define('SECOND', 1);
defined('MINUTE') || define('MINUTE', 60);
defined('HOUR') || define('HOUR', 3600);
defined('DAY') || define('DAY', 86400);
defined('WEEK') || define('WEEK', 604800);
defined('MONTH') || define('MONTH', 2592000);
defined('YEAR') || define('YEAR', 31536000);
defined('DECADE') || define('DECADE', 315360000);
define('cache', '?' . time());
define('date', date("Y-m-d H:i:s"));
define('milliseconds', round(microtime(true) * 1000));
define('year', date("Y"));
define('month', date("m"));
define('day', date("d"));
define('admin', '관리자');
define('adminConfig', array('name' => admin, 'date' => date, 'date_y' => year, 'date_m' => month, 'date_d' => day));
define('inquiryConfig', array('date' => date, 'date_y' => year, 'date_m' => month, 'date_d' => day));
define('dateConfig', array('date' => date, 'date_y' => year, 'date_m' => month, 'date_d' => day));
define('GCL_ORIGIN_URL', '');
//define('rental',
//    array(
//        '레저1 / ATV' => '1가지 - ATV',
//        '레저1 / 래프팅' => '1가지 - 래프팅',
//        '레저1 / 카누,카약' => '1가지 - 카누,카약',
//        '레저1 / 서바이벌' => '1가지 - 서바이벌',
//        '레저1 / 카트' => '1가지 - 카트',
//        '레저1 / 수상레저' => '1가지 - 수상레져',
//        '레저1 / 수륙양용 아르고' => '1가지 - 수륙양용 아르고',
//        '레저1 / 스쿠터' => '1가지 - 스쿠터',
//        '레저2 / A패키지' => '2_A패키지 ATV+서바이벌',
//        '레저2 / B패키지' => '2_B패키지 ATV+카트',
//        '레저2 / C패키지' => '2_C패키지 ATV+수상스키',
//        '레저2 / D패키지' => '2_D패키지 ATV+웨이크보드',
//        '레저2 / E패키지' => '2_E패키지 ATV+바나나보트',
//        '레저2 / F패키지' => '2_F패키지 ATV+더블땅콩보트' ,
//        '레저2 / G패키지' => '2_G패키지 ATV+플라이피쉬',
//        '레저3 / A패키지' => '3_A패키지 ATV+서바이벌+카트',
//        '레저3 / B패키지' => '3_B패키지 ATV+서바이벌+수상스키',
//        '레저3 / C패키지' => '3_C패키지 ATV+서바이벌+웨이크보드',
//        '레저3 / D패키지' => '3_D패키지 ATV+서바이벌+바나나보트',
//        '레저3 / E패키지' => '3_E패키지 ATV+서바이벌+더블땅콩보트',
//        '레저3 / F패키지' => '3_F패키지 ATV+서바이벌+플라이피쉬' ,
//        '레저3 / G패키지' => '3_G패키지 ATV+카트+수상스키',
//        '레저3 / H패키지' => '3_H패키지 ATV+카트+웨이크보드',
//        '레저3 / I패키지' => '3_I패키지 ATV+카트+바나나보트',
//        '레저3 / J패키지' => '3_J패키지 ATV+카트+더블땅콩보트',
//        '레저3 / K패키지' => '3_K패키지 ATV+카트+플라이피쉬',
//        '레저4 / A패키지' => '4_A패키지 ATV+서바이벌+카트+수상스키',
//        '레저4 / B패키지' => '4_B패키지 ATV+서바이벌+카트+웨이크보드' ,
//        '레저4 / C패키지' => '4_C패키지 ATV+서바이벌+카트+바나나보트',
//        '레저4 / D패키지' => '4_D패키지 ATV+서바이벌+카트+더블땅콩보트',
//        '레저4 / E패키지' => '4_E패키지 ATV+서바이벌+카트+플라이피쉬' ,
//        '단체 / A패키지' => '단체_A패키지',
//        '단체 / B패키지' => '단체_B패키지',
//        '단체 / C패키지' => '단체_C패키지',
//    ));
define('rental',
    array(
        '레저1 / ATV' => '레저1 / ATV',
        '레저1 / 래프팅' => '레저1 / 래프팅',
        '레저1 / 카누,카약' => '레저1 / 카누,카약',
        '레저1 / 서바이벌' => '레저1 / 서바이벌',
        '레저1 / 카트' => '레저1 / 카트',
        '레저1 / 수상레저' => '레저1 / 수상레저',
        '레저1 / 수륙양용 아르고' => '레저1 / 수륙양용 아르고',
        '레저1 / 스쿠터' => '레저1 / 스쿠터',
        '레저2 / A패키지' => '레저2 / A패키지 ATV+서바이벌',
        '레저2 / B패키지' => '레저2 / B패키지 ATV+카트',
        '레저2 / C패키지' => '레저2 / C패키지 ATV+수상스키',
        '레저2 / D패키지' => '레저2 / D패키지 ATV+웨이크보드',
        '레저2 / E패키지' => '레저2 / E패키지 ATV+바나나보트',
        '레저2 / F패키지' => '레저2 / F패키지 ATV+더블땅콩보트' ,
        '레저2 / G패키지' => '레저2 / G패키지 ATV+플라이피쉬',
        '레저3 / A패키지' => '레저3 / A패키지 ATV+서바이벌+카트',
        '레저3 / B패키지' => '레저3 / B패키지 ATV+서바이벌+수상스키',
        '레저3 / C패키지' => '레저3 / C패키지 ATV+서바이벌+웨이크보드',
        '레저3 / D패키지' => '레저3 / D패키지 ATV+서바이벌+바나나보트',
        '레저3 / E패키지' => '레저3 / E패키지 ATV+서바이벌+더블땅콩보트',
        '레저3 / F패키지' => '레저3 / F패키지 ATV+서바이벌+플라이피쉬' ,
        '레저3 / G패키지' => '레저3 / G패키지 ATV+카트+수상스키',
        '레저3 / H패키지' => '레저3 / H패키지 ATV+카트+웨이크보드',
        '레저3 / I패키지' => '레저3 / I패키지 ATV+카트+바나나보트',
        '레저3 / J패키지' => '레저3 / J패키지 ATV+카트+더블땅콩보트',
        '레저3 / K패키지' => '레저3 / K패키지 ATV+카트+플라이피쉬',
        '레저4 / A패키지' => '레저4 / A패키지 ATV+서바이벌+카트+수상스키',
        '레저4 / B패키지' => '레저4 / B패키지 ATV+서바이벌+카트+웨이크보드' ,
        '레저4 / C패키지' => '레저4 / C패키지 ATV+서바이벌+카트+바나나보트',
        '레저4 / D패키지' => '레저4 / D패키지 ATV+서바이벌+카트+더블땅콩보트',
        '레저4 / E패키지' => '레저4 / E패키지 ATV+서바이벌+카트+플라이피쉬' ,
        '단체 / A패키지' => '단체_A패키지',
        '단체 / B패키지' => '단체_B패키지',
        '단체 / C패키지' => '단체_C패키지',
    ));
/*
|--------------------------------------------------------------------------
| Exit Status Codes
|--------------------------------------------------------------------------
|
| Used to indicate the conditions under which the script is exit()ing.
| While there is no universal standard for error codes, there are some
| broad conventions.  Three such conventions are mentioned below, for
| those who wish to make use of them.  The CodeIgniter defaults were
| chosen for the least overlap with these conventions, while still
| leaving room for others to be defined in future versions and user
| applications.
|
| The three main conventions used for determining exit status codes
| are as follows:
|
|    Standard C/C++ Library (stdlibc):
|       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html
|       (This link also contains other GNU-specific conventions)
|    BSD sysexits.h:
|       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits
|    Bash scripting:
|       http://tldp.org/LDP/abs/html/exitcodes.html
|
*/
defined('EXIT_SUCCESS') || define('EXIT_SUCCESS', 0); // no errors
defined('EXIT_ERROR') || define('EXIT_ERROR', 1); // generic error
defined('EXIT_CONFIG') || define('EXIT_CONFIG', 3); // configuration error
defined('EXIT_UNKNOWN_FILE') || define('EXIT_UNKNOWN_FILE', 4); // file not found
defined('EXIT_UNKNOWN_CLASS') || define('EXIT_UNKNOWN_CLASS', 5); // unknown class
defined('EXIT_UNKNOWN_METHOD') || define('EXIT_UNKNOWN_METHOD', 6); // unknown class member
defined('EXIT_USER_INPUT') || define('EXIT_USER_INPUT', 7); // invalid user input
defined('EXIT_DATABASE') || define('EXIT_DATABASE', 8); // database error
defined('EXIT__AUTO_MIN') || define('EXIT__AUTO_MIN', 9); // lowest automatically-assigned error code
defined('EXIT__AUTO_MAX') || define('EXIT__AUTO_MAX', 125); // highest automatically-assigned error code
