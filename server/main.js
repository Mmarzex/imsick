import { Meteor } from 'meteor/meteor';
import '../imports/api/Reports';

import {Reports} from '../imports/api/Reports';

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
  
  // Sicknesses
  var sepsis = ["Fever","Coughing","Stomach Ache"];
  var syphilis = ["Sore Throat","Post Nasal Drip","Headache","Congestion"];
  var poops = ["Children","Unsatisfying Sex Life","Adulthood","Mortgage"];
  var cancer = ["Cancer","Jaundis","Gangrene","Scurvy", "White Whale"];
  var dead = ["Dead","Dead","Dead","Dead"];
  
  //40.802690, -77.867689
  Reports.insert({lat:40.802690, lng:-77.867689, symptoms:sepsis});
  //40.802568, -77.867776
  Reports.insert({lat:40.802690, lng:-77.867689, symptoms:poops});
  //40.802475, -77.867902
  Reports.insert({lat:40.802475, lng:-77.867902, symptoms:syphilis});
  //40.802345, -77.867996
  Reports.insert({lat:40.802345, lng:-77.867996, symptoms:sepsis});
  //40.802075, -77.868206
  Reports.insert({lat:40.802075, lng:-77.868206, symptoms:syphilis});
  //40.802630, -77.868835
  Reports.insert({lat:40.802630, lng:-77.868835, symptoms:poops});
  //40.803028, -77.868465
  Reports.insert({lat:40.803028, lng:-77.868465, symptoms:cancer});
  //40.802929, -77.869165
  Reports.insert({lat:40.802929, lng:-77.869165, symptoms:poops});
  //40.803256, -77.868928
  Reports.insert({lat:40.803256, lng:-77.868928, symptoms:sepsis});
  //40.803126, -77.869049
  Reports.insert({lat:40.803126, lng:-77.869049, symptoms:poops});
  //40.803098, -77.869019
  Reports.insert({lat:40.803098, lng:-77.869019, symptoms:dead});
  //40.803098, -77.869019
  Reports.insert({lat:40.803098, lng:-77.869019, symptoms:sepsis});
  //40.803328, -77.869753
  Reports.insert({lat:40.803328, lng:-77.869753, symptoms:syphilis});
  //40.803302, -77.869807
  Reports.insert({lat:40.803302, lng:-77.869807, symptoms:cancer});
  //40.803122, -77.869928
  Reports.insert({lat:40.803122, lng:-77.869928, symptoms:syphilis});
  //40.803549, -77.868637
  Reports.insert({lat:40.803549, lng:-77.868637, symptoms:dead});
  //40.803821, -77.869076
  Reports.insert({lat:40.803821, lng:-77.869076, symptoms:syphilis});
  //40.803267, -77.868082
  Reports.insert({lat:40.803267, lng:-77.868082, symptoms:sepsis});
  //40.803499, -77.865522
  Reports.insert({lat:40.803499, lng:-77.865522, symptoms:cancer});
  //40.803555, -77.865615
  Reports.insert({lat:40.803555, lng:-77.865615, symptoms:dead});
  
});
