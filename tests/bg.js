const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.mouse.click(50,50);console.log('1',await p.evaluate(()=>ac&&ac.state));
await p.evaluate(async()=>{await ac.suspend();unlocked=false});console.log('susp',await p.evaluate(()=>ac.state));
await p.mouse.click(50,50);await p.waitForTimeout(400);console.log('2',await p.evaluate(()=>ac&&ac.state));await b.close()})();
