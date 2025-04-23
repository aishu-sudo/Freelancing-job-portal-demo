// hirefreelancer.js

export function loadHireTab() {
    document.addEventListener('DOMContentLoaded', function() {
        const options = document.querySelectorAll('.option');
        const contentSections = document.querySelectorAll('.content-section');

        if (options.length && contentSections.length) {
            options.forEach(option => {
                option.addEventListener('click', function() {
                    options.forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');

                    const target = this.dataset.target;
                    contentSections.forEach(section => section.classList.remove('active'));
                    const activeSection = document.querySelector(`.${target}-section`);
                    if (activeSection) activeSection.classList.add('active');
                });
            });

            const defaultOption = document.querySelector('.option[data-target="skills"]');
            if (defaultOption) defaultOption.classList.add('active');
        }
    });
}