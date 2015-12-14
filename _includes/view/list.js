var List = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		this.aData = oData.data;
		this.renderArticleList(oData);
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.list-ul').html(this.template(oData));
	},
	template:_.template($('#tplArticles').html()),

})