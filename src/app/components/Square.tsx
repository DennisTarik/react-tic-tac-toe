import { prependOnceListener } from 'process';
import React, { useState } from 'react';

type squareProps = {
  value: string | null;
  onClick: () => void;
}

function Square(props: squareProps): JSX.Element {

  return  (<button
             className="square"
             onClick={() => props.onClick()}
             >
            {props.value}
          </button>
          );
}

export default Square;