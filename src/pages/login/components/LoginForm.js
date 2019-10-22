import React, { Component } from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const {
      form: { validateFields },
    } = this.props
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const {
      form: {
        getFieldDecorator,
      },
    } = this.props

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 8 },
      },
    }

    return (
      <Form
        onSubmit={this.handleSubmit}
        {...formItemLayout}
      >
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password">
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
          >
            Login/Register
          </Button>
          <Link className={styles.FoundPwdLink} to="/home">Forget Password?</Link>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create({
  name: 'login',
})(LoginForm)

export default WrappedLoginForm
