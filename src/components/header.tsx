import React, { FunctionComponent } from 'react'
import { jsx, css } from '@emotion/react';

const Header: FunctionComponent = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <h1
          css={css`
          color: #fff;
          text-align: center;
        `}
        >Gatsby hotel</h1>
      </div>
    </header>
  )
}

export default Header