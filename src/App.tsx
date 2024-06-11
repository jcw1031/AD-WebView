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
      <KakaoAdFit unit={'DAN-O9sPoZmGoqjzS3vq'} width={320} height={100} disabled={false} />
    </div>
  );
}

export default App;
