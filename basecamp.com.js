jQuery(document).ready(function($){
	setTimeout( function() {
		var bcx = $('script:contains("bcx.accounts.addOrUpdate")');
		if ( ! bcx.length )
			return;

		var textobj = bcx.text().match(/(people.addOrUpdate\()({)([^;]*)}/);
		if ( textobj === null || typeof textobj[3] === 'undefined' )
			return;

		var bcxobj = jQuery.parseJSON( '{'+textobj[3]+'}' );
		if ( typeof bcxobj.name === 'undefined' )
			return;

		var $me = $('span[data-behavior="todo_assignee_present"]:contains("'+ bcxobj.name +'")');
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
