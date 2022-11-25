// 보그 PJ 갤러리 페이지 JS - gallery.js //

//////// 제이쿼리 코드블럭 //////////////////
$(()=>{
    console.log("로완!")

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 5, 
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
        },
        // Responsive breakpoints
        breakpoints: {
        // when window width is >= 200px
        200: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 700px
        700: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 1000px
        1000: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        }
        });

})