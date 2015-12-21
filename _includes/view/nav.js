

var Nav = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		$('.nav-inner').html(this.template(oData));
	},
	template:_.template($('#tplNav').html()),
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
				com.lightCurNav(target);
				break;
			case '/tags':
				location.hash = 'tags';
				com.lightCurNav(target);
				break;
			case '/list':
				location.hash = 'list';
				com.lightCurNav(target);
				break;
			default:;
		}
		return false;
	}
});
