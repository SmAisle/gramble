const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:500},deviceScaleFactor:1});p.on('pageerror',e=>console.log('ERR',e.message));
for(const k of ['neon','chrome','diamond','jackpot']){await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html')+'?look='+k);await p.evaluate(()=>{store.set('seenHelp3','1');$('cover').hidden=true});await p.waitForTimeout(200);
const r=await p.evaluate(()=>{const a=$('cab').getBoundingClientRect();return{x:0,y:Math.max(0,a.top-6),width:390,height:a.height+12}});await p.screenshot({path:'/tmp/rb/L_'+k+'.png',clip:r})}
await b.close()})();
