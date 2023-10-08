import {Dimensions} from 'react-native';
import theme from 'src/styles/theme';

const window = Dimensions.get('window');

const s1 = 8;
const s2 = 16;
const s3 = 24;

const sliderSizing = {
  itemMargin: s3,
  itemWidth: window.width - s2 * 2 - s3,
  carouselPadding: s1 * 1.5,
  offset: window.width - s2 * 2 - s3 + s1 * 1.5,
};

export default {
  sliderSizing,
  ww: window.width,
  wh: window.height,
  s1,
  s2,
  s3,
  fw: {
    width: '100%',
  },
  fsw: {
    width: window.width,
  },
  fh: {
    height: '100%',
  },
  fsh: {
    height: window.height,
  },
  p1: {
    padding: s1,
  },
  p2: {
    padding: s2,
  },
  p3: {
    padding: s3,
  },
  pt0: {
    paddingTop: 0,
  },
  pt1: {
    paddingTop: s1,
  },
  pt2: {
    paddingTop: s2,
  },
  pt3: {
    paddingTop: s3,
  },
  pr0: {
    paddingRight: 0,
  },
  pr1: {
    paddingRight: s1,
  },
  pr2: {
    paddingRight: s2,
  },
  pr3: {
    paddingRight: s3,
  },
  pb0: {
    paddingBottom: 0,
  },
  pb1: {
    paddingBottom: s1,
  },
  pb2: {
    paddingBottom: s2,
  },
  pb3: {
    paddingBottom: s3,
  },
  pl1: {
    paddingLeft: s1,
  },
  pl2: {
    paddingLeft: s2,
  },
  pl3: {
    paddingLeft: s3,
  },
  pv1: {
    paddingVertical: s1,
  },
  pv2: {
    paddingVertical: s2,
  },
  pv3: {
    paddingVertical: s3,
  },
  ph1: {
    paddingHorizontal: s1,
  },
  ph2: {
    paddingHorizontal: s2,
  },
  ph3: {
    paddingHorizontal: s3,
  },
  m1: {
    margin: s1,
  },
  m2: {
    margin: s2,
  },
  m3: {
    margin: s3,
  },
  mta: {
    marginTop: 'auto',
  },
  mt0: {
    marginTop: 0,
  },
  mt1: {
    marginTop: s1,
  },
  mt2: {
    marginTop: s2,
  },
  mt3: {
    marginTop: s3,
  },
  mra: {
    marginRight: 'auto',
  },
  mr1: {
    marginRight: s1,
  },
  mr2: {
    marginRight: s2,
  },
  mr3: {
    marginRight: s3,
  },
  mba: {
    marginBottom: 'auto',
  },
  mb0: {
    marginBottom: 0,
  },
  mb1: {
    marginBottom: s1,
  },
  mb2: {
    marginBottom: s2,
  },
  mb3: {
    marginBottom: s3,
  },
  mla: {
    marginLeft: 'auto',
  },
  ml1: {
    marginLeft: s1,
  },
  ml2: {
    marginLeft: s2,
  },
  ml3: {
    marginLeft: s3,
  },
  mv1: {
    marginVertical: s1,
  },
  mv2: {
    marginVertical: s2,
  },
  mv3: {
    marginVertical: s3,
  },
  mh1: {
    marginHorizontal: s1,
  },
  mh2: {
    marginHorizontal: s2,
  },
  mh3: {
    marginHorizontal: s3,
  },
  brSmall: {
    borderRadius: theme.borderRadiusSmall,
  },
  brNormal: {
    borderRadius: theme.borderRadiusNormal,
  },
  brLarge: {
    borderRadius: theme.borderRadiusLarge,
  },
  brCard: {
    borderRadius: theme.borderRadiusCard,
  },
  brTopCard: {
    borderTopLeftRadius: theme.borderRadiusCard,
    borderTopRightRadius: theme.borderRadiusCard,
  },
  brBottomCard: {
    borderBottomLeftRadius: theme.borderRadiusCard,
    borderBottomRightRadius: theme.borderRadiusCard,
  },
  fontSizeXL: {
    fontSize: theme.fontSizeExtraLarge,
  },
};
