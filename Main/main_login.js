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

const logoutAlert = function(){
  alert('로그아웃 되었습니다');
}

//쿼리스트링 값 가져오기
const urlSearch = new URLSearchParams(location.search);
const userid = urlSearch.get("userid");
const queryid = document.getElementById("queryid");
queryid.innerHTML = "<span>" + userid + "</span>님";