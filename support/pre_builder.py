import os
from shutil import copy
from itertools import chain

f = open('Resources/theme_name.js', 'w')
theme = os.environ['THEME']
themeString = "ThemeName = \"" + theme + "\";"
f.write(themeString)
f.close()

themeDir = "Resources/themes/" + theme + "/images"
fileList = os.walk(themeDir)

filePaths = []

def check_dir(path):
		dst = path.replace('/themes/' + theme, '')
		if not os.path.exists(dst):
			os.makedirs(dst)

for r,d,f in fileList:
		check_dir(r)
		for index, fe in enumerate(f):
				src = os.path.join(r, fe)
				dst = src.replace('/themes/' + theme, '')
				f[index] = [src, dst]

		filePaths.append(f)

filePaths = list(chain(*filePaths))

for fo in filePaths:
	copy(fo[0], fo[1])
