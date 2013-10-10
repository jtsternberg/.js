// javascript:var%20contains%20=%20%27bcx.accounts.addOrUpdate%27;var%20bcx%20=%20jQuery(%27script:contains(%27+%20contains%20+%27)%27);if%20(%20!%20bcx.length%20)return;var%20textobj%20=%20bcx.text().match(/(people.addOrUpdate\()({)([^;]*)}/);if%20(%20textobj%20===%20null%20||%20typeof%20textobj[3]%20===%20%27undefined%27%20)return;var%20bcxobj%20=%20jQuery.parseJSON(%20%27{%27+textobj[3]+%27}%27%20);if%20(%20typeof%20bcxobj.name%20===%20%27undefined%27%20&&%20typeof%20bcxobj.email_address%20===%20%27undefined%27%20)return;var%20behavior%20=%20%27todo_assignee_present%27;var%20$me%20=%20$(%27span[data-behavior=%27+%20behavior%20+%27]:contains(%27+%20bcxobj.name%20+%27)%27);if%20(%20!%20$me.length%20)$me%20=%20$(%27span[data-behavior=%27+%20behavior%20+%27]:contains(%27+%20bcxobj.email_address%20+%27)%27);if%20(%20!%20$me.length%20)return;$me.parents(%27.wrapper%27).css({%27background%27:%20%27#FFFF5C%27,%27padding%27:%20%275px%208px%205px%2030px%27,%27border-radius%27:%20%2715px%27,%27margin-left%27:%20%27-29px%27});
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
