import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  // take what user types into input, pass it to create patch from, then check if value is somethign we wills et it (otherwise unset)
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

// format money based on loction of user
const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        // tells sanity that this is where the changing of the value happens (rest is UI)
        ref={inputComponent}
      />
    </div>
  );
}
