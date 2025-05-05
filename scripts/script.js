// пошук
document.addEventListener('DOMContentLoaded', function() {

    const voteButtons = document.querySelectorAll('.vote-btn');
    
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Анімація
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            
            const counter = this.querySelector('.count');
            if (!counter) return;
            
        
            let currentValue = parseInt(counter.textContent);
            counter.textContent = currentValue + 1;
            
            // ефекти
            if (this.classList.contains('like-btn')) {
                this.style.backgroundColor = '#e8f5e9';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 1000);
            } else {
                this.style.backgroundColor = '#ffebee';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 1000);
            }
            
            const splash = document.createElement('span');
            splash.className = 'splash';
            splash.textContent = this.classList.contains('like-btn') ? '+1' : '-1';
            this.appendChild(splash);
            
            setTimeout(() => {
                splash.remove();
            }, 1000);
        });
    });
});