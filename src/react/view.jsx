const { h, Component } = require('preact');
const configPath = require('config');
const answersPath = require('answers');
const { fetchJson } = require('utils');
const AlphabetView = require('./alphabet/view');
const GallowsView = require('./gallows/view');
const { GameSummaryView, LevelSummaryView, LandingView } = require('./message');
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
    this.startGame = this.startGame.bind(this);
    this.state = {
      letters: [],
      levelCount: 0,
      configLoaded: false,
      answersLoaded: false,
      gameState: {},
      phrase: [],
      timeSpent: {},
      parts: [],
      started: false,
      category: '',
      answers: [],
      config: {}
    };
    this.getConfig();
    this.getAnswers();
  }

  setupHangman() {
    const { letters, levelCount, attemptsCount } = this.state.config;
    const words = this.state.answers;

    this.game = new HangmanGame(words, letters, levelCount, attemptsCount);
  }

  getConfig() {
    fetchJson(configPath)
      .then((config) => {
        this.setState({
          configLoaded: true,
          config
        });
        this.initializeGame();
      });
  }

  getAnswers() {
    fetchJson(answersPath)
      .then((answers) => {
        this.setState({
          answersLoaded: true,
          answers
        });
        this.initializeGame();
      });
  }

  initializeGame() {
    if (this.state.answersLoaded && this.state.configLoaded) {
      this.setupHangman();
      this.setState({
        levelCount: this.state.levelCount,
        category: this.state.category
      });
      this.syncStateToGame();
    }
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

  startGame() {
    this.game.nextLevel();
    this.setState({
      started: true
    });
    this.syncStateToGame();
    this.updateTime();
    this.timerInterval = setInterval(this.updateTime.bind(this), 1000);
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
    const { gameState, timeSpent, started, config } = this.state;
    let summaryView = '';

    if (!started && this.game) {
      summaryView = <LandingView levelCount={this.game.levelCount} attemptsCount={this.game.attemptsCount} startGame={this.startGame} category={config.category}/>;
    } else if (gameState.gameFinished) {
      summaryView = <GameSummaryView gameState={gameState} timeSpent={timeSpent} restartGame={this.restartGame} phrase={this.game.phrase.word} />;
    } else if (gameState.levelFinished && !gameState.gameFinished) {
      summaryView = <LevelSummaryView nextLevel={this.nextLevel} phrase={this.game.phrase.word} />;
    }

    let gallows = '';

    if (started) {
      gallows = <GallowsView parts={this.state.parts} />;
    }

    return (
      <div className="m-app">
        <TopbarViewView currentLevel={this.state.currentLevel} chances={this.state.chances} timeSpent={timeSpent}/>
        <div className="m-level">
          {gallows}
          <PhraseView letters={this.state.phrase}/>
        </div>
        <AlphabetView letters={this.state.letters} onChoose={this.chooseLetter}/>
        {summaryView}
      </div>
    );
  }
};
