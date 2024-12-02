import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [h1Text, setH1Text] = useState('');
  const [h2Text, setH2Text] = useState('');
  const [h3Text, setH3Text] = useState('');
  const captureRef = useRef(null);

  const captureScreen = async () => {
    try {
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: '#ffffff',
        windowWidth: captureRef.current.scrollWidth + 200,
        windowHeight: captureRef.current.scrollHeight + 200,
        x: -100,
        y: -20,
        width: captureRef.current.scrollWidth + 200,
        height: captureRef.current.scrollHeight + 40,
        logging: false,
      });
      
      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);
        toast.success('Screenshot copied to clipboard!');
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to capture screenshot');
    }
  };

  return (
    <div className="app-container" style={{ padding: '40px' }}>
      <Toaster position="top-right" />
      
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '600px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={h1Text}
            onChange={(e) => setH1Text(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
            placeholder="H1: Current Business (e.g., Data dashboard 2.0)"
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={h2Text}
            onChange={(e) => setH2Text(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
            placeholder="H2: Emerging Business (e.g., Modular water treatment)"
          />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={h3Text}
            onChange={(e) => setH3Text(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
            placeholder="H3: Transformational Business (e.g., Atmospheric Water)"
          />
        </div>
        <button
          onClick={captureScreen}
          style={{
            padding: '8px 16px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'flex-end'
          }}
        >
          📸 Capture Chart
        </button>
      </div>

      <div ref={captureRef}>
        <svg version="1.1" viewBox="0 0 800 500" style={{maxWidth: '100%', height: 'auto'}}>
          <defs>
            <path id="SVGID_1_" d="M187.7,355.7c27.6-30.9,41.1-71,54.2-109.8c20.1-59.6,39.1-116,108.2-116 c69.1,0,88.1,56.3,108.2,116c13.1,38.8,26.6,78.8,54.2,109.8"/>
            <path id="SVGID_2_" d="M402,409.8c250,0,150-277.8,300-277.8"/>
            <path id="SVGID_3_" d="M54.5,130.4c150,0,50,277.8,300,277.8"/>
          </defs>
          
          <line x1="50" y1="430" x2="750" y2="430" style={{fill: 'none', stroke: '#333333', strokeWidth: 2}}/>
          <line x1="50" y1="430" x2="50" y2="30" style={{fill: 'none', stroke: '#333333', strokeWidth: 2}}/>
          
          <text x="350" y="490" style={{fontFamily: 'Arial-BoldMT', fontSize: '16px'}}>Time</text>
          <text transform="rotate(-90 30 261.582)" x="30" y="261.582" style={{fontFamily: 'Arial-BoldMT', fontSize: '16px'}}>Adoption</text>
          
          <path d="M50,412.8c250,0,150-277.8,300-277.8s50,277.8,300,277.8" style={{fill: 'none', stroke: '#FFA726', strokeWidth: 3}}/>
          <path d="M50,412.8h356c250,0,150-277.8,300-277.8" style={{fill: 'none', stroke: '#43A047', strokeWidth: 3}}/>
          <path d="M50,134.9c150,0,50,277.8,300,277.8h356" style={{fill: 'none', stroke: '#1E88E5', strokeWidth: 3}}/>
          
          <text x="73.3662" y="178.4481" style={{fill: '#1E88E5', fontFamily: 'Arial-BoldMT', fontSize: '19px'}}>H1</text>
          <text x="331.7418" y="178.4481" style={{fill: '#FFA726', fontFamily: 'Arial-BoldMT', fontSize: '19px'}}>H2</text>
          <text x="657.4736" y="178.4481" style={{fill: '#43A047', fontFamily: 'Arial-BoldMT', fontSize: '19px'}}>H3</text>
          
          <text x="93.8253" y="450" style={{fontFamily: 'ArialMT', fontSize: '12px'}}>Now</text>
          <text x="331.7418" y="450" style={{fontFamily: 'ArialMT', fontSize: '12px'}}>Next (2-3 years)</text>
          <text x="650" y="451.1328" style={{fontFamily: 'ArialMT', fontSize: '12px'}}>Future (3-5 years)</text>
          
          <text>
            <textPath xlinkHref="#SVGID_3_" startOffset="3.5645%">
              <tspan style={{fill: '#1E88E5', fontFamily: 'ArialMT', fontSize: '12px'}}>{h1Text || 'Enter H1 text...'}</tspan>
            </textPath>
          </text>
          
          <text>
            <textPath xlinkHref="#SVGID_1_" startOffset="32.3975%">
              <tspan style={{fill: '#FFA726', fontFamily: 'ArialMT', fontSize: '12px'}}>{h2Text || 'Enter H2 text...'}</tspan>
            </textPath>
          </text>
          
          <text>
            <textPath xlinkHref="#SVGID_2_" startOffset="26.1475%">
              <tspan style={{fill: '#43A047', fontFamily: 'ArialMT', fontSize: '12px'}}>{h3Text || 'Enter H3 text...'}</tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;