import actions from './actions'
import mutations from './mutations'

const state = {
  keepAlive: []
}
const module = {
  namespaced: true,
  state,
  actions,
  mutations
}
export default module
