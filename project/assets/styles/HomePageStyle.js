import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  style: {
    padding: 15,
    backgroundColor: '#eff2fa',
    borderRadius: 20,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
    width: 'auto',
    // backgroundColor: 'lightblue',
  },
  leftaero: {
    justifyContent: 'center',
    width: 25,
    height: 25,
  },
  dots: {
    width: 35,
    height: 35,
  },
  textprofile: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileimg: {
    justifyContent: 'space-around',
    width: 100,
    height: 100,
    marginTop: 20,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profiletxt: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 10,
  },
  subprofiletxt: {
    fontSize: 18,
    padding: 4,
    opacity: 0.6,
  },
  countbadgeflex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    // backgroundColor: 'lightblue',
  },
  countphotos: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counttext: {
    fontSize: 20,
    opacity: 0.6,
  },
  countsubtext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gallaryflex: {
    flexDirection: 'row',
    width: 'auto',
    padding: 15,
    paddingTop: 0,
  },
  gallery1: {
    borderRadius: 12,
    height: 320,
    flex: 1,
    padding: 10,
  },
  gallery2: {
    flexDirection: 'column',
    borderRadius: 12,
    height: 320,
    flex: 1,
  },
  gallaryimg1: {
    overflow: 'hidden',
    width: 'auto',
    height: 300,
    borderRadius: 30,
  },
  gallaryimg2: {
    overflow: 'hidden',
    width: 'auto',
    height: 140,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
  },
});
