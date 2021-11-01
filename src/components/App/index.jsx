import React, { useState } from 'react';
import './App.css';
import Button from '../Button';
import menu from '../../assets/menu.png';

const App = () => {
  const [value, setValue] = useState('0');
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [time, setTime] = useState(new Date());

  const handlePress = (content) => () => {
    const num = parseFloat(value);
    if (content === 'AC') {
      setValue('0');
      return;
    }

    if (content === '±') {
      setValue((num * -1).toString());
      return;
    }

    if (content === '%') {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === '+') {
      if (operator) {
        switch (operator) {
          case '+':
            setMemory(memory + parseFloat(value));
            break;
          case '=':
            setMemory(memory - parseFloat(value));
            break;
          case '×':
            setMemory(memory * parseFloat(value));
            break;
          case '÷':
            setMemory(memory / parseFloat(value));
            break;
          default:
            break;
        }
      } else {
        setMemory(parseFloat(value));
      }

      setValue('0');
      setOperator('+');
      return;
    }
    if (content === '−') {
      if (operator) {
        switch (operator) {
          case '+':
            setMemory(memory + parseFloat(value));
            break;
          case '=':
            setMemory(memory - parseFloat(value));
            break;
          case '×':
            setMemory(memory * parseFloat(value));
            break;
          case '÷':
            setMemory(memory / parseFloat(value));
            break;
          default:
            break;
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('−');
      return;
    }
    if (content === '×') {
      if (operator) {
        switch (operator) {
          case '+':
            setMemory(memory + parseFloat(value));
            break;
          case '=':
            setMemory(memory - parseFloat(value));
            break;
          case '×':
            setMemory(memory * parseFloat(value));
            break;
          case '÷':
            setMemory(memory / parseFloat(value));
            break;
          default:
            break;
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('×');
      return;
    }
    if (content === '÷') {
      if (operator) {
        switch (operator) {
          case '+':
            setMemory(memory + parseFloat(value));
            break;
          case '=':
            setMemory(memory - parseFloat(value));
            break;
          case '×':
            setMemory(memory * parseFloat(value));
            break;
          case '÷':
            setMemory(memory / parseFloat(value));
            break;
          default:
            break;
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue('0');
      setOperator('÷');
      return;
    }

    if (content === '.') {
      if (value.includes('.')) return;

      setValue(value + '.');
      return;
    }

    if (content === '=') {
      if (!operator) return;

      switch (operator) {
        case '+':
          setValue((memory + parseFloat(value)).toString());
          break;
        case '=':
          setValue((memory - parseFloat(value)).toString());
          break;
        case '×':
          setValue((memory * parseFloat(value)).toString());
          break;
        case '÷':
          setValue((memory / parseFloat(value)).toString());
          break;
        default:
          break;
      }

      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === '.') {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className='App'>
      <div className='top'>
        <div className='time'>
          {time.getHours().toString().padStart(2, '0')}:
          {time.getMinutes().toString().padStart(2, '0')}
        </div>
        <div className='menu'>
          <img src={menu} alt='' />
        </div>
      </div>
      <div className='display'>{value}</div>
      <div className='buttons'>
        <Button onButtonClick={handlePress} content='AC' type='function' />
        <Button onButtonClick={handlePress} content='±' type='function' />
        <Button onButtonClick={handlePress} content='%' type='function' />
        <Button onButtonClick={handlePress} content='÷' type='operator' />
        <Button onButtonClick={handlePress} content='7' />
        <Button onButtonClick={handlePress} content='8' />
        <Button onButtonClick={handlePress} content='9' />
        <Button onButtonClick={handlePress} content='×' type='operator' />
        <Button onButtonClick={handlePress} content='4' />
        <Button onButtonClick={handlePress} content='5' />
        <Button onButtonClick={handlePress} content='6' />
        <Button onButtonClick={handlePress} content='−' type='operator' />
        <Button onButtonClick={handlePress} content='1' />
        <Button onButtonClick={handlePress} content='2' />
        <Button onButtonClick={handlePress} content='3' />
        <Button onButtonClick={handlePress} content='+' type='operator' />
        <Button onButtonClick={handlePress} content='0' />
        <Button onButtonClick={handlePress} content='.' />
        <Button onButtonClick={handlePress} content='=' type='operator' />
      </div>
      <div className='bottom'>-</div>
    </div>
  );
};

export default App;
