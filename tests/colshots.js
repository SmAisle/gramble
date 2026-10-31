const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1')});await p.click('#coverGo');await p.waitForTimeout(300);
const S=async n=>{await p.waitForTimeout(400);await p.screenshot({path:'/tmp/hm/s-'+n+'.png'})};
// hints on, spin with partial
await p.evaluate(async()=>{const w=left()[0];forced=[w[2],'Q',w[0],'Z',w[3]];await spin();forced=null});await p.waitForTimeout(4200);await S('1hint');
for(let k=0;k<2;k++){await p.evaluate(async()=>{hold=[0,0,0,0,0];const w=left()[0];forced=[w[1],w[0],w[2],w[3],w[4]];await spin();forced=null});await p.waitForTimeout(5500)}
await S('2hintdone');await p.click('#hintOk');
await p.evaluate(async()=>{forced=['S','Q','E','T','Z'];await spin();forced=null});await p.waitForTimeout(4500);
await p.evaluate(async()=>{hold=[0,0,0,0,0];tapReel(0);tapReel(2);tapReel(3);forced=['S','A','E','T','E'];await spin();forced=null});await p.waitForTimeout(3500);await S('3bonus');
await p.click('#bcTake');await p.waitForTimeout(1500);await S('4cue');
await p.evaluate(async()=>{const w=left()[0];hold=[0,0,0,0,0];forced=[w[0],w[1],w[2],w[3],'Q'];await spin();forced=null});await p.waitForTimeout(4500);await p.evaluate(()=>{for(let i=0;i<4;i++)tapReel(i)});await S('5dd');
await p.evaluate(()=>{quick=true});while(await p.evaluate(()=>!ride&&!over)){await p.evaluate(async()=>{if(pend){bonusCash();return}hold=[0,0,0,0,0];forced=[...left()[0]];await spin();forced=null})}
await p.waitForTimeout(2500);await S('6ride');
await p.evaluate(()=>{$('rCash')?.click()});await p.waitForTimeout(2500);await S('7done');
await b.close()})();
