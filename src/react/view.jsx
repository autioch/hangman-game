const { h, Component } = require('preact');
const configPath = require('config');
const { fetchJson } = require('utils');
const AlphabetView = require('./alphabet/view');
const GallowsView = require('./gallows/view');
const { GameSummaryView, LevelSummaryView } = require('./message');
const PhraseView = require('./phrase/view');
const TopbarViewView = require('./topbar/view');
const HangmanGame = require('core/game');

require('./styles');

module.exports = class AppView extends Component {
  constructor(props) {
    super(props);
    this.chooseLetter = this.chooseLetter.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.state = {
      letters: [],
      levelCount: 0,
      loaded: false,
      gameState: {},
      phrase: [],
      timeSpent: {},
      parts: []
    };
    this.getConfig();
    this.timerInterval = setInterval(this.updateTime.bind(this), 1000);
  }

  setupHangman(config) {
    const { words, letters, levelCount, attemptsCount } = config;

    this.game = new HangmanGame(words, letters, levelCount, attemptsCount);
  }

  getConfig() {
    fetchJson(configPath)
      .then((config) => {
        this.setupHangman(config);
        this.setState({
          levelCount: config.levelCount,
          loaded: true
        });
        this.game.nextLevel();
        this.syncStateToGame();
      });
  }

  chooseLetter(letter) {
    this.game.pickLetter(letter);
    this.syncStateToGame();
  }

  syncStateToGame() {
    const gameState = this.game.getState();
    const chances = this.game.gallows.getMissingParts();

    const viewState = {
      letters: this.game.alphabet.letters,
      attemptsCount: this.game.attemptsCount,
      gameState,
      currentLevel: this.game.currentLevel,
      chances,
      phrase: this.game.phrase.letters,
      parts: new Array(this.game.attemptsCount).fill(0).map((el, index) => index >= chances)
    };

    this.setState(viewState);
  }

  updateTime() {
    this.setState({
      timeSpent: this.game.timer.getCurrentTime()
    });
  }

  nextLevel() {
    this.game.nextLevel();
    this.syncStateToGame();
  }

  restartGame() {
    this.game.reset();
    this.game.nextLevel();
    this.syncStateToGame();
  }

  render() {
    const { gameState, timeSpent } = this.state;
    let summaryView = '';

    if (gameState.gameFinished) {
      summaryView = <GameSummaryView gameState={gameState} timeSpent={timeSpent} restartGame={this.restartGame} phrase={this.game.phrase.word} />;
    }

    if (gameState.levelFinished && !gameState.gameFinished) {
      summaryView = <LevelSummaryView nextLevel={this.nextLevel} phrase={this.game.phrase.word} />;
    }

    return (
      <div className="m-app">
        <TopbarViewView currentLevel={this.state.currentLevel} chances={this.state.chances} timeSpent={timeSpent}/>
        <div className="m-app__level">
          <GallowsView parts={this.state.parts} />
          <PhraseView letters={this.state.phrase}/>
        </div>
        <AlphabetView letters={this.state.letters} onChoose={this.chooseLetter}/>
        {summaryView}
      </div>
    );
  }
};
