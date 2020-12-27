<?php

include_once 'db.php';
$menu = selectDB("SELECT title_name FROM menu_titles");
echo json_encode($menu);

