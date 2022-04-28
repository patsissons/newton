import {mount} from '@shopify/react-testing';

import {App} from './App';

describe('<App/>', () => {
  it('renders', () => {
    const wrapper = mount(<App />);

    expect(wrapper).toContainReactText('newton');
  });
});
