import React from 'react';
import { Col, Image, Row } from 'antd';
import StyleRegister from './index.style';
import { IMAGES } from '../../../../constants';
import RegisterForm from '../screens/RegisterForm';

const Register = () => {
  return (
    <StyleRegister>
      <Row justify='center' align='middle' className='register-row'>
        <Col span={15}>
          <Row className='register-container'>
            <Col span={12}>
              <Image src={IMAGES.drone} height='100%' />
            </Col>
            <Col className='register-form' span={12}>
              <RegisterForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyleRegister>
  );
};

export default Register;
