import { StyleSheet } from 'react-native';

export const bottlesStyle = x =>
  StyleSheet.create({
    transfrom: { rotate: '10deg' },
    width: 140,
    height: 160,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
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
  turnText: {
    fontFamily: 'LightBeach',
    fontSize: 30,
    color: 'red',
  },
  backText: {
    position: 'absolute',
    paddingTop: 20,
    left: '5%',
    fontFamily: 'LightBeach',
    fontSize: 30,
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
  bottlesView: {
    width: '100%',
    height: 370,
    alignItems: 'center',
    paddingLeft: 30,
    justifyContent: 'center',
  },
  bottlesImage: {
    width: 100,
    height: 170,
    resizeMode: 'contain',
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
    width: 150,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 2,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
});
