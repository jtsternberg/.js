jQuery(document).ready(function($){
	function localcss() {
		console.log( 'localcss', $('link[href*="wp4.css"]').length, $('link[type="text/css"]').length );

		loadCSS( 'http://test.it/wp.org/public_html/style/forum-wp4.css' );
		loadCSS( 'http://test.it/wp.org/public_html/style/wp4.css' );
		// $('link[href*="/wp4.css"]').each(function( index ) {
		// 	// http://test.it/wp.org/public_html/style/wp4.css
		// 	console.log( index + ": " + $( this ).attr('href') );
		// 	$( this ).attr('href', 'http://test.it/wp.org/public_html/style/wp4.css' );
		// });

		// $('link[href*="/forum-wp4.css"]').each(function( index ) {
		// 	// http://test.it/wp.org/public_html/style/forum-wp4.css
		// 	// http://s.wordpress.org/style/forum-wp4.css?ver=11
		// 	console.log( index + ": " + $( this ).attr('href') );
		// 	$( this ).attr('href', 'http://test.it/wp.org/public_html/style/forum-wp4.css' );
		// 	loadCSS( 'http://test.it/wp.org/public_html/style/forum-wp4.css' );

		// });

		// $('link[href*="wp4.css"]').each(function( index ) {
		// 	// http://test.it/wp.org/public_html/style/wp4.css
		// 	console.log( index + ": " + $( this ).attr('href') );
		// 	// $( this ).attr('href', 'http://test.it/wp.org/public_html/style/wp4.css' );
		// });

		function loadCSS( href ) {

			var cssLink = $('<link>');
			$("head").append(cssLink); // IE hack: append before setting href

			cssLink.attr({
				rel:  "stylesheet",
				type: "text/css",
				href: href
			});

		}

	}
	localcss();
});
