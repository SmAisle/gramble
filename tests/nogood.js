const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.evaluate(async()=>{forced=['Q','Z','X','J','V'];await spin();forced=null});await p.waitForTimeout(4500);
console.log(await p.evaluate(()=>[$('msg').textContent,$('spinBtn').textContent]));
await p.evaluate(async()=>{const w=left()[0];forced=[w[2],'Q',w[0],'Z',w[3]];await spin();forced=null});await p.waitForTimeout(4500);
console.log(await p.evaluate(()=>[$('msg').textContent,$('spinBtn').textContent]));await b.close()})();
