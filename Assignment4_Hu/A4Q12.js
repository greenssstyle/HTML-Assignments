var slots;
		var swapped;

		function setup()
		{
		slots = new Array(
		[ document.getElementById( "slot00" ),
		document.getElementById( "slot01" ),
		document.getElementById( "slot02" ),
		document.getElementById( "slot03" ) ],
		[ document.getElementById( "slot10" ),
		document.getElementById( "slot11" ),
		document.getElementById( "slot12" ),
		document.getElementById( "slot13" ) ],
		[ document.getElementById( "slot20" ),
		document.getElementById( "slot21" ),
		document.getElementById( "slot22" ),
		document.getElementById( "slot23" ) ],
		[ document.getElementById( "slot30" ),
		document.getElementById( "slot31" ),
		document.getElementById( "slot32" ),
		document.getElementById( "slot33" ) ] );

		placeNumbers();
		}

		function placeNumbers()
		{
		var numbers = new Array();
		var randomLoc;
		var temp;

		for ( var i = 0; i < 16 ; i++ )
		numbers[ i ] = i;

		for ( i= 0; i < 16 ; i++ )
		{
		randomLoc = Math.floor( Math.random() * 15 + 1 );
		temp = numbers[ i ];
		numbers[ i ] = numbers[ randomLoc ];
		numbers[ randomLoc ] = temp;
		}
	
		i = 0;
		for ( var rows = 0; rows < 4; rows++ )
		for ( var cols = 0; cols< 4; cols++ )
		{
		if (numbers[ i ] != 0 )
			slots[ rows ][ cols ].innerHTML = numbers[ i ];
		else
			slots[ rows ][ cols ].innerHTML = ""

		++i;
		}
		}

		function doClick( row, col )
		{
		var top = row - 1;
		var bottom = row + 1;
		var left = col - 1;
		var right = col + 1;

		swapped = false;

		if ( top != -1 && slots[ top ][ col ].innerHTML == "")
		swap( slots[ row ][ col ], slots[ top ][ col ] );
		else if ( right != 4 &&
		slots[ row ][ right ].innerHTML == "")
		swap( slots[ row ][ col ], slots[ row ][ right ] );
		else if ( bottom != 4 &&
		slots[ bottom ][ col ].innerHTML == "")
		swap( slots[ row ][ col ], slots[ bottom ][ col ] );
		else if ( left != -1 &&
		slots[ row ][ left ].innerHTML == "")
		swap( slots[ row ][ col ], slots[ row ][ left ] );
		else
		alert( "You cannot move that number." );

		checkWin();
		}

		function swap( firstSlot, secondSlot )
		{
		swapped = true;
		secondSlot.innerHTML = firstSlot.innerHTML;
		firstSlot.innerHTML = "";
		}

		function checkWin()
		{
		var win = true;

		for ( var i = 0; i < 4; i++ )
		for ( var j = 0; j < 4; j++ )
		if ( !( slots[ i ][ j ].innerHTML == i*4 + j + 1 ) )
		if ( !( i == 3 && j == 3 ) )
		win = false;
		if ( win )
		if ( window.prompt( "Play again?", "yes" ) )
		setup();
		}