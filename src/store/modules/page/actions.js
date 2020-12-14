import find from 'lodash/find'
function checkInThePond(page) {
  return page.meta.pool
}

const actions = {
  /**
   * 打开新页面
   * @param param0 vuex
   */
  open({ state, dispatch, commit }, page) {
    // 非tabs框架内不处理
    if (!checkInThePond(page)) {
      return
    }

    // 判断此页面是否已经打开 并且记录位置
    let pageOpendIndex = 0

    const pageOpend = find(state.pool, (p, index) => {
      const same = p.name === page.name
      pageOpendIndex = same ? index : pageOpendIndex
      return same
    })

    if (pageOpend) {
      commit('updatePage', {
        index: pageOpendIndex,
        params: page.params,
        query: page.query,
        meta: page.meta,
        path: page.path,
      })
    } else {
      dispatch('putPage', page)
    }
    dispatch('setCurrentName', page.name)
  },
  /**
   * 加入栈
   * @param param0 vuex
   */
  putPage({ commit }, page) {
    // tslint:disable-next-line:no-unused-expression
    checkInThePond(page) && commit('putPool', page)
  },
  /**
   * 设置当前选中的name
   * @param param0 vuex
   */
  setCurrentName({ commit }, current) {
    commit('setCurrent', current)
  },
}

export default actions
