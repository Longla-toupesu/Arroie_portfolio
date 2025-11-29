import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  image: string;
  tags: string[];
  platform: string;
  year: string;
  downloads?: string;
  devTime: string;
  teamSize: number;
  gallery: {path: string, imgName: string}[];
  features: string[];
  outcome: string;
  links?: {
    live?: string;
    github?: string;
    trailer?: string;
    store?: string;
  };
  awards?: string[];
  company?: string;
  genre: string;
  tryItNowLink?: string; // Main CTA link
  tryItNowLabel?: string; // Button label
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    // FEATURED PROJECT 1 - Circuit Chakula
    {
      id: 1,
      title: 'Circuit Chakula',
      description: 'Explore the futuristic Africa through the eyes of a night mechanic. A Visual Novel set in a vibrant, futuristic African metropolis blending technology and tradition.',
      fullDescription: 'In this world, technology and tradition blend seamlessly in a vibrant, futuristic African metropolis. Play as a night repairman working in the tallest commercial building (Kubwa Khulu), who is ever ready to listen to the customers: human, humanoid, hologram, and alien.',
      role: 'Game Designer, Game Mechanics and UI Programmer, Co-leader',
      image: 'assets/images/part_one/mikiyi/Circuit_Chakula/1.png',
      tags: ['Unity', 'C#', 'Visual Novel', 'Puzzle', 'UI Design'],
      platform: '2.5D',
      year: '2024',
      devTime: '8 months',
      teamSize: 5,
      company: 'Mikiyi Entertainment',
      genre: 'Visual Novel, Puzzle',
      tryItNowLink: 'https://mykiyi.itch.io/circuit-chakula',
      tryItNowLabel: 'PLAY DEMO',
      gallery: [
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/1.png', imgName: "Player Home"},
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/2.png', imgName: "Phone Menu"},
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/3.jpg', imgName: "Workshop 1"},
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/4.jpg', imgName: "WorkDay Complete"},
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/1.jpg', imgName: "Workshop 2"},
        {path: 'assets/images/part_one/mikiyi/Circuit_Chakula/2.jpg', imgName: "Connect Minigame"}
      ],
      features: [
        'Designed engaging puzzle mechanics integrated with visual novel storytelling',
        'Programmed game mechanics and UI systems for seamless player experience',
        'Co-led the development team, coordinating between art, narrative, and programming departments',
        'Implemented dialogue systems and character interactions for diverse NPCs (human, humanoid, hologram, and alien)',
        'Created intuitive UI for building navigation and customer interaction workflows'
      ],
      outcome: 'Circuit Chakula was nominated for the Africacomicade Game Awards and won a prize for innovation in African game development. The game received critical acclaim for its unique setting and engaging mechanics, showcasing the potential of Afrofuturist storytelling in games.',
      awards: ['Africacomicade Game Awards Nominee', 'Africacomicade Game Awards Prize Winner'],
      links: {
        trailer: 'https://youtube.com/watch?v=5B1ZyKj_DfI',
        live: 'https://mykiyi.itch.io/circuit-chakula'
      }
    },

    // FEATURED PROJECT 2 - Safari City
    {
      id: 2,
      title: 'Safari City',
      description: 'African Match 3 & City Builder game. Transform worn-down homes into stunning masterpieces across vibrant African cities.',
      fullDescription: 'As the hottest property architect, you have been tasked with transforming worn-down homes into stunning masterpieces across vibrant African cities. Combine match-3 puzzle gameplay with city building mechanics.',
      role: 'Level Designer, Gameplay Mechanics Designer, Supporting Team Lead, Remote Config Specialist',
      image: 'assets/images/part_one/maliyo/Safari_City/1.webp',
      tags: ['Unity', 'C#', 'Match-3', 'City Builder', 'Firebase', 'Level Design'],
      platform: '3D',
      year: '2023',
      downloads: '100,000+',
      devTime: '10 months',
      teamSize: 8,
      company: 'Maliyo Games',
      genre: 'Puzzle, Renovation Games',
      tryItNowLink: 'https://play.google.com/store/apps/details?id=com.maliyo.safaricity',
      tryItNowLabel: 'DOWNLOAD NOW',
      gallery: [
        {path: 'assets/images/part_one/maliyo/Safari_City/1.webp', imgName: 'Renovate Building'},
        {path: 'assets/images/part_one/maliyo/Safari_City/2.webp', imgName: 'Unlock Episodes'},
        {path: 'assets/images/part_one/maliyo/Safari_City/3.webp', imgName: 'Play Match 3'}
      ],
      features: [
        'Designed over 200 progressively challenging match-3 puzzle levels',
        'Implemented gameplay mechanics balancing puzzle difficulty with renovation progression',
        'Supported team lead in coordinating between design, art, and development teams',
        'Set up Firebase Remote Config for dynamic difficulty tuning and A/B testing',
        'Configured key game variables and metrics for live operations and player retention optimization',
        'Designed city building mechanics that reward players for puzzle completion'
      ],
      outcome: 'Safari City achieved over 100,000+ combined downloads on Google Play and App Store. The game successfully merged African cultural themes with popular casual game mechanics, reaching a broad audience and maintaining strong player retention through data-driven design iterations.',
      links: {
        store: 'https://play.google.com/store/apps/details?id=com.maliyo.safaricity'
      }
    },

    // FEATURED PROJECT 3 - Crazy Ludo
    {
      id: 3,
      title: 'Crazy Ludo',
      description: 'Play Ludo like never before! Power-ups, custom boards and thrilling fun. Classic ludo modernised with board hazards and stunning graphics.',
      fullDescription: 'Classic ludo modernised with board hazards, live tokens and stunning graphics. Experience the timeless board game with modern twists including power-ups, dynamic board hazards, and online multiplayer.',
      role: 'Project Manager, Gameplay Mechanics & Backend Programmer, Data Analyst',
      image: 'assets/images/part_one/maliyo/Crazy_Ludo/1.webp',
      tags: ['Unity', 'C#', 'Firebase', 'Firestore', 'Multiplayer', 'BigQuery', 'Analytics'],
      platform: '2D',
      year: '2022',
      downloads: '50,000+',
      devTime: '6 months',
      teamSize: 6,
      company: 'Maliyo Games',
      genre: 'Board Game',
      tryItNowLink: 'https://play.google.com/store/apps/details?id=com.maliyo.crazyludo',
      tryItNowLabel: 'DOWNLOAD NOW',
      gallery: [
        {path: 'assets/images/part_one/maliyo/Crazy_Ludo/1.webp', imgName: 'Choose Powerups'},
        {path: 'assets/images/part_one/maliyo/Crazy_Ludo/2.webp', imgName: 'Board & Hazards'},
        {path: 'assets/images/part_one/maliyo/Crazy_Ludo/3.webp', imgName: 'Board Skins'},
        {path: 'assets/images/part_one/maliyo/Crazy_Ludo/4.webp', imgName: 'Daily Rewards'},
        {path: 'assets/images/part_one/maliyo/Crazy_Ludo/5.webp', imgName: 'Friendly Contests'}
      ],
      features: [
        'Managed project timeline, milestones, and team coordination as Project Manager',
        'Programmed core gameplay mechanics including dice rolls, token movement, and power-up systems',
        'Implemented backend infrastructure using Firebase/Firestore for real-time multiplayer',
        'Developed matchmaking system and player progression tracking',
        'Set up data analytics pipeline using BigQuery and Google Analytics',
        'Created custom dashboards for monitoring player behavior, retention, and monetization metrics',
        'Designed and implemented board hazards and power-up mechanics that modernize classic Ludo gameplay'
      ],
      outcome: 'Crazy Ludo reached 50,000+ combined downloads across Google Play and App Store. The game successfully modernized a classic board game, achieving a 4.2+ star rating and strong player engagement metrics. Data-driven optimizations led to 35% improvement in player retention.',
      links: {
        store: 'https://play.google.com/store/apps/details?id=com.maliyo.crazyludo',
        trailer: 'https://www.youtube.com/watch?v=uCrvHduM9dA'
      }
    },

    // PROJECT 4 - Secret Letter
    {
      id: 4,
      title: 'Secret Letter',
      description: 'Unravel the mystery, one letter at a time, and solve captivating word puzzles. Every word is a clue and every puzzle hides a secret.',
      fullDescription: 'Step into the shadowy world of Secret Letter, where every word is a clue and every puzzle hides a secret waiting to be uncovered. Can you crack the code and solve the case before it\'s too late?',
      role: 'Gameplay Mechanics Designer, Game Designer',
      image: 'assets/images/part_one/maliyo/Secret_Letter/1.webp',
      tags: ['Unity', 'C#', 'Word Puzzle', 'Education', 'Game Design'],
      platform: '2D',
      year: '2023',
      devTime: '5 months',
      teamSize: 4,
      company: 'Maliyo Games',
      genre: 'Word Puzzle, Education/Vocabulary',
      tryItNowLink: 'https://play.google.com/store/apps/details?id=com.maliyo.secretletter',
      tryItNowLabel: 'DOWNLOAD NOW',
      gallery: [
        {path: 'assets/images/part_one/maliyo/Secret_Letter/1.webp', imgName: 'Global Leaderboards'},
        {path: 'assets/images/part_one/maliyo/Secret_Letter/2.webp', imgName: 'Level Complete'},
        {path: 'assets/images/part_one/maliyo/Secret_Letter/3.webp', imgName: 'Word Cases'},
        {path: 'assets/images/part_one/maliyo/Secret_Letter/4.webp', imgName: 'Gameplay'}
      ],
      features: [
        'Designed core gameplay mechanics combining word puzzles with mystery-solving narrative',
        'Created progressive difficulty curve with over 150 unique puzzle challenges',
        'Implemented hint system and clue mechanics to maintain player engagement',
        'Designed vocabulary-building features that make learning fun and engaging',
        'Balanced educational value with entertainment through iterative playtesting'
      ],
      outcome: 'Secret Letter was nominated for Best African Game of the Year App. The game received praise for successfully blending educational content with engaging gameplay, helping players expand their vocabulary while enjoying a compelling mystery narrative.',
      awards: ['Best African Game of the Year App Nominee'],
      links: {
        store: 'https://play.google.com/store/apps/details?id=com.maliyo.secretletter'
      }
    },

    // PROJECT 5 - Curtain Call Crusade
    {
      id: 5,
      title: 'Curtain Call Crusade',
      description: 'Engage in competitive flirty banter, create mishaps and hijinks, and uncover secrets in this funny romantic comedy otome game!',
      fullDescription: 'A romantic comedy visual novel featuring competitive flirty banter, relationship building, and LGBTQ+ representation. Navigate the world of theater, romance, and personal discovery in this engaging otome game.',
      role: 'Gameplay and UI/UX Programmer',
      image: 'assets/images/part_one/personal/Curtain_Call_Crusade/1.png',
      tags: ['Unity', 'C#', 'Visual Novel', 'UI/UX', 'LGBTQ+'],
      platform: '2D',
      year: '2023',
      devTime: '7 months',
      teamSize: 6,
      genre: 'Visual Novel, LGBT+, Otome Game',
      tryItNowLink: 'https://alienbluez.itch.io/curtain-call-crusade',
      tryItNowLabel: 'PLAY DEMO',
      gallery: [
        {path: 'assets/images/part_one/personal/Curtain_Call_Crusade/1.png', imgName: 'Splash Screen'},
        {path: 'assets/images/part_one/personal/Curtain_Call_Crusade/2.png', imgName: 'Gameplay 1'},
        {path: 'assets/images/part_one/personal/Curtain_Call_Crusade/3.png', imgName: 'Shooter Minigame'},
        {path: 'assets/images/part_one/personal/Curtain_Call_Crusade/4.png', imgName: 'Gameplay 2'},
        {path: 'assets/images/part_one/personal/Curtain_Call_Crusade/5.png', imgName: 'Game Menu'}
      ],
      features: [
        'Programmed gameplay systems for branching dialogue and relationship tracking',
        'Designed and implemented intuitive UI/UX for visual novel interactions',
        'Created dynamic dialogue choice system with relationship consequences',
        'Implemented save/load functionality and multiple ending pathways',
        'Optimized UI performance and responsiveness across different screen sizes',
        'Developed accessibility features for inclusive gameplay experience'
      ],
      outcome: 'Curtain Call Crusade received highly positive reviews and gained significant recognition during Pride Month for its authentic LGBTQ+ representation and engaging narrative. The game was praised for its inclusive storytelling and polished UI design.',
      links: {
        live: 'https://alienbluez.itch.io/curtain-call-crusade'
      }
    },

    // PROJECT 6 - Fantastic Shot, Sire!
    {
      id: 6,
      title: 'Fantastic Shot, Sire!',
      description: 'Help a recalcitrant king hit the perfect shot while blindfolded in this puzzle game. Top 10% Global GMTK Jam game 2022.',
      fullDescription: 'A physics-based puzzle game where players guide a blindfolded king to make the perfect shot. Created during the GMTK Game Jam 2022, focusing on creative problem-solving and unique mechanics.',
      role: 'Gameplay and UI/UX Implementation, Narrative Designer',
      image: 'assets/images/part_one/personal/Fantastic_Shot_Sire/1.png',
      tags: ['Unity', 'C#', 'Puzzle', 'Physics', 'Game Jam'],
      platform: '3D',
      year: '2022',
      devTime: '48 hours (Game Jam)',
      teamSize: 6,
      genre: 'Puzzle',
      tryItNowLink: 'https://itch.io/jam/gmtk-2022/rate/1623456',
      tryItNowLabel: 'PLAY ON ITCH.IO',
      gallery: [
        {path: 'assets/images/part_one/personal/Fantastic_Shot_Sire/1.png', imgName: 'Puzzle 1'},
        {path: 'assets/images/part_one/personal/Fantastic_Shot_Sire/2.png', imgName: 'Puzzle 2'}
      ],
      features: [
        'Implemented core physics-based shooting mechanics under tight 48-hour deadline',
        'Designed and coded intuitive UI/UX for player guidance and feedback',
        'Created narrative elements and humorous dialogue for the king character',
        'Programmed puzzle mechanics that challenge players to think creatively',
        'Optimized gameplay for smooth performance across different devices'
      ],
      outcome: 'Fantastic Shot, Sire! ranked in the Top 10% of Global GMTK Jam 2022 submissions, competing against thousands of entries. The game was praised for its innovative mechanics, polished execution, and humorous narrative despite the short development time.',
      awards: ['Top 10% Global GMTK Jam 2022'],
      links: {
        live: 'https://itch.io/jam/gmtk-2022/rate/1623456',
        trailer: 'https://www.youtube.com/watch?v=FantasticShotSire'
      }
    },

   /* // PROJECT 7 - Duel of Dishonor
    {
      id: 7,
      title: 'Duel of Dishonor',
      description: 'A turn-based RPG featuring strategic combat, character progression, and immersive voice acting.',
      fullDescription: 'Engage in tactical turn-based battles in a world of honor and betrayal. Duel of Dishonor combines strategic combat mechanics with rich storytelling and character development.',
      role: 'Game Mechanics and UI Programmer, Supporting Gameplay Designer, Voice Actor',
      image: 'assets/images/placeholders/duel-of-dishonor.jpg',
      tags: ['Unity', 'C#', 'Turn-Based', 'RPG', 'UI'],
      platform: '2D',
      year: '2021',
      devTime: '9 months',
      teamSize: 7,
      genre: 'Turn-based RPG',
      gallery: [],
      features: [
        'Programmed turn-based combat system with initiative, actions, and effects management',
        'Implemented character stats, equipment, and progression systems',
        'Designed and coded battle UI with clear feedback for player actions and enemy states',
        'Supported gameplay design through balancing combat mechanics and character abilities',
        'Provided voice acting for multiple characters, adding personality to the narrative',
        'Created animation state machines for smooth combat transitions'
      ],
      outcome: 'Duel of Dishonor delivered a polished turn-based combat experience with positive feedback on combat depth and character voice work. The game showcased strong technical implementation of RPG systems.',
      links: {}
    },

    // PROJECT 8 - Greed's Abyss
    {
      id: 8,
      title: "Greed's Abyss",
      description: 'An adventure game exploring themes of greed and consequence through challenging level design and intelligent AI.',
      fullDescription: 'Descend into the depths of Greed\'s Abyss, where your choices and actions have consequences. Navigate through carefully designed levels while facing AI opponents that adapt to your playstyle.',
      role: 'Level Designer, AI and UI Programmer',
      image: 'assets/images/placeholders/greeds-abyss.jpg',
      tags: ['Unity', 'C#', 'Adventure', 'AI', 'Level Design'],
      platform: '2D',
      year: '2021',
      devTime: '6 months',
      teamSize: 5,
      genre: 'Adventure',
      gallery: [],
      features: [
        'Designed multi-layered levels with environmental storytelling and strategic gameplay elements',
        'Implemented AI behavior systems for enemies with varying difficulty levels',
        'Programmed adaptive AI that responds to player tactics and actions',
        'Created intuitive UI systems for inventory, quests, and player progression',
        'Balanced level difficulty and pacing through iterative playtesting',
        'Designed puzzle elements integrated with level progression'
      ],
      outcome: 'Greed\'s Abyss demonstrated strong level design and AI programming skills, creating an engaging adventure experience with intelligent enemy behaviors and well-paced level progression.',
      links: {}
    },

    // PROJECT 9 - Banished
    {
      id: 9,
      title: 'Banished',
      description: 'A card-based puzzle game featuring strategic deck building and challenging puzzle mechanics.',
      fullDescription: 'Build your deck strategically and solve increasingly complex puzzles in Banished, a game that combines card game mechanics with puzzle-solving challenges.',
      role: 'Gameplay Mechanics Designer, Game Designer',
      image: 'assets/images/placeholders/banished.jpg',
      tags: ['Unity', 'C#', 'Card Game', 'Puzzle', 'Strategy'],
      platform: '2D',
      year: '2020',
      devTime: '4 months',
      teamSize: 3,
      genre: 'Card Game, Puzzle',
      gallery: [],
      features: [
        'Designed card-based puzzle mechanics combining strategy and problem-solving',
        'Created deck-building system with synergies and strategic depth',
        'Balanced card abilities and puzzle difficulty for engaging progression',
        'Designed over 100 unique puzzle challenges with varying complexity',
        'Implemented reward and progression systems to maintain player engagement',
        'Conducted extensive playtesting to refine puzzle difficulty curves'
      ],
      outcome: 'Banished successfully merged card game and puzzle mechanics into a cohesive experience, demonstrating strong understanding of both genres and creating a unique gameplay blend.',
      links: {}
    },

    // PROJECT 10 - Djogo Striker Legend
    {
      id: 10,
      title: 'Djogo Striker Legend',
      description: 'A sports puzzle game combining soccer mechanics with strategic puzzle-solving gameplay.',
      fullDescription: 'Master the field in Djogo Striker Legend, where soccer meets puzzle mechanics. Plan your moves strategically to score goals and overcome increasingly challenging puzzles.',
      role: 'Gameplay and UI Programmer',
      image: 'assets/images/placeholders/djogo-striker.jpg',
      tags: ['Unity', 'C#', 'Sports', 'Puzzle', 'UI'],
      platform: '2D',
      year: '2020',
      devTime: '5 months',
      teamSize: 4,
      genre: 'Sports, Puzzle',
      gallery: [],
      features: [
        'Programmed soccer-based puzzle mechanics with physics-based ball movement',
        'Implemented intuitive touch controls for aiming and shooting',
        'Designed and coded comprehensive UI for menus, gameplay, and progression',
        'Created visual feedback systems for successful moves and combinations',
        'Optimized performance for smooth gameplay on mobile devices',
        'Implemented star rating system based on puzzle completion efficiency'
      ],
      outcome: 'Djogo Striker Legend delivered a unique blend of sports and puzzle gameplay, with polished UI and responsive controls that made the game accessible and enjoyable for casual players.',
      links: {}
    }*/
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getFeaturedProjects(limit: number = 3): Observable<Project[]> {
    return of(this.projects.slice(0, limit));
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return of(this.projects.find(project => project.id === id));
  }

  getProjectsByPlatform(platform: string): Observable<Project[]> {
    if (platform === 'All') {
      return of(this.projects);
    }
    return of(this.projects.filter(project => project.platform === platform));
  }

  getProjectsByTag(tag: string): Observable<Project[]> {
    return of(this.projects.filter(project => 
      project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
    ));
  }

  getProjectsByCompany(company: string): Observable<Project[]> {
    return of(this.projects.filter(project => project.company === company));
  }
}
