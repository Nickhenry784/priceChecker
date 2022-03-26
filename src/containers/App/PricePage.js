import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { SizedBox } from 'sizedbox';
import { appStyle } from './style';
import { decrementTurn } from './actions';

function PricePage({ dispatch, priceItems, handlePriceChecker }) {
  const [inputText, setInputText] = useState('');
  const [time, setTime] = useState(10000);
  const index = useRef(0);

  useEffect(() => {
    const timeCountDown = 1000;
    const timeDown = setTimeout(() => {
      if (time > 0) {
        setTime(time - timeCountDown);
      }
      if (time === 0) {
        if (index.current === priceItems.length - 1) {
          handlePriceChecker(true);
        } else if (Number(inputText) === priceItems[index.current].price) {
          index.current += 1;
          setTime(10000);
          setInputText('');
        } else {
          handlePriceChecker(false);
          dispatch(decrementTurn());
        }
      }
    }, timeCountDown);
    return () => {
      clearTimeout(timeDown);
    };
  }, [time]);

  const onSubmitInputText = () => {
    setTime(0);
  };

  const onClickOKButton = () => {
    setTime(0);
  };

  return (
    <View style={appStyle.homeView}>
      <View style={appStyle.timeView}>
        <Text style={appStyle.timeLabelText}>Time: </Text>
        <Text style={appStyle.timeText}>{time / 1000}</Text>
      </View>
      <SizedBox vertical={5} />
      <Text style={appStyle.timeLabelText}>Price</Text>
      <Image
        style={appStyle.priceShopItemsImage}
        source={priceItems[index.current].image}
      />
      <TextInput
        style={appStyle.inputStyle}
        onChangeText={setInputText}
        value={inputText}
        keyboardType="numeric"
        onSubmitInputText={onSubmitInputText}
      />
      <TouchableOpacity onPress={onClickOKButton} onLongPress={onClickOKButton}>
        <Image source={images.home.ok} style={appStyle.OKImage} />
      </TouchableOpacity>
      <Image source={images.home.man} style={appStyle.footerImage} />
    </View>
  );
}

PricePage.propTypes = {
  dispatch: PropTypes.func,
  priceItems: PropTypes.array,
  handlePriceChecker: PropTypes.func,
};

export default connect()(PricePage);
