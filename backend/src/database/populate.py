import json
from .models import (setup_db, Campground, Amenity, Site, Phone, amenities)
with open('./database/data/amenities.json') as json_file:
    amenities_data = json.load(json_file)
with open('./database/data/campgrounds.json') as json_file:
    campgrounds_data = json.load(json_file)

def populate_amenities(amenities_data):
    for amenity in amenities_data.get('amenities'):
        name = amenity.get('name')

        try:
            amenity = Amenity(name=name)
            amenity.insert()

        except:
            print('Error Creating Amenity')

def populate_campgrounds(campgrounds_data):
    for campground in campgrounds_data.get('campgrounds'):
        name = campground.get('name')
        address = campground.get('address')
        city = campground.get('city')
        country = campground.get('country')
        province = campground.get('province')
        postal_code = campground.get('postalCode')
        lat = campground.get('lat')
        lon = campground.get('lon')
        description = campground.get('description')
        website = campground.get('website')
        email = campground.get('email')
        sites = campground.get('sites')
        phone_numbers = campground.get('phoneNumbers')
        amenities = campground.get('amenities')

        try:
            campground_to_add = Campground(name=name, address=address,
                                           lat=lat, lon=lon,
                                           description=description,
                                           website=website, email=email,
                                           city=city, country=country,
                                           province=province,
                                           postal_code=postal_code)
            try:
                for amenity in amenities:
                    a = Amenity.query.filter(Amenity.name == amenity).first()
                    campground_to_add.amenities.append(a)

                campground_to_add.insert()
            except:
                print('Error Creating Amenity')
                print(amenity)
                break;

            try:
                if sites is not None:
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
                                           campground_id=campground_to_add.id)

                        site_to_add.insert()
            except:
                print('Error Creating Site')
                print(sites)
                break;

            try:
                if len(phone_numbers) > 0:
                    for pn in phone_numbers:
                        number = pn.get('number')
                        num_type = pn.get('numType')

                        phone_to_add = Phone(number=number, num_type=num_type,
                                           campground_id=campground_to_add.id)

                        phone_to_add.insert()
            except:
                print('Error Creating Phone')
                break;
        except:
            print('Error Creating Campground')
            break;

def populate():
    populate_amenities(amenities_data)
    populate_campgrounds(campgrounds_data)
