import { useISelector } from '@/utils/hooks'

export default function useUserInfo() {
  const userInfo = (useISelector((state) => state.getIn(['home', 'userInfo']))).toJS()

  return userInfo
}
