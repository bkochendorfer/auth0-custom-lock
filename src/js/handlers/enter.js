var isLDAP = require( 'helpers/isLDAP' );
var ui = require( 'helpers/ui' );

module.exports = function enter( element ) {
  var form = element.form;
  var emailField = document.getElementById( 'email' );
  var passwordField = document.getElementById( 'password-field' );
  var passwordLess = document.getElementById( 'passwordless' );

  if ( isLDAP( emailField.value ) ) {
    // show password field
    ui.show( passwordField );
  }
  else {
    // show social logins + passwordless
    ui.show( passwordLess );
  }
}
