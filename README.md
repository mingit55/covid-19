# 기능대회 대비 프로젝트 제작 - 코로나 19

## 개요

전국기능경기대회의 문제 유형이 변경되어 지난 19년도 전국대회부터 웹 개발 및 디자인 분야의 과제는 많은 부분이 바뀌어 버렸습니다.
현 4월까지는 작년 전국대회 출시 되었던 문제들을 반복 연습을 하였습니다만, 앞으로의 취업 문제와 포트폴리오를 위해서라도 나만의
개발 프로젝트가 많이 필요하다는 생각이 들었습니다. 이에 따라 최대한 기능대회 문제와 비슷하면서도 자신의 실력을 끌어올릴 수 있는
다양한 유형들을 추가하여 프로젝트를 진행하고자 합니다. 

이 프로젝트는 지방기능경기대회 웹 개발 및 디자인 분야의 과제 공개일 전 주인 20년 5월 15일(금)까지의 일정에 맞추어 이뤄져야 하며,
상세한 내용은 다음과 같습니다. 내용은 진행 상황에 맞추어 변경될 수 있지만, 최대한 일정에 맞추는 것을 목표로 하겠습니다.

* 기획서(문제 항목 정리) : 20-04-26(일)까지 마무리.
* A과제: 20-04-28(화)까지 마무리
* B과제: 20-05-01(금)까지 마무리
* C과제: 20-05-06(수)까지 마무리
* 20-05-06 ~ 20-05-15에는 제작한 과제를 **다시** 재개발하면서 내용을 정리하는 것으로 합니다.

아무래도 현 코로나 사태가 가장 이슈가 되는 대목이다 보니, 이번 년도 지방 혹은 전국대회 과제로 출제될 가능성이 높다고 판단하여,
과제명은 '코로나 19'로 결정하였고, 과제들은 포트폴리오 용으로 GitHub에 올라갈 것을 고려하여 md 파일로 작성하여 별도로 업로드할
예정입니다. 

또한, 과제 내용은 지난 지방대회와 전국대회에 출제된 기능을 과제 주제에 맞게 조합하여 구성할 예정입니다만, 기능대회에서는 제한 시간이
존재할 뿐더러, 인터넷 사용이 금지됨으로 포트폴리오로 삼을만한 추가기능들(소셜 로그인, 사용자 이메일 전송)이 출제될 수 없습니다. 이를 보완하기
위해 첫 과제는 기능대회 용도로 제한시간 내에 풀 수 있을 정도의 간단한 내용만 추가할 예정이며, 여기서 좀 더 살을 붙여서 포트폴리오를 위한
프로젝트를 완성 시킬 예정입니다.

## 브런치 종류

프로젝트 특성 때문에라도, 브런치를 분리하여 포트폴리오용 파트와 대회용 파트를 구분하고자 합니다.

* master: 최종 버전
* fortfolio: 포트폴리오용 버전
* contest: 대회용 버전


## 과제 기능 선별

이전 대회에서 출제되었던 기능 중 주요 기능들을 요약하자면 다음과 같습니다.

### B 과제

+ 19년도 전국대회
    - 동영상 편집기 ( 클립아트 삽입, 싱크 맞추기, 다운로드 )
    - 캔버스 만들기 ( 직선, 곡선, 원, 사각형, 페인트 툴 등등 )
    - Form Validator
    - CMS 메인 동작기능

+ 19년도 지방대회
    -데이터 시각화 (차트 만들기)
    -검색 및 하이라이트 기능
    -JSON 파일을 읽어서 데이터 보여주기
    - 데이터 삽입/수정/삭제
    - 영수증 출력하기


### C 과제

+19년도 전국대회
    - 엑셀 다운로드
    - 캡챠(Captcha) 회원가입
    - 로그인 지속시간
    - 원 그래프 그리기
    - 에약 시간 겹치는지 확인하기

+ 19년도 지방대회
    - 이전 로그인 기록 보전
    - 경매 시스템 구현
    - 답글의 답글을 달 수록 Depth가 증가하는 답글

그 중 '코로나 19'와 관련하여 여러 사이트를 참고하여 고민한 결과, 해당 사이트의 주요 기능은 다음과 같이 이뤄질 듯 합니다.


** 주요기능 **

1. 공공 데이터 API를 통한 JSON 방식의 데이터 수집으로, 코로나 감염 현황 알리기. (국내 / 국외)
2. 서울특별시의 '시민제안' 시스템을 모방하여 시민이 적극적으로 코로나 19사태에 방안을 제안할 수 있도록 하기.
3. 서울특별시의 '잠시멈춤 캠패인'을 모방하여 적극적으로 코로나 사회적 거리두기를 실천하는 모습을 알리는 게시판 만들기.
4. 유형별로(일반인, 입국자 및 해외여행객, 자가격리자, 의료기관, 지자체, 기업 및 시장 등) 관리자가 공지사항을 작성할 수 있는 게시판 만들기.
5. 관리자 계정과 시민 계정의 분리와 권한관리와 로그인 중복 방지, 이전 로그인 보전 등


** 각 과제별 기능 **
+ B과제
    - 이미지 슬라이드
    - Form Validator
    - 파일 드롭다운 업로드, 미리보기
    - 다중 곡선 그래프
    - JSON 데이터 읽어 시각화
    - 카드형식의 애니메이션

+ C과제
    - 이전 로그인 보전
    - 다중 로그인 방지
    - 캡챠(Capcha) 회원가입
    - 각 회원 권한 라우팅 관리
    - 댓글의 답글기능
    - 답글이 달리면 회원이 로그인 하였을 때 알려주는 기능
    - 실시간으로 페이지가 새로고침 되지 않고 새로운 글을 불러오는 기능

+ 추가 포트폴리오용 과제
    - 실시간으로 API를 통해 DB에 데이터가 없을 경우 불러와서 DB에 저장하고 사용자에게 이를 보여주는 기능
    - 소셜 로그인 기능
    - 이메일 인증을 통해 회원가입 인증
    - 아이디와 비밀번호를 사용자의 이메일로 본인 인증을 거쳐, 찾을 수 있는 기능

