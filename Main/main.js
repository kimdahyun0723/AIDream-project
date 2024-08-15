// 헤더 동작
const headerMenuItems = document.querySelectorAll("#headermenu > li");

headerMenuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const allSubmenus = document.querySelectorAll(".submenu");
    allSubmenus.forEach((submenu) => {
      submenu.style.display = "block";
    });
  });

  item.addEventListener("mouseleave", () => {
    const allSubmenus = document.querySelectorAll(".submenu");
    allSubmenus.forEach((submenu) => {
      submenu.style.display = "none";
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
