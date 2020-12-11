import localforage from 'localforage'
import sortBy from 'lodash/sortBy'
/**
 * 单例 localforage
 */
export const db = localforage

/**
 * 递归数组转化成Tree(节点树具有根节点)
 * @param data object array
 * @param primaryKey 唯一标识的key
 * @param key 父节点标识key
 * @param value 父节点标识的值
 */
export const recursion = (data, primaryKey, key, value, sortFn = null) => {
  let result = []
  let temp
  for (const item of data) {
    if (item[key] === value) {
      temp = recursion(data, primaryKey, key, item[primaryKey], sortFn)
      if (temp.length) {
        item.children = temp
      }
      result.push(item)
    }
  }

  if (sortFn) {
    result = sortBy(result, sortFn)
  }
  return result
}
