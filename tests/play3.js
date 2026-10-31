const {chromium}=require('playwright');const S='/tmp/rw3/';require('fs').mkdirSync(S,{recursive:true});
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true,isMobile:true});
 p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.waitForTimeout(500);await p.screenshot({path:S+'1-cover.png'});
 await p.click('#coverGo');for(let i=0;i<4;i++)await p.click('#quickGo');await p.waitForTimeout(200);await p.screenshot({path:S+'2-start.png'});
 await p.click('#spinBtn');await p.waitForTimeout(2600);
 // hold the best-covered word's letters
 const holdBest=()=>p.evaluate(()=>{let best=null;for(const w of left()){const a=[...w],h=[0,0,0,0,0];line.forEach((c,i)=>{const j=a.indexOf(c);if(j>=0){a.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}return best.h});
 const h=await holdBest();for(let i=0;i<5;i++)if(h[i])await p.click('.reel >> nth='+i);await p.waitForTimeout(200);await p.screenshot({path:S+'3-held.png'});
 const results=[];
 for(let g=0;g<6;g++){const r=await p.evaluate(async(g)=>{quick=true;const sl=ms=>new Promise(r=>setTimeout(r,ms));if(g>0){$("done").hidden=true;newGame()}nJack=0;
  let n=0;while(!over&&n<500){n++;if(pend){bonusCash();continue}if(spun){let best=null;for(const w of left()){const a=[...w],h=[0,0,0,0,0];line.forEach((c,i)=>{const j=a.indexOf(c);if(j>=0){a.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}hold=best.h}
   await spin();await sl(100)}return {found:found.length,spins,bank,nJack,mode}},g);results.push(r);if(g===0){await p.waitForTimeout(1600);await p.screenshot({path:S+'4-done.png'})}}
 console.log(JSON.stringify(results));
 await p.evaluate(()=>{$('done').hidden=true;newGame()});await p.setViewportSize({width:375,height:667});await p.evaluate(()=>layout());await p.click('#spinBtn');await p.waitForTimeout(2600);await p.screenshot({path:S+'5-se.png'});
 await b.close()})();
