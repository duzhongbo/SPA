var Search = Backbone.View.extend({
	el:$('body'),
	events:{
		'click .search-bt':'click',
		'blur .search-it':'blur',
		'focus .search-it':'focus',
		'click .search-result-a':'showDetail'
	},
	click:function (e) {
		var val = $('.search-it').val(),aRes;
		console.log('click',val);
		if(val== ''||val=='搜索'){
			alert('输入不能为空！');
		}else{
			location.hash='search='+val;
			aRes=com.search(val,aArticle);
			console.log(aRes);
			this.aData = aRes;
			var oData = {
				article:aRes
			}
			$('.search-result-ul').html(this.template(oData));
			$('.search-result').show();
		}
	},
	template:_.template($('#tplSearchArticle').html()),
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
	},
	showDetail:function(e){
		return com.showDetail(e,this.aData);
		console.log("123");
		return false;
	}
});