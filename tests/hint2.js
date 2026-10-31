const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');await p.waitForTimeout(300);
const probe=async()=>{const w=await p.evaluate(async()=>{const w=left()[0];hold=[0,0,0,0,0];forced=[w[2],'Q',w[0],'Z',w[3]];await spin();forced=null;return w});await p.waitForTimeout(4200);return p.evaluate(()=>[found.length,document.querySelectorAll('.reel.hint').length,$('msg').textContent])};
const win=async()=>{await p.evaluate(async()=>{hold=[0,0,0,0,0];forced=[...left()[0]];await spin();forced=null});await p.waitForTimeout(6000);await p.evaluate(()=>document.querySelectorAll('.pop').forEach(e=>e.remove()))};
console.log(await probe());await win();await win();console.log(await p.evaluate(()=>[found.length,$('msg').textContent]));console.log(await probe());
await b.close()})();
