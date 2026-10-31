const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.waitForTimeout(300);await p.screenshot({path:'/tmp/rw3/r0-cover.png'});
await p.click('#coverGo');for(let i=0;i<5;i++){if(await p.isVisible('#quickGo')){if(i===4)await p.screenshot({path:'/tmp/rw3/r1-intro.png'});await p.click('#quickGo')}}
console.log(await p.evaluate(()=>[round,NWORDS,words.length,bank,$('marqSub').textContent].join(' ')));
// cheat: robot to clear round 1
const r=await p.evaluate(async()=>{quick=true;let n=0;while(!over&&!ride&&n<800){n++;if(pend){bonusCash();continue}if(spun){let best=null;for(const w of left()){const a=[...w],h=[0,0,0,0,0];line.forEach((x,i)=>{const j=a.indexOf(x);if(j>=0){a.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}hold=best.h}
 if(bank<50){bank+=1000}await spin()}return [ride,bank,found.length,over].join(' ')});console.log('after r1',r);
await p.waitForTimeout(300);console.log('ride visible',await p.isVisible('#ride'));await p.screenshot({path:'/tmp/rw3/r2-ride.png'});
await p.reload();await p.waitForTimeout(300);await p.click('#coverGo');await p.waitForTimeout(300);console.log('after reload ride visible',await p.isVisible('#ride'));
await p.click('#rRide');await p.waitForTimeout(300);console.log(await p.evaluate(()=>[round,NWORDS,words.length,found.length,bank,$('marqSub').textContent,$('logLbl').textContent].join(' | ')));
await p.screenshot({path:'/tmp/rw3/r3-hr.png'});
await p.click('#menuBtn');console.log('cashout visible',await p.isVisible('#mCashOut'));await p.click('#mCashOut');await p.click('#mCashOut');await p.waitForTimeout(1000);
await p.screenshot({path:'/tmp/rw3/r4-done.png'});console.log(await p.evaluate(()=>JSON.stringify(result(playDay))).then(s=>s.slice(0,160)));
await p.click('#dClose').catch(()=>{});await p.evaluate(()=>cover());await p.waitForTimeout(200);await p.screenshot({path:'/tmp/rw3/r5-cover.png'});await b.close()})();
