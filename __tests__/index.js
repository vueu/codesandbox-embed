const React = require('react');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const CodeSandbox = require('../build/codesandbox-embed');

const { shallow } = enzyme;

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
