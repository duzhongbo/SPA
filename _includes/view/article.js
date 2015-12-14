var Article = Backbone.View.extend({
	el:$('.article'),
	events:{
		'click .article-back-a':'backList'
	},
	backList:function () {
		location.hash = 'list';
		return false;
	}
});