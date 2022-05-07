import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const shopItemStyle = (x, y) =>
  StyleSheet.create({
    width: 60,
    height: 40,
    marginBottom: 20,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: x,
    left: y,
  });

export const appStyle = StyleSheet.create({
  heartButton: {
    width: 80,
    height: 50,
    position: 'absolute',
    top: '2%',
    left: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heartImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  priceText: {
    fontFamily: 'LightBeach',
    fontSize: 18,
    color: 'white',
  },
  turnText: {
    fontFamily: 'LightBeach',
    fontSize: 30,
    color: 'red',
  },
  shopItemImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  timeView: {
    width: '30%',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLabelText: {
    fontFamily: 'LightBeach',
    fontSize: 30,
    color: 'black',
  },
  timeText: {
    fontFamily: 'LightBeach',
    fontSize: 30,
    color: 'black',
  },
  winImage: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
  priceShopItemsImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  OKImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  inputStyle: {
    width: '60%',
    backgroundColor: '#eaeaea',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  backText: {
    position: 'absolute',
    paddingTop: 20,
    left: '5%',
    fontFamily: 'LightBeach',
    fontSize: 30,
    color: 'black',
  },
  labelText: {
    fontSize: 20,
    fontFamily: 'LightBeach',
    color: 'black',
  },
  homeView: {
    marginTop: 80,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  resultView: {
    width: '70%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  shopImgae: {
    width: 340,
    height: 400,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerImage: {
    width: windowWidth * 0.6,
    height: windowWidth * 0.6,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '3%',
    right: '0%',
  },
  stateResult: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: '0%',
    right: '8%',
    zIndex: 3,
  },
  playImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export const musicsStyle = StyleSheet.create({
  musicWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '50%',
  },
  musicButton: {
    padding: 10,
    backgroundColor: 'gray',
  },
  musicButtonTitle: {
    color: 'green',
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  land: {
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%',
  },
  children: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    elevation: 3,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    top: '10%',
    zIndex: 3,
    elevation: 3,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  buttonText: {
    backgroundColor: 'white',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: 'red',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'LightBeach',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
