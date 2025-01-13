var typed = new Typed('#text',{
    strings: ['Musician', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 30,
});

// skill select

const tabs = document.querySelectorAll(".tab");
const skillsContainer = document.querySelectorAll(".skills-container > div");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');

        const target = tab.getAttribute('data-target');
        skillsContainer.forEach(skill => {
            skill.classList.add('active');
            if (skill.classList.contains(target)) {
                skill.classList.remove('active');
            }
        })
    })
});

