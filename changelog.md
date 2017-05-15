# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2017-05-15
### Added
 - mobile first web application built using preact.
 - configuration files: `.htaccess`, `sass-lint.yml`, `react.webpack.config`.
 - micro server for development of web app.
 - `reset` method for `Dictionary` that allows to reset drawn phrases.
 - `reset` method for `HangmanGame` that allows restart from level 1.
 - `getCurrentTime` for `Timer` that return current time in the same format as `getTimeSpent`.
 - utils: `captureError`, `fetchJson`, `plural`

### Changed
 - phrases extracted from config.json into answers.json.
 - cli welcome message updated.
 - `getState` of the `HangmanGame` now returns extra data.

### Removed
 - buildConfig util. Separation of actual config and answers made the tool pointless.

## [1.0.0] - 2017-05-09
### Added
 - Core engine.
 - Tool for serializing own config to a json format.
 - CLI version of the game available as a package.
