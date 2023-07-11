import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white lg:px-24 lg:pb-24 " style={{color:"rgba(255,255,255,0.7);"}} >
      
      <div className="container mx-auto pr-4 pl-9 md:pr-6 md:pl-6 lg:pr-6 lg:pl-6">
        <p className="text-center mb-4">Questions? Call 000-800-919-1694</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div>
            <h4 className=" py-2">FAQ</h4>
            <p className='py-2 text-sm'>Investor Relations</p>
            <p className='py-2 text-sm'>Privacy</p>
            <p className='py-2 text-sm'>Speed Test</p>
          </div>
          <div>
            <h4 className='py-2 text-sm'>Help Centre</h4>
            <p className='py-2 text-sm'>Jobs</p>
            <p className='py-2 text-sm'>Cookie Preferences</p>
            <p className='py-2 text-sm'>Legal Notices</p>
          </div>
          <div>
            <h4 className='py-2 text-sm'>Account</h4>
            <p className='py-2 text-sm'>Ways to Watch</p>
            <p className='py-2 text-sm'>Corporate Information</p>
            <p className='py-2 text-sm'>Only on Netflix</p>
          </div>
          <div>
            <h4 className='py-2 text-sm'>Media Centre</h4>
            <p className='py-2 text-sm'>Terms of Use</p>
            <p className='py-2 text-sm'>Contact Us</p>
          </div>
        </div>
        <p className="text-xs text-center mt-6">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
