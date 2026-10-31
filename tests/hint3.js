const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');await p.waitForTimeout(300);
for(let k=0;k<2;k++){await p.evaluate(async()=>{hold=[0,0,0,0,0];const w=left()[0];forced=[w[1],w[0],w[2],w[3],w[4]];await spin();forced=null});await p.waitForTimeout(6000);console.log(k,await p.isVisible('#hintDone'))}
await p.evaluate(()=>document.querySelectorAll('.pop').forEach(e=>e.remove()));await p.screenshot({path:'/tmp/hm/real.png',clip:{x:0,y:0,width:390,height:760}});
await p.click('#hintOk');console.log('after ok',await p.isVisible('#hintDone'));await b.close()})();
