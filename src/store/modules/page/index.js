import actions from './actions'
import mutations from './mutations'
import { getProperty } from '@/store/persistence'

const pool = getProperty('page.pool', [])
const state = {
  pool,
  keepAlive: [],
  current: getProperty('page.current', 'index')
}
const module = {
  namespaced: true,
  state,
  actions,
  mutations
}
export default module
