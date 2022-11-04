//1. 데이터를 처리하기 위한 JS-> textData.js

// 2. 구체적인 데이터 구성처리를 위한 JS -> msgFormat.js

// 1. 중제목 데이터
const mTitle = "모듈을 우용헌 규횬";

// 2. 소제목 데이터
const sTitle = "이것은 리액트의 기초입니다!"

// 3. 사람 데이터
const personInfo = [
    ["준현",23],["정희",33],["성혁",45],["아아",22]
];// 배열

// 다중변수 전송
export {mTitle,sTitle,personInfo};

/* 
    export 형식:
    1. export {변수,변수,변수};
    -> 여러개의 변수를 내보낼 경우 사용
    2. export default 변수;
    -> 단일한 변수를 내보낼때 사용
    -> default 단 하나의 변수만 내보내는 형식을 제한
*/