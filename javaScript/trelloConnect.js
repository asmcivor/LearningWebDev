/**
 * Created by Alan on 5/21/2016.
 */
var authenticationSuccess = function() { console.log('Successful authentication'); };
var authenticationFailure = function() { console.log('Failed authentication'); };

$(document).ready(function() {
    Trello.authorize({
        type: 'popup',
        name: 'Getting Started Application',
        scope: {
            read: true,
            write: true },
        expiration: 'never',
        success: authenticationSuccess,
        error: authenticationFailure
    });
}

/*
$(document).ready(function() {
    Trello.authorize({
        type: 'popup',
        //interactive: false,
        scope: { read: true, write: true },
        success: function() {
            update_logged_in_status();
            post_card_based_on_url_parameters();
        },
        error: function() {
            update_logged_in_status();
        }
    });
*/