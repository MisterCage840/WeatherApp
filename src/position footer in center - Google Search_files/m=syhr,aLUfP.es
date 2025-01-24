this._s=this._s||{};(function(_){var window=this;
try{
_.pxb=class{constructor(a){this.Ok=a}};
}catch(e){_._DumpException(e)}
try{
_.q("aLUfP");
var rxb;_.qxb=!1;rxb=function(){return _.ua()&&_.Bd.yH()&&!navigator.userAgent.includes("GSA")};
_.Vo(_.rUa,class extends _.To{static Ra(){return{service:{window:_.Uo}}}constructor(a){super();this.window=a.service.window.get();this.Ba=this.Ok();this.Aa=window.orientation;this.oa=()=>{const b=this.Ok();var c=this.gMb()&&Math.abs(window.orientation)===90&&this.Aa===-1*window.orientation;this.Aa=window.orientation;if(b!==this.Ba||c){this.Ba=b;for(const d of this.listeners){c=new _.pxb(b);try{d(c)}catch(e){_.ea(e)}}}};this.listeners=new Set;this.window.addEventListener("resize",this.oa);this.gMb()&&
this.window.addEventListener("orientationchange",this.oa)}addListener(a){this.listeners.add(a)}removeListener(a){this.listeners.delete(a)}Ok(){if(rxb()){var a=_.dm(this.window);a=new _.Tl(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Bc()||(_.ua()?rxb():this.window.visualViewport)?_.dm(this.window):new _.Tl(this.window.innerWidth,this.window.innerHeight);return a.height<a.width}destroy(){this.window.removeEventListener("resize",this.oa);this.window.removeEventListener("orientationchange",
this.oa)}Bc(){return _.qxb}gMb(){return"orientation"in window}});
_.qxb=!0;
_.u();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
