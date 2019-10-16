import React, { memo } from 'react'
import useChannelList from './hooks/useChannelList'
import styles from '@/statics/styles/account.module.scss'

function ChannelList({ channelList }) {
  return (
    <div className={styles.ItemWrap}>
      {
        channelList.length && (
          channelList.map((item) => (
            <div
              className={styles.Item}
              key={item.channel_id}
              style={{ height: '64px' }}
            >
              <div className={styles.LeftWrap}>
                <div className={styles.SvgWrap}>
                  <img src={item.channel_icon} alt={item.channel_name} />
                </div>
                <div className={styles.NameCol}>
                  <span>{item.channel_name}</span>
                  {
                    (item.is_bind && item.user_name) && (
                      <div className={styles.UserName}>
                        {item.user_name}
                      </div>
                    )
                  }
                </div>
              </div>
              <div className={`${styles.BindStatus}${item.is_bind ? 'Bound' : ''}`}>
                {item.is_bind ? 'Bound' : 'Bind'}
              </div>
            </div>
          ))
        )
      }
    </div>
  )
}

function Bind() {
  const channelList = useChannelList()

  return (
    <main>
      <p className={styles.Tip}>Use account binding to potect and transfer your game progress.</p>
      <ChannelList channelList={channelList} />
    </main>
  )
}

export default memo(Bind)
