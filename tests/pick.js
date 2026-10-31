const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','off')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.screenshot({path:'/tmp/hm/k0.png',clip:{x:0,y:0,width:390,height:760}});
await p.evaluate(async()=>{forced=['T','A','O','R','E'];await spin();forced=null});await p.waitForTimeout(4500);
await p.screenshot({path:'/tmp/hm/k1.png',clip:{x:0,y:0,width:390,height:760}});
await p.evaluate(()=>tapReel(1));await p.waitForTimeout(300);console.log(await p.evaluate(()=>[$('msg').textContent,$('spinBtn').textContent]));
await b.close()})();
