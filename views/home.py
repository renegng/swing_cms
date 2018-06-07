from flask import Blueprint, render_template

home = Blueprint('home', __name__, template_folder='templates', static_folder='static')

@home.route('/')
def _landing_page():
    return render_template('landing_page.html')

@home.route('/home')
def _home():
    return render_template('home.html')