function validate_date ( date, delim )
{
	var str = "^[0-9]{1,2}" + delim + "[0-9]{1,2}" + delim + "[0-9]{4}$";
	var pat = new RegExp ( str );
	
	if ( ! pat.test ( date ) )
	{
		return 1;
	}
	else
	{
		var date_components = date.split ( delim );
		
		var day = parseInt ( date_components[0] );
		var month = parseInt ( date_components[1] );
		var year = parseInt ( date_components[2] );
		
		if ( day === 0 || month === 0 || year === 0 )
		{
			return ( day === 0 ) ? ( 2 ) : ( ( month === 0 ) ? ( 3 ) : ( 4 ) );
		}
		else if ( month > 12 )
		{
			return 5;
		}
		else if ( ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) && ( day > 31 ) )
		{
			return 6;
		}
		else if ( ( month === 4 || month === 6 || month === 9 || month === 11 ) && ( day > 30 ) )
		{
			return 7;
		}
		else if ( month === 2  )
		{
			if ( ( year % 4 ) === 0 )
			{
				if ( day > 29 )
				{
					return 8;
				}
			}
			else if ( day > 28 )
			{
				return 9;
			}
		}
	}
	
	return 0;
}

