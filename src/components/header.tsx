import React, { FunctionComponent } from 'react'
import Nav from './nav';
import { jsx, css } from '@emotion/react';
import { Link } from 'gatsby';

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
        <Link
          to='/'>
          <h1
            css={css`
              color: #fff;
              text-align: center;
            `}
          >Gatsby hotel</h1>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header