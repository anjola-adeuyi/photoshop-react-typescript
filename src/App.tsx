import React, { useState } from 'react';
import './App.css';
import SidebarItem from './components/SidebarItem';
import Slider from './components/Slider';

const DEFAULT_OPTIONS: OptionsType[] = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  },
];

export interface OptionsType {
  name: string;
  property: string;
  value: number;
  range: Range;
  unit: string;
}

export interface Range {
  min: number;
  max: number;
}

function App() {
  const [options, setOptions] = useState<OptionsType[]>(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = (event: any) => {
    const newOptions = options.map((option, index) => {
      if (index === selectedOptionIndex) {
        return {
          ...option,
          value: event.target.value,
        };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const getImageStyle = () => {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(' ') };
  };

  return (
    <div className='container'>
      <div className='main-image' style={getImageStyle()} />
      <div className='sidebar'>
        {options?.map((option, index) => {
          return (
            <SidebarItem
              key={index}
              name={option.name}
              active={index === selectedOptionIndex}
              handleClick={() => setSelectedOptionIndex(index)}
            />
          );
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
