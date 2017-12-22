import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Required TextInput*/
export default function ExampleRequired() {
  return(
    <TextInput
      htmlId='example-optional'
      label='First Name'
      name='firstname'
      required
      onChange={() => {}}
    />
  )
}
