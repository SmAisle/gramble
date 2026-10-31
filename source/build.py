import os
here=os.path.dirname(os.path.abspath(__file__));root=os.path.dirname(here)
s=open(os.path.join(here,'src.html')).read()
# The Daily 15's everyday five-letter puzzle words (word-lists/daily-15/tray.txt).
w=' '.join(x for x in open(os.path.join(here,'tray.txt')).read().split() if len(x)==5)
s=s.replace('__SOUNDS__',open(os.path.join(here,'sounds.js')).read().strip())
s=s.replace('__SMICO__',open(os.path.join(here,'smico.css')).read().strip())
# Bonus words: The Daily 15's accepted five-letter words (word-lists/daily-15/words.txt).
bw=' '.join(x for x in open(os.path.join(here,'bonus.txt')).read().split() if len(x)==5)
open(os.path.join(root,'index.html'),'w').write(s.replace('__POOL__',w).replace('__BONUS__',bw))
# The Claude artifact copy (and the tests) use the same page without the invite gate.
out=open(os.path.join(root,'index.html')).read()
open(os.path.join(root,'index-artifact.html'),'w').write(''.join(l for l in out.splitlines(True) if 'gate.js' not in l))
