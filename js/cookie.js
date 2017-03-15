function AddCare(){
	/*this._url=window.location.href;
	this._identify=parseInt(this._url.match(/n=\d+/g)[0].replace(/n=/g,""));
	var _this=this;
	this.add=function(){
		//alert("ok")
		console.log(_this._identify);
		_this._date=new Date();
		_this._date.setDate(_this._date.getDate()+30)
		document.cookie="user="+_this._identify+";expires="+_this._date;
	}*/
	add();
}
//创建cookie	
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}
//获取cookie
function getCookie(name)
{
	var arr=document.cookie.split('; ');
	var i=0;
	for(i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}
//删除cookie
function removeCookie(name)
{
	setCookie(name, '1', -1);
}
function add(){
	var _url=window.location.href;
	$("#addcare").click(function(){
		if(_url.match(/n=\d+/g)){
			var _identify=parseInt(_url.match(/n=\d+/g)[0].replace(/n=/g,""));
			setCookie("id"+_identify,_identify,30);
			$("#sure").animate({"opacity":"1"},500);
			stop();
			$("#sure").delay(1000).animate({"opacity":"0"},1000);
		}
		
	});
	
	//console.log(getCookie("id"));
	
}