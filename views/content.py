from flask import Blueprint, render_template

content = Blueprint('content', __name__, template_folder='templates', static_folder='static')

@content.route('/article')
def _article():
    return render_template('article.html')