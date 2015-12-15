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
		var aArticle = aData[tag];
		var Model = Backbone.Model.extend({
			defaults : {
				article : aArticle,
			}
		});
		var model = new Model;
		var TagsArticle = Backbone.View.extend({
			initialize:function () {
				var oData = this.model.toJSON();
				$('.tags-articles-ul').html(this.template(oData));
			},
			template:_.template($('#tplTagArticles').html())
		});
		var tagsArticle = new TagsArticle({model:model});

		return false;
	}
});

