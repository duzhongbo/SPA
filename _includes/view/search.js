var Search = Backbone.View.extend({
	el:$('body'),
	events:{
		'click .search-bt':'click',
		'blur .search-it':'blur',
		'focus .search-it':'focus',
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
			$('.search-result').show();
			com.searchResult = aRes;
			var v = new ViewSearchResult;
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
	},
});

var ViewSearchResult = Backbone.View.extend({
	initialize:function () {
		var oData = {
			article:com.searchResult
		}
		this.aData = com.searchResult;
		$('.search-result-ul').html(this.template(oData));
	},
	template:_.template($('#tplSearchArticle').html()),
	el:$('.search-result-ul'),
	events:{
		'click .search-result-a':'showDetail'
	},
	showDetail:function(e){
		return com.showDetail(e,this.aData);
	}
});