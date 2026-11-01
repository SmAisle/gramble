const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
await p.clock.install({time:new Date(2026,10,10,15,0,0)});
const url='file://'+require('path').resolve(__dirname,'../index-artifact.html');await p.goto(url);
// days Nov 3..Nov 8 played (5,6,7,8 + 3,4), Nov 9 missed -> saver should save it
await p.evaluate(()=>{localStorage.clear();store.set('seenHelp3','1');store.set('hints','0');for(const d of [3,4,5,6,7,8]){store.set('day_2026-11-0'+d,JSON.stringify({why:'cash',round:1,found:10,spins:30,banked:1000,bank:1000,list:[],missed:[]}))}});
await p.reload();await p.waitForTimeout(500);
console.log('saver card',await p.evaluate(()=>[$('svCard').classList.contains('show'),$('svT').textContent,store.get('saver'),store.get('saved')]));
await p.screenshot({path:'/tmp/rb/t_saver.png'});await p.click('#svOk');
console.log('cover streak',await p.evaluate(()=>$('cvStreak').textContent));
await p.reload();await p.waitForTimeout(300);console.log('again card?',await p.evaluate(()=>$('svCard').classList.contains('show')),await p.evaluate(()=>$('cvStreak').textContent));
// play: finish quickly via end
await p.evaluate(()=>{quick=true});await p.click('#coverGo');await p.waitForTimeout(300);
await p.evaluate(()=>{bank=1030;found=words.slice(0,10);end('cash')});await p.waitForTimeout(800);
console.log('lifetime',await p.evaluate(()=>lifeCr()),'unlock',await p.evaluate(()=>[$('unCard').classList.contains('show'),$('unT').textContent]));
await p.screenshot({path:'/tmp/rb/t_unlock.png'});await p.click('#unUse');await p.waitForTimeout(200);
console.log('look',await p.evaluate(()=>store.get('look2')),await p.evaluate(()=>$('dMach').textContent),await p.evaluate(()=>$('dCd').textContent));
await p.screenshot({path:'/tmp/rb/t_end.png'});
await p.click('#dMach');await p.waitForTimeout(200);await p.screenshot({path:'/tmp/rb/t_path.png'});await p.click('#mpDone');
await p.click('#dClose');await p.waitForTimeout(200);await p.screenshot({path:'/tmp/rb/t_machine.png'});
// locked look can't be set
await p.evaluate(()=>setLook('jackpot'));console.log('jackpot set?',await p.evaluate(()=>store.get('look2')));
await b.close()})();
