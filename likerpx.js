;(function () {
  var html = document.getElementsByTagName('html')[0]
  var body = document.body || document.getElementsByTagName('body')[0];
  var designWidth = html.getAttribute('design-width') || 750
  var maxWidth = html.getAttribute('max-width') || -1
  var minWidth = html.getAttribute('min-width') || -1
  var rate = html.getAttribute('rate') || 1000
  function calc () {
    var width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
    if (maxWidth !== -1)
      width = width > maxWidth ? maxWidth : width
    if (minWidth !== -1)
      width = width < minWidth ? minWidth : width
    var fontSize = width / designWidth * rate
    html.style.fontSize = fontSize + 'px'
  }
  calc()
  window.addEventListener('resize', calc, false);
})()