const TABLE_PATH = '/table/'
const FORM_PATH = '/form/'
const DIALOG_PATH = '/dialog/'

const load = (item, name) => {
  return import(`@/pages${item.path}`).then(component => {
    if (typeof component.default === 'object') {
      // 正常标准写法, 未使用ts
      component.default.name = name
    } else {
      // ts 写法
      component.default.options.name = name
    }
    return component
  })
}
// 菜单
const MAPS = [
  {
    id: '1',
    title: '表格',
    icon: 'icon-baobiao',
    pid: null
  },
  {
    id: '1-0',
    title: '大表格',
    path: `${TABLE_PATH}medium`,
    icon: '',
    pid: '1'
  },
  {
    id: '1-2',
    title: '小表格',
    path: `${TABLE_PATH}mini`,
    icon: '',
    pid: '1'
  },
  {
    id: '1-3',
    title: '中等表格',
    path: `${TABLE_PATH}small`,
    icon: '',
    pid: '1'
  },
  {
    id: '2',
    title: '表单',
    icon: 'icon-baobiao',
    pid: null
  },
  {
    id: '2-0',
    title: '基础表单',
    path: `${FORM_PATH}base`,
    icon: '',
    pid: '2'
  },
  {
    id: '3',
    title: '弹框',
    icon: 'icon-baobiao',
    pid: null
  },
  {
    id: '3-0',
    title: '基础弹框',
    path: `${DIALOG_PATH}base`,
    icon: '',
    pid: '3'
  },
  {
    id: '3-1',
    title: '消息弹框',
    path: `${DIALOG_PATH}message`,
    icon: '',
    pid: '3'
  }
]

const MAP_WITH_COMPONENT = MAPS.filter(item => !!item.path).map(item => ({
  id: item.id,
  name: '',
  // pid: item.pid,
  path: item.path,
  meta: {
    pool: true,
    cache: !(item.cache === false),
    requiresAuth: true,
    title: item.title
  },
  // 预处理 自动给组件添加和对应路由相同的name
  component: name => () => load(item, name)
}))

export const routes = MAP_WITH_COMPONENT
