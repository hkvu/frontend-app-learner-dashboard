import React from 'react';

import MasqueradeBar from 'containers/MasqueradeBar';
import ConfirmEmailBanner from './ConfirmEmailBanner';

import CollapsedHeader from './CollapsedHeader';
import ExpandedHeader from './ExpandedHeader';
import { Alert } from '@edx/paragon';

import './index.scss';

export const LearnerDashboardHeader = () => (
  <>
    <Alert variant="danger" dismissible icon={Info}>
      <Alert.Heading>System Maintenance</Alert.Heading>
      <p>
        Please be aware that we will be performing server maintenance on 19th September 2024 from 10:00am (HKT) to 4:00pm (HKT). HKMOOC will be unavailable during the maintenance window. Contact us at hkvu@ust.hk if you have any questions.
      </p>
    </Alert>
    <ConfirmEmailBanner />
    <CollapsedHeader />
    <ExpandedHeader />
    <MasqueradeBar />
  </>
);

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;
