function Shopimg(){
	this._url=window.location.href;
	this._identify=parseInt(this._url.match(/n=\d+/g)[0].replace(/n=/g,""));
	this.topImg1=document.getElementById("topImg1");
	this.topImg2=document.getElementById("topImg2");
	this.hd=document.getElementById("hd");
	this.hubhd=document.getElementById("hubhd");
	this.origin1=document.getElementById("origin1");
	this.origin2=document.getElementById("origin2");
	this.bazz2=document.getElementById("bazz2");
	this.vprice1=document.getElementById("vprice1");
	this.vprice2=document.getElementById("vprice2");
	this.code=document.getElementById("code");
	this.serv=document.getElementById("serv");
	this.garden=document.getElementById("garden");
	this.morms=document.getElementById("sort");
	this.zp=document.getElementById("zs");
	this.bottomLeft=document.getElementById("bottomLeft");
	this.inforTop=document.getElementById("inforTop");
	this.inforBottom=document.getElementById("inforBottom");
	this.infor=document.getElementById("infor");
	this.bottom2=document.getElementById("bottom2");
	this.aa=document.getElementById("aa");
	this.head=document.getElementById("head");
	this.top=document.getElementById("top");
	this.div1=null;
	this.div2=null;
	this.div3=null;
	this.div4=null;
	this.div5=null;
	this.img1=null;
	this.img2=null;
	this.img3=null;
	this.img4=null;
	this.img5=null;
	this.img6=null;
	this.img7=null;
	this.a1=null;
	this.a2=null;
	this.a3=null;
	this.a4=null;
	this.span1=null;
	this.span2=null;
	this.span3=null;
	this.span4=null;
	this.p1=null;
	var _this=this;
	//console.log(this._identify);
	this.shopstar=function(e){
		//console.log(_this.top.offsetHeight);
		$.get("js/shoping.json",null,function(data,textStatus){
			if(textStatus=="success"){
				_this.imgLarge=JSON.stringify(data["shop"+_this._identify]["shopImgLarg"]).split(",").length;
				_this.norms=JSON.stringify(data["shop"+_this._identify]["norms"]).split(",").length;
				_this.looks=JSON.stringify(data["shop"+_this._identify]["look"]["look0"]).split(",").length;
				_this.part1=JSON.stringify(data["shop"+_this._identify]["information"]["part"]).split(",").length;
				_this.part2=JSON.stringify(data["shop"+_this._identify]["information"]["img"]).split(",").length;
				//console.log(JSON.stringify(data["shop"+_this._identify]["shopImgLarg"]).split(",").length);
				for(_this.i=0;_this.i<_this.imgLarge;_this.i++){
					_this.img1=document.createElement("img");
					_this.img1.className="lar hlar"+_this.i;
					_this.img1.src=data["shop"+_this._identify]["shopImgLarg"]["img"+_this.i];
					_this.topImg1.appendChild(_this.img1);
					_this.div2=document.createElement("div");
					_this.topImg2.appendChild(_this.div2);
					_this.a1=document.createElement("a");
					_this.a1.href="imgLarg?n=000"+_this.i;
					_this.div2.appendChild(_this.a1);
					_this.img2=document.createElement("img");
					_this.img2.src=data["shop"+_this._identify]["shopImgSmall"]["img"+_this.i];
					_this.a1.appendChild(_this.img2);
				}
				for(_this.n=0;_this.n<_this.norms;_this.n++){
					_this.span1=document.createElement("span");
					_this.span1.innerHTML=data["shop"+_this._identify]["norms"]["morms"+_this.n];
					_this.morms.appendChild(_this.span1);
					_this.img4=document.createElement("img");
					_this.img4.src="img/shoping/comm/dg-2.png";
					_this.span1.appendChild(_this.img4);
				}
				for(_this.n1=0;_this.n1<_this.looks;_this.n1++){
					_this.div3=document.createElement("div");
					_this.div3.className="lookdiv";
					_this.bottomLeft.appendChild(_this.div3)
					_this.a3=document.createElement("a");
					_this.a3.href="shoping.html?n=00"+_this.n1;
					_this.a3.className="looka";
					_this.div3.appendChild(_this.a3);
					_this.img5=document.createElement("img");
					_this.img5.src=data["shop"+_this._identify]["look"]["look"+_this.n1]["img"];
					_this.a3.appendChild(_this.img5);
					_this.a4=document.createElement("a");
					_this.a4.href="shoping.html?n=00"+_this.n1;
					_this.a4.className="looka2";
					_this.a4.innerHTML=data["shop"+_this._identify]["look"]["look"+_this.n1]["des"];
					_this.div3.appendChild(_this.a4);
					_this.div4=document.createElement("div");
					_this.div4.className="lookspare";
					_this.div3.appendChild(_this.div4);
					_this.span2=document.createElement("span");
					_this.span2.className="lookspan1";
					_this.span2.innerHTML=data["shop"+_this._identify]["look"]["look"+_this.n1]["price"];
					_this.div4.appendChild(_this.span2);
					_this.span3=document.createElement("span");
					_this.span3.className="lookspan2";
					_this.span3.innerHTML="￥";
					_this.div4.appendChild(_this.span3);
					_this.span4=document.createElement("span");
					_this.span4.className="lookspan3";
					_this.span4.innerHTML=data["shop"+_this._identify]["look"]["look"+_this.n1]["cost"];
					_this.div4.appendChild(_this.span4);
				}
				
				for(_this.n2=0;_this.n2<_this.part1;_this.n2++){
					_this.p1=document.createElement("p");
					_this.p1.className="infor"+_this.n2;
					_this.p1.innerHTML=data["shop"+_this._identify]["information"]["part"]["txt"+_this.n2];
					_this.inforTop.appendChild(_this.p1);
				}
				for(_this.n3=0;_this.n3<_this.part2;_this.n3++){
					_this.div5=document.createElement("div");
					_this.div5.className="decor";
					_this.div5.innerHTML=data["shop"+_this._identify]["information"]["state"]["txt"+_this.n3];
					_this.inforBottom.appendChild(_this.div5);
					_this.img6=document.createElement("img");
					_this.img6.src=data["shop"+_this._identify]["information"]["img"]["src"+_this.n3];
					_this.inforBottom.appendChild(_this.img6);
				}
				_this.hd.innerHTML=data["shop"+_this._identify]["brand"];
				_this.hubhd.innerHTML=data["shop"+_this._identify]["sub"];
				_this.origin1.innerHTML=data["shop"+_this._identify]["price"];
				_this.origin2.innerHTML=data["shop"+_this._identify]["discount"];
				_this.bazz2.innerHTML=data["shop"+_this._identify]["const"];
				_this.vprice1.innerHTML=data["shop"+_this._identify]["vip"];
				_this.vprice2.innerHTML=data["shop"+_this._identify]["platina"];
				_this.code.innerHTML=data["shop"+_this._identify]["shopId"];
				_this.serv.innerHTML=data["shop"+_this._identify]["serve"];
				_this.img3=document.createElement("img");
				_this.img3.src=data["shop"+_this._identify]["grade"];
				_this.a2=document.createElement("a");
				_this.a2.href="#";
				_this.a2.innerHTML=data["shop"+_this._identify]["eval"];
				_this.garden.appendChild(_this.img3);
				_this.garden.appendChild(_this.a2);
				_this.zp.innerHTML=data["shop"+_this._identify]["gift"];
				new Model().modelFn();
				new Model().addFn();
			}
		},"json");
		new Fun().fn();
		
	}
}

function Fun(){
	this._smal=document.getElementById("topImg1");
	this._big=document.getElementById("topLarg");
	this._big1=document.getElementById("big");
	this._span=this._smal.getElementsByTagName("div")[0];
	var _this=this;
	this.fn=function(){
		_this._smal.onmouseover=function(){
			_this._big.style.display="block";
			_this._span.style.display="block";
		}
		_this._smal.onmouseout=function(){
			_this._big.style.display="none";
			_this._span.style.display="none";
		}
		_this._smal.onmousemove=function(e){
			_this.e=e||event;
			_this._left=_this.e.clientX-_this._smal.offsetLeft-_this._span.offsetWidth;
			_this._height=_this.e.clientY-_this._smal.offsetTop-_this._span.offsetHeight*1.8;
			if(_this._left<0){
				_this._left=0;
			}else if(_this._left>_this._smal.offsetWidth-_this._span.offsetWidth){
				_this._left=_this._smal.offsetWidth-_this._span.offsetWidth;
			}
			if(_this._height<0){
				_this._height=0;
			}else if(_this._height>_this._smal.offsetHeight-_this._span.offsetHeight){
				_this._height=_this._smal.offsetHeight-_this._span.offsetHeight;
			}
			_this._span.style.left=_this._left+"px";
			_this._span.style.top=_this._height+"px";
			_this._parX=_this._left/(_this._smal.offsetWidth-_this._span.offsetWidth);
			_this._parY=_this._height/(_this._smal.offsetHeight-_this._span.offsetHeight);
			_this._big1.style.left=-_this._parX*(_this._big1.offsetWidth-_this._big.offsetWidth)+"px";
			_this._big1.style.top=-_this._parY*(_this._big1.offsetHeight-_this._big.offsetHeight)+"px";
		}
		
	}
}
function Model(){
	var _this=this;
	this.sort=document.getElementById("sort");
	this.span=this.sort.getElementsByTagName("span");
	//this.img=this.sort.getElementsByTagName("span").getElementsByTagName("img");
	this.txt=this.span.innerHTML;
	this.i=1;
	this.modelFn=function(){
		$(_this.span).click(function(){
			$(_this.span).css({
				"border":"1px solid #595757",
				"height":"20px",
				"width":"43px"
			});
			$("#sort span img").css({
				"display":"none"
			})
			$(this).css({
				"border":"2px solid #dd0000",
				"height":"18px",
				"width":"41px"
			});
			$(this.children[0]).css({
				"display":"block"
			})
			$("#model").html($(this).text())
		})
	}
	this.addFn=function(){
		_this.i=1;
		$("#j_a").click(function(){
			if(_this.i>1){
				_this.i--;
				$(".num input").val(_this.i)
			}else{
				_this.i=1;
				$(".num input").val(_this.i)
			}
			
			//_this.val=parseInt($(".num input").val(_this.i));
			
			
		});
		$("#a_j").click(function(){
			_this.i++;
			$(".num input").val(_this.i)
		});
	}
}

function ClassId(){
	var _this=this;
	this.classid=function(){
		$(".information").click(function(){
			$(".in").css({"display":"none"});
			$("#infor").css({"display":"block"});
			$(".bottom1 div").css({
				"border":"1px solid #c6c6c6",
				"background":"#fff"
			})
			$(".information").css({
				"borderTop":"2px solid #bd1320",
				"background":"#f4f4f4"
			})
		});
		$(".assess").click(function(){
			$(".in").css({"display":"none"});
			$("#ass").css({"display":"block"});
			$(".bottom1 div").css({
				"border":"1px solid #c6c6c6",
				"background":"#fff"
			})
			$(".assess").css({
				"borderTop":"2px solid #bd1320",
				"background":"#f4f4f4"
			})
		});
		$(".ques").click(function(){
			$(".in").css({"display":"none"});
			$("#que").css({"display":"block"});
			$(".bottom1 div").css({
				"border":"1px solid #c6c6c6",
				"background":"#fff"
			})
			$(".ques").css({
				"borderTop":"2px solid #bd1320",
				"background":"#f4f4f4"
			})
		});
		$(".after").click(function(){
			$(".in").css({"display":"none"});
			$("#aft").css({"display":"block"});
			$(".bottom1 div").css({
				"border":"1px solid #c6c6c6",
				"background":"#fff"
			})
			$(".after").css({
				"borderTop":"2px solid #bd1320",
				"background":"#f4f4f4"
			})
		})
	}
}

