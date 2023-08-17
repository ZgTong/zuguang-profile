import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpeg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Zuguang Tong',
  description: "Zuguang Tong is a Full Stack Software Engineer at Hertz Australia.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `This is Zuguang Tong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello there, I'm Zuguang Tong, a passionate <strong className="text-stone-100">Full Stack Software Engineer</strong> at
        <strong className="text-stone-100"> Hertz Australia</strong>, where I thrive on turning innovative ideas into tangible 
        digital experiences. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With a love for both the front-end and back-end realms of development, I embark on a journey of crafting seamless, 
        user-centric applications that marry functionality with aesthetics. I believe that the key to success lies not just
        in writing lines of code, but in building bridges between minds, translating visions into actionable plans.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm thrilled to have you join me on this digital journey. So, go ahead, click around, and let's
        embark on a coding adventure together! Welcome to my corner of the web!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Melbourne, VIC', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Metal Music', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Melbourne', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Hertz Australia', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Javascript/Typescript',
        level: 9,
      },
      {
        name: 'CSS/SCSS/LESS',
        level: 9,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Vue',
        level: 7,
      },
      {
        name: 'JQuery',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'NodeJs(Express)',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'MySql',
        level: 6,
      },
      {
        name: 'Python(Django)',
        level: 4,
      },
      {
        name: 'Java',
        level: 4,
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Amazon Web Services',
        level: 8,
      },
      {
        name: 'Serverless Framework',
        level: 8,
      },
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'Git',
        level: 9,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Mar 2021 - Jun 2022',
    location: 'University of Melbourne',
    title: 'Masters of Information Technology',
    content: 
    (
      <div>
        <p>Major: Distributed System</p>
        <p>Grade: H2A</p>
      </div>
    ),
  },
  {
    date: 'Jul 2020 - Feb 2021',
    location: 'Monash University',
    title: 'Masters of Information Technology',
    content: 
    (
      <div>
        <p>Transferred this portion of my education to UniMelb with credits. </p>
        <p>GPA: 3.75/4</p>
      </div>
    ),
  },
  {
    date: 'Sep 2014 - Jun 2018',
    location: 'Chengdu University',
    title: 'Bachelor of Financial Management',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2022 - Present',
    location: 'Hertz Australia',
    title: 'Full Stack Developer',
    content: (
      <ul>
        <li>
          • Leveraged AWS CodePipeline to achieve CI/CD, resulting in an 80% reduction in deployment time, 
          enabling faster and more reliable software releases with consistent quality across environments.
        </li>
        <li>
          • Refactored and deployed 2 historical projects in compliance with network security standards, 
          enhancing project security significantly.
        </li>
        <li>
          • Pioneered the development of a material management system. Expertly implemented request forwarding, 
          authentication, and parameter verification, enabling seamless delivery of 10+ APIs.
        </li>
        <li>
          • Led the integration of independent projects to Monorepo, reducing cloud resource consumption by 40% 
          and improving development efficiency by 30%.
        </li>
        <li>
          • Improved user experience by addressing multiple bugs within the company’s management platform, improving 
          usability by 25% and significantly boosting overall system stability.
        </li>
      </ul>
    ),
  },
  {
    date: 'Feb 2022 - May 2022',
    location: 'Capital Guardians',
    title: 'Full Stack Developer Intern',
    content: (
      <ul>
        <li>
          • Completed over 15 new features, substantially enhancing the user experience of an aged care project built on Django and React.
        </li>
        <li>
          • Achieved a 40% increase in project maintainability and a 25% boost in efficiency by leveraging Docker for streamlined containerization and Git for effective version control.
        </li>
        <li>
          • Crafted comprehensive documentation and code adhering to industry standards, resulting in a 30% improvement in project readability and maintainability.
        </li>
      </ul>
    ),
  },
  {
    date: 'Dec 2020 - Mar 2021',
    location: 'iQIYI',
    title: 'Frontend Developer Intern',
    content: (
      <ul>
        <li>
          • Developed a reusable mobile address management component using Vue.js, reducing the devel- opment time of address-related features by 60%.
        </li>
        <li>
          • Optimized the layouts of the company’s visual web page builder, leading to 15% faster page load times. Produced 20 high-quality web pages for the operation department.
        </li>
      </ul>
    ),
  },
  {
    date: 'Dec 2018 - Mar 2020',
    location: 'KunShan Hi-Think',
    title: 'Software Engineer',
    content: (
      <ul>
        <li>
          • Delivered an e-commerce WeChat applet, participating in the complete lifecycle from inception to deployment. 
          Increased user retention by 20% through iterative enhancements.
        </li>
        <li>
          • Created a robust supply chain platform with Vue.js, delivering feature completion for four modules. 
          Conducted rigorous bug-fixing to ensure platform stability and optimal functionality.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'John Doe',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'tongzuguang@gmail.com',
      href: 'mailto:tongzuguang@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Melbourne VIC, Australia',
      href: 'https://goo.gl/maps/sUuHkrzZBvyHE4pD7',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Zuguang Tong',
      href: 'https://www.linkedin.com/in/zuguang-tong-aa7041229/',
    },
    {
      type: ContactType.Github,
      text: 'ZgTong',
      href: 'https://github.com/ZgTong',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ZgTong'},
  {label: 'Email', Icon: EnvelopeIcon, href: 'mailto:tongzuguang@gmail.com'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zuguang-tong-aa7041229/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
