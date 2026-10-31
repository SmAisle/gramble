const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true});
 p.on('pageerror',e=>console.log('ERR',e.message));
 const url='file://'+require('path').resolve(__dirname,'../index-artifact.html');
 await p.goto(url);await p.evaluate(()=>{store.set('seenHelp3','1')});await p.waitForTimeout(300);await p.screenshot({path:'/tmp/rw3/d1-cover.png'});
 const bot=()=>p.evaluate(async()=>{quick=true;const sl=ms=>new Promise(r=>setTimeout(r,ms));let n=0;
  while(!over&&n<500){n++;if(pend){bonusCash();continue}if(spun){let best=null;for(const w of left()){const a=[...w],h=[0,0,0,0,0];line.forEach((c,i)=>{const j=a.indexOf(c);if(j>=0){a.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}hold=best.h}
   await spin();await sl(60)}return mode+' '+words.slice(0,3).join(',')+' found '+found.length+' spins '+spins});
 await p.click('#coverGo');const w1=await p.evaluate(()=>words.join(','));console.log('daily',await bot());await p.waitForTimeout(500);await p.screenshot({path:'/tmp/rw3/d2-done.png'});
 await p.click('#dAgain');const w2=await p.evaluate(()=>words.join(','));console.log('replay same words',w1===w2,await bot());
 await p.waitForTimeout(400);console.log('daily result kept',await p.evaluate(()=>JSON.stringify(result(playDay)).slice(0,60)));
 await p.click('#dPlus');const w3=await p.evaluate(()=>words.join(','));console.log('plus differs',w1!==w3,await p.evaluate(()=>mode+' '+$('pno').textContent));
 await p.evaluate(()=>{$('done').hidden=true});await p.click('#menuBtn');await p.click('#mCover');await p.waitForTimeout(200);await p.screenshot({path:'/tmp/rw3/d3-cover.png'});
 // second browser: same daily words?
 const p2=await b.newPage();await p2.goto(url);await p2.evaluate(()=>{store.set('seenHelp3','1');quick=true});await p2.click('#coverGo');console.log('other player same words',await p2.evaluate(()=>words.join(','))===w1);
 await b.close()})();
