import React from 'react';
import zxcvbn from 'zxcvbn';

const ValidationBar = ({ style, password }) => {
  const passStength = zxcvbn(password);
  // entropy = lg(26 * 5);
  const width = (passStength.score * 100) / 4;
  console.log('passStength', passStength);
  console.log('width', width);

  const color = () => {
    switch (passStength.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#24cca7';
      default:
        return 'none';
    }
  };

  const progressLineStyle = () => ({
    backgroundColor: color(),
    width: `${width}%`,
    height: '5px',
  });
  return (
    <div className={style}>
      <div style={progressLineStyle()}></div>
    </div>
  );
};

export default ValidationBar;
