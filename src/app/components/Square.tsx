import { prependOnceListener } from 'process';
import React, { useState } from 'react';

function Square(props): JSX.Element {

  return  (<button
             className="square"
             onClick={() => props.onClick('X')}
             >
            {props.value}
          </button>
          );
}

export default Square;