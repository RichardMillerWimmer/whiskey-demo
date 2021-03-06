import React from 'react';
import Landing from '../views/Landing';
import {shallow, mount} from 'enzyme';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils'


let container: any = null;

beforeEach(() => {
  container = document.createElement('section');
  document.body.appendChild(container);
});
afterEach(() => {
  container.remove();
  container = null;
});

it("Landing renders correctly", () => {
  const landingWrapper = shallow(
    <Landing />
  );
  expect(landingWrapper).toMatchSnapshot();
});

it("renders with heading", () => {
  act(() => {
    render(<Landing />, container);
  });
  expect(container.textContent).toBe("Landing View")});