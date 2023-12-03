document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('fade-in');
});

document.getElementById('scrollTop').addEventListener('click', function() {
    const scrollStep = -window.scrollY / 40;
    const scrollInterval = setInterval(() => {
       if (window.scrollY !== 0) {
         window.scrollBy(0, scrollStep);
       } else {
         clearInterval(scrollInterval);
       }
    }, 10);
});