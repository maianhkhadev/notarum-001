export function scrollIntoView(selector) {
  let element = document.querySelector(selector);

  if(element !== null) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
