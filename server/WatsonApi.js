import { Meteor } from 'meteor/meteor';
import Future from 'fibers/future';
var watson = require('watson-developer-cloud');

if(Meteor.isServer) {
    var Api = new Restivus({
        useDefaultAuth: true,
        prettyJson: true
    });

    Api.addRoute('watson', {
        get: function () {

            var future = new Future();

            var dialog_service = watson.dialog({
                username: 'd19c201f-6c8d-4c74-8bfd-ce70759c64a8',
                password: '4Fk6oItWBsKs',
                version: 'v1'
            });
            dialog_service.getDialogs({}, function(err, dialogs) {
                if (err) {
                    console.log(err);
                    future.return(err);
                    // return err;
                } else {
                    console.log(dialogs);
                    future.return(dialogs);
                    // return dialogs;
                }


            });

            return future.wait();
        }
    });

    const watsonResponse = [
        'Hello, I\'m Bemax, your personal healthcare companion.',
        'That\'s not good, let\'s get you some help. What type of symptoms do you have?',
        'I\'m sorry you feel that way. Let\'s try to narrow down what is wrong with you. /n Do you have a fever?',
        'That\'s not good :( \n You may have the flu or another serious respitory illness \n I would go see a doctor right away',
        'You probably just have the common cold \n I would recommend taking some Clariton-D or other Pseudoephedrine product. \n It will help with the decongestion and hopefully let you get some much needed rest. \n Don\'t forget to drink your fluids!'
    ];

    const userResponses = [
        ['I\'m Sick'],
        ['Aches and Pains',
            'Fever',
            'Cold Symptoms',
            'Stomach Issues'],
        ['Yes', 'No']
    ];


    Api.addRoute('converse/imsick', {
        get: function() {
            var future = new Future();

            var dialog_service = watson.dialog({
                username: 'd19c201f-6c8d-4c74-8bfd-ce70759c64a8',
                password: '4Fk6oItWBsKs',
                version: 'v1'
            });
            var params = {
                dialog_id: '02765d2c-9228-426e-9170-1d8e525b719f',
                input:     'I\'m Sick'
            };

            dialog_service.conversation(params, function(err, conversation) {
                if (err) {
                    future.return(err);
                }
                else {
                    conversation.userResponses = userResponses[0];
                    future.return(conversation);
                }
            });

            return future.wait();
        },
        post: function() {
            var future = new Future();

            var dialog_service = watson.dialog({
                username: 'd19c201f-6c8d-4c74-8bfd-ce70759c64a8',
                password: '4Fk6oItWBsKs',
                version: 'v1'
            });
            console.log(this.bodyParams);
            var params = {
                dialog_id: '02765d2c-9228-426e-9170-1d8e525b719f',
                conversation_id: this.bodyParams.conversationId,
                input: this.bodyParams.input
            };

            dialog_service.conversation(params, function(err, conversation) {
                if (err) {
                    future.return(err);
                }
                else {
                    const index = watsonResponse.indexOf(conversation.response[0]);
                    if(index < 3)
                        conversation.userResponses = userResponses[index];
                    future.return(conversation);
                }
            });

            return future.wait();
        }
    })

}