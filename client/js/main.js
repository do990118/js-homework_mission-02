/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

// getNode로 원하는 요소를 변수로 받기
const navigation = getNode(".nav");
const innerNavigation = getNode("ul");
const visualImg = getNode(".visual img");
const body = getNode("body");
const h1 = getNode(".nickName");

// 배경색 바꾸기 위한 캐릭터 이름 배열 생성
const character = ["ember", "wade", "clod", "gale"];

// data.js에서 불러온 자료(배열)
const characterInfo = data;

// handleSlide 함수
function handleSlide(e) {
  e.preventDefault();

  // 변수 선언
  const target = e.target.closest("li");
  const button = e.target.closest("button");
  const index = target.dataset.index;
  const characterColor = data[index - 1].color;
  const characterName = data[index - 1].name;

  if (!target | !button) return;

  // 배경색 바꾸기
  document.body.style.background = `linear-gradient(to bottom, ${characterColor[0]}, ${characterColor[1]})`;

  // visual 이미지 바꾸기
  attr(visualImg, "src", `./assets/${character[index - 1]}.jpeg`);
  attr(visualImg, characterInfo[index - 1].alt);

  // h1(nickname) 바꾸기
  h1.textContent = `${characterName}`;

  // is-active
  const list = [...innerNavigation.children];

  list.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");
}

// 오디오 재생
function handleAudio(e) {
  const target = e.target.closest("li");
  const index = target.dataset.index;
  const playAudio = new AudioPlayer(
    `./assets/audio/${character[index - 1]}.m4a`
  );
  playAudio.play();
}

navigation.addEventListener("click", handleSlide);

navigation.addEventListener("click", handleAudio);

// navigation.addEventListener("click", setBgColor);
