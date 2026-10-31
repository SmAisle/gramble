const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1')});await p.click('#coverGo');await p.waitForTimeout(300);
await p.click('#menuBtn').catch(()=>p.evaluate(()=>document.querySelector('[aria-label=Menu],#menu button,#mBtn')?.click()));await p.waitForTimeout(300);
await p.evaluate(()=>$('mLook').click());await p.waitForTimeout(300);
await p.evaluate(()=>document.querySelectorAll('.lkOpt')[1].click());await p.waitForTimeout(300);
await p.screenshot({path:'/tmp/hm/look.png'});console.log(await p.evaluate(()=>[store.get('look2'),document.body.className]));
await p.click('#lkDone');console.log(await p.isVisible('#lkSheet'));await b.close()})();
