import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  filterContainer: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(160, 89, 89, 0.2)',
    marginVertical: 1,
    flexDirection: 'row', alignContent: 'center',
    alignItems: 'center',
    gap: 10,
    justifyContent:'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000000',
    letterSpacing: -0.5,
    fontFamily: 'Inter-Bold'
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6d6b6b',
    marginTop: 2,
    fontFamily: 'Inter-Bold'

  },
  closeButton: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
  },
  cardContent: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 20,
    fontFamily: 'Inter-ExtraBold',
    color: '#000',
  },
  modelText: {
    fontWeight: '400',
    color: '#545252',
        fontFamily: 'Inter-SemiBold',

  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    lineHeight: 20,
    fontFamily:'Inter-Regular'
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: '#635b5b',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#f0f5f8',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 14,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#dfc856',
  },
  perDay: {
    fontSize: 13,
    fontFamily: 'Inter-Bold',
    color: '#777474',
  },
});