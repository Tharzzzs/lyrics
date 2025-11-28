import { useState } from 'react';
import './App.css';

function App() {
  const [allLyrics, setAllLyrics] = useState([]);
  const [activeSinger, setActiveSinger] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSingerClick = (singer) => {
    setActiveSinger(singer);
    setInputValue('');
  };

  const handleAddLyric = () => {
    if (activeSinger && inputValue.trim()) {
      setAllLyrics([
        ...allLyrics,
        {
          singer: activeSinger,
          text: inputValue
        }
      ]);
      setInputValue('');
    }
  };

  const handleClear = () => {
    setAllLyrics([]);
    setActiveSinger(null);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddLyric();
    }
  };

  const getSingerColor = (singer) => {
    const colors = {
      first: '#a78bda',
      second: '#7ed321',
      third: '#50e3c2',
      fourth: '#f5a623'
    };
    return colors[singer];
  };

  const getSingerLabel = (singer) => {
    const labels = {
      first: 'FIRST SINGER',
      second: 'SECOND SINGER',
      third: 'THIRD SINGER',
      fourth: 'FOURTH SINGER'
    };
    return labels[singer];
  };

  return (
    <div className="App">
      <h1>Complete the Lyrics</h1>
      <div className="buttons-container">
        <button
          className={`singer-btn first-singer ${activeSinger === 'first' ? 'active' : ''}`}
          onClick={() => handleSingerClick('first')}
        >
          FIRST SINGER
        </button>
        <button
          className={`singer-btn second-singer ${activeSinger === 'second' ? 'active' : ''}`}
          onClick={() => handleSingerClick('second')}
        >
          SECOND SINGER
        </button>
        <button
          className={`singer-btn third-singer ${activeSinger === 'third' ? 'active' : ''}`}
          onClick={() => handleSingerClick('third')}
        >
          THIRD SINGER
        </button>
        <button
          className={`singer-btn fourth-singer ${activeSinger === 'fourth' ? 'active' : ''}`}
          onClick={() => handleSingerClick('fourth')}
        >
          FOURTH SINGER
        </button>
      </div>

      <div className="input-container">
        <input
          type="text"
          className="lyrics-input"
          placeholder={activeSinger ? `Type lyrics for ${getSingerLabel(activeSinger)}...` : 'Select a singer first'}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!activeSinger}
        />
      </div>

      <div className="lyrics-display">
        {allLyrics.map((lyric, index) => (
          <div 
            key={index} 
            className="lyric-bar" 
            style={{ backgroundColor: getSingerColor(lyric.singer) }}
          >
            {lyric.text}
          </div>
        ))}
      </div>

      <button className="clear-btn" onClick={handleClear}>
        CLEAR ALL
      </button>
    </div>
  );
}

export default App;