import { render, screen } from '@testing-library/react';
//import Jest snapshot renderer 
import renderer from 'react-test-renderer'
import App from './App';

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
