# SamsungHospital_re

## 팀프로젝트\_삼성서울병원 리뉴얼

### 팀원 : 안윤희 / 이가영 / 이현정

---

#### 2024-01-17 first commit

<기본 세팅 - 안윤희>  
  
1. index(가영님), healthcare(현정님), reservation(윤희님) html페이지 생성  
2. comm.scss에 7개파일 엑세스 완료  
   ->믹스인, 폰트, 리셋, 베리어블 / 헬스케어, 메인, 예약  
3. 각 메인과 서브페이지에 js파일 엑세스 완료  
4. 헤더 부분 html완료 -> 각 html 삽입 완료  
5. 풋터 부분 html완료 -> 각 html 삽입 완료  
6. 예약페이지 진행중...ing  
  
#### 2024-01-18  
  
<안윤희>  
  
1. html문서 언어 오류 수정(lang="en" -> lang="ko")  
2. 이미지 폴더 생성  
3. 회원예약 / 비회원 예약 sec(예약.html) html작성 완료  
4. 회원예약 / 비회원 예약 sec(input&button) 설정 완료  
5. 헤더부분 구조 변경 / scss작업 시작  
   -> 커밋  
  
<이현정>  
  
1. mixin.css : bold-48 이름수정(-추가)  
2. 이미지추가  
3. 건강정보페이지- html 내용작성  
4. 건강정보페이지 - header & footer 삭제 (작업 후 추가할 예정)  
5. 건강정보페이지 - 사이드메뉴바 작업중...ing  
  
#### 2024-01-19  
  
<이가영>  
  
1. section4 스와이퍼추가  
2. html 전부완료  
3. section1 css 일부추가  
4. section1 css 작업중...ing  
  
<이현정>  
  
1. gitignore - css/ 추가  
2. comm.scss - import 중복 삭제  
3. 건강정보페이지 - 사이드바메뉴 작업  
4. 건강정보페이지 - 질환정보 섹션 작업중...ing  
  
<안윤희>  
  
1. 18일 작업물들 팀원 모두 머지 완료  
2. gitignore 생성 완료 -> css / css.map 적용  
3. 예약페이지 안 헤더 부분 depth1까지 scss적용  
4. 예약 페이지에 사용될 이미지 추가  
5. 태그 선택자 오류로 모든 페이지에서 이미 보이는 이슈 발생  
   -> 헬스케어페이지(html,scss) 바디태그 추가  
6. 믹스인scss 폰트 단위 변경 px -> rem  
  
#### 2024-01-21  
  
<안윤희>  
  
1. gnb, footer 수정  
2. 예약페이지 메인 약간 수정->진행중  
3. 가영님 main.scss 중괄호 오류 있어서 추가(머지오류였던듯)  
  
#### 2024-01-23  
  
<이현정>
  
1. 질환정보 tab 작업  
2. 변수 추가 : $subhc-margin-top: 60px  
3. 각 html 파일 head에 스와이퍼 link 추가  
4. 전체적인 섹션 초안 작업  
5. 영양정보, 건강TV 섹션에 스와이퍼 작업 완료  
  
<안윤희>  
  
1. gnb, footer 머지&깃풀 하면서 생긴 오류(오타) 수정  
2. 예약페이지html div추가 및 class수정  
3. 예약페이지scss 완료  
4. GNB 구조 변경중...ing  
  
#### 2024-01-24  
  
<이현정>  
  
1. 건강정보 - 나만의 건강코치 스와이퍼 작업완료  
2. mixins 추가 - tab-tit, tab-tit-active  
3. 질환정보 tab 자바스크립트 작업중...ing  
  
#### 2024-01-25  
  
<이현정>  
  
1. 질환정보 tab 자바스크립트 작업완료  
2. 질환정보 버튼 작업완료  
3. form태그 작업 및 아이콘추가  
4. 스와이퍼 슬라이드작업  
  
#### 2024-01-24  
  
<안윤희>  
  
1. gnb메뉴 구조 변경 완료  
2. gnb scss변경 중...ing ...ing  
  
#### 2024-01-25  
    
<안윤희>  
  
1. gnb메뉴 구조 다시 변경 완료  
2. gnb scss변경 완료  
  
<이가영>  
  
1. section별로 이미지 삽입 완료  
2. 슬라이드 삽입 완료  
3. html수정 후 진짜완료  
4. 이미지 아이콘 삽입 완료  
5. css작업..ing  
  
#### 2024-01-26  

<이현정>

1. 건강정보\_나만의 건강코치 슬라이드 작업완료(슬릭으로변경)
  
#### 2024-01-29  
  
<이현정>  
  
건강정보페이지 작업  
  
1. 나만의 건강코치 아이콘 변경 및 이미지 -> 직접 코드로 작업  
2. 더보기 아이콘 추가  
3. 많이찾는 질환정보 마우스오버 효과추가  
  
<안윤희>  
  
1. gnb 드롭다운 -> 마우스 엔터리브 이벤트로 변경(comm.js)  
2. 예약페이지 버튼 활성화 (회원예약 : 아이디,비밀번호 모두 입력시 회원예약하기 활성화 / 비회원예약 : 이름, 핸드폰입력시 인증버튼 활성화 )  
 -> 인증번호, 체크박스 추가시 비회원에약하기 버튼은 구현중  
3. 예약페이지scss 호버 색상 변경 추가  
4. 회원예약하기, 인증, 비회원 예약하기 버튼 클릭시 '내용 입력해주세요' alert창 생성  
  
#### 2024-01-30  
  
<이가영>  
  
1. section1,2 자바스크립트 추가: aos로 텍스트 애니메이션 구현  
2. section3 자바스크립트 추가중  
  
<이현정>  
  
1. 나만의 건강코치 레이아웃 수정  
2. 색상변수 추가  
   - $sidebnr-bg: #40b16a  
   - $sidebnr-text: #FEF4A0  
3. 마우스오버 효과추가  
4. 사이드바메뉴 배너 스크립트 추가  
  
<안윤희>  
  
1. 예약페이지 버튼 활성화  
2. 예약페이지 값 없는 경우 알림창 생성  
3. 예약페이지 after아이콘 클릭하면 이전페이지로 이동  
  
#### 2024-01-31  
  
<안윤희>  
  
1. 머지  
2. 미디어쿼리시작(태블릿)...ing  

<이현정>

1. 건강정보페이지 pc버전 질환정보 탭 - 버튼 작업수정
2. 건강정보페이지 반응형 작업중
  
#### 2024-02-01  
  
<안윤희>  
  
1. 반응형 미디어쿼리 브레이크포인트 지정  
2. 예약페이지, 인증번호 입력 인풋 타입 텍스트 글자수 제한 지정  
3. 회원 예약하기, 비회원 예약 하기 버튼 폼으로 연결 후 타입 변경  
4. 미디어쿼리진행중...ing  
5. 풋터 -> 작은태블릿 사이즈까지 완료  

<이현정>

1. 건강정보페이지 - 태블릿, 모바일 반응형 작업중
  
#### 2024-02-02  
  
<안윤희>  
  
1. 반응형 작업중  
2. 모바일 화면 메뉴바 생성중

<이현정>

1. 건강정보페이지 - 태블릿, 모바일 반응형 작업중  

#### 2024-02-03

<이현정>

1. 건강정보페이지 - 반응형을 위해 px 대신 %로 작업
2. 건간정보페이지 - 자바스크립트 코드 수정  

#### 2024-02-05  
  
<안윤희>  
  
1. mixin transparent-border-B 추가  
2. gnb 구조 추가(모바일 화면 사이즈 적용)  
3. gnb 미디어쿼리 변경  
4. 풋터 미디어쿼리 이상한 부분 변경  

<이현정>

1. 건강정보페이지 - 태블릿 반응형 작업완료
2. 건강정보페이지 - 모바일 반응형 작업중  

#### 2024-02-06  

<안윤희>  
  
1. 헤더 풋터 구조 변경 및 미디어 쿼리  
2. 예약 페이지 미디어쿼리  
3. 예약 페이지 자바스크립트(모바일화면, 탭 변경)  

<이현정>
  
1. 건강정보페이지 - 반응형 작업완료


#### 2024-02-07  
  
<안윤희>  
  
1. 예약페이지 모바일화면 예약탭 전환 자바스크립트 구현 완료  
2. 헤더 구조 변경으로 인해 {healthcare, index}.html 삭제  
-> 완료 후 다시 추가 예정  
3. 풋터 모바일화면에서 border두께 수정  
4. 헤더 모바일용 구조 추가중  

#### 2024-02-08  

<안윤희>  

1. gnb 모바일용 작업중  

#### 2024-02-09  

<안윤희>  
  
1. gnb 모바일용 scss작업중  
  
#### 2024-02-10  
  
<안윤희>  

1. gnb 모바일용 scss작업완

#### 2024-02-10  
  
<안윤희>

1. gnb 모바일용 자바스크립트 구현 완료  
-> 햄버거 메뉴 눌렀을 때 오른쪽에서 왼쪽으로 부드럽게 나오게 하는 클릭이벤트 발생  
-> 트랜지션으로 부드럽게 처리  
2. 각페이지에 다시 헤더와 풋터 삽입 완료