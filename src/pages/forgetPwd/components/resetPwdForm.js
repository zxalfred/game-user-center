import React, { Component } from 'react'
import {
  Form,
  Input,
  Button,
  Row,
  Col,
} from 'antd'
import styles from './style.module.scss'

class ResetPwdForm extends Component {
  state = {
    confirmDirty: false,
  }

  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  }

  tailFormItemLayout = {
    wrapperCol: {
      span: 24,
    },
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      form: {
        validateFields,
      },
    } = this.props
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = (e) => {
    const { value } = e.target
    const { confirmDirty } = this.state
    this.setState({
      confirmDirty: confirmDirty || !!value,
    })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    const { confirmDirty } = this.state
    if (value && confirmDirty) {
      form.validateFields(['confirm'], {
        force: true,
      })
    }
    callback()
  }

  render() {
    const {
      form: {
        getFieldDecorator,
      },
    } = this.props


    return (
      <Form
        {...this.formItemLayout}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input className={styles.EmailInput} />)}
        </Form.Item>
        <Form.Item
          label="Captcha"
          extra="We must make sure that you are yourself."
        >
          <Row gutter={8}>
            <Col span={18}>
              {getFieldDecorator('captcha', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the captcha you got!',
                  },
                ],
              })(<Input />)}
            </Col>
            <Col span={6}>
              <Button className={styles.CusButton}>
                Send Email
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label="New Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...this.tailFormItemLayout}>
          <Row>
            <Col span={8} offset={8}>
              <Button
                className={styles.CusButton}
                size="large"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedResetPwdForm = Form.create({
  name: '',
})(ResetPwdForm)

export default WrappedResetPwdForm
