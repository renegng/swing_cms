#!/usr/bin/python
import sys
import logging

logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/swing_cms/")

#
# If you are using complex python virtual environments
# on your server, uncomment the following. If not,
# leave the following commented.
#
# activate_env = '/var/www/swing_cms/venv/bin/activate'
# with open(activate_env) as file:
#    exec(file.read(), dict(__file__ = activate_env))
#
from swing_main import app as application
# 
# Replace this secret key for enhanced security.
#
# You could use a random generated string like:
#   python -c 'import os; print(os.urandom(16))'
#
application.secret_key = '81025051'.encode('utf8')
