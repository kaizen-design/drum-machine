(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),s=t.n(o),l=t(2),c=t(3),i=t(5),m=t(4),d=t(1),u=t(6),p=function(e){return n.a.createElement("nav",{className:"navbar navbar-dark bg-gradient-dark shadow-sm"},n.a.createElement("div",{className:"container justify-content-center"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},e.brand)))},y=function(){return n.a.createElement("footer",{className:"container py-3 text-center"},n.a.createElement("small",null,"Designed & built by ",n.a.createElement("a",{href:"https://github.com/kaizen-design",target:"_blank",rel:"noopener noreferrer"},"Denis B.")))},h=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).playSound=t.playSound.bind(Object(d.a)(t)),t.handleKeyPress=t.handleKeyPress.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"playSound",value:function(){var e=document.getElementById(this.props.keyTrigger);e.currentTime=0,e.play(),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){return n.a.createElement("button",{type:"button",id:this.props.clipId,onClick:this.playSound,className:"drum-pad btn btn-dark btn-block"},n.a.createElement("audio",{className:"clip",id:this.props.keyTrigger,src:this.props.clip}),this.props.keyTrigger)}}]),a}(n.a.Component),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={display:String.fromCharCode(160),volume:.5},t.updateDisplay=t.updateDisplay.bind(Object(d.a)(t)),t.adjustVolume=t.adjustVolume.bind(Object(d.a)(t)),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"updateDisplay",value:function(e){this.setState({display:e})}},{key:"adjustVolume",value:function(e){var a=this;this.setState({volume:e.target.value,display:"Volume: "+Math.round(100*e.target.value)}),setTimeout((function(){return a.clearDisplay()}),1e3)}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,a=h.map((function(a){return n.a.createElement("div",{className:"col-4 mb-2"},n.a.createElement(k,{clipId:a.id,clip:a.url,keyTrigger:a.keyTrigger,keyCode:a.keyCode,updateDisplay:e.updateDisplay}))}));return[].slice.call(document.getElementsByClassName("clip")).forEach((function(a){a.volume=e.state.volume})),n.a.createElement("div",{className:"h-100 d-flex flex-column"},n.a.createElement(p,{brand:"Drum Machine"}),n.a.createElement("main",{role:"main",className:"App container my-auto py-3"},n.a.createElement("div",{id:"drum-machine",className:"row"},n.a.createElement("div",{className:"col-lg-8 mb-4 mb-lg-0"},n.a.createElement("div",{className:"pad-bank form-row"},a)),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"jumbotron p-4 border mb-0"},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"volumeControl"},"Volume"),n.a.createElement("input",{type:"range",className:"custom-range",id:"volumeControl",min:"0",max:"1",step:"0.01",value:this.state.volume,onChange:this.adjustVolume})),n.a.createElement("div",{id:"display",className:"alert alert-dark text-center mb-0",role:"alert"},n.a.createElement("b",null,this.state.display)))))),n.a.createElement(y,null))}}]),a}(n.a.Component);t(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.244715b3.chunk.js.map