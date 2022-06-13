import React from 'react';

import Container from 'components/Container';
import Input from 'components/Input';
import Text from 'components/Text';
import MyText from 'components/MyText';
import SubscriptionCard from 'components/SubscriptionCard';

import './Subscriptions.scss';

export default function SettingsSubscriptions() {
  return (
    <div className="subscription">
      <Container type="large">
        <Text size="22px" color="primary" fontWeight="medium">
          Subscriptions
        </Text>
        <div className="box-container u-margin-bottom-xxlarge">
          <div className="u-display-flex">
            <div className="subscription-item">
              <div className="subscription-item-key">Website</div>
              <div className="subscription-item-value">website1.com</div>
            </div>
            <div className="subscription-item">
              <div className="subscription-item-key">Traffic</div>
              <div className="subscription-item-value">970 Users / month</div>
            </div>
            <div className="subscription-item">
              <div className="subscription-item-key">Promo</div>
              <div className="subscription-item-value">
                3 months Free until March 10, 2012
              </div>
            </div>
          </div>
          <hr />
          <div className="subscription-month-and-year">
            <Input
              id="subscription_month"
              type="radio"
              name="subscription"
              label="Monthly"
            >
              Monthly
            </Input>
            <Input
              id="subscription_year"
              type="radio"
              name="subscription"
              label="Yearly (Save 30%)"
              className="u-margin-left-xlarge"
            >
              <div className="subscription-month-and-year-year">
                Yearly{' '}
                <div style={{ fontWeight: 'normal' }}>&nbsp;(Save 30%)</div>
              </div>
            </Input>
          </div>
          <div className="subscription-plans">
            <SubscriptionCard
              plan="Starter Plan"
              price="$50"
              button="Your Plan"
            >
              <p>Per domain</p>
              <p>
                <b>Up to 2K monthly visitors</b>
              </p>
              <p>All features included</p>
            </SubscriptionCard>
            <SubscriptionCard
              plan="Pro Plan"
              price="$100"
              button="Upgrade"
              buttonStyle="white"
            >
              <p>Per domain</p>
              <p>
                <b>Up to 2K monthly visitors</b>
              </p>
              <p>All features included</p>
            </SubscriptionCard>
            <SubscriptionCard
              plan="Advanced Plan"
              price="$250"
              button="Upgrade"
              buttonStyle="white"
            >
              <p>Per domain</p>
              <p>
                <b>Up to 2K monthly visitors</b>
              </p>
              <p>All features included</p>
            </SubscriptionCard>
            <SubscriptionCard
              plan="Enterprise Plan"
              price="Contact us"
              type="support"
              button="Ask for Quote"
              buttonStyle="white"
            >
              <p>Per domain</p>
              <p>
                <b>Up to 2K monthly visitors</b>
              </p>
              <p>All features included</p>
            </SubscriptionCard>
          </div>
          <div className="u-display-flex u-flex-justify-center u-margin-top-large">
            If you want to cancel your subscription please contact us through
            our &nbsp;<MyText type="link">customer support</MyText>
          </div>
        </div>
      </Container>
    </div>
  );
}
