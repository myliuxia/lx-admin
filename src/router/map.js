const TABLE_PATH = '/table/'
const FORM_PATH = '/form/'
const DIALOG_PATH = '/dialog/'

// 菜单
const MAPS = [
  {
    id: '1',
    title: '表格',
    icon: 'icon-baobiao',
    pid: null,
  },
  {
    id: '1-0',
    title: '大表格',
    path: `${TABLE_PATH}medium`,
    icon: '',
    pid: '1',
  },
  {
    id: '1-2',
    title: '小表格',
    path: `${TABLE_PATH}mini`,
    icon: '',
    pid: '1',
  },
  {
    id: '1-3',
    title: '中等表格',
    path: `${TABLE_PATH}small`,
    icon: '',
    pid: '1',
  },
  {
    id: '2',
    title: '表单',
    icon: 'icon-baobiao',
    pid: null,
  },
  {
    id: '2-0',
    title: '基础表单',
    path: `${FORM_PATH}base`,
    icon: '',
    pid: '2',
  },
  {
    id: '3',
    title: '弹框',
    icon: 'icon-baobiao',
    pid: null,
  },
  {
    id: '3-0',
    title: '基础弹框',
    path: `${DIALOG_PATH}base`,
    icon: '',
    pid: '3',
  },
  {
    id: '3-1',
    title: '消息弹框',
    path: `${DIALOG_PATH}message`,
    icon: '',
    pid: '3',
  },
]

export default MAPS
