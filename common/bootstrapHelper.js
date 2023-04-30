// Initialize Bootstrap Helper
var bootstrapHelper = document.createElement('div')
bootstrapHelper.id = 'bootstrap-helper'
document.body.append(bootstrapHelper)
bootstrapHelper.textContent =
  window.innerWidth + ' ' + getBreakPoint(window.innerWidth)

// Styling for helper
bootstrapHelper.style.fontSize = '40px'
bootstrapHelper.style.opacity = '0.6'
bootstrapHelper.style.position = 'absolute'
bootstrapHelper.style.left = '50%'
bootstrapHelper.style.bottom = '40px'
bootstrapHelper.style.transform = 'translateX(-50%)'

// Change dynamically value by listening resize event
addEventListener('resize', (event) => {
  var _innerWidth = window.innerWidth

  bootstrapHelper.textContent =
    _innerWidth + ' ' + getBreakPoint(_innerWidth)
})

// Calculate break point
function getBreakPoint(_width) {
  var breakPoint = ''
  if (_width >= 1400) {
    breakPoint = 'xxl'
  } else if (_width >= 1200) {
    breakPoint = 'xl'
  } else if (_width >= 992) {
    breakPoint = 'lg'
  } else if (_width >= 768) {
    breakPoint = 'md'
  } else if (_width >= 576) {
    breakPoint = 'sm'
  } else if (_width < 576) {
    breakPoint = 'xs'
  }
  return breakPoint
}
