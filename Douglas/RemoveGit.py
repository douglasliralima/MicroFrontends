import os
import subprocess

for direc in os.listdir():
    subprocess.Popen(["rm", "-rf", direc + "/"+ ".git"])
    # print(direc + "/"+ ".git")
