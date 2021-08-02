// Determine if an element is in the visible viewport
// TODO: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// TODO: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
// TODO: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
export default function isInViewport(element, offsetTop) {
  const top = offsetTop || 0
  const rect = element.getBoundingClientRect()
  const html = document.documentElement
  // console.log(rect)
  return (
    rect.top >= top
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || html.clientHeight)
    && rect.right <= (window.innerWidth || html.clientWidth)
  )
}
