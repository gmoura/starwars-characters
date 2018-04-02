import React from 'react';
import {shallow} from 'enzyme';
import { expect } from 'chai';

import Character from '../src/js/views/Character';

test('Should be render three characteres', () => {
  let itens = [
    {name: "Luke Skywalker"},
    {name: "C-3PO"},
    {name: "R2-D2"}
  ]
  const char = shallow(<Character itens={itens} />);

  expect(char.find('li')).to.have.length(1);
})