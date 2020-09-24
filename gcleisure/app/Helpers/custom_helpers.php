<?php
if (!function_exists('alert')) {
    function alert($message, $path = null, $type = null)
    {
        $data['userVerification'] = userVerification();

        if ($type == null) {
            $data['message'] = $message ;
            $data['path'] = $path ;
        } elseif ($type == 1 && $data['userVerification']) {
            $data['message'] = $message ;
            $data['path'] = $path ;
        } elseif ($type == 1 && !$data['userVerification']) {
            $data['message'] = '로그인을 해주세요.';
            $data['back'] = true;
        }
        echo view('inc/alert_v', $data);
    }
}

if (!function_exists('confirm')) {
    function confirm($message, $path = null, $type = null)
    {
        $data['userVerification'] = userVerification();
        if ($type == null) {
            $data['message'] = $message ;
            $data['path'] = $path ;
        } elseif ($type == 1 && $data['userVerification']) {
            $data['message'] = $message ;
            $data['path'] = $path ;
        } elseif ($type == 1 && $data['userVerification']) {
            $data['message'] = '로그인을 해주세요.';
            $data['back'] = true;
        }
        echo view('inc/confirm_v', $data);
    }
}

if (!function_exists('userVerification')) {
    function userVerification()
    {
        if (isset($_SESSION['pass'])) {
            $data['userVerification'] = true;
        } else {
            $data['userVerification'] = false;
        }
        return $data['userVerification'];
    }
}

?>