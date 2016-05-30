import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { AutoForm } from 'meteor/aldeed:autoform';
import { CarsCollection } from '../lib/cars.collection';

import './main.html';

const schema = new SimpleSchema({
  year: {
    type: Number,
    autoform: {
      afFieldInput: {
        firstOption: '(Select Year)',
        options() {
          return _.map(
            _.uniq(
              CarsCollection
                .find({}, { sort: { year: 1 } })
                .map(car => car.year)
            ),
            year => ({ label: year, value: Number(year) })
          );
        },
      },
    },
  },
  brand: {
    type: String,
    autoform: {
      afFieldInput: {
        firstOption: '(Select Brand)',
        options() {
          const year = AutoForm.getFieldValue('year', 'appForm');
          return _.map(
            _.uniq(
              CarsCollection
                .find({ year }, { sort: { brand: 1 } })
                .map(car => car.brand)
            ),
            brand => ({ label: brand, value: brand })
          );
        },
      },
    },
  },
  model: {
    type: String,
    autoform: {
      afFieldInput: {
        firstOption: '(Select Model)',
        options() {
          const brand = AutoForm.getFieldValue('brand', 'appForm');
          const year = AutoForm.getFieldValue('year', 'appForm');
          return _.map(
            _.uniq(
              CarsCollection
                .find({ year, brand }, { sort: { model: 1 } })
                .map(car => car.model)
            ),
            model => ({ label: model, value: model })
          );
        },
      },
    },
  },
});

Template.app.helpers({
  schema: () => schema,
  cars() {
    const brand = AutoForm.getFieldValue('brand', 'appForm');
    const year = AutoForm.getFieldValue('year', 'appForm');
    const model = AutoForm.getFieldValue('model', 'appForm');

    const filter = {};

    if (brand) {
      filter.brand = brand;
    }

    if (year) {
      filter.year = year;
    }

    if (model) {
      filter.model = model;
    }
    return CarsCollection.find(filter);
  },
});
