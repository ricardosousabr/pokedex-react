/**
 * @jest-environment jsdom
 */

import React from 'react'
import {render} from '@testing-library/react'
import Search from './index'

const getPokemon = require('./index')

it("renders homepage unchanged", () => {
  const { container } = render(<Search />)
  expect(container).toMatchSnapshot()
});
