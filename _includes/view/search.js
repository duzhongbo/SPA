var Search = Backbone.View.extend({
	el:$('.search'),
	events:{
		'click .search-bt':'click',
		'blur .search-it':'blur',
		'focus .search-it':'focus',
	},
	click:function () {
		var val = $('.search-it').val();
		console.log('click',val);
		if(val== ''||val=='搜索'){
			alert('输入不能为空！');
		}
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