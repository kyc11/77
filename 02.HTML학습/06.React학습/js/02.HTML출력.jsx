// HTML출력 JSX 

// 변수에 태그를 jsx문법으로 작성하여 할당한다!
// JSX는 최상위 부모가 하나여야한다!(기본XML문법과 동일!)
const myelement = (
    <div>
        <h1>나의 친구 리스트</h1>
        <tabel>
            <tr>
                <th>이름</th>
                <th>전화번호</th>
                <th>생일</th>
            </tr>
            <tr>
                <th>나야나</th>
                <th>7776 8787</th>
                <th>11.02</th>
            </tr>
            <tr>
                <th>너야너</th>
                <th>3334 3232</th>
                <th>11.08</th>
            </tr>
            <tr>
                <th>너야나</th>
                <th>3213 7957</th>
                <th>11.14</th>
            </tr>
        </tabel>
    </div>
);

// 화면출력
// ReactDOM.render(출력할요소,출력요소)
ReactDOM.render(myelement, document.getElementById("root"));