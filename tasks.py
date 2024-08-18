from invoke import task

@task
def commit(c, msg=None):
    if msg == None:
        msg = "[auto] auto commit!"
        
    c.run("git add .")
    c.run("git commit -m \"{}\"".format(msg))
    c.run("git push origin main")