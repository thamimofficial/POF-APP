import color from "@/constants/color";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },

  container: {
    height: '100%',
    backgroundColor: color.BgColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },

  datePicker: {
    today: {
      borderColor: color.primary,
      borderWidth: 1,
    },

    selected: {
      backgroundColor: color.primary,
    },

    selected_label: {
      color: 'white',
    },
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  closeText: {
    color: color.primary,
    fontSize: 16,
    fontWeight: '600',
  },

  scrollContainer: {
    paddingBottom: 40,
    paddingHorizontal: 10,
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

  continueButtonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: color.BgColor,
  },

  continueButton: {
    backgroundColor: color.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 10,
  },

  timeButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: color.primary,
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  timeLabelText: {
    color: '#aaa',
    fontSize: 11,
    textTransform: 'uppercase',
  },

  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: color.primary,
    marginTop: 2,
  },

  /* FULL MODEL VIEW DESIGN */
  fullScreenOverlayContainer: {
    flex: 1,
    backgroundColor: color.BgColor,
  },

  liveOverviewBox: {
    flexDirection: 'row',
    backgroundColor: '#1c1c1e',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2c2c2e',
    alignItems: 'center',
  },

  statusColumn: {
    flex: 2,
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 8,
  },

  activeStatusColumn: {
    borderWidth: 1,
    borderColor: '#444',
  },

  dividerArrowContainer: {
    flex: 0.5,
    alignItems: 'center',
  },

  statusLabel: {
    color: '#8e8e93',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 4,
  },

  statusValueText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },

  statusTimeText: {
    color: color.primary,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 2,
  },

  timeGridScrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gridTimeButton: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#fafaff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1c1c1e',
  },

  selectedTimeButton: {
    borderColor: color.primary,
    backgroundColor: color.primary,
  },

  gridTimeText: {
    color: '#aeaeb2',
    fontSize: 15,
    fontWeight: '500',
  },

  selectedGridTimeText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  confirmTimeActionRow: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: color.BgColor,
  },
});