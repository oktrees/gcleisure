<?php namespace App\Libraries;


class Libraries_lb
{
    public function __construct()
    {
        helper('SimpleHtmlDom_helper');
        $this->encrypter = \Config\Services::encrypter();
        $this->uri = current_url(true);
    }
    public function weather(){
        $url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=날씨';
        $get_curl = $this->curl($url);
        $get_curl = str_get_html($get_curl);
        $dust = $this->_weather_dust($get_curl);
        $weekly = $this->_weather_weekly($get_curl);
        $now = $this->_weather_now($get_curl);

        foreach($dust as $key => $val){
            $weekly[$key]['dust'] = $val;
        }
        $res['now'] = $now;
        $res['now']['dust'] = $this->_weather_now_dust();
        $res['now']['uv'] = $this->_weather_now_uv();
        $res['weekly'] = $weekly;

        return $res;
    }
    private function _weather_now($get_curl){
        $info_list = $get_curl->find('.today_area',0)->find('.main_info',0)->find('.info_data',0)->find('.info_list',0);

        $res['info_text'] = $info_list->children(0)->children(0)->innertext;
        $res['temperature_now'] =$get_curl->find('.today_area',0)->find('.main_info',0)->find('.info_data',0)->find('.todaytemp',0)->innertext;
        $res['temperature_low'] = $info_list->children(1)->children(0)->children(0)->children(0)->innertext ;
        $res['temperature_high'] = $info_list->children(1)->children(0)->children(2)->children(0)->innertext;
        $res['temperature_sensible'] = $info_list->children(1)->children(2)->children(0)->children(0)->innertext;
        $res['precipitation'] = !empty($info_list->children(2)) ? $info_list->children(2)->children(0)->children(0)->children(0)->innertext : null;
        return $res;
    }
    private function _weather_now_dust(){
        $url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=전국미세먼지';
        $get_curl = $this->curl($url);
        $get_curl = str_get_html($get_curl);
        $tr_list = $get_curl->find('.content_box',0)->find('.main_box',0)->find('table',1)->find('tr');
        foreach($tr_list as $key=>$val) {
            if ($key !== 0) {
                $name = $val->children(0)->innerText();
                $num = $val->children(1)->children(0)->innerText();
                if($name === '강원'){
                    if($num < 30){
                        $uv = '좋음';
                        $font_color = '#32a1ff';
                    }else if($num <= 80){
                        $uv = '보통';
                        $font_color = '#00c73c';
                    }else if($num <= 150){
                        $uv = '나쁨';
                        $font_color = '#fd9b5a';
                    }else if($num > 150){
                        $uv = '매우나쁨';
                        $font_color = '#ff5959';
                    }
                    return [
                        'name' => $name,
                        'num' => $num,
                        'lev' => $uv,
                        'font_color' => $font_color,
                    ];
                }
            }
        }
    }
    private function _weather_now_uv(){
        $url = 'https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=전국자외선';
        $get_curl = $this->curl($url);
        $get_curl = str_get_html($get_curl);
        $tr_list = $get_curl->find('.content_box',0)->find('.main_box',0)->find('table',1)->find('tr');
        foreach($tr_list as $key=>$val){
            if($key !== 0){
                $name = $val->children(0)->innerText();
                $num = $val->children(1)->children(0)->innerText();
                if($name === '강원'){
                    if($num < 3){
                        $uv = '낮음';
                        $font_color = '#32a1ff';
                    }else if($num < 6){
                        $uv = '보통';
                        $font_color = '#00c73c';
                    }else if($num < 8){
                        $uv = '높음';
                        $font_color = '#ffc323';
                    }else if($num < 11){
                        $uv = '매우높음';
                        $font_color = '#fd9b5a';
                    }else if($num >= 11){
                        $uv = '위험';
                        $font_color = '#ff5959';
                    }

                    return [
                        'name' => $name,
                        'num' => $num,
                        'lev' => $uv,
                        'font_color' => $font_color,
                    ];
                }
            }
        }
    }

    private function _weather_weekly($get_curl){
        $weather_info = ['','맑음','','','','흐림','','흐림','','비','','','','','','비','','','','','','','흐림'];
        $weekly =  $get_curl->find('._weeklyWeather',0)->find('.list_area',0)->children();
        $res = [];

        foreach($weekly as $key => $val){
            $icon_key = explode('ws',$val->children(1)->children(0)->class)[1];
            if($key === 0){
                $res_obj['day'] = trim($val->children(0)->children(0)->children(0)->innertext,'.');
            }else {
                $res_obj['day'] = trim($val->children(0)->children(0)->innertext,'.');
            }
            $res_obj['week'] = explode(' ',$val->children(0)->innertext)[0];
            $res_obj['temperature_low'] = $val->children(3)->children(1)->children(0)->innertext;
            $res_obj['temperature_high'] = $val->children(3)->children(1)->children(2)->innertext;
            $res_obj['weather_info'] = empty($weather_info[$icon_key]) ? '' : $weather_info[$icon_key];
            array_push($res, $res_obj );
        }
        return $res ;
    }

    private function _weather_dust($get_curl){
        $get_curl->find('.today_area',0)->style = 'display:block;';
        $get_curl->find('.tomorrow_area',0)->style = 'display:block;';
        $get_curl->find('.tomorrow_area.day_after',0)->style = 'display:block;';
        if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv1',0) !== null) {
            $get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv1',0)->find('span',0)->remove();
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv2',0) !== null) {
            $get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv2',0)->find('span',0)->remove();
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv3',0) !== null) {
            $get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv3',0)->find('span',0)->remove();
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv4',0) !== null) {
            $get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv4',0)->find('span',0)->remove();
        }

        if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv1',0) !== null){
            $dust[0] = explode('<',$get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv1',0)->innertext)[0];
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv2',0) !== null){
            $dust[0] = explode('<',$get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv2',0)->innertext)[0];
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv3',0) !== null){
            $dust[0] = explode('<',$get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv3',0)->innertext)[0];
        }else if($get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv4',0) !== null){
            $dust[0] = explode('<',$get_curl->find('.today_area',0)->find('.sub_info',0)->find('.lv4',0)->innertext)[0];
        }else {
            $dust[0] = '-';
        }
        if($get_curl->find('.tomorrow_area',0)->find('.main_info',0)->find('.lv1',0) !== null){
            $dust[1] = explode('<',$get_curl->find('.tomorrow_area',0)->find('.main_info',1)->find('.lv1',0)->innertext)[0];
        }else if($get_curl->find('.tomorrow_area',0)->find('.main_info',0)->find('.lv2',0) !== null){
            $dust[1] = explode('<',$get_curl->find('.tomorrow_area',0)->find('.main_info',1)->find('.lv2',0)->innertext)[0];
        }else if($get_curl->find('.tomorrow_area',0)->find('.main_info',0)->find('.lv3',0) !== null){
            $dust[1] = explode('<',$get_curl->find('.tomorrow_area',0)->find('.main_info',1)->find('.lv3',0)->innertext)[0];
        }else if($get_curl->find('.tomorrow_area',0)->find('.main_info',0)->find('.lv4',0) !== null){
            $dust[1] = explode('<',$get_curl->find('.tomorrow_area',0)->find('.main_info',1)->find('.lv4',0)->innertext)[0];
        }else {
            $dust[1] = '-';
        }

        if(!empty($get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv1',0))){
            $dust[2] = explode('<',$get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv1',0)->innertext)[0];
        }else if(!empty($get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv2',0))){
            $dust[2] = explode('<',$get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv2',0)->innertext)[0];
        }else if(!empty($get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv3',0))){
            $dust[2] = explode('<',$get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv3',0)->innertext)[0];
        }else if(!empty($get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv4',0))){
            $dust[2] = explode('<',$get_curl->find('.tomorrow_area.day_after',0)->find('.main_info',1)->find('.lv4',0)->innertext)[0];
        }else {
            $dust[2] = '-';
        }
        $dust[3] = '-';
        $dust[4] = '-';

        return $dust;
    }
    private function curl($url, $header = 0)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, $header);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $get_curl = curl_exec($ch);
        curl_close($ch);

        return $get_curl;
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
    public function _getSegment($arg)
    {
        try {
            return $this->uri->getSegment($arg);
        }catch (\Exception $e){
            return $this->uri->getSegments();
        }
    }
}
