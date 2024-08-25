  // 모든 지역의 교육 정보 숨기기
  function hideAll() {
    const regions = document.querySelectorAll('.edu');
    regions.forEach(region => {
      region.style.display = 'none';
    });
  }

  // 선택된 지역만 보여주기
  function showRegion(regionClass) {
    hideAll();
    const selectedRegions = document.querySelectorAll(`.${regionClass}`);
    selectedRegions.forEach(region => {
      region.style.display = 'block';
    });
  }

  // 전체 보기 (모든 지역 보이기)
  function opentotal() {
    const regions = document.querySelectorAll('.edu');
    regions.forEach(region => {
      region.style.display = 'block';
    });
  }

  // 서울 지역 보기
  function openseoul() {
    showRegion('seouledu');
  }

  // 인천 지역 보기
  function openincheon() {
    showRegion('incheonedu');
  }

  // 경기 지역 보기
  function opengyeonggi() {
    showRegion('gyeonggiedu');
  }

  // 페이지 로드 시 전체 보기 활성화
  document.addEventListener('DOMContentLoaded', () => {
    opentotal();
  });
