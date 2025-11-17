import { LocateIcon, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className='section-wrapper pt-[60px] pb-10'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center gap-8'>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <LocateIcon className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Address</p>
            <div>
              <p className='text-sm'>Ngu Hanh Son, Da Nang.</p>
            </div>
          </div>
        </li>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <Mail className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Send me mail</p>
            <div>
              <p className='text-sm cursor-default hover:text-[var(--color-primary-green)] transition-color duration-200'>
                uyenthutruong0105@gmail.com
              </p>
            </div>
          </div>
        </li>
        <li className='flex items-center gap-5'>
          <i className='py-4 sm:py-5 px-4 sm:px-5 bg-[var(--color-primary-green)] rounded-[50%]'>
            <Phone className='size-6 sm:size-7 text-black' />
          </i>
          <div className='flex flex-col gap-1 text-[var(--text-primary-color)]'>
            <p className='font-bold text-white text-md sm:text-xl'>Lets talk me</p>
            <div>
              <p className='text-sm cursor-default hover:text-[var(--color-primary-green)] transition-color duration-200'>
                0961554371
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
