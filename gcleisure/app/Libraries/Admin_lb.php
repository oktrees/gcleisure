<?php


namespace App\Libraries;


class Admin_lb
{
    public function __construct()
    {
        $this->uri = current_url(true);
        $this->db = \Config\Database::connect();
        $this->encrypter = \Config\Services::encrypter();
    }

    public function _getSegment($arg)
    {
        try {
            return $this->uri->getSegment($arg);
        }catch (\Exception $e){
            return $this->uri->getSegments();
        }
    }

    public function _getData($arg)
    {
        try {
            $builder = $this->db->table('gc_board');
            $query   = $builder->get();
            $result = $query->getResultArray();
            return $result;
        }catch (\Exception $e){
            return null;
        }
    }
    public function validation_login($data, $validation_data){
        $res = [];
        $validation_data['password'] = $this->decrypt($validation_data['password']);
        $_SESSION['isValidation'] = true;
        if($data['id'] === ''){
            $res['error']['message'] = '아이디를 입력해주세요.';
            $_SESSION['isValidation'] = false;
        }else if($data['password'] === ''){
            $res['error']['message'] = '비밀번호를 입력해주세요.';
            $_SESSION['isValidation'] = false;
        }else if($data['id'] !== $validation_data['id']){
            $res['error']['message'] = '아이디가 일치하지 않습니다.';
            $_SESSION['isValidation'] = false;
        }else if($data['password'] !== $validation_data['password']){
            $res['error']['message'] = '비밀번호가 일치하지 않습니다.';
            $_SESSION['isValidation'] = false;
        }else {
            $_SESSION['isValidation'] = true;
            $_SESSION['id'] = $validation_data['id'];
            $_SESSION['name'] = $validation_data['name'];
        }
        return $res;
    }

    //비밀번호 암호화
    public function encrypt($password)
    {
        return base64_encode($this->encrypter->encrypt($password));
    }
    //비밀번호 복호화
    public function decrypt($password)
    {
        return $this->encrypter->decrypt(base64_decode($password));
    }
    public function gcLeigureGallerySrc($data){
        $res = [];
        foreach($data as $key => $val){
            $val = str_get_html($val->contents);
            array_push($res, $val->find('img',0)->src);
        }
        return $res;
    }
}