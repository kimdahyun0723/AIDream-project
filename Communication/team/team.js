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

// 모집 상태 필터링 기능 추가
const filterButtons = document.querySelectorAll(".filter-button");
const rows = document.querySelectorAll("#my-table tbody tr");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const status = button.getAttribute("data-status");
    filterRows(status);
  });
});

function filterRows(status) {
  let filteredRows = [...rows];

  if (status !== "all") {
    filteredRows = filteredRows.filter((row) => {
      const cell = row.cells[5].textContent; // 모집 상태가 있는 셀
      return cell === status;
    });
  }

  // 모든 행 숨기기
  rows.forEach((row) => (row.style.display = "none"));

  // 필터링된 행 보이기
  filteredRows.forEach((row) => (row.style.display = ""));
}

// 초기 상태로 모든 행 보이기
filterRows("all");
