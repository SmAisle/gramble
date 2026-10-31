const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('file://'+require('path').resolve(__dirname,'../index-artifact.html'));const N=+process.argv[2]||100,POL=process.argv[3];
 const r=await p.evaluate(async([N,process_pol])=>{quick=true;mode='plus';const out={};
  for(const pol of [process_pol]){const a=[];let ddN=0,ddHit=0;for(let g=0;g<N;g++){newGame();let n=0,atRide=null;
   while(!over&&n<900){n++;if(pend){bonusCash();continue}if(ride){atRide=bank;letItRide();continue}
    let best=null;if(spun){for(const w of left()){const q=[...w],h=[0,0,0,0,0];line.forEach((x,i)=>{const j=q.indexOf(x);if(j>=0){q.splice(j,1);h[i]=1}});const m=h.reduce((x,y)=>x+y,0);if(!best||m>best.m)best={h,m}}hold=best.h}
    const dd=pol==='always'&&spun&&best&&best.m===4;const f0=found.length;await spin(dd);if(ddOn){ddN++;if(found.length>f0)ddHit++}ddOn=false}
   a.push({atRide,end:bank,win:over&&found.length===NWORDS&&round===2})}
  const cl=a.filter(x=>x.atRide!=null),avg=x=>x.length?Math.round(x.reduce((s,y)=>s+y,0)/x.length):0;
  out[pol]={cleared:Math.round(100*cl.length/N)+'%',avgAtClear:avg(cl.map(x=>x.atRide))/10,wonHR:Math.round(100*a.filter(x=>x.win).length/N)+'%',avgEnd:avg(a.map(x=>x.end))/10,ddPerGame:(ddN/N).toFixed(1),ddHit:ddN?Math.round(100*ddHit/ddN)+'%':'-'}}
  return out},[N,POL]);console.log(JSON.stringify(r,null,1))
 await b.close()})();
