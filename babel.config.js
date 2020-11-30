module.exports = {
  presets: [['@vue/app', { modules: false }]],
  plugins: [
    'jsx-v-model',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: '~theme'
      }
    ]
  ]
}
