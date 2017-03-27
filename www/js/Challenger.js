/**
 * Challenger.js
 *
 * Logic and display of the challenger of the game.
 */
(function (root) {
  'use strict';

  // Target and current word
  var targetWord;
  var currentWord;

  function addPastAnswer (letter) {
    var divAnswer = $('<div></div>');
    divAnswer.html('La letra "' + letter + '" no esta.');

    $('#past-answers').append(divAnswer);
  }

  var Challenger = {
    reset: function () {
    },

    setWord: function (word) {
    },

    guessLetter: function (letter) {
    },

    showCurrentWord: function () {
    }
  };

  root.Challenger = Challenger;
})(this);
