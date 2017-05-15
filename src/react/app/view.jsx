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
    const { alphabetLetters, chances, gameState, letters, word, timeSpent, started } = this.state;
    const { levelCount, gameFinished, levelFinished, attemptsCount, gameWon, currentLevel } = gameState;
    let messageView = '';

    if (!started) {
      messageView = <LandingView action={this.startGame} levelCount={levelCount} attemptsCount={attemptsCount}/>;
    } else if (gameFinished) {
      messageView = <GameSummaryView action={this.restartGame} word={word} gameWon={gameWon} timeSpent={timeSpent} />;
    } else if (levelFinished) {
      messageView = <LevelSummaryView action={this.nextLevel} word={word} />;
    }

    return (
      <div className="m-app">
        <TopbarView currentLevel={currentLevel} chances={chances} gameTimer={this.game && this.game.timer}/>
        <LevelView letters={letters} chances={chances} attemptsCount={attemptsCount}/>
        <AlphabetView letters={alphabetLetters} action={this.chooseLetter}/>
        {messageView}
      </div>
    );
  }
};
