import React from 'react';
import Landing from '../views/Landing';
import {shallow, mount} from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

it("Landing renders correctly", () => {
  const landingWrapper = shallow(
    <Landing />
  );
  expect(landingWrapper).toMatchSnapshot();
});