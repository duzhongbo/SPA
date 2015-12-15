var Router = Backbone.Router.extend({
	routes: {
		'':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags'// 标签页
	},
	index:function () {
		$('.page').hide();
		$('.index').show();
		this.changeBg();
	},
	list:function () {
		$('.page').hide();
		$('.list').show();
	},
	tags:function () {
		$('.page').hide();
		$('.tags').show();
	},
	changeBg:function () {
		var nBg = blog.getCookie('nBg');
		if(!nBg){
			nBg = 0;
		}
		var cls = 'index-bg'+nBg
		$('.index').addClass(cls);
	}
});

