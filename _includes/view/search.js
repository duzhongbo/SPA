var Search = Backbone.View.extend({
	el:$('.search'),
	events:{
		'click .search-bt':'click',
		'blur .search-it':'blur',
		'focus .search-it':'focus',
	},
	click:function () {
		console.log('click');
	},
	blur:function () {
		var val = $('.search-it').val();
		if(val==''){
			$('.search-it').val('搜索');
		}
	},
	focus:function () {
		var val = $('.search-it').val();
		if(val=='搜索'){
			$('.search-it').val('');
		}
	}
});