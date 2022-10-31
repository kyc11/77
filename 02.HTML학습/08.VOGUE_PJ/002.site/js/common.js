// 보그PJ 공통JS - common.js

$(()=>{
    console.log("로딩완료!");

    // 스크롤 이벤트 구역
    // 이벤트명 : scroll
    // 이벤트 대상: window
    // 변경대상: #top
    const topA = $("#top");
    // 스크롤위치변수 
    let scTop;
    // 마지막 스크롤위치값
    let lSc = 0;

    $(window).scroll(function(){
        // 스크롤 위치값(this는 window)
        scTop = $(this).scrollTop();
        // scrollTop() 메서드
        // - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스on적용
        // 기준위치는 스크롤위치 100px이상
        if(scTop >= 100){ // 100px이상
            topA.addClass("on up");
            // addClass(클래스명) - 클래스넣기

            // 스크롤 방향에 따라 .up추가/제거
            // if(scTop > lSc){ // 스크롤 아랫방향
            //     topA.removeClass(".up");
            // }
            // else{
            //     topA.addClass(".up");
            // }
            // 마지막위치 업데이트 필수!
            lSc = scTop
    

        }//// if ////
        else{ // 100px 미만
            topA.removeClass("on up");
            // removeClass(클래스명) - 클래스지우기
        }

        // 스크롤 방향 알아내기
        // if(scTop > lSc){
        //     console.log("아랫방향!");
        // }
        // else{
        //     console.log("윗방향!");
        // }
        // 마지막위치 업데이트 필수!
        lSc = scTop

    });
}); //////////////