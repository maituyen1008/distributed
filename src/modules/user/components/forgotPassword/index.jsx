import React from 'react';
import { Col, Image, Row } from 'antd';
import StyleForgotPassword from './index.style';
import { IMAGES } from '../../../../constants';
import ForgotPasswordForm from '../screens/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <StyleForgotPassword>
      <Row justify='center' align='middle' className='forgot-password-row'>
        <Col span={15}>
          <Row className='forgot-password-container'>
            <Col span={12}>
              <Image src={IMAGES.drone} height='100%' />
            </Col>
            <Col className='forgot-password-form' span={12}>
              <ForgotPasswordForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyleForgotPassword>
  );
};

export default ForgotPassword;
