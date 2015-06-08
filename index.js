var loggly = require('loggly');

module.exports = function( options ){
  var defaults = {
    json: true
  };

  for ( var key in defaults ){
    if ( !( key in options ) ){
      options[ key ] = defaults[ key ];
    }
  }

  // Create an initial client to verify options
  var client = loggly.createClient( options );

  return function( entry ){
    loggly.createClient( options );
    client.log( entry, entry.parents.concat( entry.copmonent || [] ) );
  };
}