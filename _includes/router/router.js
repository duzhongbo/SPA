var Router = Backbone.Router.extend({
	routes: {
		'':'index',// 只有域名的情况,首页
		'list':'list',// 列表页
		'tags':'tags',// 标签页
		'article/:year/:month/:date/:title':'showDetail',// #article/2015/11/05/xxoo.html文章页
		'search=:keyword':'search'
	},
	index:function () {
		$('.search-it').val('');
		$('.page').hide();
		$('.index').show();
		com.lightCurNav($('.nav-a')[0]);
		this.changeBg();
	},
	list:function () {
		$('.search-it').val('');
		$('.page').hide();
		$('.list').show();
		com.lightCurNav($('.nav-a')[1]);
	},
	tags:function () {
		$('.search-it').val('');
		$('.page').hide();
		$('.tags').show();
		com.lightCurNav($('.nav-a')[2]);
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
		com.lightCurNav();
		$('.search-it').val('');
		var url = (location.hash).split('#article')[1];
		com.filterData(url,aArticle);
	},
	search:function(keyword){
		com.lightCurNav();
		$('.search-it').val(keyword);
		var aRes=com.search(keyword,aArticle);
		if(!aRes.length&&$('.search-result-ul').length){
			$('.search-result').show();
			$('.search-result-ul')[0].outerHTML='<p class="tac fw">找到不到相关文章!</p>';
			return;
		}
		com.searchResult = aRes;
		var v = new ViewSearchResult;
		$('.page').hide();
		$('.search-result').show();
	}
});

