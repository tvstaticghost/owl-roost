function renderTopOfPageArrow() {
    const upArrow = document.getElementById('up-arrow');
    const triggerDistance = 250;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > triggerDistance) {
            upArrow.style.display = 'block';
        }
        else {
            upArrow.style.display = 'none';
        }
    });
    
}

renderTopOfPageArrow();