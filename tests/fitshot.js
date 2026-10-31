const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true,isMobile:true});
 p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','0');quick=true});
 await p.reload();if(await p.isVisible('#coverGo'))await p.click('#coverGo');await p.click('#spinBtn');await p.waitForFunction(()=>!spinning,null,{timeout:15000});await p.waitForTimeout(300);
 const i=await p.evaluate(()=>{for(let k=0;k<REELS;k++){const L=reelEls[k].textContent.trim()[0];if(left().some(w=>w.includes(L)))return k}return 0});await p.click('.reel >> nth='+i);await p.waitForTimeout(300);
 console.log('fit count',await p.evaluate(()=>document.querySelectorAll('#list span.fit').length),'of',await p.evaluate(()=>document.querySelectorAll('#list span').length));
 await p.screenshot({path:'/tmp/fit.png'});await b.close()})();
