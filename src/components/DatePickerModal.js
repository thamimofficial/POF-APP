import dayjs from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';
import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker, { useDefaultStyles } from 'react-native-ui-datepicker';
import TimeData from '../data/TimeDate';
import styles from './DatePickerModel.styles';


const TodayDate = dayjs();
const ScrollableMonth = Array.from({ length: 10 }, (_, i) => TodayDate.add(i, 'month'));

const DatePickerModal = ({ visible, onClose, onSave, initialRange }) => {
  const defaultStyles = useDefaultStyles();
  
  const [range, setRange] = useState(initialRange || {
    startDate: TodayDate,
    endDate: TodayDate,
  });
  const [startTime, setStartTime] = useState('10:00AM');
  const [endTime, setEndTime] = useState('01:00PM');
  const [activeTimePicker, setActiveTimePicker] = useState(null);

  const { morningTimes, eveningTimes, nightTimes } = useMemo(() => ({

    morningTimes: TimeData.filter(item => item.period === 'morning'),
    eveningTimes: TimeData.filter(item => item.period === 'evening'),
    nightTimes: TimeData.filter(item => item.period === 'night'),
    
  }), []);

  const handleContinue = useCallback(() => {
    onSave({ ...range, startTime, endTime });
    onClose();
  }, [range, startTime, endTime, onSave, onClose]);

  const formatDateStr = (date) => (date ? dayjs(date).format('ddd, MMM DD') : 'Select Date');

  const handleDateChange = useCallback((params) => {
    setRange(params);
  }, []);

  const renderTimeSlot = (item) => {
    const isSelected = activeTimePicker === 'start' ? startTime === item.time : endTime === item.time;
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.gridTimeButton, isSelected && styles.selectedTimeButton]}
        onPress={() => {
          if (activeTimePicker === 'start') {
            setStartTime(item.time);
          } else {
            setEndTime(item.time);
          }
        }}
      >
        <Text style={[styles.gridTimeText, isSelected && styles.selectedGridTimeText]}>
          {item.time}
        </Text>
      </TouchableOpacity>
    );
  };

  const CalendarMonthCard = memo(({ item, range, onChange, defaultStyles }) => {
    return (
      <View style={styles.monthCard}>
        <Text style={styles.monthHeaderLabel}>{item.format('MMMM YYYY')}</Text> 
        <DateTimePicker
          mode="range"
          startDate={range.startDate}
          endDate={range.endDate}
          onChange={onChange}
          month={item.month()}
          year={item.year()}
          hideHeader={true}
          headerTextStyle={{ display: 'none' }}
          displayFullDays={false}
          styles={{ ...defaultStyles, ...styles.datePicker }}
          minDate={TodayDate.toDate()}
          allowRangeReset={true}
        />
      </View>
    );
  });

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalOverlay}>
        <View style={styles.container}>
          {activeTimePicker === null && (
            <>
              <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>Select Your Dates</Text>
                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              </View>
              
              <FlatList
                data={ScrollableMonth}
                keyExtractor={(item) => item.format('YYYY-MM')}
                renderItem={({ item }) => (
                  <CalendarMonthCard
                    item={item}
                    range={range}
                    onChange={handleDateChange}
                    defaultStyles={defaultStyles}
                  />
                )}
                initialNumToRender={2}
                windowSize={3}
                removeClippedSubviews={true}
              />

              <View style={styles.continueButtonContainer}>
                <View style={styles.timeContainer}>
                  <TouchableOpacity style={styles.timeButton} onPress={() => setActiveTimePicker('start')}>
                    <Text style={styles.timeLabelText}>Start Time</Text>
                    <Text style={styles.timeText}>{startTime}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.timeButton} onPress={() => setActiveTimePicker('end')}>
                    <Text style={styles.timeLabelText}>End Time</Text>
                    <Text style={styles.timeText}>{endTime}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                  <Text style={styles.continueButtonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {activeTimePicker !== null && (
            <View style={styles.fullScreenOverlayContainer}>
              <View style={styles.headerRow}>
                <Text style={styles.headerTitle}>
                  Select {activeTimePicker === 'start' ? 'Start' : 'End'} Time
                </Text>
                <TouchableOpacity onPress={() => setActiveTimePicker(null)}>
                  <Text style={styles.closeText}>Back</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.liveOverviewBox}>
                <View style={[styles.statusColumn, activeTimePicker === 'start' && styles.activeStatusColumn]}>
                  <Text style={styles.statusLabel}>START DATE & TIME</Text>
                  <Text style={styles.statusValueText}>{formatDateStr(range.startDate)}</Text>
                  <Text style={styles.statusTimeText}>{startTime}</Text>
                </View>
                <View style={styles.dividerArrowContainer}>
                  <Text style={{ color: '#666', fontSize: 18 }}>➔</Text>
                </View>
                <View style={[styles.statusColumn, activeTimePicker === 'end' && styles.activeStatusColumn]}>
                  <Text style={styles.statusLabel}>END DATE & TIME</Text>
                  <Text style={styles.statusValueText}>{formatDateStr(range.endDate)}</Text>
                  <Text style={styles.statusTimeText}>{endTime}</Text>
                </View>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.timeGridScrollContainer}>
                <Text style={styles.sectionHeader}>Morning</Text>
                <View style={styles.timeGrid}>{morningTimes.map(renderTimeSlot)}</View>
                <Text style={styles.sectionHeader}>Afternoon</Text>
                <View style={styles.timeGrid}>{eveningTimes.map(renderTimeSlot)}</View>
                <Text style={styles.sectionHeader}>Night</Text>
                <View style={styles.timeGrid}>{nightTimes.map(renderTimeSlot)}</View>
              </ScrollView>

              <View style={styles.confirmTimeActionRow}>
                <TouchableOpacity style={styles.continueButton} onPress={() => setActiveTimePicker(null)}>
                  <Text style={styles.continueButtonText}>Confirm Time</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;
