import React from 'react'
import TextField from '@material-ui/core/TextField'

export const renderTextField = ({input, type, placeholder, meta: {touched, error}, ...custom}) => (  
  // Define stateless component to render input and errors
  <div>
    <TextField
      type={type}
      placeholder={placeholder}
      {...input}
      {...custom}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
)
