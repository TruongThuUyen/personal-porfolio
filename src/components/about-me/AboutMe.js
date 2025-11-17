'use client';
import './styled.css';

import { useEffect } from 'react';

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleEl = document.querySelectorAll('.about__sub-title');
    const imgWrapperEl = document.querySelectorAll('.about__image-wrapper');

    observer.observe(titleEl[0]);
    observer.observe(imgWrapperEl[0]);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='about' className='section-wrapper pt-20 pb-10'>
      <p className='section-title'>About Me</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-5'>
        <div className='flex flex-col'>
          <h2 className='about__sub-title text-3xl md:text-5xl font-medium text-[var(--text-secondary-color)] max-w-[1024px] md:my-8 leading-10 md:leading-14'>
            Transforming ideas into interactive digital solutions
          </h2>
          <p className='text-xl md:text-3xl'>I'm Thu Uyen</p>
          <p className='mt-2 text-xl text-[var(--text-primary-color)] capitalize'>
            Frontend & Microsoft Power Platform dev
          </p>
          <p className='text-sm my-6 text-[var(--text-primary-color)]'>
            I love turning ideas into interactive, intuitive experiences. With a background in
            front-end development and Microsoft Power Platform, I bridge design and automation to
            help teams work smarter and faster.
          </p>
          <div className='mt-5 text-start lg:text-center'>
            <button
              className='btn-slide 
                relative  z-1
                py-2.5 px-5 text-center 
                text-sm
                sm:text-md
                text-[var(--color-primary-black)] bg-[var(--color-primary-green)] 
                transition-[var(--tran-05)] 
                overflow-hidden cursor-pointer'>
              <a href='/files/Truong-Thi-Thu-Uyen-cv.pdf' download>
                DOWNLOAD MY CV
              </a>
            </button>
          </div>
        </div>
        <div className='about__image-wrapper relative flex items-center justify-start lg:justify-center mt-12 mb-6 lg:mb-6'>
          <div className='about__image-boder relative w-[300px] h-[389px]'>
            <img
              src='/images/personal-image.jpg'
              alt='avatar'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
