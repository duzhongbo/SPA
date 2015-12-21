var Tags = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		$('.tags-ul').html(this.template(oData));
	},
	template:_.template($('#tplTags').html()),
	el:$('.tags'),
	events:{
		'click .tags-a':'showArticles'
	},
	showArticles:function (e) {
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		var tag = url.split('/tag=')[1];
		var aArticleTitle = aData[tag];
		com.aArticleTitle = aArticleTitle;
		var tagsArticle = new ViewTagsArticle();

		return false;
	}
});
// 文章列表子视图
var ViewTagsArticle = Backbone.View.extend({
	initialize:function () {
		var oData = {
			articleTitle:com.aArticleTitle
		}
		$('.tags-articles-ul').html(this.template(oData));
	},
	template:_.template($('#tplTagArticles').html()),
	el:$('.tags-articles-ul'),
	events:{
		'click .tags-articles-a':'showDetail'
	},
	showDetail:function (e) {
		return com.showDetail(e,aArticle);
	}
});

