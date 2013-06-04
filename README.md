# Rob's RPS Bot

An Rock-Paper-Scissors AI that will perform well in a round-robin
tournament against a set of very simple bots by maximizing a total net
score of wins - losses.  Matches between two bots consist of 100 sets
which are 100 games long.  The bots must implement an interface that
the tournament director will invoke to receive the bot's moves.  The
final tournament to test the quality of this AI, will be against other
unseen bots of similar complexity.

Also the other questions like strcpy are located in the
extra-questions folder.

## Requirements

  * grunt-cli >= v0.1.7
  * node  >= v0.8.19
  
## Getting Started

To get started and install the required libraries to test the code
run:

```
npm install
grunt
```

## Strategy

Some sample strategies to use:

1. Most often rookies start playing with ROCK.  A good strategy is
   to use an opening move like scissors since most experienced
   players won't start with ROCK and choosing SCISSORS either
   gives a stalemate or a win over paper.
2. Look for double runs (ie two of the same throw).  Usually it is
   human nature to not throw a move that is the same as the two
   before it.
3. Based off of the last throw that the user lost on based move
   around that since it is unlikely to be played again.
4. When all else fails play with PAPER since it has been shown to
   that SCISSOR has been played the least amount statistically.

