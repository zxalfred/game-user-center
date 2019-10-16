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
          >
            <div className={styles.LeftWrap}>
              <div className={styles.SvgWrap}>
                <img src={item.channel_icon} alt={item.channel_name} />
              </div>
              <div className={styles.NameCol}>
                <span>{item.channel_name}</span>
              </div>
            </div>
          </div>
        ))
      )
    }
    </div>
  )
}

function Switch() {
  const channelList = useChannelList()

  return (
    <main>
      <p className={styles.tip}>Login account with bound game data and continue the bound game.</p>
      <ChannelList channelList={channelList} />
    </main>
  )
}

export default memo(Switch)
