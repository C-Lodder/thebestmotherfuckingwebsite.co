import * as React from 'react'
import Link from 'gatsby-link'
import { animateScroll } from 'react-scroll'

import Container from '../Container'
import MastheadNavLink from './MastheadNavLink'

import * as styles from './Masthead.module.scss'

const scrollToTop = () => {
  animateScroll.scrollToTop()
}

const Masthead: React.SFC<{}> = () => (
  <header className={styles.masthead}>
    <Container>
      <div className={styles.mastheadInner}>
        <div className={styles.mastheadTitle}>
          <a onClick={scrollToTop}>
            <span className={styles.brand}>■</span> TBMFW
          </a>
        </div>
        <nav className={styles.mastheadNav}>
          <MastheadNavLink to="about">About</MastheadNavLink>
          <MastheadNavLink to="features">Features</MastheadNavLink>
          <MastheadNavLink to="epilogue">Epilogue</MastheadNavLink>
        </nav>
      </div>
    </Container>
  </header>
)

export default Masthead
