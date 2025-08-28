import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'nemishgorasiya@gmail.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/NemishGorasiya' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/nemish-gorasiya' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Supabase',
            icon: '/logo/supabase.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Gitlab',
            icon: '/logo/gitlab.svg',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'YouTube Clone',
        slug: 'youtube-clone',
        liveUrl: 'https://clone-youtube-reactjs.netlify.app/',
        year: 2024,
        description: `
    A fully functional YouTube clone that replicates the core features of YouTube including video playback, search, channel browsing, and more. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔍 Video Search: Real-time search using YouTube Data API v3</li>
      <li>📺 Video Playback: Embedded player with full-screen and resolution controls</li>
      <li>👤 Channel View: View channel details, video listings, and subscribe option</li>
      <li>🌐 Google OAuth: Secure login using Google account</li>
      <li>📱 Responsive UI: Optimized layout for mobile, tablet, and desktop</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Integrated YouTube Data API v3 for fetching real-time video data</li>
      <li>Used Google OAuth for user authentication and secure access</li>
      <li>Built the entire UI using Material UI (MUI) with dark/light theme toggle</li>
      <li>Implemented routing and nested layouts with React Router</li>
    </ul>
  `,
        role: `
  Frontend Developer <br/>
  Built the application from scratch, focusing on seamless user experience and real-time data rendering:
  <ul>
    <li>🎨 UI/UX: Designed with MUI for a polished and consistent interface</li>
    <li>📡 API Integration: Consumed YouTube API endpoints with Axios</li>
    <li>🔐 Auth: Set up Google OAuth for user login and access control</li>
    <li>📦 State Management: Used React Context API and hooks for state handling</li>
    <li>🚀 Deployment: Hosted on Vercel with continuous integration setup</li>
  </ul>
`,
        techStack: [
            'React.js',
            'Material UI (MUI)',
            'YouTube Data API v3',
            'Google OAuth',
            'Axios',
            'React Router',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/yt-clone.png',
        longThumbnail: '/projects/long/yt-clone.png',
        images: [
            '/projects/images/yt-clone-1.png',
            '/projects/images/yt-clone-2.png',
            '/projects/images/yt-clone-3.png',
        ],
    },
    {
        title: 'Netflix Clone',
        slug: 'netflix-clone',
        liveUrl: 'https://netflix-react-clone.onrender.com/',
        year: 2024,
        description: `
    A feature-rich Netflix-inspired web application that offers a personalized and seamless streaming experience. Powered by TMDB API for real-time movie data and optimized for user engagement.<br/><br/>
    
    Key Features:<br/>
    <ul>
      <li>🔐 Authentication: User sign-up/login with secure session handling</li>
      <li>❤️ Wishlist: Add movies to personal favorites list</li>
      <li>👍 Liked Videos: Keep track of user likes for tailored content</li>
      <li>⭐ Movie Rating: Rate movies and persist user preferences</li>
      <li>🔎 Category-Based Search: Find movies by genres and keywords</li>
      <li>📱 Fully Responsive: Smooth UI across mobile, tablet, and desktop</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Fetched and rendered dynamic data from TMDB API</li>
      <li>Built modular and reusable React components</li>
      <li>Styled using SCSS for a polished, scalable UI design</li>
      <li>Managed user state and data flow efficiently with React hooks</li>
    </ul>
  `,
        role: `
    Full-Stack Developer<br/>
    Handled development across all layers of the application:<br/>
    <ul>
      <li>🛠️ Frontend: Developed UI with ReactJS and SCSS, ensuring visual consistency</li>
      <li>🔐 Auth: Integrated secure authentication flow</li>
      <li>🎯 User Experience: Implemented wishlist, likes, and movie rating functionality</li>
      <li>🧠 State Logic: Managed client-side state using React hooks</li>
      <li>🗂️ API Integration: Used TMDB API to fetch real-time data</li>
      <li>🚀 Deployment: Deployed on Vercel for fast, global access</li>
    </ul>
  `,
        techStack: ['ReactJS', 'TMDB API', 'SCSS', 'Vercel'],
        thumbnail: '/projects/thumbnail/netflix-clone.png',
        longThumbnail: '/projects/long/netflix-clone.png',
        images: ['/projects/long/netflix-clone.png'],
    },
    {
        title: 'College Management System',
        slug: 'college-management-system',
        liveUrl: 'https://college-management.onrender.com/',
        year: 2024,
        description: `
        A robust web-based platform designed to streamline college operations across different user roles — Admin, Faculty, and Students. This system handles the entire lifecycle of academic and administrative tasks from event creation to result distribution.<br/><br/>

        Key Features:<br/>
        <ul>
          <li>👥 Role-Based Access: Distinct dashboards and permissions for Admin, Faculty, and Students</li>
          <li>📅 Event & Exam Management: Create, update, and view college events and exam schedules</li>
          <li>📝 Assignments & Attendance: Faculty can upload assignments and mark attendance</li>
          <li>📊 Results & Reports: Automated results upload and individual performance view for students</li>
          <li>📰 News Bulletin: Institution-wide announcements and updates</li>
          <li>📁 Cloud Media Uploads: Assignments and files uploaded via Cloudinary</li>
        </ul><br/>

        Technical Highlights:
        <ul>
          <li>Structured scalable RESTful APIs with Node.js for backend services</li>
          <li>Built dynamic ReactJS frontend with SCSS and MUI for sleek UI/UX</li>
          <li>Used Redis server for session caching and performance optimization</li>
          <li>Integrated Cloudinary for media handling and storage</li>
        </ul>
      `,
        role: `
        Full-Stack Developer<br/>
        Led the design and development of the complete system:<br/>
        <ul>
          <li>🛠️ Backend: Developed REST APIs with Node.js and Express for CRUD operations</li>
          <li>🔐 Auth & Access: Implemented secure login and role-based routing</li>
          <li>🎨 Frontend: Created responsive UI using ReactJS, SCSS, and Material UI</li>
          <li>📦 Media Integration: Used Cloudinary for file uploads</li>
          <li>⚡ Caching: Used Redis for session/token management and data caching</li>
          <li>🚀 Deployment: Deployed frontend and backend for real-time access</li>
        </ul>
      `,
        techStack: [
            'ReactJS',
            'Node.js',
            'Express',
            'SCSS',
            'Material UI',
            'Cloudinary',
            'Redis',
            'REST APIs',
            'Vercel',
        ],
        thumbnail: '/projects/images/college-management-system-1.png', // Replace with your actual image path
        longThumbnail: '/projects/images/college-management-system-2.png',
        images: [
            '/projects/images/college-management-system-1.png',
            '/projects/images/college-management-system-2.png',
        ],
    },
    {
        title: 'Two Good Co. Clone',
        slug: 'two-good-co-clone',
        liveUrl: 'https://gorasiyanemish.github.io/Two_Good_Clone/',
        year: 2023,
        description: `
    A visually rich and animation-heavy clone of the Two Good Co. website, crafted to mimic the brand’s unique aesthetic and immersive scrolling experience. Designed to demonstrate advanced animation and front-end craftsmanship.<br/><br/>

    Key Features:<br/>
    <ul>
      <li>🌀 Smooth Scrolling: Powered by Locomotive Scroll for parallax and inertia effects</li>
      <li>🎞️ Scroll-Based Animations: Elements animate seamlessly as user scrolls</li>
      <li>🌐 Pixel-Perfect Layout: Closely mirrors original brand’s design system</li>
      <li>📱 Responsive Design: Adaptive experience across all screen sizes</li>
      <li>🎨 Custom Interactions: Subtle hover and scroll-triggered effects enhance engagement</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Implemented Locomotive.js for buttery-smooth scroll and reveal animations</li>
      <li>Built entirely with semantic HTML and custom CSS</li>
      <li>Optimized performance to maintain smooth transitions even on low-end devices</li>
    </ul>
  `,
        role: `
    Frontend Developer<br/>
    Recreated the entire user interface and experience:<br/>
    <ul>
      <li>🖌️ Layout & Styling: Developed static structure with HTML and responsive styling with CSS</li>
      <li>🎯 Animations: Integrated scroll-based animations with Locomotive.js</li>
      <li>📏 Design Accuracy: Ensured fidelity to the original site’s typography, spacing, and rhythm</li>
      <li>⚙️ Deployment: Hosted on Github pages for fast load times and easy sharing</li>
    </ul>
  `,
        techStack: ['HTML', 'CSS', 'Locomotive.js', 'Vercel'],
        thumbnail: '/projects/thumbnail/two-good-clone.png',
        longThumbnail: '/projects/long/two-good-clone.png',
        images: ['/projects/long/two-good-clone.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        subtitle: 'ZURU Tech India',
        duration: 'Jan 2024 - Present',
    },
    {
        title: 'Web Developer (Intern)',
        subtitle: 'Tatvasoft',
        duration: 'Jul 2023 - Aug 2023',
    },
    {
        title: 'Full Stack Developer (Intern)',
        subtitle: 'WayToWeb Solutions',
        duration: 'May 2023',
    },
    {
        title: 'Campus Ambassador',
        subtitle: 'Tata Consultancy Services',
        duration: 'Jul 2023 - Jun 2024',
    },
    {
        title: 'Training and Placement Coordinator',
        subtitle: 'L.D. College of Engineering',
        duration: 'Jan 2023 - Mar 2024',
    },
];

export const MY_EDUCATION = [
    {
        title: 'Bachelor of Engineering in Computer Engineering',
        subtitle: 'L.D. College of Engineering',
        duration: 'Aug 2020 – May 2024',
        location: 'Ahmedabad, Gujarat',
        description: ['CGPA: 9.52 / 10', 'Gujarat Technological University'],
    },
    {
        title: 'JEE Main',
        subtitle: 'National Testing Agency (NTA)',
        duration: '2020',
        description: ['Percentile: 98.71', 'AIR (All India Rank): 2268'],
    },
    {
        title: 'Higher Secondary (12th Grade) – Science (PCM)',
        subtitle: 'JB & KARP Vidya Sankul',
        duration: 'Completed in 2020',
        location: 'Surat, Gujarat',
        description: ['Board: Gujarat Board', 'Percentage: 88.85%'],
    },
    {
        title: 'Secondary (10th Grade)',
        subtitle: 'JB & KARP Vidya Sankul',
        duration: 'Completed in 2018',
        location: 'Surat, Gujarat',
        description: ['Board: Gujarat Board', 'Percentage: 95.33%'],
    },
];
