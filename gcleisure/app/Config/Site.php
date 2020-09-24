<?php namespace Config;

use CodeIgniter\Config\BaseConfig;

class Site extends BaseConfig
{
    public function table() {
        $table = [
            'board' => 'gc_board',
            'reservation' => 'gc_reservation',
        ];
        return (object) $table;
    }
}