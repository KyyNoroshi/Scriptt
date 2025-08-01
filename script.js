document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scriptBtn').addEventListener('click', function() {
        const newWindow = window.open('scripts.html', '_blank');
    });
    
    document.getElementById('contactBtn').addEventListener('click', function() {
        window.open('https://wa.me/6283872294693', '_blank');
    });
    
    const modal = document.getElementById('infoModal');
    const infoBtn = document.getElementById('infoBtn');
    const span = document.getElementsByClassName('close')[0];
    
    infoBtn.onclick = function() {
        modal.style.display = 'block';
    }
    
    span.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    setInterval(function() {
        const stars = document.querySelectorAll('#stars:after, #stars2:after, #stars3:after');
        stars.forEach(star => {
            const opacity = Math.random() * 0.5 + 0.5;
            star.style.opacity = opacity;
        });
    }, 1000);
});