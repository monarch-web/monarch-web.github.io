<?php
if(isset($_FILES) && $_FILES['image']['error'] == 0){ 
	$destiation_dir = dirname(__FILE__) .'/uploads/'.$_FILES['image']['name']; 
	move_uploaded_file($_FILES['image']['tmp_name'], $destiation_dir ); 
}
?>