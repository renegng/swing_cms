from flask import Flask, render_template
from views.home import home as home_view
from views.content import content as content_view

app = Flask(__name__)

# Home
app.register_blueprint(home_view)

# Articles
app.register_blueprint(content_view)

@app.route('/user/<username>/')
def user(username):
    return 'This is a second URL Test for variables on URL. Your username is: %s' % username