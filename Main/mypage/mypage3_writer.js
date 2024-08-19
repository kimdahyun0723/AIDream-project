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


//마이페이지 이벤트
const myli = document.querySelectorAll(".myli");
const myli2 = document.querySelectorAll(".myli:not(#mywriter)");
const mywriter = document.querySelector("#mywriter");

//클릭하면 페이지 이동
myli[0].addEventListener("click", function(){
  window.location.href = "mypage1_company.html";
})
myli[1].addEventListener("click", function(){
  window.location.href = "mypage2_apply.html";
})
myli[2].addEventListener("click", function(){
  window.location.href = "mypage3_writer.html";
})
myli[3].addEventListener("click", function(){
  window.location.href = "mypage4_project.html";
})

//메뉴 호버하면 스타일 변경
myli2.forEach((element) =>{
  element.addEventListener("mouseover", function(event){
    mywriter.style.backgroundColor = "#4B89DC";
    mywriter.style.color = "black";
  })
  element.addEventListener("mouseout", function(event){
    mywriter.style.backgroundColor = "";
    mywriter.style.color = "";
  })
})


//내가 쓴글 라디오버튼
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

function openquestion(){;
  box1.style.display = "block";
  box2.style.display = "none";
  box3.style.display = "none";
}
function opendiscuss(){
  box1.style.display = "none";
  box2.style.display = "block";
  box3.style.display = "none";
}
function openstudy(){
  box1.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "block";
}


//페이지네이션
const rowsPerPage = 5;
const rows = document.querySelectorAll("#my-table tbody tr");
const rowsCount = rows.length; // 100/8  12.9 -> 13
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector("#numbers");
//변수 추가
const prevPageBtn = document.querySelector(".pagination .fa-arrow-left");
const nextPageBtn = document.querySelector(".pagination .fa-arrow-right");
let pageActiveIdx = 0; //현재 보고 있는 페이지그룹 번호
let currentPageNum = 0; //현재 보고 있는 페이지네이션 번호
let maxPageNum = 3; // 페이지그룹 최대 개수

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}

const numberBtn = numbers.querySelectorAll("a");
console.log(numberBtn);

//페이지네이션 번호 감추기
for (nb of numberBtn) {
  nb.style.display = "none";
}

numberBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    //테이블 출력 함수
    displayRow(idx);
  });
});

function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;

  let rowsArray = [...rows];

  for (ra of rowsArray) {
    ra.style.display = "none";
  }

  let newRows = rowsArray.slice(start, end);
  for (nr of newRows) {
    nr.style.display = "";
  }
  for (nb of numberBtn) {
    nb.classList.remove("active");
  }
  numberBtn[idx].classList.add("active");
} //displayRow

displayRow(0);

//페이지네이션 그룹 표시 함수
function displayPage(num) {
  //페이지네이션 번호 감추기
  for (nb of numberBtn) {
    nb.style.display = "none";
  }
  let totalPageCount = Math.ceil(pageCount / maxPageNum);

  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);
  console.log(num, start, end, pageArr, pageListArr);

  for (let item of pageListArr) {
    item.style.display = "block";
  }
  if (pageActiveIdx == 0) {
    prevPageBtn.style.display = "none";
  } else {
    prevPageBtn.style.display = "block";
  }
  if (pageActiveIdx == totalPageCount - 1) {
    nextPageBtn.style.display = "none";
  } else {
    nextPageBtn.style.display = "block";
  }
}
displayPage(0);

nextPageBtn.addEventListener("click", () => {
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});
prevPageBtn.addEventListener("click", () => {
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});
