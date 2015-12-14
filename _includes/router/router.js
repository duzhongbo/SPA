var Workspace = Backbone.Router.extend({
	routes: {
		'':'index',// 只有域名的情况,首页
		'article/:year/:month/:date/:title':'showDetail',// #article/kiwis，文章详情页
		'list':'list'// 列表页
	},
	showDetail:function (year,month,date,title) {
		var url = '/'+year+'/'+month+'/'+date+'/'+title,temp1,temp2;
		for(var i=0,data=aData.article,len=data.length;i<len;i++){
			temp1 = data[i];
			temp2 = decodeURI(temp1.url);
			if(temp2==url){
				$('.article-title').html(temp1.title);
				$('.article-content').html(this.html_decode(temp1.content));
				$('.article-date').html(temp1.date);
				$('.page').hide();
				$('.article').show();
				$('.index').attr('class','index cover oh page');
			}
		}
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
	changeBg:function () {
		var nBg = getCookie('nBg');
		if(!nBg){
			nBg = 0;
		}
		var cls = 'index-bg'+nBg
		$('.index').addClass(cls);
	}
});

var w = new Workspace;
Backbone.history.start();
