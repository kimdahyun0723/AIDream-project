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

  //즐겨착기 이미지 바꾸기
  const tag = document.getElementsByClassName("tag");
  for(let i = 0; i < tag.length; i++){
    tag[i].addEventListener("click", change);
    function change(){
      if(tag[i].src.match("company_image/star.png")){
        tag[i].src = "company_image/checkstar.png";
      }
      else{
        tag[i].src = "company_image/star.png";
      }
    }
  }

//라디오버튼 필터
const topbox = document.querySelectorAll(".topbox");
const popular = document.querySelectorAll(".popularbox");
const salary = document.querySelectorAll(".salarybox");
const hot = document.querySelectorAll(".hotbox");
function opentotal(){
  for(let i = 0; i < topbox.length; i++){
    topbox[i].style.display = "block"
  }
}
function openpopular(){
  for(let i = 0; i < topbox.length; i++){
    topbox[i].style.display = "none"
  }
  for(let i = 0; i < popular.length; i++){
    popular[i].style.display = "block";
  }
}
function opensalary(){
  for(let i = 0; i < topbox.length; i++){
    topbox[i].style.display = "none"
  }
  for(let i = 0; i < salary.length; i++){
    salary[i].style.display = "block";
  }
}
function openhot(){
  for(let i = 0; i < topbox.length; i++){
    topbox[i].style.display = "none"
  }
  for(let i = 0; i < hot.length; i++){
    hot[i].style.display = "block";
  }
}