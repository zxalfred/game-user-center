import { useISelector } from '@/utils/hooks'

export default function useChannelList() {
  return useISelector((state) => state.getIn(['home', 'userInfo', 'channels'])).toJS()
}
