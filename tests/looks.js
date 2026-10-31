const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();
 for(const k of ['classic','navy','walnut','ivory','oxblood','onyx']){const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});p.on('pageerror',e=>console.log('ERR',e.message));
  await p.goto('file://'+path.resolve(__dirname,'../index-artifact.html')+'?look='+k);await p.evaluate(()=>{store.set('seenHelp3','1')});
  await p.click('#coverGo');if(await p.isVisible('#quickGo'))for(let i=0;i<4;i++)await p.click('#quickGo');
  await p.click('#spinBtn');await p.waitForTimeout(3300);await p.click('.reel >> nth=0');await p.click('.reel >> nth=2');await p.waitForTimeout(300);
  await p.screenshot({path:path.resolve(__dirname,'../looks/'+k+'.png'),clip:{x:0,y:0,width:390,height:520}});
  if(k==='onyx'){await p.click('#menuBtn');await p.waitForTimeout(300);await p.screenshot({path:'/tmp/rw3/menu.png'})}
  await p.close()}
 await b.close()})();
