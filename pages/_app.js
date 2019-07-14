import React from 'react'
import App, { Container } from 'next/app'
import { createGlobalStyle } from 'styled-components'

class VisionApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #04080F;
    font-family: 'Literata', serif;
    margin: 0;
  }
`;

export default VisionApp
