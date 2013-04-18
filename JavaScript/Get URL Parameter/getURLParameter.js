/*
	I have no fucking idea how this works.
	
	I just stole it from
		http://stackoverflow.com/a/8463056/1523293
*/

function getURLParameter ( param )
{
	param = param.replace ( /[\[]/, "\\\[" ).replace ( /[\]]/, "\\\]" );
	
	var regexS = "[\\?&]" + param + "=([^&#]*)";
	var regex = new RegExp(regexS);
	
	var results = regex.exec(window.location.href);
	
	if (results == null)
		return "";
	else
		return results[1];
} 

