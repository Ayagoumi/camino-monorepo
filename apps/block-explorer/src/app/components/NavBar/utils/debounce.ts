export function debounce(func, wait, immediate = false) {
  var timeout;

  return (...args) => {
    // let context = this;
    let context = args[0];
    let later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
