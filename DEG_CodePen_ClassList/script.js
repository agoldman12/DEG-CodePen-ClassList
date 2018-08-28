/* 
Below we have a traffic light, and a series of buttons that should control it.

Goal: Learn to use the Element.classList() method

Task: Using classList add, remove, toggle and contains as you see fit, turn on, turn off, enable and disable the lights according to the button labels.

For reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/

const lights = Array.from(document.querySelectorAll('.light'));
const buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const lightToActivate = e.target.dataset.light;
    lights.forEach(function(light) {
		//code goes here
		light.classList.toggle('is-active', light.classList.contains(lightToActivate));
		
		if(lightToActivate == 'enable-all'){
			light.classList.add('is-active');
		} else if (lightToActivate == 'disable-all'){
			light.classList.remove('is-active');
		}
    });
  });
});
