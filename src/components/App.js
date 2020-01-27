import React, { Component } from 'react';
import Layout from './Layout';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import '../base.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const FEEDBACK_TYPES = [
  { id: 'id-1', type: 'good' },
  { id: 'id-2', type: 'neutral' },
  { id: 'id-3', type: 'bad' },
];

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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_TYPES}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            />
          )}
        </Section>
      </Layout>
    );
  }
}

export default App;
