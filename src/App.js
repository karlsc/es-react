import { useState, useEffect } from 'react';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import './App.scss';

const App = () => {
  // Update this value for a different amount of input fields
  const TOTAL_INPUTS = 3;
  const defaultHightlightRule = () => () => false;

  const [inputValues, setInputValues] = useState({});
  const [highlightRule, setHighlightRule] = useState(defaultHightlightRule);

  const isBiggest = value => {
    console.log(value)
    return value === Math.max(...Object.values(inputValues).filter(Boolean));
  }
  const isSmallest = value => value === Math.min(...Object.values(inputValues).filter(Boolean));
  const isOdd = value => Math.abs(value) % 2 === 1;
  const isEven = value => Math.abs(value) % 2 === 0;
  const isNegative = value => value < 0;

  // Clear highlightRule on inputValues change
  useEffect(() => setHighlightRule(defaultHightlightRule), [inputValues]);

  const inputs = [];

  for (let i = 1; i <= TOTAL_INPUTS; i++) {
    inputs.push({ index: i });
  }

  return (
    <div className="App">
      {
        inputs.map(({ index }) =>
          <FormInput
            key={index}
            setValue={(value) => setInputValues({ ...inputValues, [index]: value})}
            showHighlight={highlightRule(inputValues[index])}
          />
        )
      }

      <FormButton
        label="Biggest"
        onClick={() => setHighlightRule(() => isBiggest)} 
      />
      <FormButton
        label="Smallest"
        onClick={() => setHighlightRule(() => isSmallest)}
      />
      <FormButton
        label="Odd"
        onClick={() => setHighlightRule(() => isOdd)}
      />
      <FormButton
        label="Even"
        onClick={() => setHighlightRule(() => isEven)}
      />
      <FormButton
        label="Negative"
        onClick={() => setHighlightRule(() => isNegative)}
      />
    </div>
  );
}

export default App;
