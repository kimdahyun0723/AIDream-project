// 모집 상태 필터링 기능 추가
const filterButtons = document.querySelectorAll(".filter-button");

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
