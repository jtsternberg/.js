jQuery(document).ready(function($){
	setTimeout( function() {
		var contains = 'bcx.accounts.addOrUpdate';
		var bcx = jQuery('script:contains('+ contains +')');
		if ( ! bcx.length )
			return;

		var textobj = bcx.text().match(/(people.addOrUpdate\()({)([^;]*)}/);
		if ( textobj === null || typeof textobj[3] === 'undefined' )
			return;

		var bcxobj = jQuery.parseJSON( '{'+textobj[3]+'}' );
		if ( typeof bcxobj.name === 'undefined' && typeof bcxobj.email_address === 'undefined' )
			return;

		var behavior = 'todo_assignee_present';
		var $me = $('span[data-behavior='+ behavior +']:contains('+ bcxobj.name +')');
		if ( ! $me.length )
			$me = $('span[data-behavior='+ behavior +']:contains('+ bcxobj.email_address +')');
		if ( ! $me.length )
			return;
		$me.parents('.wrapper').css({
			'background': '#FFFF5C',
			'padding': '5px 8px 5px 30px',
			'border-radius': '15px',
			'margin-left': '-29px'
		});
	}, 1000);
});