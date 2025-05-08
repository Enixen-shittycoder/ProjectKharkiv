document.addEventListener('DOMContentLoaded', function() {
    const districtsData = [
        {
            id: 1,
            name: "Київський район",
            description: "Центральний район міста з багатою історією та архітектурою.",
            image: "assets/39166.jpg",
            ideasCount: 3
        }
    ];

    const searchInput = document.getElementById('searchInput');
    const districtsContainer = document.getElementById('districtsContainer');


    function renderDistricts(districts) {
        districtsContainer.innerHTML = '';
        
        districts.forEach(district => {
            const districtCard = document.createElement('div');
            districtCard.className = 'district-card';
            districtCard.innerHTML = `
                <img src="${district.image}" alt="${district.name}">
                <div class="district-info">
                    <h3>${district.name}</h3>
                    <p>${district.description}</p>
                    <p>Ідей: ${district.ideasCount}</p>
                    <a href="${getDistrictPageUrl(district.id)}" class="view-btn">Детальніше</a>
                </div>
            `;
            districtsContainer.appendChild(districtCard);
        });
    }

    function getDistrictPageUrl(districtId) {
        switch(districtId) {
            case 1: return 'kyivsky.html';
            default: return '#';
        }
    }

    // search
    function searchDistricts(searchTerm) {
        const filtered = districtsData.filter(district => 
            district.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        if (filtered.length === 0) {
            districtsContainer.innerHTML = `
                <div class="no-results">
                    <p>Районів за запитом "${searchTerm}" не знайдено</p>
                </div>
            `;
        } else {
            renderDistricts(filtered);
        }
    }

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        
        if (searchTerm === '') {
            renderDistricts(districtsData); 
        } else {
            searchDistricts(searchTerm);
        }
    });

    // optimize
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    const optimizedSearch = debounce(searchDistricts);
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.trim();
        if (searchTerm) {
            optimizedSearch(searchTerm);
        } else {
            renderDistricts(districtsData);
        }
    });

    renderDistricts(districtsData);
});


document.addEventListener('DOMContentLoaded', function() {

    const voteButtons = document.querySelectorAll('.vote-btn');
    
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            
            const counter = this.querySelector('.count');
            if (!counter) return;
            
        
            let currentValue = parseInt(counter.textContent);
            counter.textContent = currentValue + 1;
            
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
// modal

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('ideaModal');
    const openBtn = document.getElementById('openIdeaModalBtn');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.querySelector('.idea-form');

    // Open
    openBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Close
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close2
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Дякуємо за вашу ідею! Вона буде розглянута модераторами.');
        
        closeModal();
        this.reset();
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

