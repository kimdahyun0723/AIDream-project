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
  const infobox = document.querySelectorAll(".infobox");
  const health = document.querySelectorAll(".healthbox");
  const financ = document.querySelectorAll(".financbox");
  const edu = document.querySelectorAll(".edubox");
  const menufac = document.querySelectorAll(".menufacbox");
  const bot = document.querySelectorAll(".botbox");
  const solution = document.querySelectorAll(".solutionbox");
  const plat = document.querySelectorAll(".platbox");
  const develop = document.querySelectorAll(".developbox");
  const secur = document.querySelectorAll(".securbox");
  function opentotal(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "block";
    }
  }
  function openhealth(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < health.length; i++){
      health[i].style.display = "block";
    }
  }
  function openfinanc(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < financ.length; i++){
      financ[i].style.display = "block";
    }
  }
  function openedu(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < edu.length; i++){
      edu[i].style.display = "block";
    }
  }
  function openmenufac(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < menufac.length; i++){
      menufac[i].style.display = "block";
    }
  }
  function openbot(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < bot.length; i++){
      bot[i].style.display = "block";
    }
  }
  function opensolution(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < solution.length; i++){
      solution[i].style.display = "block";
    }
  }
  function openplat(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < plat.length; i++){
      plat[i].style.display = "block";
    }
  }
  function opendevelop(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < develop.length; i++){
      develop[i].style.display = "block";
    }
  }
  function opensecur(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < secur.length; i++){
      secur[i].style.display = "block";
    }
  }
