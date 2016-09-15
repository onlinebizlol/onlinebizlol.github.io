$(function() {

  var CHANGE_INTERVAL = 1000;
  var DOMAIN = '@onlinebusiness.lol';
  var ADDRESS_LIST = [
    'i.want.it',
    'no.thanks',
    'succ',
    'bye',
    'eafa48ce5cb84e0abf3bf764edf6fc71',
    'whatever',
    'dont.give.a.hoot',
    'seriousbusiness',
    'iwantyoutoworkforme',
    'lol',
    'you.dump',
    'biiigcliiicks'
  ];

  var $email = $('#email');

  function changeEmail() {
    var address = ADDRESS_LIST[Math.floor(Math.random() * ADDRESS_LIST.length)];
    var email = address + DOMAIN;

    $email.attr('href', 'mailto:' + email);
    $email.text(email);

    setTimeout(changeEmail, CHANGE_INTERVAL);
  }

  setTimeout(changeEmail, CHANGE_INTERVAL);
});