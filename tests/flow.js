// Full-day sim: Quick 10 with $5, clear bonus, always let it ride. Careful and sloppy robots, Plus lists.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));const N=+process.argv[2]||20;
 const r=await p.evaluate(async(N)=>{quick=true;mode='plus';const out={};
  for(const kind of ['careful','sloppy']){const a=[];for(let g=0;g<N;g++){newGame();let n=0,atRide=null;
   while(!over&&n<900){n++;if(pend){bonusCash();continue}if(ride){atRide=bank;letItRide();continue}
    if(spun){let best=null;for(const w of left()){const q=[...w],h=[0,0,0,0,0];line.forEach((x,i)=>{const j=q.indexOf(x);if(j>=0){q.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}
     hold=best.h;if(kind==='sloppy'&&Math.random()<.3){const on=hold.map((h,i)=>h?i:-1).filter(i=>i>=0);if(on.length)hold[on[Math.floor(Math.random()*on.length)]]=0}}
    await spin()}
   a.push({r:round,atRide,end:bank,why:over?(found.length===NWORDS&&round===2?'win':'broke'):'stuck',f:found.length})}
  const cl=a.filter(x=>x.atRide!=null);out[kind]={games:N,cleared10:cl.length,avgAtRide:cl.length?Math.round(cl.reduce((s,x)=>s+x.atRide,0)/cl.length):0,wonHR:a.filter(x=>x.why==='win').length,hrWinBanks:a.filter(x=>x.why==='win').map(x=>x.end).join(','),hrBrokeFound:cl.filter(x=>x.why!=='win').map(x=>x.f).join(',')}}
  return out},N);console.log(JSON.stringify(r))
 await b.close()})();
