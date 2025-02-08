document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Animasyon hızı

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const updateCounter = (counter) => {
                    const target = +counter.getAttribute('data-target');
                    let count = +counter.innerText;
                    const increment = target / speed;

                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count); 
                        setTimeout(() => updateCounter(counter), 30);
                    } else {
                        counter.innerText = target; 
                    }
                };
                
                counters.forEach(counter => updateCounter(counter));
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter)); 
});
