import React from 'react';

import Container from 'components/Container';
import Input from 'components/Input';
import Text from 'components/Text';
import Button from 'components/Button';

import './Configurations.scss';

export default function SettingsConfigurations() {
  return (
    <div>
      <Container type="medium">
        <Text size="22px" color="primary" fontWeight="medium">
          Configurations
        </Text>
        <div className="box-container">
          <Text size="22px" color="primary" fontWeight="medium">
            Data Filters
          </Text>
          <div className="u-margin-top-large">
            <Text size="16px" color="primary" fontWeight="bold">
              Bot filtering
            </Text>
            <Input
              type="checkbox"
              id="exclude_all"
              label="Exclude all traffic from known bots and spiders"
            />
          </div>
          <div className="u-margin-top-large">
            <Text size="16px" color="primary" fontWeight="bold">
              IP Traffic
            </Text>
            <Input
              type="radio"
              id="show_all"
              name="traffic"
              label="Show all data"
            />
            <div className="u-display-flex u-flex-align-end u-margin-top-xsmall">
              <Input
                type="radio"
                id="exclude_office"
                name="traffic"
                label="Exclude my office data"
              />
              <Input
                type="text"
                placeholder="Type IP Address"
                className="u-margin-left-small"
              />
            </div>
            <div className="u-display-flex u-flex-align-end u-margin-top-xsmall">
              <Input
                type="radio"
                id="show_office"
                name="traffic"
                label="Only show my office data"
              />
              <Input
                type="text"
                placeholder="Type IP Address"
                className="u-margin-left-small"
              />
            </div>
          </div>
          <div className="u-margin-top-large u-display-flex u-flex-justify-end">
            <Button className="default">Save</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
