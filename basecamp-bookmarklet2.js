// javascript:var%20name%20=%20prompt(%20%27Search%20Name:%27%20);if%20(name%20!==%20null)%20{var%20behavior%20=%20%27todo_assignee_present%27;var%20$me%20=%20$(%27span[data-behavior=%27+%20behavior%20+%27]:contains(%27+%20name%20+%27)%27);if%20(%20!%20$me.length%20)$me%20=%20$(%27span[data-behavior=%27+%20behavior%20+%27]:contains(%27+%20name%20+%27)%27);if%20(%20!%20$me.length%20)return;$me.parents(%27.wrapper%27).css({%27background%27:%20%27#A4FF5C%27,%27padding%27:%20%275px%208px%205px%2030px%27,%27border-radius%27:%20%2715px%27,%27margin-left%27:%20%27-29px%27});}
var name = prompt( 'Search Name:' );

if (name !== null) {

	var behavior = 'todo_assignee_present';
	var $me = $('span[data-behavior='+ behavior +']:contains('+ name +')');
	if ( ! $me.length )
		$me = $('span[data-behavior='+ behavior +']:contains('+ name +')');
	if ( ! $me.length )
		return;
	$me.parents('.wrapper').css({
		'background': '#A4FF5C',
		'padding': '5px 8px 5px 30px',
		'border-radius': '15px',
		'margin-left': '-29px'
	});
}