### 목차
> 1. [프로젝트 소개](#프로젝트-소개)   
> 2. [기획 및 설계](#기획-및-설계)   
> 3. [메뉴 관계도](#메뉴-관계도)   
> 4. [기술 스택](#기술-스택)   
> 5. [주요 기능](#주요-기능)   
> 6. [주요 화면](#주요-화면)    

# 프로젝트 소개
> <img src="src/main/resources/static/images/logo.png" width="300px" height="200px" alt="logo"></img><br/>
> ### 혁신의 미래를 열다, AI Dream 서비스 제공 플랫폼
>
> AI에 관심 있는 사용자의 요구를 반영하여, 다양한 AI 관련 정보를 제공합니다.
> AI의 기본 개념과 용어 사전을 비롯해 전문 지식과 기업, 채용, 교육, 뉴스 등의 카테고리별 정보를 제공합니다.
> 사용자는 관심 있는 기업과 채용 게시물을 즐겨찾기에 등록할 수 있으며, 자유 토론을 통해 의견을 공유하고 토론할 수 있는 사용자 친화적 서비스를 제공합니다.
>
> HTML, CSS, JS를 사용하여 정적 웹사이트 구현하였고
> JQUERY 를 통해 애니메이션과 여러 이벤트 처리를 구현하였습니다. 
>
> **REFERENCE** [직행](https://zighang.com/ai)

> ### 개발 기간
> 2024.08.01 ~ 2024.08.26

> ### 개발 인원(4명)
> **김준선(FRONTEND)**   
> 기본 폼 설정  
> 메인, 소개, 뉴스, 게시판, 페이징 구현
>
> **김다현(FRONTEND)**   
> 기획, 설계   
> 메인, 로그인, 회원가입, 기업, 채용, 마이페이지 구현 
>
> **김민서(FRONTEND)**
> PPT, 발표
> 메인, 뉴스, 게시판 구현
> 
> **문성준(FRONTEND)**   
> 동영상 제작
> 메인, 교육 구현

# 기획 및 설계
<img src="src/main/resources/static/images/IA.png" width="100%" height="400px" alt="IA"></img><br/>

# 메뉴 관계도
<img src="src/main/resources/static/images/ERD.png" width="100%" height="500px" alt="ERD"></img><br/> 

# 기술 스택
<img src="src/main/resources/static/images/back.png" width="100%" height="400px" alt="back"></img><br/>

# 주요 기능
### 요약
|공통|사용자|관리자|
|------|---|---|
|-회원가입, 로그인<br>-공연목록 및 공연상세 조회<br>-게시글 조회|-즐겨찾기 추가<br>-공연후기 작성<br>-예매 결제<br>-게시글, 댓글 작성<br>-마이페이지|-공연 API 관리<br>-회원 관리<br>-게시글 관리|

## [공통 기능]
### 회원가입, 로그인
* 아이디, 비밀번호 유효성 검증과 비밀번호 암호화를 설정했다.
* 카카오 로그인 시 자동 회원가입 가능하다.
* 일반로그인과 카카오 로그인 회원의 권한이 분리되어 있다.
### 메인
* 금주의 공연, 장르별 공연목록 조회가 가능하다.
* 기본으로 8개가 보여지며 더보기를 누르면 8개씩 추가로 조회할 수 있다.
### 공연 목록
* 장르, 지역, 공연상태에 따른 조회가 가능하다.
* 공연이름이나 공연시설이름으로 검색 조회가 가능하다.
* 날짜순으로 정렬이 가능하며 한 페이지에 9개의 공연 목록이 나타난다.
### 공연 상세
* 공연의 세부정보와 즐겨찾기 갯수, 남은 티켓 갯수를 조회할 수 있다.
* 카카오 지도로 공연장 위치조회와 길찾기 서비스를 사용할 수 있다.
* 공연 후기와 별점 조회가 가능하다.
### 게시판
* 게시글과 댓글을 날짜순, 제목이나 작성자로 검색 조회가 가능하다.

## [사용자 기능]
### 츨겨찾기 관리
* 공연상세에서 즐겨찾기 추가, 취소가 가능하다.
* 즐겨찾기된 공연은 마이페이지에 추가되며 추가된 공연들의 일정을 달력으로 확인할 수 있다.
### 공연 후기 관리
* 공연상세에서 공연에 대한 별점과 후기를 남길 수 있다.
* 작성자와 로그인된 회원이 같다면 후기 수정, 삭제가 가능하다.
* 마이페이지에서도 조회, 수정, 삭제가 가능하다.
### 예매 결제 관리
* 공연상세에서 잔여티켓 내에서 최대 4장까지 예매 가능하다.
* 예매가 완료된 공연은 마이페이지에 추가되며 예매 취소가 가능하다.
### 게시글, 댓글 관리
* 게시판에 게시글과 게시글에 대한 댓글을 작성할 수 있다.
* 작성자와 로그인된 회원이 같다면 게시글 수정, 삭제가 가능하다.
* 마이페이지에서도 조회, 수정, 삭제가 가능하다.

## [관리자 기능]
### API 관리
* 1주 단위로 API 업데이트와 삭제를 할 수 있다.
* 모든 공연의 관리, 삭제가 가능하다.
### 회원 관리
* 모든 회원의 정보를 아이디나 이름으로 검색 조회가 가능하며 수정, 삭제도 가능하다.
### 게시글 관리
* 모든 게시글을 기간이나 제목, 작성자로 검색 조회가 가능하며 수정, 삭제도 가능하다.

# 주요 화면
|메인|회원가입|
|------|---|
|<img src="src/main/resources/static/images/main.png" width="400px" height="250px" alt="main"></img>|<img src="src/main/resources/static/images/sign.png" width="400px" height="250px" alt="sign"></img>|
|공연목록|공연상세|
|<img src="src/main/resources/static/images/showlist.png" width="400px" height="250px" alt="showlist"></img>|<img src="src/main/resources/static/images/showdetail.png" width="400px" height="250px" alt="showdetail"></img>|
|게시판|게시글|
|<img src="src/main/resources/static/images/board.png" width="400px" height="250px" alt="board"></img>|<img src="src/main/resources/static/images/repliy.png" width="400px" height="250px" alt="repliy"></img>|
|마이페이지|관리자페이지|
|<img src="src/main/resources/static/images/mypage.png" width="400px" height="250px" alt="mypage"></img>|<img src="src/main/resources/static/images/adminpage.png" width="400px" height="250px" alt="adminpage"></img>|

