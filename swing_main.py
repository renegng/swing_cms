from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('home.html')

@app.route('/user/<username>/')
def user(username):
    return 'This is a second URL Test for variables on URL. Your username is: %s' % username