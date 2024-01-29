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
    const nameForm = document.querySelector('#ptnm')
    const phoneForm = document.querySelector('#hpno')
    const certiForm = document.querySelector('.phone-certi')

    const checkBox = document.querySelector('.txtform')
    const certiNumForm = document.querySelector('#certi-num')
    const activeNonMember = document.querySelector('#confirmBtn')


    let nameCheck = false;
    let phoneCheck = false;

    let checkBoxCheck = false;
    let certiNumCheck = false;

    const pushValue2 = () => {
        nameForm.addEventListener('input', () => {
            nameCheck = nameForm.value.trim().length > 0;
            updateNonMemberButtonStates();
        })
        phoneForm.addEventListener('input', () => {
            phoneCheck = phoneForm.value.trim().length === 11;
            updateNonMemberButtonStates();
        });
        checkBox.addEventListener('change', () => {
            checkBoxCheck = checkBox.checked;
            updateNonMemberButtonStates();
        });
        certiNumForm.addEventListener('input', () => {
            certiNumCheck = certiNumForm.value.trim().length === 6;
            updateNonMemberButtonStates();
        })
    }
    pushValue2();

    nameForm.addEventListener('input', updateCertiButtonState);
    phoneForm.addEventListener('input', updateCertiButtonState);

    function updateCertiButtonState() {
        if(nameCheck && phoneCheck) {
            certiForm.style.backgroundColor = '#0b50a1'
            certiForm.disabled = false;

        } else {
            certiForm.style.backgroundColor = '#C7C7C7'
            certiForm.disabled = true;
        }
    }

    
    checkBox.addEventListener('change', updateNonMemberButtonStates);
    certiNumForm.addEventListener('input', updateNonMemberButtonStates);
    

    function updateNonMemberButtonStates() {
        updateCertiButtonState();

        certiNumCheck = certiNumForm.value.trim().length === 6 && checkBoxCheck;
        updateActiveNonMemberButtonState();
    }
   
    
    function updateActiveNonMemberButtonState() {
        if ((nameCheck && phoneCheck && checkBoxCheck) && certiNumCheck ) {
            activeNonMember.style.backgroundColor = '#0b50a1';
            activeNonMember.disabled = false;
        } else {
            activeNonMember.style.backgroundColor = '#C7C7C7';
            activeNonMember.disabled = true;
        }
    }


    // 아무것도 입력 안 한 상태로 버튼 입력시 alert창 생성
    var clickErrorBtn = [
        document.querySelector('#reserve-Btn'),
        document.querySelector('#confirmBtn'),
        document.querySelector('.phone-certi'),
    ];

    function showAlert () {
        alert('내용을 입력해주세요')
    }

    clickErrorBtn.forEach(function (Btn) {
        Btn.addEventListener('click', function(){
            showAlert();
        })
    });

    
})