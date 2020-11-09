import React from 'react';
import { footerStyle } from './styles';
import { Layout } from 'antd';
import PropTypes from 'prop-types';


const { Footer } = Layout;

class FooterComponent extends React.Component{
    render(){
        const { content } = this.props;
        return(
          <Footer style={footerStyle}>{content}</Footer>
        );
    }
}

FooterComponent.propTypes = {
  content: PropTypes.string.isRequired
};

export default FooterComponent;