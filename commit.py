import sys, os
args = sys.argv
if len(args) > 3:
    raise ValueError(f'invalid commit message: {args[1:]}')
if len(args) == 3:
    if args[2] != '-i':
        raise ValueError(f'flag doesn\'t exist: {args[2]}')
msg = args[1] if "-i" not in args else f"**ignore** {args[1]}"
os.system('git add .')
os.system(f'git commit -m "{msg}"')
os.system(f'git push')