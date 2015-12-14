// cookie操作
{% include cookie.js %}
// 博客全部数据
{% include data.js %}
$(function () {
	// 导航视图
	{% include view/nav.js %}
	var vNav1 = new vNav;
	
	// 路由与历史管理
	{% include router/router.js %}
	
	// 文章列表模型
	var mArticle = Backbone.Model.extend({
		defaults : {
			data : aData.article
		}
	});
	var mArticle1 = new mArticle;

	// 首页视图
	{% include view/index.js %}
	var vIndex1 = new vIndex({model:mArticle1});

	// 列表页视图
	{% include view/list.js %}
	var vList1 = new vList({model:mArticle1});

});