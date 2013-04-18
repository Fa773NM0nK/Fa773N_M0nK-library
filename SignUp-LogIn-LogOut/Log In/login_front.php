<?php

if ( $_SESSION['logged-in'] == true )
{
	header ( "Location: ../Home/home.php" );
}

?>
