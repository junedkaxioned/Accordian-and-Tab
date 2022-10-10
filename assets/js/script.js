var accordions = document.querySelectorAll('.accordion');
var accordionContents = document.querySelectorAll('.accordion-content');
var tabs = document.querySelectorAll('.tab');
var tabContents = document.querySelectorAll('.tab-content');

// function for both (tab & Accordions)
function tabFunction(list, content) {
  list.forEach(function (item, idx) {
    // Events on Tab & accordion
    item.addEventListener('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('active');
        content[i].classList.remove('active')
      }    
      this.classList.add('active');
      content[idx].classList.add('active')
    })
  })
}

tabFunction(accordions, accordionContents);
tabFunction(tabs, tabContents);