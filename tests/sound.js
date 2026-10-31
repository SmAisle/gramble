const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({args:['--autoplay-policy=no-user-gesture-required']});const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>console.log('LOG',m.text()));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));
 console.log(await p.evaluate(async()=>{try{sfx.lever();sfx.tick();sfx.stop(2);sfx.lock();sfx.unlock();sfx.tile();sfx.pay();sfx.win(140,false);sfx.win(400,true);sfx.allFound();sfx.broke();return 'ok ctx='+(ac&&ac.state)}catch(e){return 'fail '+e.message}}));
 await p.evaluate(()=>store.set('seenHelp3','1'));await p.click('#coverGo');await p.click('#spinBtn');await p.waitForTimeout(3200);console.log(await p.evaluate(()=>spun+' '+line.join('')));
 await b.close()})();
