import React from 'react';
import { loaderRowStyle } from './styles';
import { Row, Space, Spin } from 'antd';

export default class LoaderComponent extends React.Component{
    render(){
        return(
          <Row style={loaderRowStyle} justify={'center'}> 
              <Space size="middle">
                  <Spin size="large" />
              </Space>
          </Row>
        );
    }
}