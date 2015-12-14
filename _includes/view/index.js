var vIndex = Backbone.View.extend({
	initialize : function () {
		var oData = this.model.toJSON();
		var aData = oData.data;
		this.renderArticleList(oData);
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.index-article-ul').html(this.template(oData));
	},
	template:_.template($('#template').html()),
	el:$('.index'),
	events:{
		'click .index-article-a':'showDetail',
		'click .index-title':'changeBg'
	},
	showDetail:function (e) {// 改变hash值，触发路由显示相应的页面
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		location.hash='article'+url;
		return false;
	},
	aBg:['bg0','bg1','bg2'],
	changeBg:function () {// 切换首页的背景
		var aBg = this.aBg;
		var sOld  = aBg[0];
		var first= aBg.shift();
		aBg.push(first);
		$('.wrap').addClass(aBg[0]).removeClass(sOld);
	},
	nextPage:function (nStart) {// 翻页
		
	}
});
