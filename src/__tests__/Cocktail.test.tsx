import React from 'react';
import Cocktail from '../views/Cocktail';
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

it("Cocktail renders correctly", () => {
  const cocktailWrapper = shallow(
    <Cocktail />
  );
  expect(cocktailWrapper).toMatchSnapshot();
});

it("renders with heading", () => {
    act(() => {
      render(<Cocktail />, container);
    });
    expect(container.textContent).toBe("Landing View")});