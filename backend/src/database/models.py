import os
from sqlalchemy import Column, String, Integer, ForeignKey, Float
from sqlalchemy.orm import relationship
from sqlalchemy.orm.collections import attribute_mapped_collection
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'postgres://postgres:1234@localhost:5432/campgrounds'


db = SQLAlchemy()

def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    migrate = Migrate(app, db)
    db.init_app(app)

def db_drop_and_create_all():
    db.drop_all()
    db.create_all()

amenities = db.Table('amenities',
    db.Column('amenity_id', db.Integer, db.ForeignKey('Amenity.id'),
              primary_key=True),
    db.Column('campground_id', db.Integer, db.ForeignKey('Campground.id'),
              primary_key=True)
)

class Campground(db.Model):
    __tablename__ = 'Campground'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    province = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    postal_code = db.Column(db.String, nullable=False)
    address = db.Column(db.String, nullable=False)
    lat = db.Column(db.String)
    lon = db.Column(db.String)
    email = db.Column(db.String)
    description = db.Column(db.String, nullable=False)
    website = db.Column(db.String)
    sites = db.relationship('Site', backref='Campground',
                            cascade='all, delete', lazy=True)
    phone_numbers = db.relationship('Phone', backref='Campground',
                                    cascade='all, delete', lazy=True)
    featured = db.Column(db.Integer, default=0)
    amenities = relationship('Amenity', secondary=amenities, lazy='subquery',
                             backref=db.backref('Campground', lazy=True))

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'address': self.address,
            'city': self.city,
            'province': self.province,
            'country': self.country,
            'postal_code': self.postal_code,
            'lat': self.lat,
            'lon': self.lon,
            'sites': self.sites,
            'description': self.description,
            'website': self.website,
            'phone_numbers': self.phone_numbers,
            'email':  self.email,
            'featured': self.featured,
            'amenities': self.amenities
        }

    def __repr__(self):
        return '<Campground %r>' % self.name

class Phone(db.Model):
    __tablename__ = 'Phone'

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.String(120), nullable=False)
    num_type = db.Column(db.String, nullable=False)
    campground_id = db.Column(db.Integer, db.ForeignKey('Campground.id'),
                              nullable=False)

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'number': self.number,
            'num_type': self.num_type,
            'campground_id': self.campground_id
        }

    def __repr__(self):
        return '<Phone %r>' % self.number

class Amenity(db.Model):
    __tablename__ = 'Amenity'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name
        }

    def __repr__(self):
        return '<Amenity %r>' % self.name

class Site(db.Model):
    __tablename__ = 'Site'

    id = db.Column(db.Integer, primary_key=True)
    site_type = db.Column(db.String, nullable=False)
    name = db.Column(db.String)
    num_avail = db.Column(db.Integer)
    price_night = db.Column(db.Float)
    price_week = db.Column(db.Float)
    price_month = db.Column(db.Float)
    campground_id = db.Column(db.ForeignKey('Campground.id'),
                              nullable=False)

    def insert(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def format(self):
        return {
            'id': self.id,
            'name': self.name,
            'type': self.site_type,
            'num_avail': self.num_avail,
            'price_night': self.price_night,
            'price_week': self.price_week,
            'price_month': self.price_month
        }

    def __repr__(self):
        return '<Site %r>' % self.name
