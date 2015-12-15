var Search = Backbone.View.extend({
	el:$('.search'),
	events:{
		'click .search-bt':'submitSearch'
	},
	submitSearch:function () {
		console.log('search!')
	}
});