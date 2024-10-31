document.getElementById('subscribeBtn').onclick = function() {
    document.getElementById('newsletterPopup').style.display = 'flex';
};

document.querySelector('.close-btn').onclick = function() {
    document.getElementById('newsletterPopup').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('newsletterPopup')) {
        document.getElementById('newsletterPopup').style.display = 'none';
    }
};
