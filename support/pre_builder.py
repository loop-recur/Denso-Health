import os

f = open('Resources/theme_name.js', 'w+')
theme = os.environ['THEME']
themeString = "ThemeName = \"" + theme + "\";"
f.write(themeString)
print themeString
f.close()	