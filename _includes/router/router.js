var Router = Backbone.Router.extend({
	routes: {
		'':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags',// 标签页
		'article/:year/:month/:date/:title':'showDetail',// #article/2015/11/05/xxoo.html文章页
		'search=:keyword':'search'
	},
	index:function () {
		$('.page').hide();
		$('.index').show();
		this.changeBg();
	},
	list:function () {
		$('.page').hide();
		$('.list').show();
	},
	tags:function () {
		$('.page').hide();
		$('.tags').show();
	},
	changeBg:function () {
		var nBg = com.getCookie('nBg');
		if(!nBg){
			nBg = 0;
		}
		var cls = 'index-bg'+nBg
		$('.index').addClass(cls);
	},
	showDetail:function () {
		var url = (location.hash).split('#article')[1];
		com.filterData(url,aArticle);
	},
	search:function(keyword){
		var aRes=com.search(keyword,aArticle);
		console.log(aRes);
		com.searchResult = aRes;
		var v = new ViewSearchResult;
		$('.search-result').show();
	}
});

