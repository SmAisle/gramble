const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
for(const [W,H] of [[390,844],[375,667]]){const p=await b.newPage({viewport:{width:W,height:H},deviceScaleFactor:2,isMobile:true,hasTouch:true});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','0')});await p.reload();await p.screenshot({path:`/tmp/dl/c0_${W}.png`});
await p.click('#coverGo');await p.waitForTimeout(400);await p.screenshot({path:`/tmp/dl/c1_${W}.png`});
await p.evaluate(()=>{const w=left()[0];forced=[w[0],'Z',w[2],'K',w[4]]});await p.click('#spinBtn');await p.waitForTimeout(250);await p.screenshot({path:`/tmp/dl/c2_${W}.png`});await p.waitForFunction(()=>!spinning);await p.waitForTimeout(400);await p.evaluate(()=>forced=null);
await p.click('.reel >> nth=0');await p.click('.reel >> nth=2');await p.click('.reel >> nth=4');await p.waitForTimeout(300);await p.screenshot({path:`/tmp/dl/c3_${W}.png`});
await p.evaluate(()=>{const w=left()[0];forced=[...line];forced[1]=w[1];forced[3]=w[3]});await p.click('#spinBtn');await p.waitForFunction(()=>!spinning);await p.waitForTimeout(500);await p.screenshot({path:`/tmp/dl/c4_${W}.png`});
console.log(W,await p.evaluate(()=>[found.join(),bank,$('msg').textContent]));await p.close()}
await b.close()})();
