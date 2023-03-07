/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render} from '@testing-library/react'
import List from './index'

const getPokemon = require('./index')

it("renders homepage unchanged", () => {
  const { container } = render(<List />)
  expect(container).toMatchSnapshot()
});
