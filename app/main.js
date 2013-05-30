"use strict";


var RPS = {Player: new Object()};
RPS.Moves = {ROCK: 1, PAPER: 2, SCISSORS: 3};
global.RPS = RPS;

RPS.randomMove = function() {
  return Math.floor(Math.random() * 3 + 1);
};

RPS.trumps = function(move) {
  if (move === 1) // move is ROCK
    return RPS.Moves.PAPER;
  else if (move === 2) // move is PAPER
    return RPS.Moves.SCISSORS;
  else
    return RPS.Moves.ROCK;
};

RPS.result = function(a, b) {
  if (a === b)
    return 0;

  if(a === 1) {
    if (b === 2)
      return -2;
    else
      return 1;
  }
  else if (a === 2) {
    if (b === 3)
      return -2;
    else
      return 1;
  }
  else {
    if (b === 1)
      return -2;
    else
      return 1;
  }
};


// Rob's RPS Player class
/*
  Some sample strategies to use:
    1) Most often rookies start playing with ROCK.  A good strategy is
       to use an opening move like scissors since most experienced
       players won't start with ROCK and choosing SCISSORS either
       gives a stalemate or a win over paper.
    2) Look for double runs (ie two of the same throw).  Usually it is
       human nature to not throw a move that is the same as the two
       before it.
    3) Based off of the last throw that the user lost on based move
       around that since it is unlikely to be played again.
    4) When all else fails play with PAPER since it has been shown to
       that SCISSOR has been played the least amount statistically.
*/
RPS.Player.RobsPlayer = (function() {
  var RobsPlayer = function() {
    this.NAME = "Rob's Player";
    this.lastMoves = [];
    this.won = 0;
  };

  RobsPlayer.prototype.throwMove = function() {
    if (this.won === 1) {
      if (this.lastMoves[0] === RPS.Moves.SCISSORS)
        return RPS.Moves.PAPER;
      else if (this.lastMoves[0] === RPS.Moves.ROCK)
        return RPS.Moves.SCISSORS;
      else
        return RPS.Moves.ROCK;
    }
    if (this.lastMoves[0] === this.lastMoves[1]) {
      if (this.lastMoves[0] === RPS.Moves.PAPER)
        return RPS.Moves.ROCK;
      else if (this.lastMoves[0] === RPS.Moves.SCISSORS)
        return RPS.Moves.PAPER;
      else
        return RPS.Moves.SCISSORS;
    }
    return RPS.randomMove();
  };

  RobsPlayer.prototype.addResult = function(result, opponentMove) {
    if (this.lastMoves.length >= 2)
      this.lastMoves.pop();
    this.lastMoves.unshift(opponentMove);
    this.won = result;
  };

  return RobsPlayer;
})();
