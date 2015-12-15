// cookie操作
{% include common.js %}
// 博客全部数据
$(function () {
	// 导航视图
	{% include view/nav.js %}
	var nav = new Nav;
	
	// 博客全部数据
	{% include model/model.js %}
	var model = new Model;
	
	// 路由与历史管理
	{% include router/router.js %}	
	var router = new Router({model:model});
	Backbone.history.start();

	// 首页视图
	{% include view/index.js %}
	var index = new Index({model:model});

	// 列表页视图
	{% include view/list.js %}
	var list = new List({model:model});	

	// 文章页视图
	{% include view/article.js %}
	var article = new Article();

	// 标签视图
	{% include view/tags.js %}
	var tags = new Tags({model:model});
});