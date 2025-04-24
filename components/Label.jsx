import React from 'react';

const Label = ({ 
  text = "Labelname",
  width = 10,
  height = 20,
  color = "#000000",
  bgColor = "transparent",
  fontSize = 12,
  fontWeight = "normal",
  borderBottom = "none",
  padding = "0 0 0 0px", 
  margin = "0px" 
}) => {
  const labelStyle = {
    width: `${width}px`,
    height: `${height}px`,
    color: color,
    backgroundColor: bgColor,
    fontSize: `${fontSize}px`,
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    border: 'none',
    overflow: 'hidden',
    fontFamily: 'Montserrat, sans-serif',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: fontWeight,
    borderBottom: borderBottom,
    padding: padding, 
    margin: margin, 
    boxSizing: 'border-box' 
  };

  return (
    <div style={labelStyle}>
      {text}
    </div>
  );
};

export default Label;