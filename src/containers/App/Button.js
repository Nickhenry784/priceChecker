import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { images } from 'assets/images';
import { buttonStyle } from './style';
import dataBuys from './data/buys';

function Button({ type, item, onClick }) {
  const onPressButton = () => {
    onClick(item.sku);
  };

  return item?.value ? (
    <ImageBackground style={buttonStyle.button} source={images.home.buybutton}>
      <TouchableOpacity onPress={onPressButton} onLongPress={onPressButton}>
        <>
          <Text style={buttonStyle.text}>{`${item?.value} ${type}`}</Text>
          <Text style={buttonStyle.textSmall}>{item?.localizedPrice}</Text>
        </>
      </TouchableOpacity>
    </ImageBackground>
  ) : null;
}

Button.propTypes = {
  type: PropTypes.oneOf(['TURN']),
  item: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
