document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('.star');

  stars.forEach(star => {
      star.addEventListener('click', function() {
          const rating = this.dataset.value;
          const parent = this.parentElement;

          parent.dataset.rating = rating;

          // 모든 별들의 선택 상태 초기화
          const allStars = parent.querySelectorAll('.star');
          allStars.forEach(s => {
              s.classList.remove('selected');
          });

          // 선택한 별과 그 이전 별들 모두 선택 상태로 변경
          this.classList.add('selected');
          let previousSibling = this.previousElementSibling;
          while(previousSibling) {
              previousSibling.classList.add('selected');
              previousSibling = previousSibling.previousElementSibling;
          }
      });
  });
});