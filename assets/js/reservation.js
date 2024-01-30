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



    // const nameForm = document.querySelector('#ptnm')
    // const phoneForm = document.querySelector('#hpno')
    // const certiForm = document.querySelector('.phone-certi')

    // const checkBox = document.querySelector('.txtform')
    // const certiNumForm = document.querySelector('#certi-num')
    // const activeNonMember = document.querySelector('#confirmBtn')


    // let nameCheck = false;
    // let phoneCheck = false;

    // let checkBoxCheck = false;
    // let certiNumCheck = false;

    // const pushValue2 = () => {
    //     nameForm.addEventListener('input', () => {
    //         nameCheck = nameForm.value.trim().length > 0;
    //         updateNonMemberButtonStates();
    //     })
    //     phoneForm.addEventListener('input', () => {
    //         phoneCheck = phoneForm.value.trim().length === 11;
    //         updateNonMemberButtonStates();
    //     });
    //     checkBox.addEventListener('change', () => {
    //         checkBoxCheck = checkBox.checked;
    //         updateNonMemberButtonStates();
    //     });
    //     certiNumForm.addEventListener('input', () => {
    //         certiNumCheck = certiNumForm.value.trim().length === 6;
    //         updateNonMemberButtonStates();
    //     })
    // }
    // pushValue2();

    // nameForm.addEventListener('input', updateCertiButtonState);
    // phoneForm.addEventListener('input', updateCertiButtonState);

    // function updateCertiButtonState() {
    //     if(nameCheck && phoneCheck) {
    //         certiForm.style.backgroundColor = '#0b50a1'
    //         certiForm.disabled = false;

    //     } else {
    //         certiForm.style.backgroundColor = '#C7C7C7'
    //         certiForm.disabled = true;
    //     }
    // }

    
    // checkBox.addEventListener('change', updateNonMemberButtonStates);
    // certiNumForm.addEventListener('input', updateNonMemberButtonStates);
    

    // function updateNonMemberButtonStates() {
    //     updateCertiButtonState();

    //     certiNumCheck = certiNumForm.value.trim().length === 6 && checkBoxCheck;
    //     updateActiveNonMemberButtonState();
    // }
   
    
    // function updateActiveNonMemberButtonState() {
    //     if ((nameCheck && phoneCheck && checkBoxCheck) && certiNumCheck ) {
    //         activeNonMember.style.backgroundColor = '#0b50a1';
    //         activeNonMember.disabled = false;
    //     } else {
    //         activeNonMember.style.backgroundColor = '#C7C7C7';
    //         activeNonMember.disabled = true;
    //     }
    // }

    // 값 없는경우 클릭시 알림창 활성화
    
    function showAlert(message) {
        alert(message || '내용을 입력해주세요');
    }
    
    // 회원 alert
    const idlogElement = document.querySelector('#idlog');
    const pwlogElement = document.querySelector('#pwlog');
    const clickReserveBtn = document.querySelector('#reserve-Btn');
    
    function handleMemberReservation() {
        if (idlogElement.value.trim() === '' || pwlogElement.value.trim() === '') {
            showAlert();
        } 
        return false
    }
    
    clickReserveBtn.addEventListener('click', handleMemberReservation);
    
    // 비회원 alert
    const ptnmValue = document.querySelector('#ptnm');
    const hpnoValue = document.querySelector('#hpno');
    const certiNumValue = document.querySelector('#certi-num');
    const checkAgreeBox = document.querySelector('#userchk');
    const clickConfirmBtn = document.querySelector('#confirmBtn');
    
    function handleNonMemberReservation() {
        // 값이 비어있는 경우
        if (
            ptnmValue.value.trim() === '' ||
            hpnoValue.value.trim() === '' ||
            certiNumValue.value.trim() === '' ||
            !checkAgreeBox.checked
        ) {
            alert('내용을 입력해주세요')
        } 
        return false
    }
    
    clickConfirmBtn.addEventListener('click', handleNonMemberReservation);

    // 뒤로가기 화살표 클릭시 이전(직전) 페이지로 이동

    const backBtn = document.querySelector('.back-btn::before')

    function backHistory () {
        backBtn.addEventListener('click', function(){
            document.history.back()
        })
    }
    backHistory()

})