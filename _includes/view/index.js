var vIndex = Backbone.View.extend({
	initialize : function () {
		var oData = this.model.toJSON();
		this.aData = oData.data;
		this.renderArticleList(oData);

		//
		var nBg = getCookie('nBg');
		if(nBg){
			nBg++;
			if(nBg>3||nBg==3){
				nBg=0;
			}
		}else{
			nBg=0;
		}
		setCookie('nBg',nBg,365);
		this.nBg = nBg;

		this.changeBg();
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.index-article-ul').html(this.template(oData));
	},
	template:_.template($('#template').html()),
	el:$('.index'),
	events:{
		'click .index-article-a':'showDetail',
		'click .index-title':'nextPage'
	},
	showDetail:function (e) {// 改变hash值，触发路由显示相应的页面
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		location.hash='article'+url;
		return false;
	},
	aBg:['bg0','bg1','bg2'],
	changeBg:function () {// 切换首页的背景

		// var aBg = this.aBg;
		// var sOld  = aBg[0];
		// var first= aBg.shift();
		// aBg.push(first);
		var cls = 'bg'+getCookie('nBg')
		$('.wrap').addClass(cls);
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
			data:aData
		};
		$('.index-article-ul').html(this.template(oData));
	}
});
