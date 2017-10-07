(function() {
  const philterContainer = {
    triggers: [],
    items: [],
  };
  
  function putElements() {
    philterContainer.triggers = Array.prototype.slice.call(document.querySelectorAll('.filters__list li a'));
    philterContainer.items = Array.prototype.slice.call(document.querySelectorAll('.search__results li'));
  }
  
  putElements(); 

  function clickHandler(e) {
    e.preventDefault();
    const clickedEl = e.target;
    const tag = clickedEl.innerText.toLowerCase();
    addClass(clickedEl);
    tag === 'wszystkie' ? toggleAll(true) : filter();
    }

  function filter() {
    philterContainer.items.forEach(item => {
    item.classList.add('filter-hidden');
    });

    const activeFilter = document.querySelector('a.active-filter');
    let hrefTarget = activeFilter.getAttribute('href').substr(1);

    function show() {
      const showItem = philterContainer.items.map(item => {
        if (item.classList.contains(hrefTarget)) {
          item.classList.add('filter-active');
        } else {
          item.classList.remove('filter-active');
        }
      });
    }
    show();
  }

  function addClass(activeItem) {
    philterContainer.triggers.forEach(el => {
      el.classList.remove('active-filter');
    });
    activeItem.classList.add('active-filter');
  }

  function toggleAll (conditional) {
    philterContainer.items.map(item => {
      if(conditional) {
        item.classList.add('filter-active');
      } else {
        item.classList.add('filter-hidden');
        
      }
    });
  }

  philterContainer.triggers.map(item => {
    item.addEventListener('click', clickHandler);
  });

})();

