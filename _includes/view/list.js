var List = Backbone.View.extend({
	initialize:function () {
		var oData = this.model.toJSON();
		this.aData = oData.article;
		this.renderArticleList(oData);
	},
	renderArticleList:function (oData) {// 渲染文章列表
		$('.list-ul').html(this.template(oData));
	},
	template:_.template($('#tplArticles').html()),
	el:$('.list-ul'),
	events:{
		'click .list-li-a':'showDetail'
	},
	showDetail:function (e) {
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
	}
})