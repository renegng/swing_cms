from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World, this is RXDBit first Python/Flask attempt!... now with Debug mode ON!'

@app.route('/user/<username>/')
def user(username):
    return 'This is a second URL Test for variables on URL. Your username is: %s' % username