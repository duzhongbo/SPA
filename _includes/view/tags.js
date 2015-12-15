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
		console.log(url);
		return false;
	}
});