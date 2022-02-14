import React from 'react'
import Helmet from 'react-helmet'
import { jsx, Global, css } from '@emotion/react'
import Header from './header'

const Layout = (props: any) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%
          }
          body {
            font-size: 1rem;
            line-height: 1.5;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto', sans-serif;
          }
          h1 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&family=Roboto+Slab&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />
      {props.children}
    </>
  )
}

export default Layout