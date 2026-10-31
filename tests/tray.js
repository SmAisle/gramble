const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');if(await p.isVisible('#quickGo'))for(let i=0;i<4;i++)await p.click('#quickGo');
await p.click('#spinBtn');await p.waitForTimeout(3300);const n0=await p.locator('#word .wt').count();
await p.click('.reel >> nth=0');await p.click('.reel >> nth=3');await p.click('.reel >> nth=4');
const t=()=>p.evaluate(()=>[...document.querySelectorAll('#word .wt')].map(d=>d.firstChild.textContent).join(''));console.log('before lock',n0,'after 3 locks',await t());
const a=await p.locator('#word .wt').nth(0).boundingBox();await p.mouse.move(a.x+a.width/2,a.y+a.height/2);await p.mouse.down();await p.mouse.move(a.x+a.width/2+90,a.y+a.height/2,{steps:6});await p.mouse.up();console.log('after drag',await t());
await p.screenshot({path:'/tmp/rw3/tray.png',clip:{x:0,y:100,width:390,height:520}});
await p.locator('#word .wt').nth(1).click();await p.waitForTimeout(200);console.log('after tap',await t(),await p.evaluate(()=>hold.join('')));
await p.click('#spinBtn');await p.waitForTimeout(3300);console.log('after spin',await t(),await p.evaluate(()=>hold.join('')+' '+line.join('')+' pend='+pend+' spun='+spun+' found='+found.length));await b.close()})();
