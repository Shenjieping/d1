function Main(){
	this.main=function(){
		new Foot().footer();
	}
}
function Foot(){
	this.footer=function(){
		$.get("footer.html",null,function(data,textStatus){
			if(textStatus=="success"){
				$(".foot").append(data);
			}
		})
	}
}

/*function regiser(){
    var _reg={
        "account":/^\w{6,12}$/g,//验证用户账号的长度够不够，并且限制只能字母数字下横线
        "mobile":/^1[345678]\d{9}$/g,//验证手机号
        
        "secret":/^.{6,20}$/g //验证密码
    }
    
    
    document.getElementById("num").onblur=function(){
        _reg.mobile.lastIndex=0;
		if(_reg.mobile.test(this.value)) {
            var _self=this;
            $.post("api/checkUser.php", {"condition": "mobile='" + this.value + "'"}, function (data,textStatus) {
                if (textStatus=="success" && parseInt(data) > 0) {
                    _self.parentNode.children[2].innerHTML = "**手机号码已被占用，请重新输入！！";
                } else {
                    _self.parentNode.children[2].innerHTML = "";
                }
            });
        }else{
            this.parentNode.children[2].innerHTML = "*手机格式不正确！！";
        }
    }
    document.getElementById("reg").onclick=function(){
        var pwd_f=document.getElementById("pass").value;
        var pwd_s=document.getElementById("rpass").value;
        if(pwd_f==pwd_s){
            var _params={
                "mobile":document.getElementById("num").value,
                "secret":document.getElementById("pass").value,
            };
			_reg.mobile.lastIndex=0;
			_reg.secret.lastIndex=0;
            if(_reg.mobile.test(_params.mobile) && _reg.secret.test(_params.secret)) {
                $.post("api/registerUser.php", _params, function (data,textStatus) {
                    if (textStatus=="success" && parseInt(data) > 0) {
                        alert("您已顺利成为会员！！！");
                    } else {
                        alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
                    }
                });
            }else{
                alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
            }
        }else{
            document.getElementById("comment").innerHTML="两次输入的密码不匹配，请重新输入";
        }
    }
}*/
function regist() {
		var _reg = {
	//		"account": /^\w{6,12}$/g, //验证用户账号的长度够不够，并且限制只能字母数字下横线
	//		"mobile": /^1[345678]\d{9}$/g, //验证手机号
	//		"secret": /^.{6,20}$/g //验证密码
			"account": /\w/g, //验证用户账号的长度够不够，并且限制只能字母数字下横线
			"mobile": /^1[345678]\d{9}$/g, //验证手机号
			"secret": /\w/g //验证密码
		}
		
		document.getElementById("num").onblur = function() {
			_reg.account.lastIndex = 0;
			if (_reg.account.test(this.value)) {
				var _self = this;
				/*
				$.post("api/checkUser.php", {
					"condition": "user='" + this.value + "'"
				}, function(data, textStatus) {
					if (textStatus == "success" && parseInt(data) > 0) {
						document.getElementById("iphoneti").innerHTML= "**用户账号已被占用，请重新输入！！";
					} else {
						document.getElementById("iphoneti").innerHTML = "";
					}
				});
				*/
			} 
		}
		
		document.getElementById("reg").onclick = function() {
			var pwd_f = document.getElementById("pass").value;
			var pwd_s = document.getElementById("rpass").value;
			
			if (pwd_f == pwd_s) {
				var _params = {
					"user": document.getElementById("num").value,
					"mobile": document.getElementById("num").value,
					"secret": document.getElementById("pass").value
				};
				//console.log(_params);
				_reg.account.lastIndex = 0;
				_reg.mobile.lastIndex = 0;
			//	_reg.mail.lastIndex = 0;
				_reg.secret.lastIndex = 0;
				//_reg.name.lastIndex = 0;
				
				//if (_reg.account.test(_params.user) && _reg.mobile.test(_params.mobile) &&_reg.secret.test(_params.secret)) {
					
					$.post("api/registerUser.php", _params, function(data, textStatus) {
						console.log(data);
						if (textStatus == "success" && parseInt(data) > 0) {
							
							alert("您已顺利成为会员！！！");
						} else {
							
							alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
						}
						
					});
					
				//} else {
				//	alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
				//}
			} else {
				document.getElementById("tip").innerHTML = "两次输入的密码不匹配，请重新输入";
			}
		}
	}

	

