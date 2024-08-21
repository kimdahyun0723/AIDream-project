// 결과 데이터 예시
const data = [
  { title: '한국에너지공단', description: '2024년도 1차 전력정보화 및 정책지원사업(신재생에너지 분야) 신규지원 대상과제 공고', link: 'https://itech.keit.re.kr/index.do#detail|02010400|/bsnsancm/retrieveSprtBsnsAncmDetailNoKeit.do|.sub_con|excrOrgnId=&bsnsTpSe=&orderBySe=default&orderBySeSelIdx=&ancmYy=2024&searchRcveStat=&searchCdtn=&searchKeyword=&pageIndex=2&ancmId=A00618&' },
  { title: '삼성미래기술육성공단', description: '‘삼성미래기술육성사업’은 대한민국의 기초과학 발전과 산업기술 혁신, 과학기술로 사회가 직면한 문제 해결, 그리고 세계적인 과학기술인 육성을 목표로, 삼성전자가 2013년부터 1조 5천억 원을 출연하여 시행하고 있는 순수 공익 목적의 과학기술 연구지원 사업입니다.', link: 'https://www.samsungstf.org/ssrfPr/main/main.do' },
  { title: '네이버 D2', description: '네이버의 개발자 지원 플랫폼으로 AI 관련 교육 및 워크숍을 진행합니다.', link: 'https://www.kakaoenterprise.com/' },
  { title: '카카오 엔터프라이즈', description: '카카오의 자회사로, AI 및 데이터 분석, 클라우드 서비스 관련 교육을 제공합니다.', link: 'https://www.kakaoenterprise.com/' },
  { title: '삼성 SDS', description: '삼성 그룹의 IT 서비스 기업으로, AI, 빅데이터, 클라우드 등 다양한 IT 교육을 제공합니다.', link: 'https://www.samsungsds.com/' },
  { title: 'LG CNS', description: 'LG 그룹의 IT 서비스 회사로 AI 및 데이터 분석 관련 교육을 제공합니다.', link: 'https://www.lgcns.com/' },
  { title: 'SK C&C', description: 'SK 그룹의 IT 서비스 기업으로, AI와 데이터 관련 교육을 제공합니다.', link: 'https://www.skc.co.kr/' },
  { title: '퓨처로봇', description: '로봇 및 AI 솔루션을 제공하며 관련 교육과 연구개발도 진행합니다.', link: 'http://www.futurerobot.co.kr/' },
  { title: '인공지능 연구개발원(AI R&D Center)', description: '인공지능 연구와 개발을 전문으로 하며 교육 프로그램도 제공합니다.', link: 'https://www.aimatrix.co.kr/' },
  { title: '엘지유플러스(LG Uplus)', description: 'LG 그룹의 통신사로 AI와 빅데이터 관련 교육 및 연구개발 지원을 합니다.', link: 'https://www.uplus.co.kr/' },
  { title: '오픈AI 코리아', description: 'OpenAI의 한국 지사로, AI 연구 및 교육 관련 프로그램을 운영합니다.', link: 'https://www.openai.com/' },
  { title: '넥슨 코리아', description: '게임 개발 회사로 AI 기술 및 데이터 분석 관련 교육을 진행합니다.', link: 'http://www.nexon.com/' },
  { title: '코리아IT아카데미', description: 'IT 및 AI 전문 교육을 제공하는 아카데미입니다.', link: 'http://www.koreaitacademy.co.kr/' },
  { title: '에듀캐스트', description: '온라인 교육 플랫폼으로, AI 관련 다양한 강좌를 제공합니다.', link: 'https://educast.pro/' },
  { title: '이노베이션 아카데미', description: '혁신적인 기술 교육을 제공하며, AI와 데이터 분석 관련 프로그램도 포함되어 있습니다.', link: 'https://innovationacademy.co.kr/' },
  { title: '다나와', description: 'IT 전문 기업으로 AI와 데이터 분석 관련 교육을 제공합니다.', link: 'https://www.danawa.com/' },
  { title: '아이디어 뱅크', description: 'AI 및 기술 교육을 전문으로 하는 기업입니다.', link: 'http://www.ideabank.co.kr/' },
  { title: '티맥스', description: 'IT 솔루션 기업으로, AI 및 데이터 관련 교육 프로그램을 운영합니다.', link: 'https://www Tmax.com/' },
  { title: '넷마블', description: '게임 회사로, AI와 데이터 분석 관련 교육을 제공합니다.', link: 'http://www.netmarble.com/' },
  { title: 'K-디지털 캠퍼스', description: '디지털 및 AI 교육을 제공하는 캠퍼스입니다.', link: 'https://www.kdigitalcampus.com/' },
  { title: '비트컴퓨터', description: 'IT 및 AI 관련 교육을 전문으로 하는 기업입니다.', link: 'http://www.bitcomputer.co.kr/' },
  { title: '시그마 디자인', description: '디자인 및 AI 교육을 전문으로 하는 기업입니다.', link: 'http://www.sigmad.co.kr/' },
  { title: '시스템 인터내셔널', description: 'AI 및 데이터 분석 관련 교육을 제공하는 회사입니다.', link: 'http://www.systemintl.co.kr/' },
  { title: '제너럴일렉트릭(GE) 코리아', description: 'GE의 한국 지사로, AI와 빅데이터 관련 교육을 제공합니다.', link: 'https://www.ge.com/' },
  { title: '엑스퍼트 시스템즈', description: 'AI 기술 및 관련 교육을 전문으로 하는 기업입니다.', link: 'http://www.expertsystems.co.kr/' },
  { title: '프라운호퍼 연구소', description: '독일 프라운호퍼 연구소의 한국 지사로, AI와 기술 관련 교육을 제공합니다.', link: 'https://www.fraunhofer.org/' },
];

// 페이지 로드 시 모든 데이터 카드 표시
window.onload = () => {
  displayResults(data);
};

// 검색 버튼 클릭 시 이벤트 처리
document.getElementById('searchButton').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = data.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
  displayResults(results);
});

// 검색 결과를 화면에 표시하는 함수
function displayResults(results) {
  const container = document.getElementById('rndContainer');
  container.innerHTML = ''; // 기존 결과 제거

  if (results.length === 0) {
      container.innerHTML = '<p>검색 결과가 없습니다.</p>';
      return;
  }

  results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `
          <h2>${result.title}</h2>
          <p>${result.description}</p>
          <a href="${result.link}" target="_blank">더보기</a>
      `;
      container.appendChild(resultElement);
  });
}
