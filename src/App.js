import React, { useState } from 'react';

const App = () => {
  const [tips, setTips] = useState('');

  const getTips = async () => {
    const res = await fetch('https://biepetonabal.beget.app/webhook/agri-advice', {
      method: 'POST',
      body: JSON.stringify({soil: 'dry', location: 'Astana'})
    });
    const data = await res.json();
    setTips(data.tips);
  };

  return (
    <div>
      <h1>AgriAI Farm Advisor</h1>
      <button onClick={getTips}>Get Crop Tips</button>
      <p>{tips}</p>
    </div>
  );
};

export default App;