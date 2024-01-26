// 공통으로 들어가는 자바스크립트
// GNB, Footer

document.addEventListener('DOMContentLoaded', function () {

    var clickNavMenus = [ // .menu1-tit ....menu5-tit
        document.querySelector("#menu1"),
        document.querySelector("#menu2"),
        document.querySelector("#menu3"),
        document.querySelector("#menu4"),
        document.querySelector("#menu5")
    ];
    
    var dropDownMenus = [ //.smenu_area
        document.querySelector('#menu101'),
        document.querySelector('#menu201'),
        document.querySelector('#menu301'),
        document.querySelector('#menu401'),
        document.querySelector('#menu501'),
    ];

    clickNavMenus.forEach(function(menu, index) {
        var dropdownMenu = dropDownMenus[index];
        addClickEvent(menu, dropdownMenu);
    });
    
    dropDownMenus.forEach(function(menu) {
        addClickEvent(menu, menu); 
    });

    function addClickEvent(menu, dropdownMenu) {
        if (menu && dropdownMenu) {
            menu.addEventListener('click', function() {
                toggleDropDownMenu(dropdownMenu);
            });
        }
    }
    

    // toggleDropDownMenu 함수 구현
    function toggleDropDownMenu(menu) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }
});
  
