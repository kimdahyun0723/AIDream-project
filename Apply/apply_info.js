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

  const ml = document.getElementsByClassName("mlbox");
  const bd = document.getElementsByClassName("bdbox");
  const nlp = document.getElementsByClassName("nlpbox");
  const rs = document.getElementsByClassName("rsbox");
  const cv = document.getElementsByClassName("cvbox");
  const gn = document.getElementsByClassName("gnbox");
  const pp = document.getElementsByClassName("ppbox");
  const bn = document.getElementsByClassName("bnbox");
  const sof = document.getElementsByClassName("sofbox");
  function opentot(){
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "block";
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "block";
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "block";
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "block";
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "block";
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "block";
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "block";
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "block";
    }
  }
  function openml(){
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(ml[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(ml[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(ml[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(ml[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(ml[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(ml[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(ml[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < ml.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(ml[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function openbd(){
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "block";
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(bd[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(bd[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(bd[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(bd[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(bd[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(bd[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(bd[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < bd.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(bd[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function opennlp(){
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(nlp[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(nlp[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(nlp[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(nlp[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(nlp[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(nlp[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(nlp[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < nlp.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(nlp[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function openrs(){
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(rs[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(rs[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(rs[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(rs[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(rs[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(rs[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(rs[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < rs.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(rs[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function opencv(){
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(cv[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(cv[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(cv[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(cv[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(cv[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(cv[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(cv[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < cv.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(cv[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function opengn(){
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(gn[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(gn[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(gn[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(gn[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(gn[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(gn[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(gn[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < gn.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(gn[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function openpp(){
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(pp[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(pp[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(pp[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(pp[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(pp[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(pp[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(pp[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < pp.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(pp[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function openbn(){
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(bn[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(bn[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(bn[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(bn[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(bn[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(bn[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(bn[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "none";
    }
    for(let i = 0; i < bn.length; i++){
      for(let j = 0; j < sof.length; j++){
        if(bn[i].id === sof[j].id){
          sof[j].style.display = "block";
        }
      }
    }
  }
  function opensof(){
    for(let i = 0; i < sof.length; i++){
      sof[i].style.display = "block";
    }
    for(let i = 0; i < bd.length; i++){
      bd[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < bd.length; j++){
        if(sof[i].id === bd[j].id){
          bd[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < nlp.length; i++){
      nlp[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < nlp.length; j++){
        if(sof[i].id === nlp[j].id){
          nlp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < rs.length; i++){
      rs[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < rs.length; j++){
        if(sof[i].id === rs[j].id){
          rs[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < cv.length; i++){
      cv[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < cv.length; j++){
        if(sof[i].id === cv[j].id){
          cv[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < gn.length; i++){
      gn[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < gn.length; j++){
        if(sof[i].id === gn[j].id){
          gn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < pp.length; i++){
      pp[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < pp.length; j++){
        if(sof[i].id === pp[j].id){
          pp[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < bn.length; i++){
      bn[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < bn.length; j++){
        if(sof[i].id === bn[j].id){
          bn[j].style.display = "block";
        }
      }
    }
    for(let i = 0; i < ml.length; i++){
      ml[i].style.display = "none";
    }
    for(let i = 0; i < sof.length; i++){
      for(let j = 0; j < ml.length; j++){
        if(sof[i].id === ml[j].id){
          ml[j].style.display = "block";
        }
      }
    }
  }