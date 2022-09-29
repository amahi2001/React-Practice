import sys, os

args = sys.argv
msg = args[1]
os.system('git add .')
os.system(f' git commit -m {msg}')
os.system(f'git push')