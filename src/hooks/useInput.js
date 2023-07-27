import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    try {
      setValue(target.value);
    } catch (error) {
      setValue('');
    }
  }

  return [value, setValue];
}

export default useInput;
