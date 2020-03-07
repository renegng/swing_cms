from datetime import datetime
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# **************************************************************************
# Database models
# **************************************************************************

# User Information Class
class UserInfo(db.Model):
    __tablename__ = 'user_info'
    ui_id = db.Column(db.Integer, primary_key=True)
    ui_email = db.Column(db.String(255), unique=True, nullable=False)
    ui_name = db.Column(db.String(300), unique=False, nullable=False)
    ui_phonenumber = db.Column(db.String(20), unique=False, nullable=True)
    ui_cmsvuser = db.Column(db.String(15), unique=False, nullable=False)
    ui_notifications = db.Column(db.Boolean, unique=False, nullable=True)
    ui_enabled = db.Column(db.Boolean, unique=False, nullable=True, default=True)
    ui_datecreated = db.Column(db.DateTime, unique=False, nullable=False, index=True, default=datetime.utcnow)
    ui_roles = db.relationship('UserXRole', secondary='user_x_role', lazy='subquery', back_populates='uxr_user_info')

    def __repr__(self):
        return jsonify(
            id = self.ui_id,
            email = self.ui_email,
            name = self.ui_name,
            phonenumber = self.ui_phonenumber,
            cmsvuser = self.ui_cmsvuser,
            notifications = self.ui_notifications,
            enabled = self.ui_enabled,
            roles = self.ui_roles
        )


# Role Class
class UserRole(db.Model):
    __tablename__ = 'user_role'
    ur_id = db.Column(db.Integer, primary_key=True)
    ur_name = db.Column(db.String(60), unique=True, nullable=False)
    ur_enable = db.Column(db.Boolean, unique=False, nullable=True, default=True)
    ur_users = db.relationship('UserXRole', secondary='user_x_role', lazy='subquery', back_populates='uxr_user_role')

    def __repr__(self):
        return jsonify(
            id = self.ur_id,
            name = self.ur_name,
            enabled = self.ur_enable,
            users = self.ur_users
        )


# User Roles Class
class UserXRole(db.Model):
    __tablename__ = 'user_x_role'
    uxr_user_id = db.Column(db.Integer, db.ForeignKey('user_info.ui_id'), primary_key=True)
    uxr_user_role_id = db.Column(db.Integer, db.ForeignKey('user_role.ur_id'), primary_key=True)
    uxr_datecreated = db.Column(db.DateTime, unique=False, nullable=False, index=True, default=datetime.utcnow)
    uxr_user_info = db.relationship('UserInfo', back_populates='ui_roles')
    uxr_user_role = db.relationship('UserRole', back_populates='ui_users')
