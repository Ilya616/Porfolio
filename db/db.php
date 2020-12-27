<?php

function connectDB() 
{
	  include_once 'config.php';
       $connect = mysqli_connect(HOST,USER,PASS,DB);
	  if(!$connect) return "Error" ;
	  else return $connect;
}

function selectDB($sql)
  {
    $connect = connectDB();

    if($connect!= "Error")
    {
        $result = mysqli_query($connect, $sql);
   	    return writeSelect($result);
   }
     else echo "Error";

}

function writeSelect($result)
{
   $rows=[];
   while($row = mysqli_fetch_array($result,MYSQLI_ASSOC))
   {
        if($result->num_rows == 1) $rows = $row;
        else array_push($rows, $row);
  }

       return $rows;

}

function updateDB($sql){
$connect = connectDB();

if($connect!= "Error"){
   $result = mysqli_query($connect, $sql);
   	
  }
     else echo "Error";

}


function deleteDB($sql){
     $connect = connectDB();
     
     if($connect!= "Error"){
        $result = mysqli_query($connect, $sql);
             
       }
          else echo "Error";
     
     }






