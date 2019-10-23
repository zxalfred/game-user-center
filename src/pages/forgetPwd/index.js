import React from 'react'
import IconFont from '@/components/IconFont'
import ResetPwdForm from './components/resetPwdForm'
import styles from '@/statics/styles/form.module.scss'


function ResetPwd() {
  return (
    <main className={styles.MainWrap}>
      <div className={styles.TitleRow}>
        <div className={styles.LogoWrap}>
          <IconFont type="huanle" />
        </div>
        Reset Password
      </div>
      <ResetPwdForm />
    </main>
  )
}

export default ResetPwd
