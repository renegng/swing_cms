# Swing CMS
A Flask (Python) based CMS that allows people to Swing easily over WEBsite development.

-RXDBit

# Requirements

Swing CMS is being develop with the following libraries:
- Python 3.6.6 (on a virtual environment)
- Python pip 10.0.1
- Flask 1.0.2
- Apache HTTPD 2.4.18
- libapache2-mod-wsgi-py3
- NodeJS 10.1.0
- npm 6.0.1
- npm libraries:
    - webpack@3 
    - css-loader
    - sass-loader
    - node-sass
    - extract-loader
    - file-loader
    - babel-core 
    - babel-loader
    - babel-preset-es2015
    - material-components-web
    - aos (animation on scroll)


# Installation steps

To install Swing CMS, follow the next steps (under Ubuntu 16.04):

1 - Create a directory into which clone Swing CMS. If it's being deployed on a web server, like Apache HTTPD, create it under the proper directory. (i.e.: /var/www/)

2 - Inside the prevoius folder, install a Python 3.6.6 virtual environment:

    ~: [python | python3 | python3.6] -m venv venv

3 - Inside the prevoius folder, activate the virtual environment:

    ~: source ./venv/bin/activate

4 - Within the activated virtual environment, install Flask:

    ~: pip install Flask

5 - Install the appropriate plugin for Flash and Python to be executed on the web server:

    ~: sudo apt-get install libapache2-mod-wsgi-py3

6 - Instal NodeJS:

    ~: curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

    ~: sudo apt-get install -y nodejs

7 - Install git:

    ~: sudo add-apt-repository ppa:git-core/ppa

    ~: sudo apt update

    ~: sudo apt-get install git

8 - Clone Swing CMS from GitHub's repository:

    ~: git clone git@github.com:renegng/swing_cms.git

9 - Execute NodeJS's npm to install all libraries needed:

    ~: npm install

10 - Deploy!

** - AOS can sometimes generate some issues. To prevent that delete the .babelrc file under

**   the node_modules/aos folder.
