/**
 * Central portfolio data â€” generated from Saketh's portfolio series.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Pulugutha Saketh',
  displayName: 'Saketh',
  firstName: 'SAKETH',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SAKETH ORIGINAL',
  role: 'Cybersecurity & Web Development',
  tagline: ['Cybersecurity', 'SOC Analysis', 'Web Development'],
  intro: 'B.Tech Computer Science and Engineering student at KL University, interested in cybersecurity, SOC analysis, ethical hacking and web development. Building practical projects to strengthen security assessment, log analysis and programming skills.',
  location: 'Vijayawada, Andhra Pradesh',
  email: 'p97301056@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/saketh-pulugutha',
    github: 'https://github.com/2300030561',
  },
  resumePdf: '/assets/resume.pdf',
  portrait: {
    src: '/assets/profile.jpg',
    srcSet: '/assets/profile.jpg 420w',
    alt: 'Portrait of Saketh',
  },
  interests: ['Cybersecurity', 'SOC Analysis', 'Ethical Hacking', 'Web Development'],
};

export const education = [
  {
    school: 'KL University',
    place: 'Vijayawada, Andhra Pradesh',
    degree: 'B.Tech — Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA 7.78/10',
  },
  {
    school: 'DePaul Junior College',
    place: 'Berhampur',
    degree: 'Intermediate — MPC',
    period: '2021 – 2023',
    score: '67%',
  },
  {
    school: 'St. Vincent Convent School',
    place: 'India',
    degree: 'School Education',
    period: 'Completed before 2021',
    score: '82%',
  },
];

export const experience = [
  {
    company: 'Independent Projects',
    role: 'Cybersecurity Student',
    place: 'Academic and personal projects',
    period: '2023 – Present',
    points: [
      'Developing practical cybersecurity and web development projects.',
      'Exploring security assessment, web application vulnerabilities and log analysis through hands-on learning.',
      'Using programming, Linux and GitHub to document and improve project work.',
    ],
  },
];
export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public â€” the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'securecorp-assessment',
    title: 'SecureCorp Security Assessment',
    year: '2026',
    genre: 'Cybersecurity • Red Team • Blue Team',
    logline: 'A hands-on security assessment capstone exploring network and web application attack surfaces, with evidence documented for security investigation.',
    stack: ['Linux', 'Nmap', 'DVWA', 'Wazuh', 'GitHub'],
    build: [
      'Performed network discovery and service assessment in a controlled lab environment.',
      'Practiced web application security testing against DVWA and documented assessment evidence.',
      'Organized findings and supporting evidence in a GitHub project repository.',
    ],
    features: [
      'Network and service discovery',
      'DVWA web application security testing',
      'SQL injection and cross-site scripting assessment',
      'FTP and SSH assessment evidence',
      'GitHub-based evidence documentation',
    ],
    metrics: [
      { value: 'Red Team', label: 'security assessment' },
      { value: 'Blue Team', label: 'detection and investigation learning' },
      { value: 'Week 2', label: 'assessment evidence documented' },
    ],
    github: 'https://github.com/2300030561/securecorp-security-assessment',
    palette: { from: '#071b16', via: '#075e54', to: '#050b10', accent: '#42e8b4' },
    motif: 'shield',
  },
  {
    id: 'password-security-analyzer',
    title: 'Password Security Analyzer',
    year: '2026',
    genre: 'Python • Security • Programming',
    logline: 'A password security project focused on evaluating password strength and communicating useful security feedback.',
    stack: ['Python', 'Cybersecurity', 'Git', 'GitHub'],
    build: [
      'Developed a password-focused security project to explore password strength evaluation.',
      'Organized the project source code and documentation in a GitHub repository.',
    ],
    features: [
      'Password strength evaluation',
      'Security-focused programming practice',
      'Python project development',
      'GitHub source code and documentation',
    ],
    metrics: [
      { value: 'Python', label: 'implementation language' },
      { value: 'Security', label: 'project focus' },
    ],
    github: 'https://github.com/2300030561/password-security-analyzer',
    palette: { from: '#17102d', via: '#49318a', to: '#080710', accent: '#b99aff' },
    motif: 'flow',
  },
];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'securecorp-project',
    title: 'Security Assessment Capstone',
    org: 'SecureCorp',
    detail: 'Hands-on cybersecurity capstone covering network discovery, web application security testing, and documented assessment evidence.',
    laurel: 'Cybersecurity Project',
    link: 'https://github.com/2300030561/securecorp-security-assessment',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft', name: 'Azure Fundamentals (AZ-900)', link: '' },
  { issuer: 'NPTEL', name: 'Data Structures Using Java', link: '' },
  { issuer: 'Automation Anywhere', name: 'Certified RPA', link: '' },
  { issuer: 'Cisco', name: 'Introduction to Cybersecurity', link: '' },
];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Coding and problem solving',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Java', mono: 'Jv' },
      { name: 'C', mono: 'C' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Security assessment and defense',
    skills: [
      { name: 'SOC Analysis', mono: 'SOC' },
      { name: 'Log Analysis', mono: 'Log' },
      { name: 'Threat Detection', mono: 'TD' },
      { name: 'Vulnerability Assessment', mono: 'VA' },
      { name: 'Web Application Security', mono: 'Web' },
      { name: 'Nmap', mono: 'Nm' },
      { name: 'Linux', mono: 'Ln' },
      { name: 'Wazuh', mono: 'Wz' },
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Building for the web',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Development and security workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'SQL / DBMS', mono: 'DB' },
      { name: 'DVWA', mono: 'DV' },
      { name: 'TryHackMe', mono: 'TH' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Password Security Analyzer'],
  Java: ['Data Structures Using Java'],
  'SOC Analysis': ['SecureCorp Security Assessment'],
  'Log Analysis': ['SecureCorp Security Assessment'],
  'Threat Detection': ['SecureCorp Security Assessment'],
  'Vulnerability Assessment': ['SecureCorp Security Assessment'],
  'Web Application Security': ['SecureCorp Security Assessment'],
  Nmap: ['SecureCorp Security Assessment'],
  Linux: ['SecureCorp Security Assessment'],
  Wazuh: ['SecureCorp Security Assessment'],
  React: ['Netflix-style portfolio project'],
  HTML: ['Netflix-style portfolio project'],
  CSS: ['Netflix-style portfolio project'],
  'Git / GitHub': ['SecureCorp Security Assessment', 'Password Security Analyzer'],
  DVWA: ['SecureCorp Security Assessment'],
  TryHackMe: ['Cybersecurity learning'],
};
export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 - 2023',
    synopsis: 'The academic foundation: Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Completed Intermediate MPC at DePaul Junior College, Berhampur.',
        tags: ['Intermediate', 'MPC'],
        runtime: '2021 - 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineer',
    period: '2023 - 2027',
    synopsis: 'Pursuing Computer Science and Engineering at KL University.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Computer Science',
        description: 'B.Tech in Computer Science and Engineering at KL University, Vijayawada.',
        tags: ['B.Tech', 'CSE', 'CGPA 7.78/10'],
        runtime: '2023 - 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Programmer',
        description: 'Practising Python, Java, C, SQL and web development through learning and projects.',
        tags: ['Python', 'Java', 'C', 'SQL'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Into Cybersecurity',
    period: '2026',
    synopsis: 'Hands-on security assessment work in a controlled lab environment.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Network Discovery',
        description: 'Practised network discovery and service identification as part of the SecureCorp academic capstone.',
        tags: ['Linux', 'Nmap', 'Networking'],
        runtime: 'SecureCorp Capstone',
        palette: jade,
      },
      {
        code: 'S03 E02',
        title: 'Web Security Testing',
        description: 'Worked with DVWA in a lab environment and documented SQL injection and XSS assessment evidence.',
        tags: ['DVWA', 'SQL Injection', 'XSS'],
        runtime: 'SecureCorp Capstone',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Documenting the Findings',
        description: 'Organised assessment evidence and project documentation in GitHub.',
        tags: ['Security Assessment', 'Documentation', 'GitHub'],
        runtime: 'Project evidence',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Projects',
    period: '2026',
    synopsis: 'Applying programming and development skills to practical projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Password Security Analyzer',
        description: 'A Python project focused on analysing password security.',
        tags: ['Python', 'Cybersecurity'],
        runtime: 'Personal project',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Portfolio: The Series',
        description: 'Customising a cinematic portfolio to showcase cybersecurity, programming and web development work.',
        tags: ['React', 'TypeScript', 'CSS'],
        runtime: 'Personal project',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now learning',
    synopsis: 'Continuing to build practical skills across cybersecurity and software development.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Developing skills in SOC analysis, log analysis, Linux, programming and web application security.',
        tags: ['SOC Analysis', 'Linux', 'Programming'],
        runtime: 'Ongoing',
        palette: jade,
      },
    ],
  },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Cybersecurity Project', title: 'SecureCorp Assessment', detail: 'Network discovery and web security testing', palette: jade },
  { label: 'Python Project', title: 'Password Security Analyzer', detail: 'Password security analysis', palette: violet },
  { label: 'Programming', title: 'Python • Java • C', detail: 'Programming and problem solving', palette: amber },
  { label: 'Security Skills', title: 'SOC & Log Analysis', detail: 'Learning security monitoring and investigation', palette: ocean },
  { label: 'Web Development', title: 'Portfolio: The Series', detail: 'React • TypeScript • CSS', palette: crimson },
  { label: 'Microsoft Certification', title: 'Azure Fundamentals', detail: 'AZ-900', palette: ocean },
  { label: 'NPTEL Certification', title: 'Data Structures Using Java', detail: 'NPTEL', palette: violet },
  { label: 'Automation Anywhere', title: 'Certified RPA', detail: 'Robotic Process Automation', palette: amber },
  { label: 'Cisco Certification', title: 'Introduction to Cybersecurity', detail: 'Cisco Networking Academy', palette: jade },
  { label: 'Current Focus', title: 'Keep Learning', detail: 'Cybersecurity • Programming • Web Development', palette: crimson },
];
/** Slides for the "â–¶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['KL University, Vijayawada', '2023 - 2027'],
    chips: ['CGPA 7.78/10'],
  },
  {
    kicker: 'Programming',
    title: 'Code. Learn. Build.',
    lines: ['Python, Java, C and SQL', 'HTML, CSS, React and Node.js'],
    chips: ['Python', 'Java', 'C', 'React', 'SQL'],
  },
  {
    kicker: 'Cybersecurity',
    title: 'The Security Journey',
    lines: ['Learning SOC analysis, log analysis and threat detection', 'Practising network discovery and web security testing in a lab'],
    chips: ['Linux', 'Nmap', 'DVWA', 'Wazuh'],
  },
  {
    kicker: 'Projects',
    title: 'Hands-on Projects',
    lines: ['SecureCorp Security Assessment - academic capstone', 'Password Security Analyzer - Python project', 'Portfolio: The Series - web development project'],
  },
  {
    kicker: 'Certifications',
    title: 'Learning Milestones',
    lines: ['Microsoft Azure Fundamentals (AZ-900)', 'NPTEL Data Structures Using Java', 'Automation Anywhere Certified RPA', 'Cisco Introduction to Cybersecurity'],
  },
  {
    kicker: 'Current Mission',
    title: 'Always Improving',
    lines: ['Cybersecurity · Programming · Web Development'],
  },
];
export type ProfileId = 'saketh' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'saketh',
    name: 'Saketh',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot â€¢ Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons â€¢ ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals â€¢ 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments â€¢ ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume â€¢ View & download', palette: violet },
};










