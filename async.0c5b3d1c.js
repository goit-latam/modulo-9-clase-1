const e=setTimeout((()=>{console.log("in timeout")}),5e3);clearTimeout(e);let t=0;const o=setInterval((()=>{t+=1,console.log(t)}),1e3);setTimeout((()=>{clearInterval(o)}),5e3);
//# sourceMappingURL=async.0c5b3d1c.js.map
