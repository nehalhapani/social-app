import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  style: {
    padding: 15,
    paddingBottom: 0,
    backgroundColor: '#eff2fa',
    borderRadius: 20,
  },
  countbadgeflex: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  countphotos: {
    height: 100,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  counttext: {
    fontSize: 20,
    opacity: 0.6,
  },
  countsubtext: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  profileimg: {
    justifyContent: 'space-around',
    width: 100,
    height: 100,
  },
  searchview: {
    flexDirection: 'row',
    marginTop: 25,
    padding: 3,
    borderRadius: 48,
    backgroundColor: 'powderblue',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowColor: '#000',
    elevation: 5,
  },
  iconsearch: {
    marginTop: 3,
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  inputtext: {
    borderRadius: 3,
    borderStyle: 'solid',
    fontSize: 20,
  },
  imgfeed: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  gallaryflex: {
    flexDirection: 'row',
    width: 'auto',
  },
  gallery1: {
    borderRadius: 12,
    height: 320,
    flex: 1,
  },
  gallaryimg1: {
    overflow: 'hidden',
    width: 'auto',
    height: 320,
    borderRadius: 30,
  },
  profileimgbottom: {
    justifyContent: 'space-between',
    width: 90,
    height: 90,
    marginLeft: 10,
  },
  counttextbottom: {
    fontSize: 19,
    opacity: 0.6,
  },
  dots: {
    marginTop: 25,
    width: 35,
    height: 35,
  },
  bottomview: {
    backgroundColor: 'lightgray',
    borderRadius: 28,
  },
});
