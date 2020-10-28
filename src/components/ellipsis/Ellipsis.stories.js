import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Ellipsis from './Ellipsis';

export const text = 'Loading';

storiesOf('Ellipsis', module)
  .add('default', () => <Ellipsis text={text} />);
