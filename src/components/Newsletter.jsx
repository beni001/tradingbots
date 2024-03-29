import React, { useState }  from 'react';

const Newsletter = () => {


  const [email, setEmail] = useState('');

  const handleNotify = () => {
    const phoneNumber = '+254729992516';
    const message = encodeURIComponent(`Hello Nilote, I want to sign up for the newsletter. My email is: ${email}`);

    // Determine the screen width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Construct the appropriate WhatsApp link based on screen width
    let url;
    if (screenWidth < 600) {
        // For small screens (e.g., phones)
        url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${message}`;
    } else {
        // For larger screens (e.g., laptops)
        url = `https://web.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${message}`;
    }

    // Open a new window or tab
    window.open(url, '_blank');
};

  

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your TRADES?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
             className='p-3 flex w-full rounded-md text-black'
             type='email'
             placeholder='Enter Email'
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
              <button
                className='bg-blue-500 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
                onClick={handleNotify}
              >
                Notify Me
              </button>

          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-blue-500'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
