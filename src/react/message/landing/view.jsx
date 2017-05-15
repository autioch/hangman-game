const { h } = require('preact');
const { plural } = require('utils');
const MessageView = require('../base/view');

module.exports = function LandingView({ levelCount, attemptsCount, action }) {
  return <MessageView
      header="Welcome to Hangman!"
      paragraphs={[
        `You have ${plural('level', levelCount)} to go.`,
        `In each level, You have ${plural('attemp', attemptsCount)} to guess a letter.`,
        `All words are from animals category.`
      ]}
      actionLabel="Let's play!"
      action={action}
    />;
};
