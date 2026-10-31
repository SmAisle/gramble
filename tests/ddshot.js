const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>{store.set('seenHelp3','1');store.set('hints','off')});await p.screenshot({path:'/tmp/hm/cover.png'});await p.click('#coverGo');await p.waitForTimeout(300);
await p.evaluate(async()=>{const w=left()[0];forced=[w[0],w[1],w[2],w[3],'Q'];await spin();forced=null});await p.waitForTimeout(4500);
await p.evaluate(()=>{for(let i=0;i<4;i++)tapReel(i)});await p.waitForTimeout(300);
await p.screenshot({path:'/tmp/hm/dd1.png'});
const b0=await p.evaluate(()=>bank);await p.evaluate(async()=>{forced=[...line.slice(0,4),left()[0][4]];await spin(true);forced=null});await p.waitForTimeout(3500);
console.log(b0,await p.evaluate(()=>[bank,$('msg').textContent,$('bank').textContent]));await p.evaluate(()=>document.querySelectorAll('.pop').forEach(e=>e.remove()));
await p.screenshot({path:'/tmp/hm/dd2.png'});await b.close()})();
