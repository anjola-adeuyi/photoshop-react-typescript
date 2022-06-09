import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Slider = ({ min, max, value, handleChange }: SliderProps) => {
  return (
    <div className='slider-container'>
      <input
        type={'range'}
        className='slider'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
