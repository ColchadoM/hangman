/**
 * Hangman.js
 *
 * Representation of the body hangman.
 */
(function (root) {
  'use strict';

  // Number of mistakes
  var mistakes = 0;

  // Parts of the hangman inorder
  var parts = [
    'head',
    'body',
    'left-arm',
    'right-arm',
    'left-pepper',
    'right-pepper',
    'left-feet',
    'right-feet',
  ];

  var Hangman = function () {};

  Hangman.prototype = {
    reset: function () {},
    addMistake: function () {},
    isDead: function () {}
  };

  root.Hangman = Hangman;
})(this);
