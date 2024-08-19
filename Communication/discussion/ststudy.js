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

// submenu의 li를 클릭했을 때 li 안에 a 태그가 작동
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
// 모집 중, 모집완료 버튼 동작 스크립트
let posts = [
  {
    title: "AI 프로젝트 모집합니다.",
    content: "저희는 AI 기반 프로젝트를 진행하려고 합니다.",
    status: "ongoing",
    date: "2023-10-01",
    views: 150,
    popular: 20,
    people: 3,
    totalPeople: 4,
  },
  {
    title: "데이터 분석 스터디 모집합니다.",
    content: "데이터 분석 기법을 같이 공부 하고 싶습니다.",
    status: "completed",
    date: "2023-10-02",
    views: 200,
    popular: 35,
    people: 4,
    totalPeople: 4,
  },
  {
    title: "웹 개발 스터디 모집합니다.",
    content: "OO회사 취업을 위해 웹 개발 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-03",
    views: 100,
    popular: 15,
    people: 1,
    totalPeople: 3,
  },
  {
    title: "모바일 앱 개발 스터디 모집합니다.",
    content: "모바일 교통 관리 앱 개발을 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-04",
    views: 250,
    popular: 40,
    people: 0,
    totalPeople: 5,
  },
  {
    title: "게임 개발 스터디 모집합니다.",
    content: "OO회사에 필요한 게임 개발을 배우고 싶습니다",
    status: "completed",
    date: "2023-10-05",
    views: 300,
    popular: 50,
    people: 4,
    totalPeople: 4,
  },
  {
    title: "프론트엔드 개발 스터디 모집합니다.",
    content: "프론트엔드 기술을 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-06",
    views: 180,
    popular: 25,
    people: 1,
    totalPeople: 4,
  },
  {
    title: "백엔드 개발 스터디 모집합니다.",
    content: "백엔드 기술을 배우고 싶습니다",
    status: "completed",
    date: "2023-10-07",
    views: 220,
    popular: 30,
    people: 3,
    totalPeople: 3,
  },
  {
    title: "데이터베이스  스터디 모집합니다.",
    content: "데이터베이스 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-08",
    views: 160,
    popular: 20,
    people: 0,
    totalPeople: 5,
  },
  {
    title: "클라우드 컴퓨팅 스터디 모집합니다.",
    content: "클라우드 기술을 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-09",
    views: 190,
    popular: 28,
    people: 2,
    totalPeople: 4,
  },
  {
    title: "인공지능 스터디 모집합니다.",
    content: "인공지능 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-10",
    views: 210,
    popular: 32,
    people: 1,
    totalPeople: 3,
  },
  {
    title: "모바일 게임 개발 스터디 모집합니다.",
    content: "모바일 게임 개발을 배우고 싶습니다",
    status: "completed",
    date: "2023-10-11",
    views: 240,
    popular: 45,
    people: 5,
    totalPeople: 5,
  },
  {
    title: "사물인터넷 스터디 모집합니다.",
    content: "IoT 기술을 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-12",
    views: 170,
    popular: 22,
    people: 2,
    totalPeople: 4,
  },
  {
    title: "UX/UI 디자인 스터디 모집합니다.",
    content: "UX/UI 디자인 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-13",
    views: 130,
    popular: 18,
    people: 1,
    totalPeople: 3,
  },
  {
    title: "네트워크 보안 스터디 모집합니다.",
    content: "네트워크 보안을 배우고 싶습니다",
    status: "completed",
    date: "2023-10-14",
    views: 200,
    popular: 35,
    people: 5,
    totalPeople: 5,
  },
  {
    title: "블록체인 스터디 모집합니다.",
    content: "블록체인 기술을 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-15",
    views: 250,
    popular: 40,
    people: 2,
    totalPeople: 4,
  },
  {
    title: "디지털 마케팅 스터디 모집합니다.",
    content: "디지털 마케팅 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-16",
    views: 180,
    popular: 25,
    people: 1,
    totalPeople: 3,
  },
  {
    title: "게임 디자인 스터디 모집합니다.",
    content: "게임 디자인 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-17",
    views: 220,
    popular: 30,
    people: 0,
    totalPeople: 5,
  },
  {
    title: "데이터 시각화 스터디 모집합니다.",
    content: "데이터 시각화 기법을 배우고 싶습니다",
    status: "completed",
    date: "2023-10-18",
    views: 160,
    popular: 20,
    people: 4,
    totalPeople: 4,
  },
  {
    title: "기계 학습 스터디 모집합니다.",
    content: "기계 학습 기초를 배우고 싶습니다",
    status: "ongoing",
    date: "2023-10-19",
    views: 190,
    popular: 28,
    people: 1,
    totalPeople: 3,
  },
];
// people과 author 속성을 추가
posts.forEach((post) => {
  post.author = "작성자 이름"; // 예시로 작성자 이름
});

function displayPosts(postsToDisplay) {
  const postList = document.getElementById("postList");
  postList.innerHTML = ""; // 기존 포스트 초기화
  postsToDisplay.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `<h3><a href="#">${post.title}</a></h3>
                            <p>내용: ${post.content} (현재인원: ${
      post.people
    }/${post.totalPeople})</p>
                             <div class="post-info">작성자: ${
                               post.author
                             } | 날짜: ${post.date} | 조회수: ${
      post.views
    } | 추천수: ${post.popular} | 상태: ${
      post.status === "ongoing" ? "모집중" : "모집완료"
    }</div>`;
    postList.appendChild(postElement);
  });
}

function filterByStatus(status) {
  const filteredPosts = posts.filter((post) => {
    return (
      (status === "ongoing" && post.status === "ongoing") ||
      (status === "completed" && post.status === "completed")
    );
  });
  displayPosts(filteredPosts);
}

function sortPosts(criteria) {
  let sortedPosts = [...posts]; // 원본 배열 복사
  if (criteria === "latest") {
    sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (criteria === "popular") {
    sortedPosts.sort((a, b) => b.popular - a.popular);
  } else if (criteria === "views") {
    sortedPosts.sort((a, b) => b.views - a.views);
  }
  displayPosts(sortedPosts);
}

// 버튼 클릭 시 필터링 및 정렬
document
  .querySelector(".button-container")
  .addEventListener("click", (event) => {
    if (event.target.textContent === "모집중") {
      filterByStatus("ongoing");
    } else if (event.target.textContent === "모집완료") {
      filterByStatus("completed");
    }
  });

document.querySelector(".filter-options").addEventListener("click", (event) => {
  if (event.target.textContent === "최신순") {
    sortPosts("latest");
  } else if (event.target.textContent === "추천순") {
    sortPosts("popular");
  } else if (event.target.textContent === "조회순") {
    sortPosts("views");
  }
});

// 초기 포스트 표시
displayPosts(posts);