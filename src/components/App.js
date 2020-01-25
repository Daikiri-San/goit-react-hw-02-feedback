import React, { Component } from 'react';
import Layout from './Layout';
import Feedback from './Feedback';
import Statistics from './Statistics';
import '../css/fonts.css';
import '../css/base.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (total, good) => {
    let percentage = (good * 100) / total;
    if (isNaN(percentage)) {
      percentage = 0;
    }
    const value = percentage.toFixed();
    return Number(value);
  };

  increment = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage(total, good);

    return (
      <Layout>
        <Feedback cb={this.increment} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercent}
        />
      </Layout>
    );
  }
}

export default App;
