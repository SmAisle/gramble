const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');if(await p.isVisible('#quickGo'))for(let i=0;i<4;i++)await p.click('#quickGo');
await p.click('#spinBtn');await p.waitForTimeout(3300);await p.click('.reel >> nth=0');await p.click('.reel >> nth=3');await p.waitForTimeout(200);
console.log(await p.evaluate(()=>[...document.querySelectorAll('#list span.fit')].map(s=>s.innerHTML).join(' | ')));
await p.screenshot({path:'/tmp/rw3/cross.png',clip:{x:0,y:300,width:390,height:544}});
await p.click('#menuBtn');await p.waitForTimeout(200);await p.screenshot({path:'/tmp/rw3/menu2.png'});await p.click('#mClose');
console.log('off:',await p.evaluate(()=>document.querySelectorAll('#list i.x').length));await b.close()})();
