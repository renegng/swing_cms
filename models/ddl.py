from flask import Flask
from flask_migrate import Migrate
from models import *
import sys

# Enables Flask instance 
app = Flask(__name__)

# Configuration file from environment variable
# Set env variable: $ export SWING_INSTANCE_MODELS_CONFIGFILE=/path
app.config.from_envvar('SWING_INSTANCE_MODELS_CONFIGFILE')

# Enable instance of SQLAlchemy
db.init_app(app)

# Enable instance of Migrate-Alembic
migrate = Migrate(app, db)

def main(argv):
    #Database DDL
    with app.app_context():
        # At least one parameter has been received
        if len(argv) > 1:

            # Creates all Database Tables
            if argv[1] == "create_all":
                print("Executing SQLAlchemy create_all")
                db.create_all()

            # Drops all Database Tables
            elif argv[1] == "drop_all":
                print("Executing SQLAlchemy drop_all")
                db.drop_all()
            
            # Flask Migrate commands
            elif argv[1] == "migrate":
                print("For Migrate-Alembic commands execute the following:")
                print("$ export SWING_INSTANCE_MODELS_CONFIGFILE=/path/to/config/file.py")
                print("$ export FLASK_APP=/path/to/ddl.py")
                print("$ flask db [init | migrate | upgrade | ...]")
                pass

            else:
                print("Command not supported")

        else:
            print("No command specified. Commands supported:")
            print("$ python3 ddl.py [create_all | drop_all | migrate]")


# Executes main() function if this file is executed as "__main__"
if __name__ == "__main__":
    main(sys.argv)