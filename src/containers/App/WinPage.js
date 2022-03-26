import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { SizedBox } from 'sizedbox';
import { appStyle } from './style';

function WinPage({ resultValue, handleClickBackButton }) {
  const onClickBackButton = () => {
    handleClickBackButton();
  };

  return (
    <View style={appStyle.homeView}>
      <SizedBox vertical={5} />
      <Image
        source={resultValue ? images.home.win : images.home.lose}
        style={appStyle.winImage}
      />
      <TouchableOpacity
        onPress={onClickBackButton}
        onLongPress={onClickBackButton}>
        <Image source={images.home.back} style={appStyle.OKImage} />
      </TouchableOpacity>
      <Image source={images.home.man} style={appStyle.footerImage} />
    </View>
  );
}

WinPage.propTypes = {
  resultValue: PropTypes.bool,
  handleClickBackButton: PropTypes.func,
};

export default connect()(WinPage);
