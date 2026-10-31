const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','off')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.evaluate(async()=>{forced=['S','Q','E','T','Z'];await spin();forced=null});await p.waitForTimeout(4500);
await p.evaluate(async()=>{tapReel(0);tapReel(2);tapReel(3);forced=['S','A','E','T','E'];await spin();forced=null});await p.waitForTimeout(3500);
console.log(await p.isVisible('#bCard'));await p.screenshot({path:'/tmp/hm/bcard.png',clip:{x:0,y:0,width:390,height:844}});
await p.reload();await p.waitForTimeout(500);if(await p.isVisible('#coverGo'))await p.click('#coverGo');await p.waitForTimeout(300);console.log('reload',await p.isVisible('#bCard'));
await p.click('#bcKeep');console.log(await p.evaluate(()=>[pend,nLocked(),bank]));
await b.close()})();
