function LoadPost(url) {
    const article = document.querySelector('article');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            article.innerHTML = xhr.responseText;
        } else {
            article.innerHTML = '<p>Error loading content. Please try again.</p>';
        }
    };
    xhr.onerror = function() {
        article.innerHTML = '<p>Error loading content. Please check your connection.</p>';
    };
    xhr.send();
}

// Load content when the page loads
document.addEventListener('DOMContentLoaded', function() {
    LoadPost('sample.html');
});