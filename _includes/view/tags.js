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
		// 文章列表子模型
		var Model = Backbone.Model.extend({
			defaults : {
				articleTitle : aArticleTitle,
				article:aArticle
			}
		});
		var model = new Model;
		// 文章列表子视图
		var TagsArticle = Backbone.View.extend({
			initialize:function () {
				var oData = this.model.toJSON();
				this.aData = oData.article;
				$('.tags-articles-ul').html(this.template(oData));
			},
			template:_.template($('#tplTagArticles').html()),
			el:$('.tags-articles-ul'),
			events:{
				'click .tags-articles-a':'showDetail'
			},
			showDetail:function (e) {
				return com.showDetail(e,this.aData);
			}
		});
		var tagsArticle = new TagsArticle({model:model});

		return false;
	}
});

