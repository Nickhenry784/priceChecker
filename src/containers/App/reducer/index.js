/* eslint-disable no-param-reassign */
import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SET_TURN,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_SHOW_SHOPPING,
  SET_PLAY_STATE,
  SET_SHOP_ITEM,
} from '../constants';

export const initialState = {
  turn: 10,
  isShowShopping: false,
  backgroundType: 'default',
  isPlayState: false,
  shopItem: [],
};

export default (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case SET_SHOW_SHOPPING:
        draft.isShowShopping = action.isShowShopping;
        break;

      case SET_TURN:
        draft.turn = action.turn;
        break;

      case SET_SHOP_ITEM:
        draft.shopItem = action.shopItem;
        break;

      case SET_PLAY_STATE:
        draft.isPlayState = action.isPlayState;
        break;

      case INCREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(action.amount) + Number(draft.turn)),
        );
        draft.turn += Number(action.amount);
        break;

      case DECREMENT_TURN:
        AsyncStorage.setItem(
          '@turn',
          JSON.stringify(Number(draft.turn) - Number(action.amount)),
        );
        draft.turn -= Number(action.amount);
        break;
    }
  });
