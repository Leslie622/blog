//切换主题-主要功能：生成link标签
const createLink = (() => {
  let $link = null
  return () => {
    if ($link) {
      return $link
    }
    $link = document.createElement('link')
    $link.rel = 'stylesheet'
    $link.type = 'text/css'
    document.querySelector('head').appendChild($link)
    return $link
  }
})()

const toggleTheme = (theme = 'default') => {
  const $link = createLink()
  $link.href = `./themes/${theme}/${theme}.css`
  return theme
}

export default toggleTheme