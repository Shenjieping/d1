function main(){
	this.m=function(){
		var _t=new Title();
		_t.title();
	}
	
}

function Title(){
	this.nameTitle=document.getElementById("nameTitle");
	this.passTitle=document.getElementById("passTitle");
	this.codeTitle=document.getElementById("codeTitle");
	this.name=document.getElementById("name");
	this.pass=document.getElementById("pass");
	this.code=document.getElementById("code");
	var _this=this;
	this.title=function(){
		_this.name.onblur=function(){
			_this.nameTitle.style.display="none";
			_this.passTitle.style.display="none";
			_this.codeTitle.style.display="none";
		}
		_this.name.onclick=function(){
			_this.nameTitle.style.display="inline-block";
			_this.passTitle.style.display="none";
			_this.codeTitle.style.display="none";
		}
		_this.pass.onblur=function(){
			_this.nameTitle.style.display="none";
			_this.passTitle.style.display="none";
			_this.codeTitle.style.display="none";
		}
		_this.pass.onclick=function(){
			_this.nameTitle.style.display="none";
			_this.passTitle.style.display="inline-block";
			_this.codeTitle.style.display="none";
		}
		
		_this.code.onclick=function(){
			_this.nameTitle.style.display="none";
			_this.passTitle.style.display="none";
			_this.codeTitle.style.display="inline-block";
		}
		_this.code.onblur=function(){
			_this.nameTitle.style.display="none";
			_this.passTitle.style.display="none";
			_this.codeTitle.style.display="none";
		}
	}
	
}

function main1() {
	$("#inter").click(function() {
		//alert("帐号和密码错误！");
		var user = $("#name").val();
		var pwd_f = $("#pass").val();
		var _params = {
			"user": user,
			"password": pwd_f
		};
		console.log(_params);
		$.post("api/login.php", _params, function(data, textStatus) {
			//console.log(data==0);
			//console.log(data);
			
			try {
				if (data==0) {
					//console.log(data)
					//$("#top").html("<a href=\"login.html\">login</a>");
					alert("帐号和密码错误！");
				} else {
					alert("欢迎:" + data + " 光顾!!");
					window.location.href = "../d1/d1-index.html";
//						$("#login111 a").html="您好";
//						$("#user a").html=data;
				}
				
			} catch (e) {
				alert("忘记密码了吗?");
			}
			
		});
	});
}
	
