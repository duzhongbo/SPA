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
		if(val== ''){
			com.openPop('输入不能为空！');
		}else{
			location.hash='search='+val;
			aRes=com.search(val,aArticle);
			if(!aRes.length&&$('.search-result-ul').length){
				$('.search-result').show();
				$('.search-result-ul')[0].outerHTML='<p class="tac fw">找到不到相关文章!</p>';
				return;
			}
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
			$('.search-it').val('');
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