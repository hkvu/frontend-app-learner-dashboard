import { shallow } from 'enzyme';

import { reduxHooks } from 'hooks';

import CourseCardBanners from '.';

jest.mock('./CourseBanner', () => 'CourseBanner');
jest.mock('./EntitlementBanner', () => 'EntitlementBanner');
jest.mock('./RelatedProgramsBanner', () => 'RelatedProgramsBanner');

jest.mock('hooks', () => ({
  reduxHooks: {
    useCardEnrollmentData: jest.fn(() => ({ isEnrolled: true })),
  },
}));

describe('CourseCardBanners', () => {
  const props = {
    cardId: 'test-card-id',
  };
  test('renders default CourseCardBanners', () => {
    const wrapper = shallow(<CourseCardBanners {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('render with isEnrolled false', () => {
    reduxHooks.useCardEnrollmentData.mockReturnValueOnce({ isEnrolled: false });
    const wrapper = shallow(<CourseCardBanners {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
