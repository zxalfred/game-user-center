import { useSelector } from 'react-redux'

export const useISelector = (selector) => useSelector(selector, (objA, objB) => objA.equals(objB))
