import React, { useState } from 'react';

const charts = [
  { name: 'Polar Scatter', file: 'polar_scatter.html' },
  { name: 'Polar Line', file: 'polar_line.html' },
  { name: 'Polar Bar', file: 'polar_bar.html' },
];

function App() {
  const [selected, setSelected] = useState(charts[0]);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🌎 Visualización de Datos Climáticos con Plotly</h1>
      
      <nav style={{ marginBottom: '20px' }}>
        {charts.map((chart) => (
          <button
            key={chart.file}
            onClick={() => setSelected(chart)}
            style={{
              margin: '0 10px',
              padding: '10px 20px',
              backgroundColor: '#4e54c8',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {chart.name}
          </button>
        ))}
      </nav>

      <iframe
        src={selected.file}
        title={selected.name}
        width="100%"
        height="600px"
        style={{
          border: '2px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
}

export default App;
