var mongojs = require('mongojs');

var db = mongojs('mongodb:localhost:27017/oauth2orize_authorization_grant')

exports.db = function() {
    return db
}
