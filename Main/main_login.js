// 헤더 동작
const headerMenuItems = document.querySelectorAll('#headermenu > li');

headerMenuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(submenu => {
          submenu.style.display = 'block';
    });
  });

  item.addEventListener('mouseleave', () => {
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(submenu => {
      submenu.style.display = 'none';
    });
  });
});

// submenu의 li를 클릭해을때 li 안에 a 태그가 작동
const submenuItems = document.querySelectorAll(".submenu li");
submenuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    const link = item.querySelector("a");
    if (link) {
      window.location.href = link.href; // 링크로 이동
    }
    event.stopPropagation(); // 상위 li의 클릭 이벤트 방지
  });
});

const logoutAlert = function(){
  alert('로그아웃 되었습니다');
}

//쿼리스트링 값 가져오기
//로그인 할때 입력한 아이디 값 가져오기
const urlSearch = new URLSearchParams(location.search);
const userid = urlSearch.get("userid");
const queryid = document.getElementById("queryid");
queryid.innerHTML = "<span>" + userid + "</span>님"; //가져온 값을 html 에 넣기

localStorage.setItem("userid", queryid);