import React from 'react'
import LoginForm from './components/LoginForm'
import IconFont from '@/components/IconFont'
import styles from './style.module.scss'

function Login() {
  return (
    <main className={styles.MainWrap}>
      <div className={styles.TitleRow}>
        <div className={styles.LogoWrap}>
          <IconFont type="huanle" />
        </div>
        Joy You login
      </div>
      <LoginForm />
    </main>
  )
}

export default Login
