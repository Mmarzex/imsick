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
  //   var variance = 0.000099;
    for(var i = 0; i < 200; i++) {
        var newReport = {};
        const randomCord = Math.floor(Math.random() * (coords.length - 1 + 1)) + 0;
        var randomSec;
        if(randomCord !== coords.length - 1) {
            randomSec = randomCord + 1;
        } else {
            randomSec = randomCord - 1;
        }

        var variancelat = Math.random() / 1000;
        var variancelng = Math.random() / 1000;

        const randomSymptom = Math.floor(Math.random() * (symptoms.length -1 + 1)) + 0;
        // var variance = {};
        // variance.latV = Math.abs(coords[randomCord][0] - coords[randomSec][0]) / 2;
        // variance.lngV = Math.abs(coords[randomCord][1] - coords[randomSec][1]) / 2;
        newReport.lat = coords[randomCord][0] + variancelat;
        newReport.lng = coords[randomCord][1] + variancelng;
        newReport.symptoms = [];
        newReport.symptoms.push(symptoms[randomSymptom]);
        console.log(newReport);
        Reports.insert(newReport);
        // variance = variance / 2;
    }
});
