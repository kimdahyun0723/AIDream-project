const headerMenuLi = document.querySelectorAll("#headermenu > li"); // mainmenu의 li 요소들 선택
const subMenu = document.getElementsByClassName("submenu");

headerMenuLi.addEventListener("mouseover", () =>{
  subMenu.style.display = "block";
});

headerMenuLi.addEventListener("mouseout", () =>{
  subMenu.style.display = "none";
});


