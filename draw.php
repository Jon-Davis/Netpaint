<?php
include 'DatabaseAdaptor.php';
if(isset($_POST["newObject"])){
	$object = json_decode($_POST["newObject"],true);
	$DBinstance->addDrawingObject($object);
} else {
	$arr = $DBinstance->getDrawingObjects();
	echo json_encode($arr);
}
?>