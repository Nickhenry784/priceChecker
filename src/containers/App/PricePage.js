import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { SizedBox } from 'sizedbox';
import { randomIntFromInterval } from 'utils/number';
import { appStyle } from './style';

function PricePage({ dispatch, priceItems, handlePriceChecker }) {
  const index = useRef(0);
  const [priceItem, setPriceItem] = useState(priceItems[0]);
  const [score, setScore] = useState(0);
  const [randomResultPrice, setRandomResultPrice] = useState(
    randomIntFromInterval(0, 3),
  );
  const [answerPrice, setAnswerPrice] = useState([
    randomIntFromInterval(5, 99),
    randomIntFromInterval(10, 99),
    randomIntFromInterval(15, 99),
    priceItems[0].price,
  ]);
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time === 0) {
        handlePriceChecker(score);
      }
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);

  const onClickAnswerButton = value => {
    if (index.current === priceItems.length - 1) {
      handlePriceChecker(score);
      setScore(score + 1);
      return false;
    }
    if (value === randomResultPrice) {
      setScore(score + 1);
      index.current += 1;
      setPriceItem(priceItems[index.current]);
      setRandomResultPrice(randomIntFromInterval(0, 3));
      setAnswerPrice([
        randomIntFromInterval(5, 99),
        randomIntFromInterval(10, 99),
        randomIntFromInterval(15, 99),
        priceItems[index.current].price,
      ]);
      setTime(10);
    } else {
      handlePriceChecker(score);
    }
  };

  return (
    <View style={appStyle.homeView}>
      <Text style={appStyle.scoreText}>{`Score: ${score}`}</Text>
      <Text style={appStyle.timeText}>{time}</Text>
      <SizedBox vertical={5} />
      <Text style={appStyle.labelText}>{priceItem.title}</Text>
      <SizedBox vertical={10} />
      <View style={appStyle.answerView}>
        <View style={appStyle.answerABView}>
          <TouchableOpacity
            style={appStyle.answerButton}
            onPress={() => onClickAnswerButton(0)}>
            <Text style={appStyle.priceText}>
              {`A. $${
                randomResultPrice === 0 ? answerPrice[3] : answerPrice[0]
              }`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyle.answerButton}
            onPress={() => onClickAnswerButton(1)}>
            <Text style={appStyle.priceText}>
              {`B. $${
                randomResultPrice === 1 ? answerPrice[3] : answerPrice[1]
              }`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={appStyle.answerABView}>
          <TouchableOpacity
            style={appStyle.answerButton}
            onPress={() => onClickAnswerButton(2)}>
            <Text style={appStyle.priceText}>
              {`C. $${
                randomResultPrice === 2 ? answerPrice[3] : answerPrice[2]
              }`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={appStyle.answerButton}
            onPress={() => onClickAnswerButton(3)}>
            <Text style={appStyle.priceText}>
              {`D. $${
                randomResultPrice === 3 ? answerPrice[3] : answerPrice[2]
              }`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

PricePage.propTypes = {
  dispatch: PropTypes.func,
  priceItems: PropTypes.array,
  handlePriceChecker: PropTypes.func,
};

export default connect()(PricePage);
