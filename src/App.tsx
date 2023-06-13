import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPosition({ ...position, x: e.clientX });
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}

export default App;
