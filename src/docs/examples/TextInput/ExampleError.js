import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Error TextInput*/
export default function ExampleError() {
  return(
    <TextInput
      htmlId='example-optional'
      label='First Name'
      name='firstname'
      placeholder='First Name ...'
      error='This is an error'
      required
      onChange={() => {}}
    />
  )
}
