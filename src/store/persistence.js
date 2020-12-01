import { db } from '@/libs/util'
import defaultSetting from '@/setting'
import merge from 'lodash/merge'
import get from 'lodash/get'
import set from 'lodash/set'

const { VERSION } = window.__SITE_CONFIG

export const KEY = 'kr_admin_' + VERSION
// 默认设置
let data = {
  menu: {
    asideCollapse: defaultSetting.menu.asideCollapse
  },
  page: {
    // scrollEffect: defaultSetting.page.scrollEffect,
    pool: [],
    current: ''
  },
  transition: {
    actived: defaultSetting.transition.actived
  },
  theme: {
    actived: defaultSetting.theme.actived
  }
}
export const initState = () => {
  return new Promise(async resovle => {
    const result = await db.getItem(KEY)
    if (result !== null) {
      // 合并配置
      data = merge(data, result)
      // 重新保存
      await db.setItem(KEY, data)
    }
    resovle()
  })
}

export const getProperty = (keyPath, def) => {
  return get(data, keyPath, def)
}
export const setProperty = async (keyPath, value) => {
  set(data, keyPath, value)
  return db.setItem(KEY, data)
}
