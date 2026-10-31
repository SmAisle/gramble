const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true,isMobile:true});
 p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');quick=true});
 await p.click('#coverGo');await p.click('#spinBtn');await p.waitForTimeout(700);
 const st=()=>p.evaluate(()=>hold.join('')+' tray:'+[...$('word').children].map(d=>d.textContent.trim()[0]||'_').join(''));
 if(await p.evaluate(()=>!spun)){console.log('word found on first spin, rerun');}
 await p.click('.reel >> nth=0');await p.click('.reel >> nth=1');await p.click('.reel >> nth=2');console.log('locked 3',await st());
 await p.click('.reel >> nth=1');console.log('unlock 1',await st());
 await p.click('.reel >> nth=2');await p.click('.reel >> nth=2');console.log('clear 2',await st());await p.screenshot({path:'/tmp/rw3/lock.png'});
 await p.click('#spinBtn');await p.waitForTimeout(700);console.log('after spin',await st());
 await b.close()})();
