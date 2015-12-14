var Index = Backbone.View.extend({
	initialize : function () {
		var oData = this.model.toJSON();
		this.aData = oData.article;
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
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.index-article-ul').html(this.template(oData));
	},
	template:_.template($('#template').html()),
	el:$('.index'),
	events:{
		'click .index-article-a':'showDetail',
		'click .index-title':'nextPage',
		'click .index-more':'more'
	},
	showDetail:function (e) {// 改变hash值，触发路由显示相应的页面
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		location.hash='article'+url;
		this.filterData(url);
		return false;
	},
	filterData:function (sUrl) {
		for(var i=0,data=this.aData,len=data.length;i<len;i++){
			temp1 = data[i];
			temp2 = decodeURI(temp1.url);
			if(temp2==sUrl){
				$('.article-title').html(temp1.title);
				$('.article-content').html(this.html_decode(temp1.content));
				$('.article-date').html(temp1.date);
				$('.page').hide();
				$('.article').show();
				$('.index').attr('class','index cover oh page');
			}
		}		
	},
	html_decode:function (str) {// 将已经转义的html标签重新转回
		var s = "";   
		if (str.length == 0) return "";   
		s = str.replace(/&gt;/g, ">");   
		s = s.replace(/&lt;/g, "<");   
		s = s.replace(/&nbsp;/g, " ");   
		s = s.replace(/&quot;/g, "\"");   
		s = s.replace(/<br>/g, "\n");
		s = s.replace(/class/g,' class');
		s = s.replace(/src/g,' src');
		return s;   
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
