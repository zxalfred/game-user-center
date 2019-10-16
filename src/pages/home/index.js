import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import IconFont from '@/components/IconFont'
import logo from '@/statics/img/logo-en.svg'
import useUserInfo from './hooks/useUserInfo'

function Home() {
  const userInfo = useUserInfo()

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
            {userInfo.account_name}
          </div>
          <span className={styles.idSpan}>ID: {userInfo.account_id}</span>
        </div>
      </div>
      {
        userInfo.is_guest && (
        <div className={styles.unbindTip}>
            You haven&apos;t bind any account. The game progress may lose.
        </div>
        )
      }
      <div className={styles.actionRow}>
        <Link to="/switch">
          <span>Switch Account</span>
          <div>
            <IconFont type="switch" />
          </div>
        </Link>
        <Link to="/bind">
          <span>Bind Account</span>
          <div>
            <IconFont type="bind" />
          </div>
        </Link>
      </div>
      <div className={styles.policyRow}>
        <div>Feedback</div>
        <div>Agreement</div>
        <div>Private Policy</div>
      </div>
    </main>
  )
}

export default memo(Home)
