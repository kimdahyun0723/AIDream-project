function id_search() { 
  var frm = document.idfindscreen;

  if (frm.member_name.value.length < 1) {
   alert("이름을 입력해주세요");
   return;
  }

  if (frm.member_phone.value.length != 13) {
     alert("핸드폰번호를 정확하게 입력해주세요");
     return;
  }

frm.method = "post";
frm.action = "findIdResult.jsp"; //넘어간화면
frm.submit();  
}

/*id_search라는 함수를 생성
- 이름의 value길이가 1보다 작을 때 = 아무것도 입력이 안됐을 경우는 이름을 입력하라는 alert가 뜨고 rerutn되도록
- 핸드폰번호가 13자리가 아니라면 확인창이 뜨고 return되도록
- findIdResult.jsp로 넘어가도록 action을 주고 submit */