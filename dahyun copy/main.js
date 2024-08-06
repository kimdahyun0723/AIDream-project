const headerMenuLi = document.querySelectorAll("#headermenu > li"); // mainmenu의 li 요소들 선택
const subMenu = document.getElementsByClassName("submenu");

headerMenuLi.addEventListener("mouseover", () =>{
  subMenu.style.display = "block";
});

headerMenuLi.addEventListener("mouseout", () =>{
  subMenu.style.display = "none";
});

// headerMenuLi.forEach((menuItem) => {
//   menuItem.addEventListener("mouseover", () => {
//     const subMenus = document.querySelectorAll(".submenu"); // 모든 submenu 선택
//     subMenus.forEach((subMenu) => {
//       subMenu.style.display = "block"; // 모든 submenu 보이기
//     });
//   });

//   menuItem.addEventListener("mouseout", () => {
//     const subMenus = document.querySelectorAll(".submenu"); // 모든 submenu 선택
//     subMenus.forEach((subMenu) => {
//       subMenu.style.display = "none"; // 모든 submenu 숨기기
//     });
//   });
// });


