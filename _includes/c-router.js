var Workspace = Backbone.Router.extend({
	routes: {
		'':'index',// 只有域名的情况,首页
		'article/:year/:month/:date/:title':'showDetail',// #article/kiwis
	},
	showDetail:function (year,month,date,title) {
		var url = '/'+year+'/'+month+'/'+date+'/'+title,temp1,temp2;
		for(var i=0,data=aData.article,len=data.length;i<len;i++){
			temp1 = data[i];
			temp2 = decodeURI(temp1.url);
			if(temp2==url){
				$('.article-title').html(temp1.title);
				$('.article-content').html(html_decode(temp1.content));
				$('.article-date').html(temp1.date);
				$('.article').show();
				$('.index').hide();
				$('.wrap').attr('class','wrap cover')
			}
		}
	},
	index:function () {
		$('.article').hide();
		$('.index').show();
	}
});

var w = new Workspace;
Backbone.history.start();
