const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();
 for(let r=0;r<4;r++){const p=await b.newPage();await p.goto('file://'+path.resolve(__dirname,'../index-artifact.html'));
  await p.evaluate(()=>{store.set('seenHelp3','1')});await p.click('#coverGo');if(await p.isVisible('#quickGo'))for(let i=0;i<4;i++)await p.click('#quickGo');
  console.log(await p.evaluate(async()=>{quick=true;await spin();const a=line.join('');await spin();return a+' '+line.join('')+' '+words.slice(0,3)}));await p.close()}
 await b.close()})();
