<?php


namespace App\Models;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\Model;

class Admin_reservation_m extends Model
{
    protected $table = "gc_reservation";
    protected $primaryKey = 'idx';
    protected $column_order = array('idx', 'title', 'contents', 'date','reservation_date','name','division','type');
    protected $column_search = array('idx', 'title', 'contents', 'date','reservation_date','name','division','type');
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

        $this->dt = $this->db->table($this->table);
        $this->builder = $this->db->table($this->table);
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
            $this->dt->limit($this->request->getPost('length'), $this->request->getPost('start'));
        $query = $this->dt->get();
        return $query->getResult();
    }

    function count_filtered()
    {
        $this->_get_datatables_query();
//        $this->dt->where('type', $this->type);
        return $this->dt->countAllResults();
    }

    public function count_all()
    {
        $tbl_storage = $this->db->table($this->table);
        return $tbl_storage->countAllResults();
    }

    public function reservationAll($type = null)
    {
        try {
            if($type === null){
                $query = $this->builder->get();
                $result = $query->getResult();
            }else if($type === 1){
                $query = $this->builder->orderBy('idx', 'DESC')->get();
                $result = $query->getResult();
            }
            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function reservationPager($limit = 10, $offset = 1)
    {
        try {
            $result = $this->pager(1,$limit, $offset);

            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }
    public function pager($type, $limit= 10, $offset = 1 , $listNum = 10, $navRange = 5 ,$search = null)
    {
        try {
            if($search !== null){
                $this->builder->like($search['type'] ,$search['val']);
            }
            $count = $this->builder->countAllResults() ;
            $totalPage = ceil($count / $limit) ;
            if((int)$offset === 0){
                $offset = $totalPage;
            }
            $selectedPage =  $offset ;
            if($search !== null){
                $this->builder->like($search['type'] ,$search['val']);
            }
            $trCount = $count - ($limit * ($offset-1));
            $query = $this->builder->orderBy('idx', 'DESC')->get($limit, $limit * ($offset-1) );
            $result = $query->getResult();

            foreach($result as $key => $val){
                $val->tr_idx = $trCount ;
                --$trCount;
            }


            $result = $this->pagerSet($result, $selectedPage, $totalPage, $listNum, $navRange);

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

    public function reservationFind($id)
    {
        try {
            $query = $this->builder->getWhere(['idx'=>$id]);
            $result = $query->getResult();
            return $result;
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function reservationInsert($data)
    {
        try {
            $datas = array_merge($data, dateConfig);
            $this->builder->insert($datas);
            return $this->db->insertID();
        } catch (\Exception $e ){
            return $e->getMessage();
        }
    }

    public function reservationModify($data)
    {
        try {
//            $data = array_merge($data, dateConfig);
            $this->builder->where('idx', $data['idx']);
            $this->builder->update($data);
            return $this->db->affectedRows();
        }catch (\Exception $e){
            return $e->getMessage();
        }
    }
    public function reservationDelete($data)
    {
        try {
            $this->delete($data);
            return $data;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
    public function confirmPassword($post){
        $sql = "SELECT * FROM gc_reservation WHERE idx = '". $post['idx'] . "'";
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