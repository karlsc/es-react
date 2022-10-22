import { useState, useEffect } from 'react';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import './App.scss';

const App = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [values, setValues] = useState([]);
  const [highlightRule, setHighlightRule] = useState(() => () => false);

  const isBiggest = value => value === Math.max(...[firstValue, secondValue, thirdValue].filter(Boolean));

  const isSmallest = value => value === Math.min(...[firstValue, secondValue, thirdValue].filter(Boolean));

  const isOdd = value => Math.abs(value) % 2 === 1;

  const isEven = value => Math.abs(value) % 2 === 0;

  const isNegative = value => value < 0;

  useEffect(() => {
    setHighlightRule(() => () => false);
  }, [firstValue, secondValue, thirdValue]);

  const inputs = [];

  for (let i = 0; i <= 3; i++) {
    inputs.push(<input
      key={i}
      onChange={(event) => setValues(() => {
        const index = values.findIndex((value) => value.index === i);

        if (index >= 0) {
          return values.splice(index, 1, {
            value: event.target.value,
            index: i
          })
        } else {
          return [{
            value: event.target.value,
            index: i
          }]
        }
      })}
      showHighlight={highlightRule(thirdValue)}
    />)
  }

  return (
    <div className="App">
      {
        inputs.map((input) => input)
      }
      {/* <FormInput
        setValue={setFirstValue}
        showHighlight={highlightRule(firstValue)}
      />
      <FormInput
        setValue={setSecondValue}
        showHighlight={highlightRule(secondValue)}
      />
      <FormInput
        setValue={setThirdValue}
        showHighlight={highlightRule(thirdValue)}
      /> */}
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
