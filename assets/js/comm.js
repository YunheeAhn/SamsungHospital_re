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
        addMouseLeaveEvent(menu, dropdownMenu);
        addMouseEnterEvent(menu, dropdownMenu)
    });
    
    dropDownMenus.forEach(function(menu) {
        addClickEvent(menu, menu); 
        addMouseLeaveEvent(menu, menu); 
        addMouseEnterEvent(menu, menu); 
    });

    // 클릭 이벤트 발생
    function addClickEvent(menu, dropdownMenu) {
        if (menu && dropdownMenu) {
            menu.addEventListener('click', function() {
                toggleDropDownMenu(dropdownMenu);
            });
        }
    }
    
    // 마우스리브 이벤트 발생
    function addMouseLeaveEvent(menu, dropdownMenu) {
        if (menu && dropdownMenu) {
            menu.addEventListener('mouseleave', function() {
                hideDropDownMenu(dropdownMenu);
            });
        }
    }

    // 마우스엔터 이벤트 발생
    function addMouseEnterEvent(menu, dropdownMenu) {
        if (menu && dropdownMenu) {
            menu.addEventListener('mouseenter', function() {
                showDropDownMenu(dropdownMenu);
            });
        }
    }

    // toggleDropDownMenu block or none 함수 구현
    function toggleDropDownMenu(menu) {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }

    // 마우스 떠나면 사라지기
    function hideDropDownMenu(menu) {
        menu.style.display = 'none';
    }
    // 마우스올리면 보여주기
    function showDropDownMenu(menu) {
        menu.style.display = 'block';
    }

    
});
  
