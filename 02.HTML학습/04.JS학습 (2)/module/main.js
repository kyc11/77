// 모듈 연습 메인 JS - main.js

// 로딩구역없이...=> script 태그에 defer 속성사용!

// 모듈화 JS파일 import하기!
import {mTitle as mTit,sTitle as sTit,personInfo,mv} from "./textData.js"
import {message as msg} from "./msgFormat.js";
import MovieInfo from "./mvinfo.js";
/************************************************* 
    import 형식:
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈화JS에서 export를 해줘야함!
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭 해야함!(없으면 안나옴)
    (/,./,../ 표시 필수)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http:// .....) Live Server로 열기때문에 볼 수 있음!

    [ import 시 변수명 변경하기 ]
    import {전달변수 as 변침} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유: 단순변경요구, 같은이름변수 피하기

*************************************************/

/* 
    [ 모듈화를 위한 구성 ]
    1. 데이터를 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js

*/


// 1. 타이틀출력박스
const tpart = document.querySelector(".tpart");
// 2. 내용출력박스
const demo = document.querySelector("#demo");

// 3. 제목넣기
tpart.innerHTML = `
    <h2>${mTit}</h2>
    <h3>${sTit}</h3>
`; 

// 4. 내용넣기
demo.innerHTML = msg("현석",40);
demo.innerHTML += msg("징크스",40);
demo.innerHTML += msg("트타",40);

// 다중 데이터(배열) 이용하기
personInfo.forEach((val)=>{
    demo.innerHTML += msg(val[0],val[4])
})

// 하나의 객체를 클래스로 부터 만들기
// 영화정보는 textData.js에서 mv변수에 배열로 담아서 가져옴!
// console.log(mv[0]);
// const mi1 = new MovieInfo()

// 영화정보 클래스를 이용하여 생성한 객체를 담는 배열변수
let mi = [];
mv.forEach((v,i)=>{
    mi[i] = new MovieInfo(
        mv[i][0],mv[i][1],mv[i][2],mv[i][3],mv[i][4])

        console.log(mi[i]);
}); ////////////// forEach //////////////////

// 객체수 만큼 for문 돌아서 출력하기
// 객체는 for in문

for(let z of mv){// z는 각 배열값 -> 

    for(let x in mi){
        let temp =""; // 임시변수*String형 초기화!
        // 스트림 빈값을 안넣으면 undefiend 값이 들어가서
        // += 사용시 첫번째 값으로 undefined가 찍힘!
        temp += "<ol>";
    
        temp += `<li> $[x] : ${mi[x]}`;
    
        temp += "</ol>";
    }
    
}
