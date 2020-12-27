<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST');
header('Access-Control-Allow-Headers: token,Content-Type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');
header('Content-Type: application/json');

$s=file_get_contents('php://input');
$j=json_decode($s);

if(isset($j->name) && !empty($j->name) &&
isset($j->email) && !empty($j->email) &&
isset($j->msg) && !empty($j->msg)){

    $msg = "Mail from :".$j->name."<br>E-mail:".$j->email."<br>".$j->msg;
    $headers = 'MIME-Version: 1.0'."\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8'."\r\n"; 
   
    mail("atol83@mail.ru","Angular form",$msg);
    $data =["status"=> 1];

}
else{
    $data =["status"=> 0];


}

echo json_encode($data);