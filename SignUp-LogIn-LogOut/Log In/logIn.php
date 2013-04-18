<?php

require_once ( '../common/common_database.php' );

?>

<?php

$err_no = 0;

$query = "SELECT * FROM `user_auth` WHERE `username`=:username";
$stmt = $dbh->prepare ( $query );
$stmt->bindParam ( ":username", $_POST['username'] );
$stmt->execute ( );

if ( $stmt->rowCount ( ) == 0 )
{
	$err_no = 1;
}
else
{
	$rslt = $stmt->fetch ( );
	
	if ( hash ( "sha256", ( $_POST['password'] . "F()(K()" ) ) == $rslt['password'] )
	{
		session_destroy ( );
		session_start ( );
		
		$_SESSION['logged-in'] = true;
		$_SESSION['id'] = $rslt['ID'];
		
		$err_no = 0;
	}
	else
	{
		$err_no = 2;
	}
}

?>

<?php

if ( $err_no == 0 )
{
	
}
else if ( $err_no == 1 )
{
	
}
else if ( $err_no == 2 )
{
	
}
else
{
	
}

?>
