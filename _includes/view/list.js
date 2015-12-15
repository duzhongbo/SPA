var List = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		this.aData = oData.article;
		this.renderArticleList(oData);
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.list-ul').html(this.template(oData));
	},
	template:_.template($('#tplListArticles').html()),
	el:$('.list-ul'),
	events:{
		'click .list-li-a':'showDetail'
	},
	showDetail:function (e) {
		return com.showDetail(e,this.aData);
	}
})