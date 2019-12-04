(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),i=a(2),l=a(3),c=a(5),m=a(4),d=a(1),u=a(6),p=function(e){return r.a.createElement("nav",{className:"navbar navbar-dark bg-gradient-dark shadow-sm"},r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},e.brand)))},y=function(){return r.a.createElement("footer",{className:"container py-3 text-center"},r.a.createElement("small",null,"Designed & built by ",r.a.createElement("a",{href:"https://github.com/kaizen-design",target:"_blank",rel:"noopener noreferrer"},"Denis B.")))},h=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],b="drum-pad btn btn-block btn-dark",k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={buttonStyle:b},a.playSound=a.playSound.bind(Object(d.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(d.a)(a)),a.activatePad=a.activatePad.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){this.state.buttonStyle===b?this.setState({buttonStyle:"drum-pad btn btn-block btn-dark focus active"}):this.setState({buttonStyle:b})}},{key:"playSound",value:function(){var e=this,t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.props.updateDisplay(this.props.clipId.replace(/-/g," ")),this.activatePad(),setTimeout((function(){return e.activatePad()}),100)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-4 mb-2"},r.a.createElement("button",{type:"button",id:this.props.clipId,onClick:this.playSound,className:this.state.buttonStyle},r.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={display:String.fromCharCode(160),volume:.5},a.updateDisplay=a.updateDisplay.bind(Object(d.a)(a)),a.adjustVolume=a.adjustVolume.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"updateDisplay",value:function(e){this.setState({display:e})}},{key:"adjustVolume",value:function(e){var t=this;this.setState({volume:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return t.clearDisplay()}),1e3)}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,t=h.map((function(t){return r.a.createElement(k,{key:t.id,clipId:t.id,clip:t.url,keyTrigger:t.keyTrigger,keyCode:t.keyCode,updateDisplay:e.updateDisplay})}));return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.volume})),r.a.createElement("div",{className:"h-100 d-flex flex-column"},r.a.createElement(p,{brand:"Drum Machine"}),r.a.createElement("main",{role:"main",className:"App container my-auto py-3"},r.a.createElement("div",{id:"drum-machine",className:"row"},r.a.createElement("div",{className:"col-lg-8 mb-4 mb-lg-0"},r.a.createElement("div",{className:"pad-bank form-row"},t)),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"jumbotron p-4 border mb-0"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"volumeControl"},"Volume"),r.a.createElement("input",{type:"range",className:"custom-range",id:"volumeControl",min:"0",max:"1",step:"0.01",value:this.state.volume,onChange:this.adjustVolume})),r.a.createElement("div",{id:"display",className:"alert alert-dark text-center mb-0",role:"alert"},r.a.createElement("b",null,this.state.display)))))),r.a.createElement(y,null))}}]),t}(r.a.Component);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0cc5039b.chunk.js.map