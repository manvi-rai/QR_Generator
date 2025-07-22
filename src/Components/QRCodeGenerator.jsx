import React, { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const qrRef = useRef(null);

  const handleDownload = () => {
    if (qrRef.current === null) return;

    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  };

  return (
    <section className='qrcode mt-5' id="qrcode">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h4 className='pb-2'>Enter your website text or URL</h4>

            <input
              type="text"
              className="form-control mb-4"
              placeholder="Enter text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {text && (
              <button className="btn btn-primary mb-3" onClick={handleDownload}>
                <i className="fa fa-download"></i> Download PNG
              </button>
            )}

            <p>Live Preview</p>
            <div ref={qrRef} className="p-3 bg-white d-inline-block shadow-sm rounded codepreview">
              {text ? (
                <QRCode value={text} size={200} level="H" />
              ) : (
                <span className="text-muted">QR will appear here</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRCodeGenerator;
