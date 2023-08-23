import React, { Component } from 'react';
import Statistics from './Statistic';
import Feedback from './Feedback';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = option => {
    this.setState(prev => {
      return {
        [option]: prev[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    // const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <p>Please leave feedback</p>
        <Feedback options={options} onLeaveFeedback={this.onLeaveFeedback} />
        <p>Statistics</p>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          'No feedback given'
        )}
      </>
    );
  }
}

export default App;
