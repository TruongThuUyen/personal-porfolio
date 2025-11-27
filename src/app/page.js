'use client';
import AboutMe from '@/components/about-me/AboutMe';
import Contact from '@/components/contact/Contact';
import EducationAndSkills from '@/components/education-skills/EducationAndSkill';
import SwiperComponent from '@/components/feedback/SwiperComponent';
import Footer from '@/components/footer/Footer';
import PersonalProjects from '@/components/projects/Projects';
import Services from '@/components/services/Services';
import TextMarquee from '@/components/text-marquee/TextMarquee';
import '@/styles/page.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Loading from './loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className='w-full'>
          {/* HEADER */}
          <header
            className='fixed top-0  h-[54px] sm:h-[60px] lg:h-[78px] 
            flex justify-between items-center mx-auto left-0 md:left-4 lg:left-[104px] right-0 md:right-4 lg:right-[104px]  z-10 py-1.5 lg:py-0 bg-[var(--color-primary-black)] text-white'>
            <div className='flex h-full gap-4 justify-between items-center'>
              <Link
                to='home'
                smooth={true}
                duration={1500}
                className='flex justify-center items-center h-full px-1.5 sm:px-4 bg-[var(--color-primary-green)] text-black hover:cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-12 lg:size-17'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5'
                  />
                </svg>
              </Link>
              <span className='text-2xl lg:text-4xl font-light'>UYEN</span>
            </div>

            <input
              id='checkbox'
              className='absolute right-5 w-8 h-10 z-1 opacity-0 cursor-pointer'
              type='checkbox'
            />

            <ul className='nav-list lg:relative lg:top-auto lg:flex justify-between items-center text-sm mr-6 bg-[var(--color-primary-black)]'>
              <li className='nav-item'>
                <Link to='home' smooth={true} duration={1500}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='about' smooth={true} duration={1500}>
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='services' smooth={true} duration={1500}>
                  Services
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='projects' smooth={true} duration={1500}>
                  Projects
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='contact' smooth={true} duration={1500}>
                  Contact
                </Link>
              </li>
            </ul>

            <label
              htmlFor='checkbox'
              className='header__navbar-icon-wrapper flex lg:hidden justify-center items-center h-full px-1.5 sm:px-4 bg-[var(--color-primary-green)] text-black cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='menu-icon size-9 cursor-pointer'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-9 close-icon cursor-pointer'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </label>
          </header>
          {/* END HEADER */}

          {/* HOME SECTION */}
          <section
            id='home'
            className='home-page section-wrapper pt-[var(--header-height-xs)] sm:pt-[var(--header-height-sm)] lg:pt-[var(--header-height-lg)] pb-10 bg-[var(--background-section)] text-white'>
            <div className='block lg:flex gap-10'>
              <div className='w-full lg:w-[50%]'>
                <div className='intro-wrapper pb-2 sm:pb-9 pt-9'>
                  <h1 className='intro__title'>Hi, I'M Uyen! Creative</h1>
                  <div className='intro__animation-typing'>
                    <div className='second'>
                      <span>Front-END Developer</span>
                    </div>
                    <div className='first'>
                      <span>Power Platform Dev</span>
                    </div>
                  </div>
                </div>

                <div className='my-5'>
                  <p className='text-md text-[var(--text-primary-color)]'>
                    I'm a dedicated Front-End Developer with 1+ years of hands-on experience in
                    developing modern web applications using React.js and JavaScript. I also
                    leverage practical experience with Microsoft Power Platform—including Power
                    Pages, Power Automate, and Power Apps—to design and deploy integrated, efficient
                    business solutions
                  </p>
                </div>

                <button
                  className='btn-slide 
                    relative mt-5 z-1
                    py-2.5 px-5 text-center 
                    text-sm sm:text-md
                    text-[var(--color-primary-black)] bg-[var(--color-primary-green)] 
                    transition-[var(--tran-05)] 
                    overflow-hidden cursor-pointer
                '>
                  <a href='/files/Truong-Thi-Thu-Uyen-cv.pdf' download>
                    DOWNLOAD MY CV
                  </a>
                </button>
              </div>

              <div className='avatar-container hidden lg:flex lg:w-[50%] items-center justify-center my-12'>
                <div className='avatar-border'>
                  <img
                    src='/images/avatar.jpg'
                    className='avatar-image object-cover'
                    alt='avatar'
                  />
                </div>
              </div>
            </div>
          </section>
          {/* HOME SECTION */}

          {/* SERVICES SECTION */}
          <Services />
          {/* END SERVICES SECTION */}

          {/* ABOUT ME SECTION */}
          <AboutMe />
          {/* END ABOUT ME SECTION */}

          {/* EDUCATION AND SKILL SECTION */}
          <EducationAndSkills />
          {/* END EDUCATION AND SKILL SECTION */}

          {/* PERSONAL PROJECTS SECTION */}
          <PersonalProjects />
          {/* END  PERSONAL PROJECTS SECTION */}

          {/* TEXT MARQUEE SECTION */}
          <TextMarquee />
          {/* END TEXT MARQUEE SECTION */}

          {/* FEEDBACK SECTION */}
          <SwiperComponent />
          {/* END FEEDBACK  SECTION*/}

          <div className='mt-10 h-20 bg-gradient-to-b from-black to-[#0aff9d]/26'></div>

          {/* CONTACT SECTION  */}
          <Contact />
          {/* END CONTACT SECTION  */}

          <Footer />
        </section>
      )}
    </main>
  );
}
