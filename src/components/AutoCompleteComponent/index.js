import React from 'react';
import { AutoComplete } from 'antd';
import {autoCompleteStyle} from './styles';
import PropTypes from 'prop-types';

class AutoCompleteComponent extends React.Component{
  
    onSearch = (searchText) => {
      const { data, onDeselectPlanet, armyNumber } = this.props;
      const filteredData = data.filter(item => item.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1 );

      if(filteredData.length === 0 || !searchText){
        onDeselectPlanet(armyNumber);
      }
    };
  
    onSelect = (data) => {
      const { onSelectPlanet, armyNumber } = this.props;
      onSelectPlanet(armyNumber, data);
    };
  
    // onChange = (data) => {
    //   console.log('ON CHANGE: ', data);
    // };

    render(){
      const { data } = this.props;
      
      return(
        <AutoComplete
            allowClear={true}
            backfill={true}
            style={autoCompleteStyle}
            options={data}
            placeholder="Select Planet"
            filterOption={(inputValue, option) => option.name.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            onSelect={this.onSelect}
            onSearch={this.onSearch}
            // onChange={this.onChange}
        />
      );
    }
}

AutoCompleteComponent.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectPlanet: PropTypes.func.isRequired,
  onDeselectPlanet: PropTypes.func.isRequired,
  armyNumber: PropTypes.number.isRequired
};

export default AutoCompleteComponent;