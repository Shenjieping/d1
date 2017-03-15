function setCookie(name, value, iDay)//创建Cookie
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name)//获取cookie
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

function removeCookie(name)//删除cookie
{
	setCookie(name, '1', -1);
}


function Care(){
	var _this=this;
	this.tr=null;
	this.td1=null;
	this.a1=null;
	this.a2=null;
	this.img=null;
	this.span=null;
	this.span1=null;
	this.span2=null;
	this.span3=null;
	this.span4=null;
	this.span5=null;
	this.span6=null;
	this.img1=null;
	this.img2=null;
	this.txt=null;
	this.addcare=function(){
		_this.list=document.cookie.split("; ");
		console.log(_this.list)
		_this.aa=[];
		for(var k in _this.list){
			_this.aa[k]=_this.list[k].split("=")[1];
		}
		//console.log(_this.aa[0]==="3")
		//console.log(_this.list[0]=="");
		//_this._id=getCookie("id");
		_this.tt=null;
		if(_this.list[0]==[""]){
			_this.tt=false
		}else{
			_this.tt=true;
		}
		//console.log(_this.tt);
		if(_this.tt){
				$.get("js/shoping.json",null,function(data,textStatus){
				if(textStatus=="success"){
					$("#last").css({"display":"none"})
					$("#sh").css({"display":"block"})
					for(_this.x in _this.aa){
						if(_this.aa[_this.x]==="0"||_this.aa[_this.x]==="1"||_this.aa[_this.x]==="2"||_this.aa[_this.x]==="3"||_this.aa[_this.x]==="4"||_this.aa[_this.x]==="5"||_this.aa[_this.x]==="6"||_this.aa[_this.x]==="7"||_this.aa[_this.x]==="8"||_this.aa[_this.x]==="9"){
							_this.tr=document.createElement("tr");
							_this.tr.className="trlist"+_this.x;
							$("#tbd").append(_this.tr);
						}else{
							return
						}
					}
					
					for(_this.i=0;_this.i<7;_this.i++){
						_this.td1=document.createElement("td");
						_this.td1.className="tdlist tdlist"+_this.i;
						$("#tbd tr").append(_this.td1);
					}	
					for(_this.n in _this.aa){
						_this.tbd=document.getElementById("tbd");
						_this.img=document.createElement("img");
						_this.img.src=data["shop"+_this.aa[_this.n]]["shopImgSmall"]["img0"];
						_this.tbd.children[_this.n].children[0].appendChild(_this.img);
						_this.span1=document.createElement("span");
						_this.span1.innerHTML=data["shop"+_this.aa[_this.n]]["sub"];
						_this.tbd.children[_this.n].children[1].appendChild(_this.span1);
						_this.span2=document.createElement("span");
						_this.span2.innerHTML=data["shop"+_this.aa[_this.n]]["shopId"];
						_this.tbd.children[_this.n].children[1].appendChild(_this.span2);
						_this.a1=document.createElement("a");
						_this.a1.innerHTML="删除";
						_this.a1.href="care.html";
						_this.a1.id="delay"+_this.n;
						_this.tbd.children[_this.n].children[1].appendChild(_this.a1);
						_this.a2=document.createElement("a");
						_this.a2.innerHTML="加入收藏";
						_this.a2.href="care.html";
						_this.a2.id="addup"+_this.n;
						_this.tbd.children[_this.n].children[1].appendChild(_this.a2);
						_this.span3=document.createElement("span");
						_this.span3.innerHTML="无";
						_this.tbd.children[_this.n].children[2].appendChild(_this.span3);
						_this.span4=document.createElement("span");
						_this.span4.innerHTML=data["shop"+_this.aa[_this.n]]["const"];
						_this.tbd.children[_this.n].children[3].appendChild(_this.span4);
						_this.span5=document.createElement("span");
						_this.span5.innerHTML=data["shop"+_this.aa[_this.n]]["const"];
						_this.tbd.children[_this.n].children[4].appendChild(_this.span5);
						_this.img1=document.createElement("img");
						_this.img1.className="ja_img";
						_this.img1.src="img/shoping/comm/j_a.png";
						_this.tbd.children[_this.n].children[5].appendChild(_this.img1);
						_this.txt=document.createElement("input");
						_this.txt.value="1";
						_this.txt.type="text";
						_this.txt.className="shoptxt";
						_this.tbd.children[_this.n].children[5].appendChild(_this.txt);
						_this.img2=document.createElement("img");
						_this.img2.className="ji_img";
						_this.img2.src="img/shoping/comm/a_j.png";
						_this.tbd.children[_this.n].children[5].appendChild(_this.img2);
						_this.span6=document.createElement("span");
						_this.span6.innerHTML=(_this.txt.value)*(data["shop"+_this.aa[_this.n]]["const"]);;
						_this.tbd.children[_this.n].children[6].appendChild(_this.span6);
					}
					new Delay().del();
				}
			})
		}else{
			$("#last").css({"display":"block"})
			$("#sh").css({"display":"none"})
		}
		$("#clos").click(function(){
			for(_this.m in _this.aa){
				setCookie("id"+_this.aa[_this.m], "", -1);
				
			}
			return;
		})
		
		$(".totnum").html(_this.aa.length);
		
	}
	
}

function Delay(){
	var _this=this;
	this.del=function(){
		_this.m=1;
		$(".ja_img").click(function(){
			
			if(_this.m>1){
				_this.m--;
				$(".shoptxt").val(_this.m);
			}else{
				_this.m;
				$(".shoptxt").val(_this.m);
			}
			
		})
		$(".ji_img").click(function(){
			_this.m++;
			$(".shoptxt").val(_this.m);
			
		})
		_this.list=document.cookie.split("; ");
		_this.aa=[];
		for(var k in _this.list){
			_this.aa[k]=_this.list[k].split("=")[1];
		}
		//console.log(_this.aa)
		for(_this.a=0;_this.a<_this.aa.length-1;_this.a++){
			$("#delay"+_this.a).click(function(){
				//$(".trlist"+_this.a).remove();
				//alert(_this.aa[_this.a]);
				setCookie("id"+(_this.aa[_this.a]),"",-1)
			})
		}
		
		
	}
}
