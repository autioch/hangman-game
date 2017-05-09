const { h, Component } = require('preact');
const configPath = require('config');
const { fetchJson } = require('utils');
const AlphabetView = require('./alphabet/view');
const HangmanGame = require('../core/game');

module.exports = class AppView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [],
      levelCount: 0,
      loaded: false
    };
    this.getConfig();
  }

  setupHangman(config) {
    const { words, letters, levelCount, attemptsCount } = config;

    this.game = new HangmanGame(words, letters, levelCount, attemptsCount);
  }

  getConfig() {
    fetchJson(configPath)
      .then((config) => {
        this.setupHangman(config);
        config.loaded = true;
        this.setState({
          letters: this.game.alphabet.letters,
          levelCount: config.levelCount,
          attemptsCount: this.game.attemptsCount,
          loaded: true,
          gameState: this.game.getState()
        });
      });
  }

  render() {
    return (
      <div className="m-app">
        <AlphabetView letters={this.state.letters} />
      </div>
    );
  }
};
