function Subject(){
	this.sub=function(){
		var ban=new Banner();
		ban.banne();
		var add=new AddImg();
		add.addImgFirst();
		add.addImgTwo();
		add.addImgThree();
		add.addImgFour();
		add.addImgFive();
		add.addImgSix();
		var top=new MainTop();
		top.maintop();
		
	}
	
}
/*************给banner添加图片********************/
function Banner(){
	var _this=this;
	this.ban=document.getElementById("banner");
	this.div=null;
	this.img=null;
	this.a=null;
	this.btn=null;
	this.banne=function(){
		$.get("js/banner.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i=0;_this.i<6;_this.i++){
					_this.div=document.createElement("div");
					_this.div.className="bannerBox";
					_this.div.style.backgroundImage="url("+data["img"+_this.i]+")";
					_this.div.style.backgroundPosition="-330px 0px";
					//_this.div.style.zIndex=6-_this.i;
					_this.a=document.createElement("a");
					_this.a.href="#";
					_this.a.className="bannerbj";
					_this.btn=document.createElement("span");
					_this.btn.innerHTML=_this.i+1;
					_this.div.appendChild(_this.a);
					$(".bannerImages").append(_this.div);
					$(".btn").append(_this.btn);
				}
				
				Style();
				
			}
			
		},"json")
	}
}
/*************给主体添加图片********************/
function AddImg(){
	this.firstImg=document.getElementById("main-first");
	this.twoImg=document.getElementById("main-two");
	this.threeImg=document.getElementById("main-three");
	this.fourImg=document.getElementById("main-four");
	this.fiveImg=document.getElementById("main-five");
	this.sixImg=document.getElementById("main-six");
	this.div=null;
	this.img=null;
	this.a=null;
	this.aSpan=null;
	this.span=null;
	var _this=this;
	
	this.div2=null;
	this.img2=null;
	this.a2=null;
	this.spanBj2=null;
	this.aSpan21=null;
	this.aSpan22=null;
	this.aSpan23=null;
	this.span2=null;
	
	this.div3=null;
	this.img3=null;
	this.a3=null;
	this.spanBj3=null;
	this.aSpan31=null;
	this.aSpan32=null;
	this.aSpan33=null;
	this.span3=null;
	
	this.div4=null;
	this.img4=null;
	this.a4=null;
	this.spanBj4=null;
	this.aSpan41=null;
	this.aSpan42=null;
	this.aSpan43=null;
	this.span4=null;
	
	this.div5=null;
	this.img5=null;
	this.a5=null;
	this.spanBj5=null;
	this.aSpan51=null;
	this.aSpan52=null;
	this.aSpan53=null;
	this.span5=null;
	
	this.div6=null;
	this.img6=null;
	this.a6=null;
	this.spanBj6=null;
	this.aSpan61=null;
	this.aSpan62=null;
	this.aSpan63=null;
	this.span6=null;
	/*************创意主题********************/
	this.addImgFirst=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n1=0;_this.n1<6;_this.n1++){
					_this.div=document.createElement("div");
					_this.img=document.createElement("img");
					_this.a=document.createElement("a");
					_this.aSpan=document.createElement("span");
					_this.img.src=data["imgFirst"]["mainImg"+_this.n1]["src"];
					_this.a.title=data["imgFirst"]["mainImg"+_this.n1]["title"];
					_this.a.href=data["imgFirst"]["mainImg"+_this.n1]["url"];
					_this.a.target="_blank";
					_this.aSpan.innerHTML=data["imgFirst"]["mainImg"+_this.n1]["title"];
					_this.a.appendChild(_this.img);
					_this.a.appendChild(_this.aSpan);
					_this.div.appendChild(_this.a);
					_this.firstImg.appendChild(_this.div);
				}
			}
		},"json")
	}
	/*************原创设计********************/
	this.addImgTwo=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n2=0;_this.n2<12;_this.n2++){
					_this.div2=document.createElement("div");
					_this.img2=document.createElement("img");
					_this.a2=document.createElement("a");
					_this.spanBj2=document.createElement("span");
					_this.aSpan21=document.createElement("span");
					_this.aSpan22=document.createElement("span");
					_this.aSpan23=document.createElement("span");
					_this.spanBj2.className="spanbj"
					_this.a2.className="spric";
					_this.aSpan21.className="aspan1";
					_this.aSpan22.className="aspan2";
					_this.aSpan23.className="aspan3";
					_this.img2.src=data["imgTwo"]["mainImg"+_this.n2]["src"];
					_this.a2.href=data["imgTwo"]["mainImg"+_this.n2]["url"];
					_this.a2.title=data["imgTwo"]["mainImg"+_this.n2]["title"];
					_this.a2.target="_blank";
					_this.aSpan21.innerHTML=data["imgTwo"]["mainImg"+_this.n2]["title"];
					_this.aSpan22.innerHTML="会员价："
					_this.aSpan23.innerHTML=data["imgTwo"]["mainImg"+_this.n2]["price"];
					_this.a2.appendChild(_this.aSpan21);
					_this.a2.appendChild(_this.aSpan22);
					_this.a2.appendChild(_this.aSpan23);
					_this.div2.appendChild(_this.img2);
					_this.div2.appendChild(_this.a2);
					_this.div2.appendChild(_this.spanBj2);
					_this.twoImg.appendChild(_this.div2);
					
				}
				var _style=new DivStyle();
				_style.twoStyle();
			}
		},"json")
	}
	/*************原创家居********************/
	this.addImgThree=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n3=0;_this.n3<12;_this.n3++){
					_this.div3=document.createElement("div");
					_this.img3=document.createElement("img");
					_this.a3=document.createElement("a");
					_this.spanBj3=document.createElement("span");
					_this.aSpan31=document.createElement("span");
					_this.aSpan32=document.createElement("span");
					_this.aSpan33=document.createElement("span");
					_this.spanBj3.className="spanbj"
					_this.a3.className="spric";
					_this.aSpan31.className="aspan1";
					_this.aSpan32.className="aspan2";
					_this.aSpan33.className="aspan3";
					_this.img3.src=data["imgThree"]["mainImg"+_this.n3]["src"];
					_this.a3.href=data["imgThree"]["mainImg"+_this.n3]["url"];
					_this.a3.title=data["imgThree"]["mainImg"+_this.n3]["title"];
					_this.a3.target="_blank";
					_this.aSpan31.innerHTML=data["imgThree"]["mainImg"+_this.n3]["title"];
					_this.aSpan32.innerHTML="会员价："
					_this.aSpan33.innerHTML=data["imgThree"]["mainImg"+_this.n3]["price"];
					_this.a3.appendChild(_this.aSpan31);
					_this.a3.appendChild(_this.aSpan32);
					_this.a3.appendChild(_this.aSpan33);
					_this.div3.appendChild(_this.img3);
					_this.div3.appendChild(_this.a3);
					_this.div3.appendChild(_this.spanBj3);
					_this.threeImg.appendChild(_this.div3);
				}
				var _style=new DivStyle();
				_style.threeStyle();
			}
		},"json")
	}
	/*************数码宝贝********************/
	this.addImgFour=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n4=0;_this.n4<12;_this.n4++){
					_this.div4=document.createElement("div");
					_this.img4=document.createElement("img");
					_this.a4=document.createElement("a");
					_this.spanBj4=document.createElement("span");
					_this.aSpan41=document.createElement("span");
					_this.aSpan42=document.createElement("span");
					_this.aSpan43=document.createElement("span");
					_this.spanBj4.className="spanbj"
					_this.a4.className="spric";
					_this.aSpan41.className="aspan1";
					_this.aSpan42.className="aspan2";
					_this.aSpan43.className="aspan3";
					_this.img4.src=data["imgFour"]["mainImg"+_this.n4]["src"];
					_this.a4.href=data["imgFour"]["mainImg"+_this.n4]["url"];
					_this.a4.title=data["imgFour"]["mainImg"+_this.n4]["title"];
					_this.a4.target="_blank";
					_this.aSpan41.innerHTML=data["imgFour"]["mainImg"+_this.n4]["title"];
					_this.aSpan42.innerHTML="会员价："
					_this.aSpan43.innerHTML=data["imgFour"]["mainImg"+_this.n4]["price"];
					_this.a4.appendChild(_this.aSpan41);
					_this.a4.appendChild(_this.aSpan42);
					_this.a4.appendChild(_this.aSpan43);
					_this.div4.appendChild(_this.img4);
					_this.div4.appendChild(_this.a4);
					_this.div4.appendChild(_this.spanBj4);
					_this.fourImg.appendChild(_this.div4);
				}
				var _style=new DivStyle();
				_style.fourStyle();
			}
		},"json")
	}
	/*************美妆爆款********************/
	this.addImgFive=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n5=0;_this.n5<10;_this.n5++){
					_this.div5=document.createElement("div");
					_this.img5=document.createElement("img");
					_this.a5=document.createElement("a");
					_this.spanBj5=document.createElement("span");
					_this.aSpan51=document.createElement("span");
					_this.aSpan52=document.createElement("span");
					_this.aSpan53=document.createElement("span");
					_this.spanBj5.className="spanbj"
					_this.a5.className="spric";
					_this.aSpan51.className="aspan1";
					_this.aSpan52.className="aspan2";
					_this.aSpan53.className="aspan3";
					_this.img5.src=data["imgFive"]["mainImg"+_this.n5]["src"];
					_this.a5.href=data["imgFive"]["mainImg"+_this.n5]["url"];
					_this.a5.title=data["imgFive"]["mainImg"+_this.n5]["title"];
					_this.a5.target="_blank";
					_this.aSpan51.innerHTML=data["imgFive"]["mainImg"+_this.n5]["title"];
					_this.aSpan52.innerHTML="会员价："
					_this.aSpan53.innerHTML=data["imgFour"]["mainImg"+_this.n5]["price"];
					_this.a5.appendChild(_this.aSpan51);
					_this.a5.appendChild(_this.aSpan52);
					_this.a5.appendChild(_this.aSpan53);
					_this.div5.appendChild(_this.img5);
					_this.div5.appendChild(_this.a5);
					_this.div5.appendChild(_this.spanBj5);
					_this.fiveImg.appendChild(_this.div5);
				}
				var _style=new DivStyle();
				_style.fiveStyle();
			}
		},"json")
	}
	/*************个性配饰********************/
	this.addImgSix=function(){
		$.get("js/mainImg.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.n6=0;_this.n6<12;_this.n6++){
					_this.div6=document.createElement("div");
					_this.img6=document.createElement("img");
					_this.a6=document.createElement("a");
					_this.spanBj6=document.createElement("span");
					_this.aSpan61=document.createElement("span");
					_this.aSpan62=document.createElement("span");
					_this.aSpan63=document.createElement("span");
					_this.spanBj6.className="spanbj"
					_this.a6.className="spric";
					_this.aSpan61.className="aspan1";
					_this.aSpan62.className="aspan2";
					_this.aSpan63.className="aspan3";
					_this.img6.src=data["imgSix"]["mainImg"+_this.n6]["src"];
					_this.a6.href=data["imgSix"]["mainImg"+_this.n6]["url"];
					_this.a6.title=data["imgSix"]["mainImg"+_this.n6]["title"];
					_this.a6.target="_blank";
					_this.aSpan61.innerHTML=data["imgSix"]["mainImg"+_this.n6]["title"];
					_this.aSpan62.innerHTML="会员价："
					_this.aSpan63.innerHTML=data["imgSix"]["mainImg"+_this.n6]["price"];
					_this.a6.appendChild(_this.aSpan61);
					_this.a6.appendChild(_this.aSpan62);
					_this.a6.appendChild(_this.aSpan63);
					_this.div6.appendChild(_this.img6);
					_this.div6.appendChild(_this.a6);
					_this.div6.appendChild(_this.spanBj6);
					_this.sixImg.appendChild(_this.div6);
				}
				var _style=new DivStyle();
				_style.sixStyle();
			}
		},"json")
	}
	
}
/*******************banner的轮播图***********************/
function Ban(){
	this.br=document.getElementById("banner").getElementsByTagName("div");
	console.log(this.br.length);
}
function Style(){
	var i=0;
	var _timer=0;
	function delay(){
		$("#btn span").eq(i).css("background-color","#000");
		$("#images .bannerBox").eq(i).css({
			"display":"none",
			"opacity":0.3
		});
		i++;
		if(i>=$("#images .bannerBox").size()){
			i=0;
		}
		$("#images .bannerBox").eq(i).css("display","block");
		$("#btn span").eq(i).css("background-color","red");
		player(true);
	}
	//主体函数，让图片自动播放
	function player(_cmd){
		$("#btn span").eq(i).css("background-color","red");
		$("#images .bannerBox").eq(i).animate({
			"opacity":1,
		},600,function(){
			if(_cmd){
				window.clearTimeout(_timer);
				_timer=window.setTimeout(delay,2000);
			}else{
				$("#images a").eq(i).stop();
				window.clearTimeout(_timer);
			}
		});
	}
	player(true);
	
	function eventHandle(_current){
		$("#images .bannerBox").eq(i).finish();
		$("#images .bannerBox").css({
			"display":"none",
			"opacity":0.3
		});
		$("#btn span").css({
			"background-color":"#000"
		});
		$(_current).css({
			"background-color":"red"
		});
		i=$(_current).index();
		$("#images .bannerBox").eq(i).css({
			"display":"block"
		});
		window.clearTimeout(_timer);
		player(false);
	}
	$(".banner").mouseenter(function(){
		window.clearTimeout(_timer);
		$("#images .bannerBox").eq(i).stop();
		$("#arrow").show();
	});
	$(".banner").mouseleave(function(){
		player(true);
		$("#arrow").hide();
	});
	$("#btn span").mouseenter(function(){
		eventHandle(this);
	});
	$("#arrow div .btnLeft").click(function(){
		eventHandle($("#btn span").eq(--i)[0]);
	});
	$("#arrow div .btnRight").click(function(){
		eventHandle($("#btn span").eq(++i)[0]);
	});
}
/****************给div设置样式**************************/
function DivStyle(){
	this.firstImg=document.getElementById("main-first");
	this.twoImg=document.getElementById("main-two");
	this.threeImg=document.getElementById("main-three");
	this.fourImg=document.getElementById("main-four");
	this.fiveImg=document.getElementById("main-five");
	this.sixImg=document.getElementById("main-six");
	var _this=this;
	this.twoStyle=function(){
		_this.twoImgDiv=_this.twoImg.getElementsByTagName("div");
		//console.log(_this.twoImgDiv)
		(function move1(){
			window.clearTimeout(_this.timer);
			_this.bottom+=1;
			for(_this.i=0;_this.i<_this.twoImgDiv.length;_this.i++){
				
				_this.twoImgDiv[_this.i].onmouseover=function(){
					this.children[2].style.display="block";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"0px"},200);
					$(this.children[1].children[0]).css({"color":"#cd0074"});
				}
				_this.twoImgDiv[_this.i].onmouseout=function(){
					this.children[2].style.display="none";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"-68px"},200);
					$(this.children[1].children[0]).css({"color":"#2c3e50"});
				}
			}
			_this.timer=window.setTimeout(move1,30);
		})()
	}
	this.threeStyle=function(){
		_this.threeImgDiv=_this.threeImg.getElementsByTagName("div");
		//console.log(_this.twoImgDiv)
		(function move2(){
			window.clearTimeout(_this.timer);
			for(_this.i=0;_this.i<_this.threeImgDiv.length;_this.i++){
				
				_this.threeImgDiv[_this.i].onmouseover=function(){
					this.children[2].style.display="block";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"0px"},200)
					$(this.children[1].children[0]).css({"color":"#cd0074"});
				}
				_this.threeImgDiv[_this.i].onmouseout=function(){
					this.children[2].style.display="none";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"-68px"},200)
					$(this.children[1].children[0]).css({"color":"#2c3e50"});
				}
			}
			_this.timer=window.setTimeout(move2,30);
		})()
	}
	this.fourStyle=function(){
		_this.fourImgDiv=_this.fourImg.getElementsByTagName("div");
		//console.log(_this.twoImgDiv)
		(function move3(){
			window.clearTimeout(_this.timer);
			for(_this.i=0;_this.i<_this.fourImgDiv.length;_this.i++){
				
				_this.fourImgDiv[_this.i].onmouseover=function(){
					this.children[2].style.display="block";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"0px"},200)
					$(this.children[1].children[0]).css({"color":"#cd0074"});
				}
				_this.fourImgDiv[_this.i].onmouseout=function(){
					this.children[2].style.display="none";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"-68px"},200);
					$(this.children[1].children[0]).css({"color":"#2c3e50"});
				}
			}
			_this.timer=window.setTimeout(move3,30);
		})()
	}
	this.fiveStyle=function(){
		_this.fiveImgDiv=_this.fiveImg.getElementsByTagName("div");
		//console.log(_this.twoImgDiv)
		(function move4(){
			window.clearTimeout(_this.timer);
			for(_this.i=0;_this.i<_this.fiveImgDiv.length;_this.i++){
				
				_this.fiveImgDiv[_this.i].onmouseover=function(){
					this.children[2].style.display="block";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"0px"},200)
					$(this.children[1].children[0]).css({"color":"#cd0074"});
				}
				_this.fiveImgDiv[_this.i].onmouseout=function(){
					this.children[2].style.display="none";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"-68px"},200);
					$(this.children[1].children[0]).css({"color":"#2c3e50"});
				}
			}
			_this.timer=window.setTimeout(move4,30);
		})()
	}
	this.sixStyle=function(){
		_this.sixImgDiv=_this.sixImg.getElementsByTagName("div");
		//console.log(_this.twoImgDiv)
		(function move5(){
			window.clearTimeout(_this.timer);
			for(_this.i=0;_this.i<_this.sixImgDiv.length;_this.i++){
				
				_this.sixImgDiv[_this.i].onmouseover=function(){
					this.children[2].style.display="block";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"0px"},200)
					$(this.children[1].children[0]).css({"color":"#cd0074"});
				}
				_this.sixImgDiv[_this.i].onmouseout=function(){
					this.children[2].style.display="none";
					$(this.children[1]).stop();
					$(this.children[1]).animate({"bottom":"-68px"},200);
					$(this.children[1].children[0]).css({"color":"#2c3e50"});
				}
			}
			_this.timer=window.setTimeout(move5,30);
		})()
	}
}
/***************设置导航菜单**********************/
function MainTop(){
	this.mainTopUl=document.getElementById("mainBox");
	this.timer=null;
	var _this=this;
	this.maintop=function(e){
			//console.log(document.body.scrollTop);
		//$("#mainTopUl li:nth-child(2) a").css({"background-color":"#cd0074"});
		_this.timer=setInterval(function(){
			_this.scrolltop=document.body.scrollTop
			if(_this.scrolltop>726){
				$("#main-top").css({"position":"fixed"});
				$("#main-top").animate({"top":"0px"},1000);
			}else {
				$("#main-top").css({"position":"absolute","top":"0px"});
				
			}
		},30)
		//console.log(document.body.scrollTop);
		
		 $('#mainTopUl li:nth-child(2)').click(function(){
		 	var i=$('.main').children().eq($(this).index()).offset().top;
                $(document).scrollTop(i-1200); 
                $("#main-top").css({"position":"fixed"});
				$("#main-top").animate({"top":"0px"},1000);
				$("#mainTopUl li").css({"background-color":"rgba(238,238,238,0.7)","color":"#000"})
				$(this).css({"background-color":"#cd0074","color":"#fff"});
            }) 
          $('#mainTopUl li:nth-child(1)').click(function(){
		 	var i=$('.main').children().eq($(this).index()).offset().top;
                $(document).scrollTop(i-1300);
                $("#main-top").css({"position":"absolute"});
				$("#main-top").animate({"top":"0px"},1000);
				$("#mainTopUl li").css({"background-color":"rgba(238,238,238,0.7)","color":"#000"})
				$(this).css({"background-color":"#cd0074","color":"#fff"});
            }) 
           $('#mainTopUl li:nth-child(3),#mainTopUl li:nth-child(4),#mainTopUl li:nth-child(5),#mainTopUl li:nth-child(6),#mainTopUl li:nth-child(7)').click(function(){
		 	var i=$('.main').children().eq($(this).index()).offset().top;
                $(document).scrollTop(i-1700); 
               $("#main-top").css({"position":"fixed"});
				$("#main-top").animate({"top":"0px"},1000);
				$("#mainTopUl li").css({"background-color":"rgba(238,238,238,0.7)","color":"#000"})
				$(this).css({"background-color":"#cd0074","color":"#fff"});
            })
		
	}
}
