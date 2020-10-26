function searchParamsObj() {
  search = document.location.search
  if (!search) return {}
  return search.split('?').slice(1)[0].split('&').reduce((a, c) => {
    ;
    [k, v] = c.split('=')
    a[k] = decodeURIComponent(v)
    return a
  }, {})
}
(() => {
  search = searchParamsObj()
  if (!search.name) return
  salutation = search.salutation || 'Dear'
  name = search.name
  message = search.message || 'You are cordially invited to'

  el = document.querySelector('#dear')
  el.innerHTML = `
  <h4>${salutation} ${name},</h4>
  ${message? `<h5>${message}</h5>`: ''}
  `

  function setLeft(el) {

    left = document.querySelector("body > div > div.court").getBoundingClientRect().x
    el.style = 'margin-left: ' + left + 'px'
  }
  setLeft(el)
  window.addEventListener('resize', () => {
    setLeft(el)
  })

})()