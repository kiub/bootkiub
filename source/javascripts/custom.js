$(document).ready(function($) {
	var sidebar = $('#leftCol');
	var sidebarContent = $('#leftCol .content');
	var mainbar = $('#mainCol');

	function moveLeftBar(){
		$(this).removeClass('move-left').addClass('move-right');

		$(sidebar).velocity({ translateX: '-=25%', opacity: 0 }, { duration: 500, easing: 'liniar' });
		$(sidebarContent).velocity({ opacity: 0 }, { display: "none", duration: 500, easing: 'liniar' });
		$(mainbar).velocity({ translateX: '-=25%' }, { duration: 500, easing: "liniar" });
	}
	function moveRightBar(){
		$(this).removeClass('move-right').addClass('move-left');

		$(sidebar).velocity({ translateX: '+=25%', opacity: 1 }, { duration: 500, easing: 'liniar' });
		$(sidebarContent).velocity({ opacity: 1 }, { display: "block", duration: 500, easing: 'liniar' });
		$(mainbar).velocity({ translateX: '+=25%' }, { duration: 500, easing: "liniar" });
	}

	function resetAniAvatar(){
		$(this).removeClass('animated pulse rotateOut');
	}

	$('body').on('click', '.move-left', moveLeftBar);
	$('body').on('click', '.move-right', moveRightBar);
});
