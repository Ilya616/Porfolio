<?php

$DATA = array();
$DATA[0] = array(
    'name'=>'HTML/CSS','value'=>'50'
);
$DATA[1] = array(
    'name'=>'JavaScript/jQuery','value'=>'60'
);

$DATA[2] = array(
    'name'=>'PHP','value'=>'70'
);

$DATA[3] = array(
    'name'=>'Angular','value'=>'80'
);
sleep (5);
echo json_encode($DATA);


