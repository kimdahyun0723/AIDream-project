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

// 메인 동영상 처리
const video = document.getElementById("introVideo");
const videoContainer = document.getElementById("videoContainer");
const skipButton = document.getElementById("skipButton");
const header = document.getElementById("header");
const contents = document.getElementById("contents");
const footer = document.getElementById("footer");

function fadeOut(element) {
  element.style.transition = "opacity 0.8s ease";
  element.style.opacity = "0";
  setTimeout(() => {
    element.style.display = "none";
  }, 500); // 0.5초 후 display: none
}

skipButton.addEventListener("click", () => {
  fadeOut(videoContainer);
  header.style.opacity = "1";
  contents.style.opacity = "1";
  footer.style.opacity = "1";
});

video.addEventListener("ended", () => {
  fadeOut(videoContainer);
  header.style.opacity = "1";
  contents.style.opacity = "1";
  footer.style.opacity = "1";
});
