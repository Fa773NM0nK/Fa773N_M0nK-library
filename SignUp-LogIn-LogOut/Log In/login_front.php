<?php

require_once( '../common/common_session.php' );

if ( $_SESSION['logged-in'] == true )
{
	header ( "Location: ../Home/home.php" );
}

?>
