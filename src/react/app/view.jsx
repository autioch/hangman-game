/* eslint max-len: 0 */
const { h, Component } = require('preact');
const { fetchJson } = require('utils');
const { GameSummaryView, LevelSummaryView, LandingView } = require('../message');
const AlphabetView = require('../alphabet/view');
const GallowsView = require('../gallows/view');
const PhraseView = require('../phrase/view');
const TopbarViewView = require('../topbar/view');
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

  /* Event handlers */

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
    let summaryView = '';

    if (!started) {
      summaryView = <LandingView action={this.startGame} levelCount={levelCount} attemptsCount={attemptsCount}/>;
    } else if (gameState.gameFinished) {
      summaryView = <GameSummaryView action={this.restartGame} phrase={word} gameWon={gameState.gameWon} timeSpent={timeSpent} />;
    } else if (gameState.levelFinished) {
      summaryView = <LevelSummaryView action={this.nextLevel} phrase={word} />;
    }

    return (
      <div className="m-app">
        <TopbarViewView currentLevel={currentLevel} chances={chances} gameTimer={this.game && this.game.timer}/>
        <div className="m-level">
          <PhraseView letters={phraseLetters}/>
          <GallowsView parts={gallowParts} />
        </div>
        <AlphabetView letters={alphabetLetters} action={this.chooseLetter}/>
        {summaryView}
      </div>
    );
  }
};
