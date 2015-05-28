var loggly = require('loggly');

module.exports = function( options ){
  var defaults = {
  , json: true
  };

  for ( var key in defaults ){
    if ( !( key in options ) ){
      options[ key ] = defaults[ key ];
    }
  }

  var client = loggly.createClient( options );

  return function( entry ){
    client.log( entry );
  };
}