var vNav = Backbone.View.extend({
	el:$('.nav'),
	events:{
		'click .nav-a':'nav'
	},
	nav:function (e) {
		var target = e.target || e.srcElement;
		var href = $(target).attr('href');
		switch(href){
			case '/':
				location.hash = '';
				break;
			case '/tags':
				console.log('标签页');
				break;
			case '/list':
				location.hash = 'list';
				break;
			default:;
		}
		return false;
	}
});
