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
	}

}