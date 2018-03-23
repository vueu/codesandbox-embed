import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CodeSandbox from '../';

enzyme.configure({ adapter: new Adapter() });

describe('root component', () => {
  it('should render', () => {
    const wrapper = shallow(<CodeSandbox id="nkpj59yz44" />);

    expect(wrapper).toBeTruthy();
  });
  it('should throw provided that the sandbox does not exist and precheck is true', () => {
    const wrapper = shallow(<CodeSandbox id="abcd" prefetch />);
  });
});
