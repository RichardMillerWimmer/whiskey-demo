import React from 'react';
import Cocktail from '../views/Cocktail';
import {shallow, mount} from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

it("Landing renders correctly", () => {
  const cocktailWrapper = shallow(
    <Cocktail />
  );
  expect(cocktailWrapper).toMatchSnapshot();
});