const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');await p.waitForTimeout(300);
// bonus badge: force a bonus word
await p.evaluate(async()=>{forced=['S','C','E','N','E'];words=words.filter(w=>w!=='SCENE');await spin();forced=null});await p.waitForTimeout(3500);
console.log('pend',await p.evaluate(()=>pend));await p.screenshot({path:'/tmp/rw3/fx-bonus.png',clip:{x:0,y:100,width:390,height:460}});
await p.evaluate(()=>bonusPass());
// strike: force a list word
await p.evaluate(async()=>{const w=left()[0];hold=[0,0,0,0,0];forced=[...w];await spin();forced=null});await p.waitForTimeout(3600);
await p.screenshot({path:'/tmp/rw3/fx-strike0.png',clip:{x:0,y:100,width:390,height:460}});
await b.close()})();
