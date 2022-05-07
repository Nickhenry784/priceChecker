import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { images } from 'assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeSelectIsShowShopping, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import saga from './saga';
import reducer from './reducer';
import Layout from './Layout';
import Payment from './Payment';
import HomePage from './HomePage';
import { setShowShopping, setTurn } from './actions';

const key = 'App';
const STORAGE_TURN = '@turn';

function App({ dispatch, turn, isShowShopping }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const onSetShowShopping = () => {
    dispatch(setShowShopping(!isShowShopping));
  };

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_TURN);
      console.log(value);

      if (value === null) {
        dispatch(setTurn(10));
      }

      if (value !== null) {
        dispatch(setTurn(value));
      }
    } catch (e) {
      alert('Failed to fetch the input from storage');
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <Layout turn={turn}>
      {isShowShopping ? (
        <TouchableOpacity
          onPress={onSetShowShopping}
          onLongPress={onSetShowShopping}
          style={appStyle.heartButton}>
          <Text style={appStyle.backText}>Back</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={onSetShowShopping}
          onLongPress={onSetShowShopping}
          style={appStyle.heartButton}>
          <Image source={images.home.turn} style={appStyle.heartImage} />
          <Text style={appStyle.turnText}>{turn}</Text>
        </TouchableOpacity>
      )}
      {isShowShopping ? <Payment /> : <HomePage />}
    </Layout>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.any,
  isShowShopping: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  isShowShopping: makeSelectIsShowShopping(),
});

export default connect(mapStateToProps)(App);
