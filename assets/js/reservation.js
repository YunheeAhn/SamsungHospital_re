// 윤희님 예약 페이지 자바스크립트

document.addEventListener('DOMContentLoaded', function () {
    // 회원 예약
    // 아이디, 비밀번호 모두 입력시 '회원'예약하기 버튼 활성화
    const idForm = document.querySelector('#idlog')
    const pwForm = document.querySelector('#pwlog')
    const activeMember = document.querySelector('#reserve-Btn')

    // 우선 아이디,패스워드칸 false로 만들기
    let idCheck = false;
    let pwCheck = false;

    // 아이디,패스워드칸 밸류값 주어지면 true로 만들기
    const pushValue = ( ) => {
        idForm.addEventListener('input', () => {
            idCheck = idForm.value.trim().length > 0;
            updateMemberButtonState();
        });
        
        pwForm.addEventListener('input', () => {
            pwCheck = pwForm.value.trim().length > 0;
            updateMemberButtonState();
        })
    }
    pushValue();

    // 예약하기 버튼 활성화 이벤트
    idForm.addEventListener('input', updateMemberButtonState);
    pwForm.addEventListener('input', updateMemberButtonState);

    // 아이디와 패스워드칸에 모두 입력되면 회원예약 버튼 활성화
    function updateMemberButtonState () {
        if (idCheck && pwCheck) {
            activeMember.style.backgroundColor = '#0b50a1'
            activeMember.disabled = false;
        } else {
            activeMember.style.backgroundColor = '#C7C7C7'
            activeMember.disabled = true;
        }
    }


    // 비회원 예약
    // 입력 폼 요소 선택
    const idFormNot = document.querySelector('#idlog')
    const pwFormNot = document.querySelector('#pwlog')
    const nameFormNot = document.querySelector('#ptnm')
    const phoneFormNot = document.querySelector('#hpno')
    const certiNumFormNot = document.querySelector('#certi-num')
    const checkBoxNot = document.querySelector('#userchk')

    // 버튼 요소 선택
    const activeReserveBtn = document.querySelector('#reserve-Btn')
    const certiFormNot = document.querySelector('.phone-certi')
    const activeNonMember = document.querySelector('.rev-btn')

    // 입력값 검증을 위한 변수 선언
    let idCheckNot = false
    let pwCheckNot = false
    let nameCheck = false
    let phoneCheck = false
    let certiNumCheck = false

    // 비회원 예약 버튼 상태 업데이트 함수
    function updateMemberButtonState() {
        idCheckNot = idFormNot.value.trim().length > 0
        pwCheckNot = pwFormNot.value.trim().length > 0
        activeReserveBtn.disabled = !(idCheckNot && pwCheckNot)
        activeReserveBtn.style.backgroundColor = idCheckNot && pwCheckNot ? '#0B50A1' : '#C7C7C7'
    }

    // 인증 버튼 상태 업데이트 함수
    function updateCertiButtonState() {
        nameCheck = nameFormNot.value.trim().length > 0
        phoneCheck = phoneFormNot.value.trim().length === 11
        certiFormNot.disabled = !(nameCheck && phoneCheck)
        certiFormNot.style.backgroundColor = nameCheck && phoneCheck ? '#0B50A1' : '#C7C7C7'
    }

    // 비회원 예약 버튼 상태 업데이트 함수
    function updateActiveNonMemberButtonState() {
        certiNumCheck = certiNumFormNot.value.trim().length === 4 // 인증번호 4자리 확인
        let checkBoxCheck = checkBoxNot.checked
        activeNonMember.disabled = !(nameCheck && phoneCheck && certiNumCheck && checkBoxCheck)
        activeNonMember.style.backgroundColor =
            nameCheck && phoneCheck && certiNumCheck && checkBoxCheck ? '#0B50A1' : '#C7C7C7'
    }
    // 입력 이벤트 리스너 등록
    idFormNot.addEventListener('input', updateMemberButtonState)
    pwFormNot.addEventListener('input', updateMemberButtonState)
    nameFormNot.addEventListener('input', updateCertiButtonState) // 이름 입력 시 인증 버튼 상태 업데이트
    phoneFormNot.addEventListener('input', updateCertiButtonState) // 핸드폰 번호 입력 시 인증 버튼 상태 업데이트
    certiNumFormNot.addEventListener('input', updateActiveNonMemberButtonState) // 인증번호 입력 시 비회원 예약 버튼 상태 업데이트
    checkBoxNot.addEventListener('change', updateActiveNonMemberButtonState) // 체크박스 변경 시 비회원 예약 버튼 상태 업데이트



    // breakpoint-md : 768px 미디어쿼리 자바 스크립트 적용
    // 예약, 비회원예약 클릭시 섹션 전환
    // var clickReserveMenus = [
    //     document.querySelector('.mobile-tab.member'),
    //     document.querySelector('.mobile-tab.nonMember')
    // ];

    // var openSections = [
    //     document.querySelector('#sec01'),
    //     document.querySelector('#sec02')
    // ];

    // clickReserveMenus.forEach(function(menu, index) {
    //     var openSection = openSections[index];
    //     addClickEvent(menu, openSection);
    // });

    // openSections.forEach(function(menu) {
    //     addClickEvent(menu, menu); 
        
    // })

    // function addClickEvent(menu, openSection) {
    //     if (menu && openSection) {
    //         menu.addEventListener('click', function(){
    //             openDropMenu(openSection)
    //         })
    //     }
    // }

    // function openDropMenu(menu) {
    //     if (menu.style.opacity === '0' || menu.style.display === '') {
    //         menu.style.opacity = '1';
    //     } else {
    //         menu.style.opacity = '0';
    //     }
    // }

    // 모바일용 선택 탭 선언
    const memberTab = document.querySelector('.mobile-tab.member');
    const nonMemberTab = document.querySelector('.mobile-tab.nonMember');
    // 클릭시 반응하는 섹션 선언
    const sec01 = document.querySelector('#sec01');
    const sec02 = document.querySelector('#sec02');


    // 회원예약 - 섹션, 보더값 이벤트 리스너 등록
    memberTab.addEventListener('click', function() {
        showSection(sec01);
        hideSection(sec02);
        memberTab.classList.add('activeTab');
        nonMemberTab.classList.remove('activeTab');
    });
    // 비회원예약 - 섹션, 보더값 이벤트 리스너 등록
    nonMemberTab.addEventListener('click', function() {
        showSection(sec02);
        hideSection(sec01);
        nonMemberTab.classList.add('activeTab');
        memberTab.classList.remove('activeTab');
    });

    // 보더값 보이게 하는 함수
    function showSection(section) {
        section.classList.add('active');
    }

    // 보더값 안보이게 하는 함수
    function hideSection(section) {
        section.classList.remove('active');
    }
})