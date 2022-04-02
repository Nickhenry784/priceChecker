import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Text,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { FlatList } from 'react-native-gesture-handler';
import { randomIntFromInterval } from 'utils/number';
import { makeSelectTurn } from './selectors';
import { appStyle } from './style';
import PricePage from './PricePage';
import { listMenu } from './data/menu';
import { decrementTurn } from './actions';

function HomePage({ dispatch, turn }) {
  const [play, setPlay] = useState(false);
  const [priceChecker, setPriceChecker] = useState(false);
  const [time, setTime] = useState(30);
  const [listPrice, setListPrice] = useState([]);
  const [winPageState, setWinPageState] = useState(false);
  const [resultValue, setResultValue] = useState(0);
  const [okButton, setOkButton] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (play && time > 0) {
        setTime(time - 1);
      }
      if (play && time === 0) {
        setPriceChecker(true);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time, play]);

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrementTurn());
    setOkButton(true);
    setPlay(true);
    const list = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < listMenu.length; index++) {
      const element = listMenu[index];
      const listItem = {
        id: index + 1,
        title: element,
        price: randomIntFromInterval(10, 99),
      };
      list.push(listItem);
    }
    setListPrice(list);
  };

  const hanldeWinGame = value => {
    setResultValue(value);
    setPriceChecker(false);
    setTime(30);
    setPlay(false);
    setOkButton(false);
    setWinPageState(true);
  };

  const onClickOkButton = () => {
    setTime(0);
    setPriceChecker(true);
  };

  const onClickReplayButton = () => {
    setWinPageState(false);
    setResultValue(0);
  };

  const renderItem = ({ item, index }) => (
    <View style={appStyle.itemView}>
      <View style={appStyle.itemMenuText}>
        <Text style={appStyle.itemText}>{item}</Text>
      </View>
      {play && (
        <Text style={appStyle.itemText}>{`$${listPrice[index].price}`}</Text>
      )}
    </View>
  );

  return priceChecker ? (
    <PricePage priceItems={listPrice} handlePriceChecker={hanldeWinGame} />
  ) : (
    <View style={appStyle.homeView}>
      <Text style={play ? appStyle.timeText : appStyle.menuText}>
        {play ? time : 'MENU MEMORY'}
      </Text>
      <Image source={images.home.item4} style={appStyle.item4Image} />
      <View style={appStyle.bottomView}>
        <View style={appStyle.leftBottomView}>
          <Image source={images.home.item1} style={appStyle.item1Image} />
          <Image source={images.home.item2} style={appStyle.item2Image} />
          <Image source={images.home.item3} style={appStyle.item3Image} />
          <Image source={images.home.item5} style={appStyle.item5Image} />
        </View>
        <View style={appStyle.rightBottomView}>
          <ImageBackground
            source={images.home.frame}
            style={appStyle.frameImage}>
            <FlatList
              data={listMenu}
              renderItem={(item, index) => renderItem(item, index)}
              scrollEnabled
              keyExtractor={(item, index) => index}
            />
          </ImageBackground>
          <TouchableOpacity
            onPress={okButton ? onClickOkButton : onClickPlayButton}
            onLongPress={okButton ? onClickOkButton : onClickPlayButton}>
            <Image
              source={okButton ? images.home.ok : images.home.play}
              style={appStyle.playImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      {winPageState && (
        <ImageBackground
          source={images.home.popupwin}
          style={appStyle.winImage}>
          <View style={appStyle.scoreView}>
            <Text style={appStyle.scoreWin}>{resultValue}</Text>
            <TouchableOpacity
              onPress={onClickReplayButton}
              onLongPress={onClickReplayButton}>
              <Image source={images.home.replay} style={appStyle.playImage} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(HomePage);
