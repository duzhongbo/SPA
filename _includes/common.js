var blog={
	setCookie:function (name, value, iDay) {
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';expires='+oDate;
	},
	getCookie:function (name) {
		var arr=document.cookie.split(';');
		for(var i=0;i<arr[i].length;i++){
			var arr2=arr[i].split('=');
			if(arr2[0]==name){
			  return arr2[1];
			}
			return '';
		}
	},
	removeCookie:function (name) {
		setCookie(name, 1, -1);
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
	showDetail:function (e,aData) {// 点击文章标题时的回调
		var target = e.target || e.srcElement;
		var url = $(target).attr('href');
		location.hash='article'+url;
		this.filterData(url,aData);
		return false;
	},
	filterData:function (sUrl,aData) {// 根据url遍历搜索数组
		var temp1,temp2
		for(var i=0,len=aData.length;i<len;i++){
			temp1 = aData[i];
			temp2 = decodeURI(temp1.url);
			if(temp2==sUrl){
				$('.article-title').html(temp1.title);
				$('.article-content').html(this.html_decode(temp1.content));
				$('.article-date').html(temp1.date);
				$('.page').hide();
				$('.article').show();
				$('.index').attr('class','index cover oh page');
				break;
			}
		}		
	},
}