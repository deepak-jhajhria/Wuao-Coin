import React, { useEffect, useState } from 'react';

function WidthDisplay() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      const element = document.getElementById('widthElement');
      if (element) {
        const newWidth = element.offsetWidth;
        setWidth(newWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div className=' fixed top-0 left-1/2 w-full'>
      <p id='widthElement'>{width}px</p>
    </div>
  );
}

export default WidthDisplay;