import React from 'react';

import Container from 'components/Container';
import Button from 'components/Button';
import Text from 'components/Text';
import Input from 'components/Input';

import './Profile.scss';

export default function AccountProfile() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="account-profile">
      <Container type="medium">
        <div className="box-container u-margin-bottom-xlarge">
          <Text
            size="22px"
            color="primary"
            fontWeight="medium"
            className="u-margin-bottom-medium"
          >
            Petter Manuel @ Microsoft
          </Text>

          <hr />

          <Text
            size="22px"
            color="primary"
            fontWeight="medium"
            className="u-margin-top-large"
          >
            Company
          </Text>
          <div className="account-profile-company">
            <Input
              label="Company Name"
              labelColor="secondary"
              type="text"
              placeholder="company name"
              width="50%"
            />
            <Input
              label="Business Type"
              labelColor="secondary"
              type="select"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              width="50%"
            />
            <Input
              label="Website"
              labelColor="secondary"
              type="text"
              placeholder="www.voxsnap.com"
              width="50%"
            />
          </div>
          <Text
            size="22px"
            color="primary"
            fontWeight="medium"
            className="u-margin-top-large"
          >
            Admin
          </Text>
          <div className="account-profile-admin">
            <Input
              label="First Name"
              labelColor="secondary"
              type="text"
              placeholder="First name"
              width="50%"
            />
            <Input
              label="Last Name"
              labelColor="secondary"
              type="text"
              placeholder="Last name"
              width="50%"
            />
            <Input
              label="Email"
              labelColor="secondary"
              type="text"
              placeholder="Email"
              width="50%"
            />
            <Input
              label="Role"
              labelColor="secondary"
              type="select"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              width="50%"
            />
            <Input
              label="Phone Number"
              labelColor="secondary"
              type="text"
              placeholder="Phone Number"
              width="50%"
            />
            <Input
              label="Timezone"
              labelColor="secondary"
              type="select"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              width="50%"
            />
            <Input
              label="Password"
              labelColor="secondary"
              type="password"
              placeholder="Password"
              width="50%"
            />
            <Input
              label="Re-type password"
              labelColor="secondary"
              type="password"
              placeholder="Re-type password"
              width="50%"
            />
          </div>

          <div className="u-display-flex u-flex-justify-end u-margin-top-large">
            <Button className="default u-margin-right-small">Save</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
