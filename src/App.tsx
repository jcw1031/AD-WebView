import React from 'react';
import KakaoAdFit from './KakaoAdFit';
import './App.css';

interface WebViewDataProps {
  type?: string;
  payload?: string;
}

function App() {
  window.addEventListener('message', event => {
    const data: WebViewDataProps = JSON.parse(event.data);
    if (data.type === 'SHOW_ALERT') {
      alert(data.payload);
    }
  });

  return (
    <div className={'App'}>
      <KakaoAdFit unit={'DAN-fVYT1aWQnMOribRe'} width={320} height={50} disabled={false} />
    </div>
  );
}

export default App;
