from flask import Flask, render_template
from views.home import home as home_view
from views.content import content as content_view
from views.seo import seo as seo_view

# Enables Instance Folder Configuration (instance_relative_config=True) 
app = Flask(__name__, instance_relative_config=True)

# Configuration File From Instance Folder
app.config.from_pyfile('config.py')

# Home
app.register_blueprint(home_view)

# Articles
app.register_blueprint(content_view)

# Search Engine Optimization - SEO
app.register_blueprint(seo_view)

# Register the Service Worker
@app.route('/sw.js', methods=['GET'])
def serviceworker():
    return app.send_static_file('js/sw.js')

@app.route('/user/<username>/')
def user(username):
    return 'This is a second URL Test for variables on URL. Your username is: %s' % username