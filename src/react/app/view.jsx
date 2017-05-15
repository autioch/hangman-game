/* eslint max-len: 0 */
const { h, Component } = require('preact');
const { fetchJson } = require('utils');
const AlphabetView = require('../alphabet/view');
const TopbarView = require('../topbar/view');
const LevelView = require('../level/view');
const { GameSummaryView, LevelSummaryView, LandingView } = require('../message');
const getInitialState = require('./getInitialState');
const getGameState = require('./getGameState');
const setupGame = require('./setupGame');

require('./styles');

const eventHandlers = ['startGame', 'restartGame', 'nextLevel', 'chooseLetter'];

module.exports = class AppView extends Component {
  constructor(props) {
    super(props);
    eventHandlers.forEach((eventHandler) => {
      this[eventHandler] = this[eventHandler].bind(this);
    });
    this.state = getInitialState();
    setupGame().then((game) => {
      this.game = game;
      this.syncStateToGame();
    });
  }

  startGame() {
    this.setState({
      started: true
    });
    this.game.nextLevel();
    this.syncStateToGame();
  }

  restartGame() {
    this.game.reset();
    this.game.nextLevel();
    this.syncStateToGame();
  }

  nextLevel() {
    this.game.nextLevel();
    this.syncStateToGame();
  }

  chooseLetter(letter) {
    this.game.pickLetter(letter);
    this.syncStateToGame();
  }

  syncStateToGame() {
    this.setState(getGameState(this.game));
  }

  render() {
    const { currentLevel, gameState, started, chances, attemptsCount, levelCount, word, timeSpent, phraseLetters, alphabetLetters, gallowParts } = this.state;
    let messageView = '';

    if (!started) {
      messageView = <LandingView action={this.startGame} levelCount={levelCount} attemptsCount={attemptsCount}/>;
    } else if (gameState.gameFinished) {
      messageView = <GameSummaryView action={this.restartGame} phrase={word} gameWon={gameState.gameWon} timeSpent={timeSpent} />;
    } else if (gameState.levelFinished) {
      messageView = <LevelSummaryView action={this.nextLevel} phrase={word} />;
    }

    return (
      <div className="m-app">
        <TopbarView currentLevel={currentLevel} chances={chances} gameTimer={this.game && this.game.timer}/>
        <LevelView letters={phraseLetters} parts={gallowParts} />
        <AlphabetView letters={alphabetLetters} action={this.chooseLetter}/>
        {messageView}
      </div>
    );
  }
};
