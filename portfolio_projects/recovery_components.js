// Load components for project pages
fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
        // Fix image paths after footer loads
        const footerImages = document.querySelectorAll('.footer img');
        footerImages.forEach(img => {
            const src = img.getAttribute('src');
            if (src && src.startsWith('images/')) {
                img.setAttribute('src', '/' + src);
            }
        });
    })
    .catch(error => console.error('Error loading footer:', error));
