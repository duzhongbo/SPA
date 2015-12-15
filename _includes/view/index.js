var Index = Backbone.View.extend({
	initialize : function () {
		var oData = this.model.toJSON();
		this.aData = oData.article;
		this.renderArticleList(oData);

		//
		var nBg = blog.getCookie('nBg');
		if(nBg){
			nBg++;
			if(nBg>3||nBg==3){
				nBg=0;
			}
		}else{
			nBg=0;
		}
		blog.setCookie('nBg',nBg,365);
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.index-article-ul').html(this.template(oData));
	},
	template:_.template($('#tplIndexArticle').html()),
	el:$('.index'),
	events:{
		'click .index-article-a':'showDetail',
		'click .index-title':'nextPage',
		'click .index-more':'more'
	},
	showDetail:function (e) {// 改变hash值，触发路由显示相应的页面
		return blog.showDetail(e,this.aData);
	},
	page:1,
	nextPage:function () {// 翻页
		if(this.page*3<11){
			this.page+=1;
		}else if(this.page*3>11||this.page*3==11){
			this.page=1;
		}
		var nStart = (this.page - 1)*3;
		var aData = this.aData.slice(nStart,nStart+3);
		var oData = {
			article:aData
		};
		$('.index-article-ul').html(this.template(oData));
	},
	more:function () {
		location.hash = 'list';
		return false;
	}
});
