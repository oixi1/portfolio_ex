$(function(){
    // 초기 설정 :  fullpage.js를 jQuery 플러그인으로 쓰기
    $('#full_p_menu').fullpage({
		//options here
        sectionsColor: ['#d9a7d5', '#6b7ff2', '#7e8ff2', '#a7b2f2', '#cac9f2', '#f2d541', '#000'],
        anchors: ['Home', 'About', 'Web', 'Mobile', 'Responsive', 'Gallery', 'Contact'],
		autoScrolling: true,
		scrollHorizontally: true,
        navigation: true,
        navigationPosition: screenLeft,
        afterLoad: function(anchorLink, index){
            console.log("현재 섹션 ː " + index);
            if(index==7){
                alert("현재 포트폴리오의 마지막 부분입니다.")
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("현재 슬라이드 번호 ː " + slideIndex );
        },

	});

        // 커버
        // 햄버거 버튼
        $('.m_btn').click(function(){
            $('.line').toggleClass('on');
            $('.menu_wrap').toggleClass('on');
            $('.cover').toggleClass('on');
        });



});