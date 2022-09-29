import sys, os

args = sys.argv
if len(args) != 2:
    raise ValueError(f'invalid commit message: {args[1:]}')
msg = args[1]
os.system('git add .')
os.system(f'git commit -m "{msg}"')
os.system(f'git push')