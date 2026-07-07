document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    observer.observe(document.querySelector('#about'));

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
            });
        });
    }

    // Skills tab switching
    document.querySelectorAll('.skills-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.tab;

            document.querySelectorAll('.skills-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.skills-panel').forEach(p => {
                p.classList.remove('active');
                // re-trigger animation
                p.style.animation = 'none';
            });

            this.classList.add('active');
            const panel = document.querySelector(`.skills-panel[data-panel="${target}"]`);
            if (panel) {
                panel.classList.add('active');
                panel.style.animation = '';
            }
        });
    });
});
