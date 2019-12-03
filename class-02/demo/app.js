'use strict';
// use strict is almost alwayst the first line of our js files

// this console.log is just the test that we've hooked up the files correctly
console.log('the javascript is linked correctly!');

var username = prompt('Tell me your name!');
console.log('user\'s name was ' + username);

// conditionals! let us use if, else if, else to run different pieces of code in different scenarios

// if the username is Michelle, show a custom message
// otherwise, for everyone else, show a generic message
var lowerCaseUsername = username.toLowerCase();
if(lowerCaseUsername === 'michelle') {
  alert('welcome back, you cool person ' + username);
} else {
  alert('Welcome to my site!');
}
