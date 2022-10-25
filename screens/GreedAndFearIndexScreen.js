import { View, Text, StyleSheet } from 'react-native';
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
    DangerPath,
} from 'react-native-cool-speedometer';
import {COLORS} from '../components/constants';

import RNSpeedometer from 'react-native-speedometer'


// 0-25 Extreme Fear
// 25-46 Fear
// 46-54 Neutral
// 54-75 Greed
// 75-100 Extreme Greed

function GreedAndFearIndexScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Greed and Fear Index</Text>
            {/* <Speedometer
                value={98}
                min={0}
                max={100}
                angle={180}
                width={320}
                style={styles.speedometerStyle}
                lineCap={"square"}
                fontFamily='squada-one'
            >
                  <Background angle={180} />
  <Arc arcWidth={10} color="red" />
  {/* <DangerPath angle={40} arcWidth={10} /> 
  <Needle/>
  <Progress arcWidth={5} />
  <Marks step={12.5} />
  <Indicator>
  {(value, textProps) => (
      <Text
        {...textProps}
        fontSize={60}
        fill="#555"
        x={250 / 2}
        y={210}
        textAnchor="middle"
        fontFamily='squada-one'
      >
        {value}k/m
      </Text>
    )}
    </Indicator>
            </Speedometer> */}
            <RNSpeedometer value={98} size={290}
            wrapperStyle={styles.speedometerStyle}
            labels= {[
                {
                  name: 'Extreme Fear',
                  labelColor: COLORS.black,
                  activeBarColor: '#ff2900',
                },
                {
                  name: 'Fear',
                  labelColor: COLORS.black,
                  activeBarColor: '#ff5400',
                },
                {
                  name: 'Neutral',
                  labelColor: COLORS.black,
                  activeBarColor: '#f4ab44',
                },
                {
                  name: 'Greed',
                  labelColor: COLORS.black,
                  activeBarColor: '#14eb6e',
                },
                {
                  name: 'Extreme Greed',
                  labelColor: COLORS.black,
                  activeBarColor: '#00ff6b',
                },
              ]}
            />
         </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    speedometerStyle:{
        marginTop: 20,
        alignSelf: 'center',
    },
    textStyle:{
        fontSize: 25,
        fontWeight: '700',
        color: COLORS.primary
    }
});
export default GreedAndFearIndexScreen;