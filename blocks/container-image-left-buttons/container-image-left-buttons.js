export default function decorate(block) {
  // 1) Select the parent container. Adjust selector to suit your DOM.
  // If you know a more specific selector, prefer that.
  const parent = document.querySelector('.container-image-left-buttons')
    || document.querySelector('[data-block-name="container-image-left-buttons"]')
    || document.querySelector('[data-aue-model="container-image-left-buttons"]');
  
  if (!parent) {
    console.warn('Parent not found. Update the selector to match your DOM.');
  } else {
    const children = Array.from(parent.children).filter(el => el.tagName === 'DIV');
  
    // Ensure we have at least 4 div children
    if (children.length < 4) {
      console.warn('Not enough child <div>s to wrap (need at least 4). Found:', children.length);
    } else {
      // 2) Create the wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'button-wrapper'; // <-- name it as you like
  
      // 3) Insert wrapper right before the 3rd element
      parent.insertBefore(wrapper, children[2]);
  
      // 4) Move the 3rd and 4th elements into the wrapper
      wrapper.appendChild(children[2]); // this is now the first inside wrapper
      wrapper.appendChild(children[3]); // note: indices shift as nodes move
    }
  }  
}
