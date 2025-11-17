'use client';
import { useEffect } from 'react';
import './styled.css';

const experienceList = [
  {
    id: 1,
    time: '2024 - 2025',
    jobTitle: 'Web devepler',
    company: 'FPT Software',
    description: [
      {
        id: 1,
        text: 'Worked as a Frontend Developer, contributing to real-world projects using ReactJS, VueJS, HTML, CSS, Tailwind CSS, and vanilla JavaScript.',
      },
      {
        id: 2,
        text: 'Experienced in integrating RESTful APIs and working with MongoDB to deliver dynamic and data-driven web applications.',
      },
      {
        id: 3,
        text: 'Also participated in Power Platform migration projects, directly communicating with clients to gather requirements and ensure project alignment.',
      },
    ],
  },

  {
    id: 2,
    time: '01/2024 - 04/2024',
    jobTitle: 'Front end fresher',
    company: 'BAP Software, Hue',
    description: [
      {
        id: 1,
        text: 'Participated in a real-world project developing an online platform that connects hospitals and patients as a Front-end Developer.',
      },
      {
        id: 2,
        text: 'Utilized ReactJS, TypeScript, Ant Design, Styled Components, and other related libraries to build a responsive and user-friendly interface.',
      },
      ,
      {
        id: 3,
        text: 'Enhanced Git skills to manage source code efficiently using Git and GitHub.',
      },
    ],
  },

  // {
  //   id: 3,
  //   time: '09/2023 - 01/2024',
  //   jobTitle: 'Web fresher',
  //   company: 'FPT Software',
  //   description: [
  //     {
  //       id: 1,
  //       text: 'Participated in a project building an online social platform as a Front-end Developer using ReactJS, SCSS, and Bootstrap 4.',
  //     },
  //     {
  //       id: 2,
  //       text: 'Also contributed to backend development by creating APIs with Spring Boot 4.',
  //     },
  //   ],
  // },

  {
    id: 4,
    time: '04/2023 - 08/2023',
    jobTitle: 'Frontend intern',
    company: 'Platinum Technology',
    description: [
      {
        id: 1,
        text: 'Worked as a Front-end Intern, learning and improving skills in HTML, CSS, and JavaScript for building user interfaces.',
      },
      {
        id: 2,
        text: 'Learned to use GitHub for version control and collaboration.',
      },
    ],
  },
];

const skillsList = [
  {
    id: 1,
    skillName: 'HTML',
    percentage: '85',
  },
  {
    id: 2,
    skillName: 'CSS, SCSS',
    percentage: '70',
  },
  {
    id: 3,
    skillName: 'JavaScript',
    percentage: '68',
  },
  {
    id: 4,
    skillName: 'ReactJS',
    percentage: '80',
  },
  {
    id: 5,
    skillName: 'Power Automate',
    percentage: '85',
  },
  {
    id: 6,
    skillName: 'Power Pages',
    percentage: '70',
  },
  {
    id: 7,
    skillName: 'Git',
    percentage: '70',
  },
  ,
  {
    id: 8,
    skillName: 'Tailwind CSS',
    percentage: '80',
  },
  {
    id: 9,
    skillName: 'APIs',
    percentage: '70',
  },
];

const prepareLineAnimtion = (lineEl) => {
  if (lineEl.querySelector('.anim_char')) return;

  const rawContent = lineEl.innerHTML.trim();
  lineEl.innerHTML = '';

  const parts = rawContent.replace(/<br\s*\/?>/gi, '|BR|').split(/(\s+|\|BR\|)/);

  let charIndex = 0;
  const delayPerChar = 0.02;

  parts.forEach((part) => {
    if (!part || part.length === 0) {
      return;
    }

    if (part === '|BR|') {
      lineEl.appendChild(document.createElement('br'));
    } else if (part.match(/^\s+$/)) {
      lineEl.append(document.createTextNode(part));
    } else {
      for (let i = 0; i < part.length; i++) {
        const char = part[i];

        const charDiv = document.createElement('div');
        charDiv.classList.add('anim_char');
        charDiv.textContent = char;
        charDiv.style.position = 'relative';
        charDiv.style.display = 'inline-block';

        charDiv.style.animationDelay = `${charIndex * delayPerChar}s`;

        lineEl.appendChild(charDiv);
        charIndex++;
      }
    }
  });
};

export default function EducationAndSkills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target.classList.contains('anim_line')) {
              prepareLineAnimtion(target);
              target.classList.add('show');

              observer.unobserve(target);
            } else {
              target.classList.add('show');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItemsEl = document.querySelectorAll('.skill-item__progress');
    const educationTitle = document.querySelectorAll('.education__title');
    const educationText = document.querySelectorAll('.education__text');
    const lineElement = document.querySelector('.anim_line');

    skillItemsEl.forEach((el) => observer.observe(el));
    observer.observe(educationTitle[0]);
    observer.observe(educationText[0]);

    if (lineElement) observer.observe(lineElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='skills'
      className='section-wrapper pt-20 pb-10 bg-[var(--background-section)] text-white'>
      <p className='section-title text-center'>EDUCATION & SKILL</p>
      <h2 className='anim_line max-w-[1024px] mx-auto text-center text-3xl md:text-5xl font-medium text-[var(--text-secondary-color)] leading-10 md:leading-14'>
        Bridging platforms
        <br />
        showcasing technical mastery
      </h2>

      <ul className='experience-list grid grid-cols-1 lg:grid-cols-2 my-10'>
        {experienceList.map((job) => (
          <li key={job.id} className='experience-item px-4'>
            <div className='mb-[60px]'>
              <p className='inline-block py-2 md:py-4 px-4 md:px-5 mb-5 text-md text-[var(--color-primary-green)] border-1 border-[var(--color-primary-green)] '>
                {job.time}
              </p>

              <div className='mb-3 text-2xl md:text-3xl text-[var(--text-secondary-color)] font-bold'>
                <span className='capitalize'>{job.jobTitle}</span>
                <p className='inline-block ml-2 '>
                  at <span className='text-[var(--color-primary-green)]'>{job.company}</span>
                </p>
              </div>
              <p className='text-sm text-[var(--text-primary-color)] whitespace-pre-line'>
                {job?.description.map((item) => (
                  <span key={item.id} className='inline-block my-1'>
                    ▹ {item.text} <br />
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className=' md:my-[60px]'>
        <div className='education__title-wrapper my-5 h-10 overflow-hidden'>
          <h3 className='education__title text-xl md:text-2xl text-[var(--color-primary-green)] uppercase'>
            EDUCATION
          </h3>
        </div>
        <div className='education__text-wrapper h-[92px] md:h-[164px] max-w-[600px]  mx-auto overflow-hidden'>
          <p className='education__text py-6 md:py-[60px] px-6 md:px-10 text-sm border-t-2 border-b-2 border-[var(--color-primary-green)] bg-[var(--color-surface-secondary)]'>
            Bachelor of Science in Information Technology — University of Sciences, Hue University
            (2020–2024)
          </p>
        </div>
      </div>

      <div className='my-[60px]'>
        <h3 className='my-5 text-xl md:text-2xl text-[var(--color-primary-green)]'>SKILLS</h3>
        <ul className='skill-list grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[20px]'>
          {skillsList.map((skill) => (
            <li
              key={skill.id}
              className='skill-item relative text-md flex justify-start items-center h-[54px] md:h-[64px] py-2 md:py-[10px] pl-[50px] md:pl-[60px] bg-[var(--color-surface-secondary)] '>
              {skill.skillName}
              <div className='skill-item__progress-wrapper w-full'>
                <div
                  className='skill-item__progress'
                  style={{ '--skill-width': `${skill.percentage}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
