const { h, Component } = require('preact');

require('./styles');

const SECOND = 1000;

module.exports = class TimeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSpent: 0
    };
    this.syncTime();
  }

  componentDidMount() {
    this.syncTimeInterval = setInterval(this.syncTime.bind(this), SECOND);
  }

  syncTime() {
    this.setState({
      timeSpent: this.props.gameTimer ? this.props.gameTimer.getCurrentTime() : {}
    });
  }

  componentWillUnmount() {
    clearInterval(this.syncTimeInterval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.timeSpent;

    return (
      <div className="m-summary__time-spent">
        {hours > 0 ? `${hours}h ` : ''}
        {hours > 0 || minutes > 0 ? `${minutes}m ` : ''}
        {`${seconds || 0}s`}
      </div>
    );
  }
};
