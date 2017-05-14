const { h } = require('preact');
const { plural } = require('utils');
const MessageView = require('../message/view');

module.exports = function LandingView({ levelCount, chanceCount, startGame }) {
  return <MessageView
      header="Welcome to the Hangman!"
      paragraphs={[
        `You have ${plural('level', levelCount)} to go.`,
        `In each level, You have ${plural('chance', chanceCount)} before the man gets hanged.`
      ]}
      actionLabel="Let's play!"
      action={startGame}
    />;
};
