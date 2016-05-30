import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { CarsCollection } from '../lib/cars.collection';

Meteor.startup(() => {
  const cars = [
    { brand: 'Ford', model: 'Fiesta', year: 2013 },
    { brand: 'Ford', model: 'Mondeo', year: 2014 },
    { brand: 'Ford', model: 'Kuga', year: 2015 },
    { brand: 'Kia', model: 'Rio', year: 2016 },
    { brand: 'Kia', model: 'Optima', year: 2015 },
    { brand: 'Kia', model: 'Sportage', year: 2014 },
    { brand: 'SsangYong', model: 'Kyron', year: 2008 },
    { brand: 'Kia', model: 'Koup', year: 2011 },
    { brand: 'Saab', model: '900', year: 1982 },
    { brand: 'Nissan', model: 'Qashqai', year: 2016 },
    { brand: 'Bentley', model: 'Bentayga', year: 2016 },
    { brand: 'BMW', model: 'X3', year: 2007 },
  ];

  CarsCollection.remove({});

  _.each(cars, car => CarsCollection.insert(car));
});
