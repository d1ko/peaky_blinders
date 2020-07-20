// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
//
//
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
//
// });
// alert('kk');
var a = 1;
    console.log(a);
    function plus() {
      if (a == 2) {
          a++;
      }
      if (a == 3) {
          a++;
      }
      if (a == 1) {
          a++;
      }
      if(a == 2){
        console.log('2');
        document.getElementById('qw').src="unnamed.jpg";
        document.getElementById('n').innerHTML = '2 / 4';
        // document.getElementsByClassName('text2').innerHTML = '8 сезон «Острых козырьков» начнется 26 июля';
        document.getElementById('poplio').innerHTML = '8 сезон «Острых козырьков» начнется 26 июля';

      }
      if(a == 4){
        console.log('1');
        document.getElementById('qw').src='1.png';
        document.getElementById('n').innerHTML = '4 / 4';
        document.getElementById('poplio').innerHTML = '10 сезон «Острых козырьков» начнется 28 июля';
      }
      if(a == 3){
        console.log('3');
        document.getElementById('qw').src="Острые_козырьки-76.jpg";
        document.getElementById('n').innerHTML = '3 / 4';
        document.getElementById('poplio').innerHTML = '80 сезон «Острых козырьков» начнется 27 июля';

      }
    }
    function minus() {
      if (a == 2) {
          a--;
      }
      if (a == 3) {
          a--;
      }
      if (a == 4) {
          a--;
      }
      if(a == 2){
        console.log('2');
        document.getElementById('qw').src="unnamed.jpg";
        document.getElementById('n').innerHTML = '2 / 4';
        document.getElementById('poplio').innerHTML = '8 сезон «Острых козырьков» начнется 26 июля';

      }
      if(a == 1){
        console.log('1');
        document.getElementById('qw').src='5s.jpg';
        document.getElementById('n').innerHTML = '1 / 4';
        document.getElementById('poplio').innerHTML = 'Пятый сезон «Острых козырьков» начнется 25 августа';
      }
      if(a == 3){
        console.log('3');
        document.getElementById('qw').src="Острые_козырьки-76.jpg";
        document.getElementById('n').innerHTML = '3 / 4';
        document.getElementById('poplio').innerHTML = '80 сезон «Острых козырьков» начнется 27 июля';
      }
    }
