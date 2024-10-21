import React, { useEffect } from 'react'; // Hanya perlu satu import React

const games = [
  {
    title: 'EverClimb',
    description: 'A challenging sky-high adventure to restore a radio tower by collecting hidden items.',
    image: '/assets/everclimb-game.jpg',
    link: 'https://play.google.com/store/apps/dev?id=5092912438519800133',
  },
  {
    title: 'SackRace',
    description: 'Traditional Indonesian sack race game where players hop in sacks and race to the finish line.',
    image: '/assets/sackrace-game.jpg',
    link: 'https://play.google.com/store/apps/dev?id=5092912438519800133',
  },
  {
    title: 'Masterchef-eggtopia',
    description: 'Control an egg-shaped character to run a fast-food restaurant and complete quests.',
    image: '/assets/masterchef-eggtopia.jpg',
    link: 'https://play.google.com/store/apps/dev?id=5092912438519800133',
  },
  {
    title: 'Sanekala',
    description: 'A horror adventure game where a lost child tries to find their way home.',
    image: '/assets/sanekala.jpg',
    link: 'https://play.google.com/store/apps/dev?id=5092912438519800133',
  },
];

const GamesSection = () => {
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    slideInElements.forEach((el) => observer.observe(el));

    // Cleanup observer saat komponen unmount
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="games" className="games slide-in">
      <h2>Our Games</h2>
      <div className="game-cards">
        {games.map((game, index) => (
          <div className="game-card" key={index}>
            <img src={game.image} alt={game.title} className="game-img" />
            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <a href={game.link}>
              <button className="button-70" role="button">Install</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
