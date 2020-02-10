		var mouseStartX = 0;
		var mouseStartY = 0;
		var dragOffsetX = 0;
		var dragOffsetY = 0;
		var zIndex = 0;
		var dragElement;
		
		initMouse();
		
		function initMouse()
		{
			document.onmousedown = OnMouseDown;
			document.onmouseup = OnMouseUp;
		}
		
		function OnMouseDown( event )
		{
			if ( event == null ) 
				var event = window.event;
			
			if ( event.target != null )
				var element = event.target;
			else
				var element = event.srcElement;

			mouseStartX = event.clientX;
			mouseStartY = event.clientY;
			
			dragOffsetX = getNumber( element.style.left );
			dragOffsetY = getNumber( element.style.top );
			
			element.style.zIndex = zIndex + 1;
			
			dragElement = element;
			
			document.onmousemove = OnMouseMove;

		}
		
		function OnMouseMove( event )
		{
			if ( event == null ) 
				var event = window.event;
			
			dragElement.style.left = ( dragOffsetX + event.clientX - mouseStartX ) + "px";
			dragElement.style.top = ( dragOffsetY + event.clientY - mouseStartY ) + "px";
			
		}
		
		function OnMouseUp( event )
		{
			if ( dragElement != null )
			{
				dragElement.style.zIndex = zIndex++;
				
				document.onmousemove = null;
				dragElement = null;
			}
			
		}
		
		function getNumber( value )
		{
			var number = parseInt( value );
			
			if ( number == null || isNaN( number ) )
				return 0;
			else
				return number;
		}