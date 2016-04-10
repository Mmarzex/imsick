
import { Mongo } from 'meteor/mongo';

export const Reports = new Mongo.Collection('reports');
export const GetReports = function() {return Reports.find().toArray(function(err,documents){
	
})}