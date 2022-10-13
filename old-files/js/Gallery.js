                // Lazy Load Images
// Lazy Load Function From MDN Progressive Loading Page

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


// The Intersection Observer 
// Function from MDN Progressive Loading Page
if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Visits on this page 
var n = localStorage.getItem('onLoadCounter');
if (n === null) {
    n = 0;
}
n++

localStorage.setItem("on_load_counter", n);
nums = n.toString().split('').map(Number);
document.getElementById('countervisitor').innerHTML = '';
for (var i of nums) {
    document.getElementById('countervisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}