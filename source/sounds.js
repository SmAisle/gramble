// ---------- Sound engine (shared by the game and the sound board) ----------
// Everything is made in the browser, no sound files. Phone speakers can't play deep bass, so every sound sits
// above about 250 Hz. All sound goes through one compressor so quiet and loud sounds even out.
let ac=null,noiseBuf=null,master=null,unlocked=false;
function actx(){if(typeof soundOn==='function'&&!soundOn())return null;try{if(!ac){ac=new(window.AudioContext||window.webkitAudioContext)();
    const comp=ac.createDynamicsCompressor();comp.threshold.value=-18;comp.ratio.value=4;master=ac.createGain();master.gain.value=1.6;master.connect(comp).connect(ac.destination)}
  if(ac.state!=='running')ac.resume();
  if(!noiseBuf){noiseBuf=ac.createBuffer(1,ac.sampleRate*.5,ac.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}return ac}catch(e){return null}}
// iPhones: the first tap unlocks sound, and a silent looping audio element lets sound play even with the ringer switch on silent.
function unlockAudio(){if(unlocked)return;unlocked=true;try{const a=actx();if(a){const b=a.createBuffer(1,1,22050),s=a.createBufferSource();s.buffer=b;s.connect(a.destination);s.start(0)}
  const el=document.createElement('audio');el.setAttribute('playsinline','');el.loop=true;
  el.src='data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';el.play().catch(()=>{})}catch(e){}}
['touchstart','pointerdown','keydown'].forEach(ev=>document.addEventListener(ev,unlockAudio,{once:false,passive:true}));
function tone(f,dur=.08,type='sine',vol=.1,delay=0,f2){const a=actx();if(!a)return;
  const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g).connect(master);o.start(t);o.stop(t+dur+.02)}
function noise(dur,freq,q=1,vol=.2,delay=0,type='bandpass'){const a=actx();if(!a)return;const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain(),t=a.currentTime+delay;
  s.buffer=noiseBuf;f.type=type;f.frequency.value=freq;f.Q.value=q;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);s.connect(f).connect(g).connect(master);s.start(t);s.stop(t+dur+.02)}
// Casino bell: a bright strike with inharmonic overtones.
function bell(f,delay=0,vol=.08,dur=.6){tone(f,dur,'sine',vol,delay);tone(f*2.76,dur*.5,'sine',vol*.4,delay);tone(f*5.4,dur*.25,'sine',vol*.2,delay);noise(.02,f*3,4,vol*.8,delay)}
function coin(delay=0,pitch=1){const f=2100*pitch;tone(f,.25,'sine',.09,delay);tone(f*1.47,.18,'sine',.05,delay);noise(.025,6500,2,.12,delay)}
const coins=(n,d0=0,gap=.05)=>{for(let k=0;k<n;k++)coin(d0+k*gap+Math.random()*.025,.85+Math.random()*.35)};
const chip=(d=0)=>{noise(.012,4200,6,.35,d);noise(.015,3000,6,.3,d+.035)};
const arp=(notes,gap,type='square',vol=.06,dur=.12,d0=0)=>notes.forEach((f,k)=>tone(f,dur,type,vol,d0+k*gap));
// Each moment: four options [name, play]. The first is the game's default.
const SOUNDS=[
 {k:'lever',name:'Pull the lever',what:'When you tap Spin',o:[
   ['Metal crank',()=>{for(let k=0;k<4;k++)noise(.02,1800,5,.35,k*.035);noise(.1,900,1.5,.4,.15);tone(420,.12,'triangle',.12,.15,260)}],
   ['Coin in + crank',()=>{coin(0,.9);noise(.05,1200,2,.35,.18);for(let k=0;k<3;k++)noise(.02,2000,5,.3,.25+k*.035)}],
   ['Electronic',()=>{tone(300,.25,'square',.06,0,1200);tone(600,.25,'square',.03,0,2400)}],
   ['Bell + crank',()=>{bell(1568,0,.07,.4);noise(.08,1000,2,.35,.08)}]]},
 {k:'tick',name:'Reels spinning',what:'Plays while the reels turn',demo:f=>{for(let k=0;k<14;k++)setTimeout(()=>f(k),k*70)},o:[
   ['Rattle',()=>noise(.02,2400,3,.22)],
   ['Electronic beeps',k=>tone((k||0)%2?1175:880,.04,'square',.035)],
   ['Melody',k=>tone([523,659,784,880,784,659][(k||0)%6],.06,'square',.035)],
   ['Whir',k=>{noise(.05,1500+((k||0)%3)*300,1,.12);tone(440,.06,'sawtooth',.02)}]]},
 {k:'stop',name:'Reel stops',what:'Each reel, left to right',demo:f=>{for(let i=0;i<5;i++)setTimeout(()=>f(i),i*450)},o:[
   ['Chunk',i=>{noise(.06,800,1.5,.45);tone(330,.1,'triangle',.18,0,200)}],
   ['Bell ding',i=>bell(1047+(i||0)*131,0,.07,.4)],
   ['Rising blips',i=>tone(523*Math.pow(1.19,(i||0)),.09,'square',.06)],
   ['Heavy clack',i=>{tone(260,.05,'square',.1);noise(.04,2200,3,.4)}]]},
 {k:'lock',name:'Lock a letter',what:'Tap a reel or tile to padlock it (A = your pick now)',o:[
   ['Electronic click',()=>tone(1500,.05,'square',.05,0,2200)],
   ['Padlock snap',()=>{noise(.015,3200,8,.45);tone(1850,.12,'sine',.07,.01);tone(2780,.08,'sine',.03,.01);noise(.012,2400,8,.35,.06)}],
   ['Bright blip up',()=>{tone(880,.06,'sine',.1);tone(1760,.09,'sine',.09,.05)}],
   ['Coin tap',()=>{tone(2600,.18,'sine',.07);tone(3900,.1,'sine',.03);noise(.01,7000,3,.2)}],
   ['Vault clunk',()=>{noise(.05,700,2,.5);tone(330,.08,'triangle',.15,0,250);noise(.02,2600,6,.35,.07)}],
   ['Two-note chime',()=>{bell(1319,0,.06,.25);bell(1976,.07,.06,.35)}]]},
 {k:'unlock',name:'Unlock a letter',what:'Tap a locked letter again',o:[
   ['Click',()=>{noise(.02,2000,5,.35);tone(520,.04,'square',.04)}],
   ['Casino chip',()=>chip()],
   ['Electronic click',()=>tone(1500,.05,'square',.05,0,900)],
   ['Bell tick',()=>bell(1568,0,.04,.2)]]},
 {k:'tile',name:'Move a tile',what:'Drag a tile to rearrange',o:[
   ['Chip slide',()=>noise(.08,3500,2,.2)],
   ['Pop',()=>tone(600,.05,'sine',.12,0,1100)],
   ['Click',()=>noise(.015,2500,5,.3)],
   ['Wood tick',()=>{noise(.02,1300,6,.35);tone(800,.03,'sine',.05)}]]},
 {k:'pay',name:'Pay for a spin',what:'50¢ comes out of the bank',o:[
   ['Coin in the slot',()=>{coin(0,.95);noise(.05,1400,2,.2,.12)}],
   ['Chip toss',()=>chip()],
   ['Ka-ching',()=>{noise(.06,3500,1,.25);bell(2637,.05,.06,.4)}],
   ['Quiet tick',()=>noise(.02,4000,3,.15)]]},
 {k:'win',name:'Find a word',what:'A word on your list is crossed off',o:[
   ['Bell + coins',()=>{for(let k=0;k<8;k++)bell(2093,k*.08,.06,.25);coins(10,.4)}],
   ['Jackpot arpeggio',()=>{arp([523,659,784,1047,1319,1568,2093],.06);arp([1047,1319,1568,2093],.06,'square',.04,.12,.45);coins(6,.5)}],
   ['Ding ding ding',()=>{bell(1760,0,.09,.5);bell(1760,.22,.09,.5);bell(2349,.44,.1,.7);coins(8,.6)}],
   ['Fanfare',()=>{arp([784,784,784,1047],.12,'square',.06,.12);tone(1319,.5,'square',.06,.5);coins(8,.6)}]]},
 {k:'bonus',name:'Bonus word appears',what:'Cash in or pass?',o:[
   ['Two chimes',()=>{bell(1319,0,.07,.4);bell(1760,.15,.07,.5)}],
   ['Sparkle',()=>{for(let k=0;k<8;k++)tone(2000+k*250,.08,'sine',.05,k*.035)}],
   ['Electronic bling',()=>arp([1047,1568,2093],.05,'square',.05,.1)],
   ['Chip stack',()=>{for(let k=0;k<4;k++)chip(k*.08)}]]},
 {k:'jack',name:'Jackpot',what:'A word with nothing locked pays double',o:[
   ['Bells + siren + coins',()=>{for(let k=0;k<12;k++)bell(k%2?2349:1760,k*.07,.06,.3);for(let k=0;k<2;k++){tone(700,.3,'square',.035,.2+k*.6,1400);tone(1400,.3,'square',.035,.5+k*.6,700)}coins(20,.5,.05)}],
   ['Ringing bell',()=>{for(let k=0;k<24;k++)bell(2093,k*.05,.05,.15);coins(16,.6)}],
   ['Jackpot tune',()=>{arp([523,659,784,1047,784,1047,1319,1568],.09,'square',.05,.12);coins(16,.8)}],
   ['Ka-ching x3',()=>{for(let k=0;k<3;k++){noise(.06,3500,1,.25,k*.3);bell(2637,k*.3+.05,.07,.4)}coins(16,.9)}]]},
 {k:'all',name:'All 20 found',what:'You win the game',o:[
   ['Jackpot bells + coins',()=>{for(let k=0;k<20;k++)bell(k%2?2349:2093,k*.07,.06,.3);coins(30,.3,.045);arp([523,659,784,1047,1319,1568,2093],.1,'square',.05,.2,1.5)}],
   ['Big fanfare',()=>{arp([523,523,523,698,880,1047],.15,'square',.06,.16);tone(1047,.9,'square',.06,.95);tone(1319,.9,'square',.04,.95);coins(20,1.2)}],
   ['Electronic jackpot',()=>{for(let r=0;r<4;r++)arp([523,659,784,1047,1319,1568],.045,'square',.05,.08,r*.3);coins(20,1.2)}],
   ['Siren + coins',()=>{for(let k=0;k<4;k++){tone(600,.25,'square',.04,k*.5,1300);tone(1300,.25,'square',.04,k*.5+.25,600)}coins(30,.3,.06)}]]},
 {k:'broke',name:'Out of money',what:'The game ends',o:[
   ['Sad trombone',()=>{tone(466,.3,'sawtooth',.05,0,440);tone(440,.3,'sawtooth',.05,.32,415);tone(415,.8,'sawtooth',.05,.64,330)}],
   ['Tilt buzzer',()=>{for(let k=0;k<3;k++)tone(330,.18,'square',.06,k*.25)}],
   ['Falling tones',()=>arp([1047,880,698,587,440,349],.13,'square',.05,.14)],
   ['Game over jingle',()=>{arp([784,659,523],.18,'triangle',.08,.2);tone(392,.6,'triangle',.08,.6)}]]}];
