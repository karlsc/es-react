import { useState, useEffect } from 'react';
import FormButton from './FormButton';
import FormInput from './FormInput';
import '../style/App.scss';

const App = () => {
  // Update this value for a different amount of input fields
  const TOTAL_INPUTS = 3;
  const defaultHightlightRule = () => () => false;

  const [inputValues, setInputValues] = useState({});
  const [highlightRule, setHighlightRule] = useState(defaultHightlightRule);

  // Clear highlightRule on inputValues change
  useEffect(() => setHighlightRule(defaultHightlightRule), [inputValues]);

  // Create input instances with index for tracking
  const inputs = [];

  for (let i = 1; i <= TOTAL_INPUTS; i++) {
    inputs.push({ index: i });
  }

  // Button available rules
  const isBiggest = value => value === Math.max(...Object.values(inputValues));
  const isSmallest = value => value === Math.min(...Object.values(inputValues));
  const isOdd = value => Math.abs(value) % 2 === 1;
  const isEven = value => Math.abs(value) % 2 === 0;
  const isNegative = value => value < 0;

  // Create button instances
  const buttons = [
    {
      label: 'Biggest',
      rule: isBiggest
    }, {
      label: 'Smallest',
      rule: isSmallest
    }, {
      label: 'Odd',
      rule: isOdd
    }, {
      label: 'Even',
      rule: isEven
    }, {
      label: 'Negative',
      rule: isNegative
    }
  ];

  return (
    <div className="App">
      <div className="App__section">
        {
          inputs.map(({ index }) =>
            <FormInput
              key={index}
              setValue={(value) => setInputValues({ ...inputValues, [index]: value})}
              showHighlight={highlightRule(inputValues[index])}
            />
          )
        }
      </div>

      <div className="App__section">
        {
          buttons.map(({ label, rule }) => 
            <FormButton
              label={label}
              onClick={() => setHighlightRule(() => rule)} 
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
