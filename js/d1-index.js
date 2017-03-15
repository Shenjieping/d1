function Main(){
	this.main=function(){
		var _head=new Head();
		_head.header();
		var _foot=new Foot();
		_foot.footer();
	}
	
	
}
function Fun(){
	this.fn=function(){
		var n=new Accound();
		n.nav();
		var _list=new ListCare();
		_list.list();
		var _all=new AllShop();
		_all.shop();
		var _add=new AddShop();
		_add.addFirstTop();
		_add.addFirstBottom();
		_add.addTwoTop();
		_add.addTwoBottom();
		_add.addThreeTop();
		_add.addThreeBottom();
		_add.addFour();
	}
}
function Head(){
	var _this=this;
	this.header=function(){
		_this.head=document.getElementById("head");
		$.get("head.html",null,function(data,textStatus){
			if(textStatus=="success"){
				_this.head.innerHTML=data;
				new Fun().fn();
			}
		},"text")
	}
}

function Foot(){
	var _this=this;
	this.footer=function(){
		_this.footer=document.getElementById("footer");
		$.get("footer.html",null,function(data,textStatus){
			if(textStatus=="success"){
				_this.footer.innerHTML=data;
			}
		},"text")
	}
}
function Accound(){
	
	this._accound=document.getElementById("myAccound");
	var _this=this;
	this.nav=function(){
		_this._accoundList=document.getElementById("myAccound-list");
		this._accound.onmouseover=function(){
			_this._accoundList.style.display="block";
			_this._accoundList.style.top="30px";
		}
		this._accound.onmouseout=function(){
			_this._accoundList.style.display="none";
			_this._accoundList.style.top="-150px";
		}
	}
	
	
}



function ListCare(){
	this._top=document.getElementById("shop");
	var _this=this;
	this.list=function(){
		_this._bottom=document.getElementById("care-bottom");
		this._top.onmouseover=function(){
			_this._bottom.style.display="block";
		}
		this._top.onmouseout=function(){
			_this._bottom.style.display="none";
		}
	}
	//AddCare();
}
function AllShop(){
	this._shop=document.getElementById("menu-list");
	var _this=this;
	this.shop=function(){
		_this.allList=document.getElementById("all-shop");
		_this.listt=document.getElementById("list-t");
		_this._shop.onmouseover=function(){
			_this.allList.style.display="block";
			_this.listt.style.borderTop="6px solid transparent";
			_this.listt.style.borderBottom="6px solid #fff";
			_this.listt.style.bottom="18px";
			
		}
		_this._shop.onmouseout=function(){
			_this.allList.style.display="none";
			_this.listt.style.borderTop="6px solid #fff";
			_this.listt.style.borderBottom="6px solid transparent";
			_this.listt.style.bottom="13px";
		}
	}
}

function AddShop(){
	this.firstTop=document.getElementById("first-top");
	this.firstBottom=document.getElementById("first-bottom");
	this.twoTop=document.getElementById("two-top");
	this.twoBottom=document.getElementById("two-bottom");
	this.threeTop=document.getElementById("three-top");
	this.threeBottom=document.getElementById("three-bottom");
	this.four=document.getElementById("four");
	var _this=this;
	this.addFirstTop=function(){
		_this.a1=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i1=0;_this.i1<16;_this.i1++){
					_this.a1=document.createElement("a");
					_this.a1.href=data["shop"+(_this.i1+1)]["url"];
					_this.a1.title=data["shop"+(_this.i1+1)]["title"];
					_this.a1.innerHTML=data["shop"+(_this.i1+1)]["shop"];
					_this.firstTop.appendChild(_this.a1);
				}
			}
		},"json")
	}
	this.addFirstBottom=function(){
		_this.a2=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i2=0;_this.i2<10;_this.i2++){
					_this.a2=document.createElement("a");
					_this.a2.href=data["shop"+(_this.i2+17)]["url"];
					_this.a2.title=data["shop"+(_this.i2+17)]["title"];
					_this.a2.innerHTML=data["shop"+(_this.i2+17)]["shop"];
					_this.firstBottom.appendChild(_this.a2);
				}
			}
		},"json")
	}
	this.addTwoTop=function(){
		_this.a3=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i3=0;_this.i3<17;_this.i3++){
					_this.a3=document.createElement("a");
					_this.a3.href=data["shop"+(_this.i3+28)]["url"];
					_this.a3.title=data["shop"+(_this.i3+28)]["title"];
					_this.a3.innerHTML=data["shop"+(_this.i3+28)]["shop"];
					_this.twoTop.appendChild(_this.a3);
				}
			}
		},"json")
	}
	this.addTwoBottom=function(){
		_this.a4=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i4=0;_this.i4<5;_this.i4++){
					_this.a4=document.createElement("a");
					_this.a4.href=data["shop"+(_this.i4+43)]["url"];
					_this.a4.title=data["shop"+(_this.i4+43)]["title"];
					_this.a4.innerHTML=data["shop"+(_this.i4+43)]["shop"];
					_this.twoBottom.appendChild(_this.a4);
				}
			}
		},"json")
	}
	this.addThreeTop=function(){
		_this.a5=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i5=0;_this.i5<14;_this.i5++){
					_this.a5=document.createElement("a");
					_this.a5.href=data["shop"+(_this.i5+47)]["url"];
					_this.a5.title=data["shop"+(_this.i5+47)]["title"];
					_this.a5.innerHTML=data["shop"+(_this.i5+47)]["shop"];
					_this.threeTop.appendChild(_this.a5);
				}
			}
		},"json")
	}
	this.addThreeBottom=function(){
		_this.a6=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i6=0;_this.i6<14;_this.i6++){
					_this.a6=document.createElement("a");
					_this.a6.href=data["shop"+(_this.i6+60)]["url"];
					_this.a6.title=data["shop"+(_this.i6+60)]["title"];
					_this.a6.innerHTML=data["shop"+(_this.i6+60)]["shop"];
					_this.threeBottom.appendChild(_this.a6);
				}
			}
		},"json")
	}
	this.addFour=function(){
		_this.a7=null;
		$.get("js/allShop.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_this.i7=0;_this.i7<32;_this.i7++){
					_this.a7=document.createElement("a");
					_this.a7.href=data["shop"+(_this.i7+74)]["url"];
					_this.a7.title=data["shop"+(_this.i7+74)]["title"];
					_this.a7.innerHTML=data["shop"+(_this.i7+74)]["shop"];
					_this.four.appendChild(_this.a7);
				}
			}
		},"json")
	}
}


	

