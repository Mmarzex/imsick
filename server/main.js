import { Meteor } from 'meteor/meteor';
import '../imports/api/Reports';

import {Reports} from '../imports/api/Reports';

const faker = require('faker');

const coords = [
    [40.804037, -77.865789],
[40.803443, -77.865738],
[40.804135, -77.864579],
[40.803574, -77.864699]
];

const symptoms = ['Aches and Pains',
    'Fever',
    'Cold Symptoms',
    'Stomach Issues'];

Meteor.startup(() => {
  // // code to run on server at startup
  //   for(var i = 0; i < 50; i++) {
  //       var newReport = {};
  //       const randomCord = Math.floor(Math.random() * (coords.length - 1 + 1)) + 0;
  //       const randomSymptom = Math.floor(Math.random() * (symptoms.length -1 + 1)) + 0;
  //       newReport.lat = coords[randomCord][0];
  //       newReport.lng = coords[randomCord][1];
  //       newReport.symptoms = [];
  //       newReport.symptoms.push(symptoms[randomSymptom]);
  //       Reports.insert(newReport);
  //   }
});
