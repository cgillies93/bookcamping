from flask import Flask, request, jsonify, abort
from sqlalchemy import literal
import json
import math
from flask_cors import CORS
from .recommend import get_recommendations
from .database.models import (setup_db, Campground, Amenity, Site,
Phone, amenities, db_drop_and_create_all)
from .database.populate import populate

app = Flask(__name__)
setup_db(app)
cors = CORS(app)

# db_drop_and_create_all()
# populate()

@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Headers",
                         "Content-Type, Authorization, true")
    response.headers.add("Access-Control-Allow-Methods",
                         "GET, POST, PATCH, DELETE, OPTIONS")

    return response

@app.route('/featured', methods=['GET'])
def featured():
    campgrounds = Campground.query.filter(Campground.featured == 1).all()
    campgrounds = [campground.format() for campground in campgrounds]
    for campground in campgrounds:
        campground['amenities'] = [amenity.format() for amenity in campground['amenities']]
        campground['phone_numbers'] = [pn.format() for pn in campground['phone_numbers']]
        campground['sites'] = [site.format() for site in campground['sites']]

    try:
        return jsonify({
            'success': True,
            'featured': campgrounds
        }), 200
    except:
        abort(404)

@app.route('/featured/add/<int:id>', methods=['PATCH'])
def add_featured(id):
    campground = Campground.query.filter(Campground.id == id).first()
    campground.featured = 1


    try:
        campground.update()

        return jsonify({
            'success': True,
            'add_featured': campground.id
        }), 200
    except:
        abort(404)

@app.route('/featured/remove/<int:id>', methods=['PATCH'])
def remove_featured(id):
    campground = Campground.query.filter(Campground.id == id).first()
    campground.featured = 0

    try:
        return jsonify({
            'success': True,
            'remove_featured': campground.id
        }), 200
    except:
        abort(404)


@app.route('/recommendations/<int:id>', methods=['GET'])
def recommendations(id):
    campground = Campground.query.filter(Campground.id == id).first()
    data = Campground.query.all()
    name = campground.name

    data = [campground.format() for campground in data]

    r = get_recommendations(data, name)
    r = r.to_list()

    recommendations = []
    for rec in r:
        campground = Campground.query.filter(Campground.name == rec).first()
        if campground is not None:
            recommendations.append(campground.format())

    for rec in recommendations:
        rec['amenities'] = [amenity.format() for amenity in rec['amenities']]
        rec['phone_numbers'] = [pn.format() for pn in rec['phone_numbers']]
        rec['sites'] = [site.format() for site in rec['sites']]

    return jsonify({
        'success': True,
        'recommendations': recommendations
    }), 200

@app.route('/cities', methods=['GET'])
def all_cities():
    campgrounds = Campground.query.all()
    campgrounds = [campground.format() for campground in campgrounds]

    cities = []
    for campground in campgrounds:
        if campground['city'] not in cities:
            cities.append(campground['city'])

    try:
        return jsonify({
            'success': True,
            'cities': cities
        }), 200
    except:
        abort(404)

@app.route('/nearby', methods=['POST'])
def nearby_campgrounds():
    data = request.get_json()
    lat = data.get('lat')
    lon = data.get('lon')

    distance_lst = []
    campgrounds = Campground.query.all()
    campgrounds = [campground.format() for campground in campgrounds]

    for campground in campgrounds:
        campground['amenities'] = [amenity.format() for amenity in campground['amenities']]
        campground['phone_numbers'] = [pn.format() for pn in campground['phone_numbers']]
        campground['sites'] = [site.format() for site in campground['sites']]

        x = abs(lat - float(campground['lat']))**2
        y = abs(lon - float(campground['lon']))**2
        distance = math.sqrt(abs(x-y))
        temp = {
            'campground': campground,
            'distance': distance
        }
        distance_lst.append(temp)

        def func(e):
            return e['distance']
        distance_lst.sort(key=func)


        closest = distance_lst[slice(3)]


    return jsonify({
        'success': True,
        'campgrounds': closest
    })


@app.route('/campgrounds', methods=['GET'])
def all_campgrounds():
    campgrounds = Campground.query.all()
    campgrounds = [campground.format() for campground in campgrounds]

    for campground in campgrounds:
        campground['amenities'] = [amenity.format() for amenity in campground['amenities']]
        campground['phone_numbers'] = [pn.format() for pn in campground['phone_numbers']]
        campground['sites'] = [site.format() for site in campground['sites']]

    try:
        return jsonify({
            'success': True,
            'campgrounds': campgrounds
        }), 200
    except:
        abort(404)

@app.route('/campgrounds/<int:id>', methods=['GET'])
def campground(id):
    campground = Campground.query.filter(Campground.id == id).first()
    campground = campground.format()

    campground['amenities'] = [amenity.format() for amenity in campground['amenities']]
    campground['phone_numbers'] = [pn.format() for pn in campground['phone_numbers']]
    campground['sites'] = [site.format() for site in campground['sites']]

    try:
        return jsonify({
            'success': True,
            'campground': campground
        }), 200
    except:
        abort(404)


@app.route('/campgrounds', methods=['POST'])
def create_campground():
    data = request.get_json()
    name = data.get('name')
    address = data.get('address')
    city = data.get('city')
    country = data.get('country')
    province = data.get('province')
    postal_code = data.get('postalCode')
    lat = data.get('lat')
    lon = data.get('lon')
    description = data.get('description')
    website = data.get('website')
    email = data.get('email')
    sites = data.get('sites')
    phone_numbers = data.get('phoneNumbers')
    amenities = data.get('amenities')

    try:
        campground = Campground(name=name, address=address, lat=lat,
                                lon=lon, description=description,
                                website=website, email=email, city=city,
                                country=country, province=province,
                                postal_code=postal_code)

        for amenity in amenities:
            a = Amenity.query.filter(Amenity.name == amenity).first()
            campground.amenities.append(a)



        campground.insert()

        if len(sites) > 0:
            for site in sites:
                print(site)
                site_type = site.get('type')
                name = site.get('name')
                num_avail = site.get('numAvail')
                price_night = site.get('priceNight')
                price_week = site.get('priceWeek')
                price_month = site.get('priceMonth')
                site_to_add = Site(site_type=site_type, name=name,
                                   num_avail=num_avail,
                                   price_night=price_night,
                                   price_week=price_week,
                                   price_month=price_month,
                                   campground_id=campground.id)

                site_to_add.insert()

        if len(phone_numbers) > 0:
            for pn in phone_numbers:
                number = pn.get('number')
                num_type = pn.get('numType')

                phone_to_add = Phone(number=number, num_type=num_type,
                                   campground_id=campground.id)

                phone_to_add.insert()

        return jsonify({
            'success': True,
            'created': campground.id
        }), 201
    except:
        abort(422)

@app.route('/campgrounds/<int:id>', methods=['DELETE'])
def delete_campground(id):
    campground = Campground.query.filter(Campground.id == id).first()
    try:
        campground.delete()
        return jsonify({
            'success': True,
            'deleted': campground.id
        }), 200
    except:
        abort(404)


# Amenity Routes ----------------------#

@app.route('/amenities', methods=['GET'])
def all_amenities():
    amenities = Amenity.query.all()
    amenities = [amenity.format() for amenity in amenities]

    try:
        return jsonify({
            'success': True,
            'amenities': amenities
        }), 200
    except:
        abort(404)

@app.route('/amenities', methods=['POST'])
def create_amenity():
    data = request.get_json()
    name = data.get('name')

    try:
        amenity = Amenity(name=name)
        amenity.insert()

        return jsonify({
            'success': True,
            'created': amenity.id
        }), 201
    except:
        abort(404)

@app.route('/amenities/<int:id>', methods=['PATCH'])
def update_amenity(id):
    data = request.get_json()
    amenity = Amenity.query.filter(Amenity.id == id).first()

    amenity.name = data.get('name')
    try:
        amenity.update()

        return jsonify({
            'sucess': True,
            'updated': amenity.id
        }), 200
    except:
        abort(422)

@app.route('/amenities/<int:id>', methods=['DELETE'])
def delete_amenity(id):
    amenity = Amenity.query.filter(Amenity.id == id).first()

    try:
        amenity.delete()

        return jsonify({
            'success': True,
            'deleted': amenity.id
        }), 200
    except:
        abort(404)


# PhoneNumber Routes ----------------------#

@app.route('/phone-numbers', methods=['GET'])
def phone_numbers():
    phone_numbers = Phone.query.all()
    phone_numbers = [pn.format() for pn in phone_numbers]

    try:
        return jsonify({
            'success': True,
            'phoneNumbers': phone_numbers
        }), 200
    except:
        abort(404)

@app.route('/phone-numbers/<int:campground_id>', methods=['POST'])
def add_phone_number(campground_id):
    data = request.get_json()
    number = data.get('number')
    num_type = data.get('numType')

    try:
        num_to_add = Phone(number=number, num_type=num_type,
                           campground_id=campground_id)
        num_to_add.insert()

        return jsonify({
            'success': True,
            'created': num_to_add.id
        }), 201
    except:
        abort(422)

@app.route('/phone-numbers/<int:id>', methods=['PATCH'])
def edit_phone_number(id):
    data = request.get_json()
    pn = Phone.query.filter(Phone.id == id).first()
    number = data.get('number')
    num_type = data.get('numType')

    try:
        if number is not None:
            pn.number = number
        if num_type is not None:
            pn.num_type = num_type

        pn.update()

        return jsonify({
            'success': True,
            'updated': pn.id
        }), 200
    except:
        abort(404)

@app.route('/phone-numbers/<int:id>', methods=['DELETE'])
def delete_phone_number(id):
    pn = Phone.query.filter(Phone.id == id).first()

    try:
        pn.delete()

        return jsonify({
            'success': True,
            'deleted': pn.id
        }), 200
    except:
        abort(404)

@app.route('/search/<query>', methods=['GET'])
def search(query):
    query = '%' + query + '%'
    campgrounds = Campground.query.filter(Campground.city.ilike(query)).all()
    campgrounds = [campground.format() for campground in campgrounds]
    print(type(query))

    for campground in campgrounds:
        campground['amenities'] = [amenity.format() for amenity in campground['amenities']]
        campground['phone_numbers'] = [pn.format() for pn in campground['phone_numbers']]
        campground['sites'] = [site.format() for site in campground['sites']]

    try:
        return jsonify({
            'success': True,
            'search_results': campgrounds
        }), 200
    except:
        abort(404)
