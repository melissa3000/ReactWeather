// State not required inside chart, so make this a functional component and not
// a class based component.

import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={temps}>
        <SparklinesLine color="red" />
      </Sparklines>
    </div>
    );
}