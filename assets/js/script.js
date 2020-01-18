/*
 * File: script.js
 * Created: 12/18/2019
 * Author: John Devine
 * Description: JavaScript file for personal site of Olga Devine
 * Last Updated: {{ site.time | date: "%m/%d/%Y" }}
 */
window.onload = function () {
    // Initialize slick.js
    $('.portfolio-slider').slick({
        dots: true,
        autoplay: true
    });
    // Make visable the back-to-top button when page is scrolled
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('.back-to-top').addClass('visible');
        } else {
            $('.back-to-top').removeClass('visible');
        }
    });
}
