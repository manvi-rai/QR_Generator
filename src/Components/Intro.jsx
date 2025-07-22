import React from 'react';

function Intro() {
  return (
    <div className='container text-center mt-5'>
      <div className='pt-5'>
        <h1 className='pt-5 fw-bold'>Generate and Publish</h1>
        <h2 className='fw-bold'>
          <span className='highlight'>Dynamic</span> QR Codes.
        </h2>
        <p className='pt-5 fw-bold text-muted'>
          CodeGen is a dynamic QR code generator. It allows users to easily create<br />
          customized QR codes for sharing or embedding on their website.
        </p>
        <a href="#qrcode">
        <button type="button" class="btn btn-primary btn-lg mt-3">Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
