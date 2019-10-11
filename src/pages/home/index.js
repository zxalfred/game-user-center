import React, { Component } from 'react'
import styles from './style.module.scss'
import IconFont from '@/components/IconFont'
import logo from '@/statics/img/logo-en.svg'

class Home extends Component {
  render() {
    return (
      <main>
        <div className={styles.logoRow}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="huanle-logo"
            />
          </div>
          <div className={styles.userInfo}>
            <div>
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=616021510,4172860601&fm=26&gp=0.jpg" />
              Guest_1570624708cl262f
            </div>
            <span className={styles.idSpan}>ID: 102486765</span>
          </div>
        </div>
        <div className={styles.unbindTip}>
          You haven&apos;t bind any account. The game progress may lose.
        </div>
        <div className={styles.actionRow}>
          <div>
            <span>Switch Account</span>
            <div>
              <IconFont type="switch" />
            </div>
          </div>
          <div>
            <span>Bind Account</span>
            <div>
              <IconFont type="bind" />
            </div>
          </div>
        </div>
        <div className={styles.policyRow}>
          <div>Feedback</div>
          <div>Agreement</div>
          <div>Private Policy</div>
        </div>
      </main>
    )
  }
}

export default Home
