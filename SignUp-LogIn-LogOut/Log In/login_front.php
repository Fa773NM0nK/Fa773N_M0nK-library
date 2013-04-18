<?php

require_once( '../common/common_session.php' );

if ( isset ( $_SESSION['logged-in'] ) && $_SESSION['logged-in'] == true )
{
	header ( "Location: ../Home/home.php" );
}

?>
