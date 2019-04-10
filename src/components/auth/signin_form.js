import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { renderTextField } from './form_helpers'
import Button from '@material-ui/core/Button'


class SigninForm extends Component {

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div>
        {this.renderAlert()}
        <form onSubmit={handleSubmit}>

          <Field
            name="email"
            component={renderTextField}
            type="text"
            placeholder="First Name"
            />

          <Field
            name="password"
            component={renderTextField}
            type="password"
            placeholder="Password"/>

          <Button
            variant="raised"
            color="primary"
            type="submit">
            Sign In
          </Button >
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm)
