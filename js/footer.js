function Main(){
	this.main=function(){
		var _f=new LoginFooter();
		_f.loginFooter();
	}
}

function LoginFooter(){
	this.foot=document.getElementById("footer");
	var _this=this;
	this.loginFooter=function(){
		$.get("footer.html",null,function(data,textStatus){
			if(textStatus="success"){
				_this.foot.innerHTML=data;
			}
		})
	}
}
