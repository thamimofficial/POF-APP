import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { useDefaultStyles } from 'react-native-ui-datepicker';
import color from '../../constants/color';

const profile = () => {
  const defaultStyles = useDefaultStyles();
  const today = dayjs();
console.log("Today",today)
  const [range, setRange] = useState({
    startDate: null,
    endDate: null,
  });

const scrollableMonths = useMemo(() => {
  let monthsArray = [];
  
  for (let i = 0; i < 10; i++) {
    monthsArray.push(today.add(i, 'month'));
  }
  return monthsArray;
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Select Your Dates</Text>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {scrollableMonths.map((monthDate, index) => {
          return (
            <View key={index} style={styles.monthCard}>
              {/* This is your clean, custom text layout showing ONLY the month name */}
              <Text style={styles.monthHeaderLabel}>
                {monthDate.format('MMMM YYYY')}
              </Text>
              
              <DateTimePicker
                mode="range"
                startDate={range.startDate}
                endDate={range.endDate}
                onChange={(params) => {setRange(params)
                  console.log(params)
                }}
                month={monthDate.month()} 
                year={monthDate.year()}
hideHeader={true}
                headerTextStyle={{ display: 'none' }}
                displayFullDays={false} 
                 styles={{
        ...defaultStyles,
        today: { borderColor: color.primary, borderWidth: 1 }, // Add a border to today's date
        selected: { backgroundColor: color.primary }, // Highlight the selected day
        selected_label: { color: 'white' }, // Highlight the selected day label
      }}
                minDate={today.toDate()} 
                allowRangeReset={true}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.continueButtonContainer}>
       <TouchableOpacity style={styles.continueButton}>
        <Text>Continue</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: color.BgColor, 
    paddingTop: 50 
  },
  headerTitle: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  monthCard: {
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 15,
  },
  monthHeaderLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 15,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  continueButtonContainer:{

  },
  continueButton:{

  }
});
