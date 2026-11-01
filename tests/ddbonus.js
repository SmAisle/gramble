const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','0');quick=true});await p.reload();if(await p.isVisible('#coverGo'))await p.click('#coverGo');await p.waitForTimeout(300);
for(const dd of [false,true]){
const w=await p.evaluate(()=>{for(const [k,v] of BONUS){if(!words.includes(v)&&!bonus.includes(v)&&v.length===5)return v}});
await p.evaluate(async w=>{hold=[0,0,0,0,0];spun=false;forced=[w[0],w[1],w[2],w[3],'Q'];await spin();forced=null},w);await p.waitForFunction(()=>!spinning);
await p.evaluate(()=>{for(let i=0;i<4;i++)if(!locked(i))tapReel(i)});
await p.evaluate(async([w,dd])=>{bank=500;forced=[w[0],w[1],w[2],w[3],w[4]];await spin(dd);forced=null},[w,dd]);await p.waitForFunction(()=>!spinning);await p.waitForTimeout(200);
console.log(dd?'DD':'normal',w,await p.evaluate(()=>[pend,pendDD,bonusPay(pend),$('bcM').textContent,$('bcTake').textContent]));
await p.click('#bcTake');await p.waitForTimeout(200);}
await b.close()})();
