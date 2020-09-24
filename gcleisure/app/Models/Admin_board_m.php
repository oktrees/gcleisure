<?php namespace App\Models;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\Model;

class Admin_board_m extends Model
{
    protected $table = "gc_board";
    protected $primaryKey = 'idx';
    protected $column_order = array('idx', 'title', 'contents', 'date');
    protected $column_search = array('title', 'contents');
    protected $order = array('idx' => 'desc');
    protected $request;
    protected $db;
    protected $dt;

    function __construct(RequestInterface $request)
    {
        parent::__construct();
        $this->db = db_connect();
        $this->request = $request;
        $this->encrypter = \Config\Services::encrypter();

        $this->type = $this->request->getPost('type');

        switch ($this->type) {
            case 'notice' :
                $this->type = 1;
                break;
            case 'question' :
                $this->type = 2;
                break;
            case 'photo' :
                $this->type = 3;
                break;
            case 'reviews' :
                $this->type = 4;
                break;
            default :
                $this->type = 5;
                break;
        }

        $this->dt = $this->db->table($this->table)->where('type', $this->type);
        $this->builder = $this->db->table($this->table);
    }
    public function adminSelect($idx = 0){
        $select_arr = ['idx','id','password','name'];

        $sql = "SELECT * FROM gc_admin ";
        $data = $this->db->query($sql)->getResultArray()[0];
        return $data;
    }

    private function _get_datatables_query()
    {
        $i = 0;
        foreach ($this->column_search as $item) {
            if ($this->request->getPost('search')['value']) {
                if ($i === 0) {
                    $this->dt->groupStart();
                    $this->dt->like($item, $this->request->getPost('search')['value']);
                } else {
                    $this->dt->orLike($item, $this->request->getPost('search')['value']);
                }
                if (count($this->column_search) - 1 == $i)
                    $this->dt->groupEnd();
            }
            $i++;
        }

        if ($this->request->getPost('order')) {
            $this->dt->orderBy($this->column_order[$this->request->getPost('order')['0']['column']], $this->request->getPost('order')['0']['dir']);
        } else if (isset($this->order)) {
            $order = $this->order;
            $this->dt->orderBy(key($order), $order[key($order)]);
        }
    }

    function get_datatables()
    {
        $this->_get_datatables_query();
        if ($this->request->getPost('length') != -1)
            $this->dt->limit($this->request->getPost('length'), $this->request->getPost('start'))->where('type', $this->type);
        $query = $this->dt->get();
        return $query->getResult();
    }

    function count_filtered()
    {
        $this->_get_datatables_query();
        $this->dt->where('type', $this->type);
        return $this->dt->countAllResults();
    }

    public function count_all()
    {
        $tbl_storage = $this->db->table($this->table)->where('type', $this->type);
        return $tbl_storage->countAllResults();
    }
    public function boardFindGallery()
    {
        try {
            $query = $this->builder->orderBy('idx', 'DESC')->getWhere(['type'=>'3']);
            $result = $query->getResult();
            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function boardFindNotice()
    {
        try {
            $query = $this->builder->orderBy('idx', 'DESC')->getWhere(['type'=> 1]);
            $result = $query->getResult();

            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function boardFindInquiry()
    {
        try {
            $query = $this->builder->orderBy('idx', 'DESC')->getWhere(['type'=> 2]);
            $result = $query->getResult();

            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function findNoticeTop()
    {
        try {
            $query = $this->builder->orderBy('idx', 'DESC')->getWhere(['type'=> 1,'is_top'=> 1]);

            $result = $query->getResult();

            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function pager($type, $limit= 10, $offset = 1 , $listNum = 10, $navRange = 5 , $search = null)
    {
        try {
            if($search !== null){
                $this->builder->like($search['type'] ,$search['val']);
            }
            $this->builder->where('type=' . $type);
            $count = $this->builder->countAllResults() ;
            $totalPage = ceil($count / $limit) ;
            if((int)$offset === 0){
                $offset = $totalPage;
            }
            $selectedPage =  $offset ;

            if($search !== null){
                $this->builder->like($search['type'] ,$search['val']);
            }
            $query = $this->builder->orderBy('idx', 'DESC')->getWhere(['type'=>$type],$limit, $limit * ($offset-1) );
            $result = $query->getResult();
            $trCount = $count - ($limit * ($offset-1));
            $comment = [];
            foreach($result as $key => $val){
                $val->tr_idx = $trCount ;
                --$trCount;
                if((int)$type === 2){
                    $sql = "SELECT * FROM gc_comment WHERE p_idx = '". $val->idx ."'" ;
                    $data = $this->db->query($sql)->getResultArray();
                    $comment[$val->idx] =$data;
                }
            }
            $result = $this->pagerSet($result, $selectedPage, $totalPage, $listNum, $navRange);
            $result['comment'] = $comment;
            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function pagerSet($val, $page = 1, $totalPage, $listNum = 10, $navRange = 5 ){

        $listIdx = ($page-1)*$listNum;
        $totalPage = $totalPage;
        $data = $val;
        $navRangeArr = [];


        if(($page-$navRange+1) < 0 ){
            for($i=1; $i<=$navRange; $i++){
                if($i <= $totalPage) {
                    array_push($navRangeArr, $i);
                }
            }
        }else if(($totalPage-$page) < 3){
            for($i=($totalPage-$navRange+1); $i<=$totalPage; $i++){
                if($i > 0){
                    array_push($navRangeArr, $i);
                }
            }
        }else {
            $navRangeIdx = $page - floor($navRange / 2);
            for($i=$navRangeIdx; $i<($navRangeIdx+$navRange); $i++){
                if($i > 0){
                    array_push($navRangeArr, $i);
                }
            }
        }
        return [
            'data' => $data,
            'pager' => [
                'navRange' => $navRangeArr,
                'selectPage' => (int)$page,
                'totalPage' => $totalPage,
            ]
        ];
    }
    public function getCommunityList($limit = 10, $offset = 1)
    {
        try {
            $data = [
                'notice' =>  $this->pager(1,$limit, $offset),
                'inquiry' =>  $this->pager(2,$limit, $offset),
            ] ;

            return $data;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function boardFind($id)
    {
        try {
            $query = $this->builder->getWhere(['idx'=>$id]);
            $result = $query->getResult();
            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function boardInsert($data)
    {
        try {
            $data = array_merge($data, adminConfig);
            if(!empty($data['password'])) {
                $data['password'] = $this->encrypt($data['password']);
            }
            $this->builder->insert($data);
            return $this->db->insertID();
        } catch (\Exception $e ){
            return $e->getMessage();
        }
    }
    public function insertInquiry($data)
    {
        try {
            $data = array_merge($data, inquiryConfig);
            if(!empty($data['password'])) {
                $data['password'] = $this->encrypt($data['password']);
            }
            $this->builder->insert($data);
            return $this->db->insertID();
        } catch (\Exception $e ){
            return $e->getMessage();
        }
    }
    public function deleteInquiry($data)
    {
        try {
            $this->delete($data);
            $this->commentDel($data);
            return $data;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function boardModify($data)
    {
        try {
//            $data = array_merge($data, dateConfig);
            if(!empty($data['password'])) {
                $data['password'] = $this->encrypt($data['password']);
            }
            $this->builder->where('idx', $data['idx']);
            $this->builder->update($data);
            return $this->db->affectedRows();
        }catch (\Exception $e){
            return $e->getMessage();
        }
    }

    public function boardDelete($data)
    {
        try {
            $this->delete($data);
            $this->commentDel($data);
            return $data;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function commentCheck($idx)
    {
        $builder = $this->db->table('gc_comment');
        $query = $builder->getWhere(['p_idx'=>$idx]);
        $result = $query->getResult();
        return $result;
    }

    public function commentDel($idx)
    {
        $builder = $this->db->table('gc_comment');
        $builder->where(['p_idx'=>$idx]);
        $builder->delete();
        return $this->db->affectedRows();
    }

    public function commentInsert($data){
        try{
            $data = array_merge($data, dateConfig);
            $builder = $this->db->table('gc_comment');
            $builder->insert($data);
            $id = $this->db->insertID();

            if($id){
                $query = $builder->getWhere(['idx'=>$id]);
                $result = $query->getResult();
                return $result;
            }

        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function commentModify($data)
    {
        try {
            $data = array_merge($data, dateConfig);
            $builder = $this->db->table('gc_comment');
//            return $data;
            $builder->where('p_idx', $data['p_idx']);
            $builder->update($data);
            return $this->db->affectedRows();
        }catch (\Exception $e){
            return $e->getMessage();
        }
    }

    public function boardUnlinkFind($data)
    {
        $result = $this->find($data);
        return $result;
    }

    public function getPopupList($idx, $search){
        try {
            $data['prev'] =$this->prevView($idx,$search);
            $data['next'] = $this->nextView($idx,$search);
            return $data;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function prevView($idx, $search)
    {
        if(!empty($search['val'])){
            $sql = "SELECT idx,title FROM gc_board WHERE idx < '". $idx ."' AND type = 1 AND ".$search['type']. " LIKE '%".$search['val'] ."%' order by idx desc limit 1" ;
            $data = $this->db->query($sql)->getResultArray();
        }else {
            $sql = "SELECT idx,title FROM gc_board WHERE idx < '". $idx ."'AND type = 1 order by idx desc limit 1" ;
            $data = $this->db->query($sql)->getResultArray();
        }
        if(empty($data)){
            $data = [[
                'idx' => null,
                'title' => '이전글이 없습니다.',
            ]];
        }
        return $data[0];
    }
    public function nextView($idx, $search)
    {
        if(!empty($search['val'])) {
            $sql = "SELECT idx,title FROM gc_board WHERE idx > '" . $idx . "' AND type = 1 AND " . $search['type'] . " LIKE '%" . $search['val'] . "%' limit 1";
            $data = $this->db->query($sql)->getResultArray();
        }else {
            $sql = "SELECT idx,title FROM gc_board WHERE idx > '". $idx ."'AND type = 1  limit 1" ;
            $data = $this->db->query($sql)->getResultArray();
        }
        if(empty($data)){
            $data = [[
                'idx' => null,
                'title' => '다음글이 없습니다.',
            ]];
        }
        return $data[0];
    }

    public function updateViews($idx){
        try {
            $this->builder->set('views','views+1',false)->where('idx', $idx)->update();
        }catch(\Exception $e) {
            return $e;
        }
    }
    public function confirmPassword($post){
        $sql = "SELECT * FROM gc_board WHERE idx = '". $post['idx'] . "'";
        $data = $this->db->query($sql)->getResultArray();
        if($this->decrypt($data[0]['password']) === $post['password']){
            return true;
        }else {
            return false;
        }
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
}