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
  const ml = document.querySelectorAll(".mlbox");
  const bd = document.querySelectorAll(".bdbox");
  const nlp = document.querySelectorAll(".nlpbox");
  const rs = document.querySelectorAll(".rsbox");
  const cv = document.querySelectorAll(".cvbox");
  const gn = document.querySelectorAll(".gnbox");
  const pp = document.querySelectorAll(".ppbox");
  const bn = document.querySelectorAll(".bnbox");
  const sof = document.querySelectorAll(".sofbox");
  function opentot(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "block";
    }
  }
  function openml(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "block";
    }
  }
  function openbd(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "block";
    }
  }
  function opennlp(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "block";
    }
  }
  function openrs(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "block";
    }
  }
  function opencv(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "block";
    }
  }
  function opengn(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "block";
    }
  }
  function openpp(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "block";
    }
  }
  function openbn(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "block";
    }
  }
  function opensof(){
    for(let i = 0; i < infobox.length; i++){
      infobox[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "block";
    }
  }