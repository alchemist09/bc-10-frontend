$(function(){
	// Highlight Navigation Location
	$('#main-nav a').each(function(i, elem){
		var sCurrHref = elem.href;
		if(document.location.href.indexOf(sCurrHref) == 0) {
			elem.className = 'active-link';
			elem.style.color = '#ffffff';	
		}	
	});
	
	// Hide Nested Navigation 
	$('#main-nav > li > ul').css({
		display: 'none'	
	});
	
	// Implement Hover Functionality
	$('#main-nav > li').hover(
		// Mouse Over
		function() {
			$(this)
			.find('ul.nested-nav')
			.stop(true, true)
			.slideDown(600);
		},
		// Mouse Out
		function() {
			$(this)
			.find('ul.nested-nav')
			.stop(true, true)
			.fadeOut('fast');	
		}
	);
	
	// Show Nested Side Nav
	$('.nested-nav > li > ul.section-nav').css({ display: 'none' });
	
	// Show Level Two Nested Navigation
	$('ul.nested-nav > li').hover(
		// Mouse Over
		function() {
			$(this)
			.find('ul.section-nav')
			.stop(true, true)
			.slideDown(400);	
		},
		// Mouse Out
		function() {
			$(this)
			.find('ul.section-nav')
			.stop(true, true)
			.fadeOut('fast');	
		}
	);
	
	$('#side-nav >li > ul.provider-nav').css({ display: 'none' });
	
	$('#side-nav > li').hover(
		// Mouse Over
		function(){
			$(this)
			.find('ul.provider-nav')
			.stop(true, true)
			.slideDown(400);	
		},
		// Mouse Out
		function(){
			$(this)
			.find('ul.provider-nav')
			.stop(true, true)
			.slideUp('slow');	
		}
	);
	
	// Show The Current Nested Side Navigation as Active
	$('#side-nav a').each(function(i, elem) {
		var sCurrHref = elem.href;
		if(document.location.href.indexOf(sCurrHref) == 0) {
			var oListItem = elem.parentNode;
			if(oListItem.childNodes.length > 1) {
				for ( var j=0; j < oListItem.childNodes.length; j++ ) {
					if(oListItem.childNodes[j].nodeName.toUpperCase() == "UL" &&
					   (oListItem.childNodes[j].className == "nested-nav-side") ||
					   oListItem.childNodes[j].className == "provider-nav")
					{
					   oListItem.childNodes[j].style.display = "block";
					} else {
					   if(oListItem.parentNode.className == "nested-nav-side") {
						  oListItem.parentNode.style.display = 'block';   
					   }	
					}
				}	
			} else {
				var oDeptUL = oListItem.parentNode;
				var oNestedListItem = oDeptUL.parentNode;
				var oNestedNavSide = oNestedListItem.parentNode;
				
				oNestedNavSide.style.display = 'block';
				oDeptUL.style.display = 'block';	
			}
		}
		// Denote Active Link
		if(document.location.href.indexOf(sCurrHref) == 0) {
			elem.style.color = '#fffff';
			elem.style.fontWeight = 'bold';	
		}
	});
		
});