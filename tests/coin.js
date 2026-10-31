const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','off')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.evaluate(()=>{spin()});await p.waitForTimeout(300);console.log('coins',await p.evaluate(()=>document.querySelectorAll('.coin').length));await p.screenshot({path:'/tmp/hm/coin.png',clip:{x:0,y:0,width:390,height:500}});
await p.waitForTimeout(1000);console.log('after',await p.evaluate(()=>document.querySelectorAll('.coin').length));await b.close()})();
