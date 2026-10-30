import os
here=os.path.dirname(os.path.abspath(__file__));root=os.path.dirname(here)
s=open(os.path.join(here,'src.html')).read()
w=' '.join(x for x in open(os.path.join(here,'words.txt')).read().split() if len(x)>=3)
open(os.path.join(root,'index.html'),'w').write(s.replace('__WORDS__',w))
