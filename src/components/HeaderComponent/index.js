import React from 'react';
import { headerStyle, headerTitleStyle, headerButtonStyle } from './styles';
import { Layout, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header } = Layout;
const { Title } = Typography;

class HeaderComponent extends React.Component{
    render(){
        const { title, button } = this.props;

        return(
          <Header Layout="horizontal" style={headerStyle}>
            <Title level={3} style={headerTitleStyle}>{title}</Title>
            <Link to={{ pathname: button.link }} target="_blank">
              <Button type="primary" style={headerButtonStyle} ghost>{button.title}</Button>
            </Link>
          </Header>
        );
    }
}

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.object.isRequired
};

export default HeaderComponent