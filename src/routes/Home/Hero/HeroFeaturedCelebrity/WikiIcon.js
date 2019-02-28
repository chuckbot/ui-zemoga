import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  margin-right: 5px;
`;

function WikiIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20px"
      height="15px"
    >
      <image x="0px" y="0px" width="100%" xlinkHref="data:img/png;base64,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" />
    </Svg>
  );
}

export default WikiIcon;
