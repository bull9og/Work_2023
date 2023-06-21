$(document).ready(function() {
	$('#main').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 500,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'position': 'left',
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/150;
        let _h = window.innerHeight/150;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${100 - (_mouseX - _w) * 0.01}% ${100 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.05}% ${100 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax2");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/150;
        let _h = window.innerHeight/150;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${100 - (_mouseX - _w) * 0.01}% ${100 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.05}% ${100 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax3");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/150;
        let _h = window.innerHeight/150;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${100 - (_mouseX - _w) * 0.01}% ${100 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.05}% ${100 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax4");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/150;
        let _h = window.innerHeight/150;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${100 - (_mouseX - _w) * 0.01}% ${100 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.05}% ${100 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax5");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/150;
        let _h = window.innerHeight/150;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${100 - (_mouseX - _w) * 0.01}% ${100 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${100 - (_mouseX - _w) * 0.02}% ${100 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${100 - (_mouseX - _w) * 0.05}% ${100 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();