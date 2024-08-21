//라디오버튼 필터
const edu = document.querySelectorAll(".edu");
const seoul = document.querySelectorAll(".seoul");
const incheon = document.querySelectorAll(".incheon");
const gyeonggi = document.querySelectorAll(".gyeonggi");
function opentotal(){
  for(let i = 0; i < edu.length; i++){
    edu[i].style.display = "block"
  }
}
function openseoul(){
  for(let i = 0; i < edu.length; i++){
    edu[i].style.display = "none"
  }
  for(let i = 0; i < seoul.length; i++){
    seoul[i].style.display = "block";
  }
}
function openincheon(){
  for(let i = 0; i < edu.length; i++){
    edu[i].style.display = "none"
  }
  for(let i = 0; i < incheon.length; i++){
    incheon[i].style.display = "block";
  }
}
function opengyeonggi(){
  for(let i = 0; i < edu.length; i++){
    edu[i].style.display = "none"
  }
  for(let i = 0; i < gyeonggi.length; i++){
    gyeonggi[i].style.display = "block";
  }
}