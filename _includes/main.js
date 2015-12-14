// cookie操作
{% include cookie.js %}
// 博客全部数据
{% include data.js %}
$(function () {
	// 导航视图
	{% include view/nav.js %}
	var nav = new Nav;
	
	// 路由与历史管理
	{% include router/router.js %}	
	var router = new Router;
	Backbone.history.start();
	
	// 文章列表模型
	var Model = Backbone.Model.extend({
		defaults : {
			data : aData.article
		}
	});
	var model = new Model;

	// 首页视图
	{% include view/index.js %}
	var index = new Index({model:model});

	// 列表页视图
	{% include view/list.js %}
	var list = new List({model:model});	



});