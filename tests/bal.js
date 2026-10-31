// Balance sim: Plus mode (random lists), careful robot and sloppy robot, for several settings.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));
 const cfgs=JSON.parse(process.argv[2]),N=+process.argv[3]||20;
 for(const c of cfgs){const r=await p.evaluate(async([c,N])=>{quick=true;START=c.s;LOAD=c.l;NWORDS=c.n||20;NOHELP_FULL=c.nh;mode='plus';const out={careful:[],sloppy:[]};
   for(const kind of ['careful','sloppy'])for(let g=0;g<N;g++){newGame();nJack=0;let n=0;
    while(!over&&n<600){n++;if(pend){bonusCash();continue}
     if(spun){let best=null;for(const w of left()){const a=[...w],h=[0,0,0,0,0];line.forEach((x,i)=>{const j=a.indexOf(x);if(j>=0){a.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}
      hold=best.h;if(kind==='sloppy'&&Math.random()<.3){const on=hold.map((h,i)=>h?i:-1).filter(i=>i>=0);if(on.length)hold[on[Math.floor(Math.random()*on.length)]]=0}}
     await spin()}
    out[kind].push([found.length,bank,nJack])}
   const sum=a=>({win:a.filter(x=>x[0]===NWORDS).length/a.length,avgFound:+(a.reduce((s,x)=>s+x[0],0)/a.length).toFixed(1),avgBankIfWin:Math.round(a.filter(x=>x[0]===NWORDS).reduce((s,x)=>s+x[1],0)/Math.max(1,a.filter(x=>x[0]===NWORDS).length)),jack:+(a.reduce((s,x)=>s+x[2],0)/a.length).toFixed(1)});
   return {careful:sum(out.careful),sloppy:sum(out.sloppy)}},[c,N]);console.log(JSON.stringify(c),JSON.stringify(r))}
 await b.close()})();
