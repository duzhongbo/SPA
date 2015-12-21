var Search = Backbone.View.extend({
	el:$('.search'),
	events:{
		'click .search-bt':'click',
		'blur .search-it':'blur',
		'focus .search-it':'focus',
		'keydown':'enter'
	},
	click:function (e) {
		var val = $('.search-it').val(),aRes;
		console.log('click',val);
		if(val== ''||val=='搜索'){
			com.openPop('输入不能为空！');
		}else{
			location.hash='search='+val;
			aRes=com.search(val,aArticle);
			console.log(aRes);
			this.aData = aRes;
			var oData = {
				article:aRes
			}
			$('.page').hide();
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
	enter:function(e){
		if(e && e.keyCode==13){
			this.click(e);
		}
	}
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