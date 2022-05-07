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
import { randomIntFromInterval } from 'utils/number';
import { shopData } from './data/shop';
import { makeSelectTurn } from './selectors';
import { appStyle, shopItemStyle } from './style';
import PricePage from './PricePage';
import WinPage from './WinPage';

function HomePage({ dispatch, turn }) {
  const [play, setPlay] = useState(false);
  const [priceChecker, setPriceChecker] = useState(false);
  const [time, setTime] = useState(100);
  const [listPrice, setListPrice] = useState([]);
  const [shopItems, setShopItems] = useState([]);
  const [winPageState, setWinPageState] = useState(false);
  const [resultValue, setResultValue] = useState(true);

  useEffect(() => {
    const timeCountDown = 10;
    const timeOut = setTimeout(() => {
      if (play && time > 0) {
        const list = [...listPrice];
        setTime(time - timeCountDown);
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < shopData.length; index++) {
          const priceItems = randomIntFromInterval(1, 150);
          list.push(priceItems);
          setListPrice(list);
        }
      }
    }, timeCountDown);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time, play]);

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setPlay(true);
  };

  const onClickContinueButton = () => {
    setPriceChecker(true);
    const list = [...shopItems];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < shopData.length; index++) {
      const priceItems = {
        id: shopData[index].id,
        image: shopData[index].imageLink,
        price: listPrice[index],
      };
      list.push(priceItems);
      setShopItems(list);
    }
  };

  const handleLosePriceItem = value => {
    setPriceChecker(false);
    setWinPageState(true);
    setResultValue(value);
  };

  const handleClickBackButton = () => {
    setWinPageState(false);
    setPlay(false);
    setTime(100);
    setListPrice([]);
    setShopItems([]);
  };

  return priceChecker ? (
    <PricePage
      priceItems={shopItems}
      handlePriceChecker={handleLosePriceItem}
    />
  ) : (
    <>
      {winPageState ? (
        <WinPage
          resultValue={resultValue}
          handleClickBackButton={handleClickBackButton}
        />
      ) : (
        <View style={appStyle.homeView}>
          <SizedBox vertical={5} />
          {play && (
            <Text style={appStyle.labelText}>
              Plz Remember Price of items on the shop
            </Text>
          )}
          <TouchableOpacity
            onPress={play ? onClickContinueButton : onClickPlayButton}
            onLongPress={play ? onClickContinueButton : onClickPlayButton}>
            <Image
              source={play ? images.home.continue : images.home.start}
              style={appStyle.playImage}
            />
          </TouchableOpacity>
          <ImageBackground source={images.home.shop} style={appStyle.shopImgae}>
            {shopData.map((item, index) => (
              <View style={shopItemStyle(item.top, item.left)} key={item.id}>
                {play && (
                  <Text style={appStyle.priceText}>
                    {`$${listPrice[index]}`}
                  </Text>
                )}
                <Image source={item.imageLink} style={appStyle.shopItemImage} />
              </View>
            ))}
          </ImageBackground>
          <Image source={images.home.man} style={appStyle.footerImage} />
        </View>
      )}
    </>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(HomePage);
