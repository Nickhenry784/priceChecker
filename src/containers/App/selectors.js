import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeSelectIsShowShopping = () =>
  createSelector(selectGlobal, state => state.isShowShopping);

const makeSelectIsPlayState = () =>
  createSelector(selectGlobal, state => state.isPlayState);

const makeSelectShopItems = () =>
  createSelector(selectGlobal, state => state.shopItem);

export {
  makeSelectGlobal,
  makeSelectTurn,
  makeSelectIsShowShopping,
  makeSelectIsPlayState,
  makeSelectShopItems,
};
