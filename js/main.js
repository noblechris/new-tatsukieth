document.addEventListener('DOMContentLoaded', () => {

    // --- Music Player (Howler.js) ---
    const musicToggle = document.getElementById('music-toggle');
    const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    const muteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v-2a3 3 0 0 0-3-3l-2 2"></path></svg>`;

    // IMPORTANT: User must replace this with a real audio file path.
    const sound = new Howl({
        src: ['assets/audio/placeholder-track.mp3'], // Replace with actual audio file
        loop: true,
        volume: 0.5,
        html5: true, // Helps with cross-browser compatibility
        onplayerror: function() {
            sound.once('unlock', function() {
              sound.play();
            });
        }
    });

    musicToggle.addEventListener('click', () => {
        if (sound.playing()) {
            sound.pause();
            musicToggle.innerHTML = playIcon;
            musicToggle.classList.remove('playing');
        } else {
            sound.play();
            musicToggle.innerHTML = muteIcon;
            musicToggle.classList.add('playing');
        }
    });


    // --- Animations (GSAP) ---
    gsap.registerPlugin(ScrollTrigger);

    // General page load animations
    gsap.from('.logo', { duration: 1, x: -100, opacity: 0, ease: 'power3.out' });
    gsap.from('nav ul li', { duration: 0.8, y: -50, opacity: 0, stagger: 0.2, delay: 0.5, ease: 'power3.out' });

    // Home Page Animations
    if (document.querySelector('.hero')) {
        gsap.from('.hero-text h1', { duration: 1, y: 50, opacity: 0, delay: 1, ease: 'power3.out' });
        gsap.from('.hero-text p', { duration: 1, y: 50, opacity: 0, delay: 1.3, ease: 'power3.out' });

        gsap.from('.gallery-grid img', {
            scrollTrigger: {
                trigger: '.nft-gallery',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 1,
            scale: 0.5,
            opacity: 0,
            rotation: () => Math.random() * 90 - 45, // Chaotic rotation
            stagger: 0.15,
            ease: 'elastic.out(1, 0.75)'
        });

        gsap.from('.roadmap', {
             scrollTrigger: {
                trigger: '.roadmap',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out'
        });
    }

    // About Page Animations
    if(document.querySelector('.about-content')) {
        gsap.from('.about-content p', {
            duration: 1,
            x: -100,
            opacity: 0,
            stagger: 0.3,
            ease: 'power3.out'
        });
    }

    // Meme Maker Animations
    if(document.querySelector('.meme-maker-container')) {
        gsap.from('.meme-controls', { duration: 1, x: -200, opacity: 0, ease: 'power3.out' });
        gsap.from('.canvas-container', { duration: 1, x: 200, opacity: 0, delay: 0.3, ease: 'power3.out' });
    }
});
