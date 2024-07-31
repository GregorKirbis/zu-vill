// src/components/FormattedNumberField.js
import React from 'react';
import { NumericFormatProps, NumericFormat } from 'react-number-format';

const FormattedNumberField: React.FC<NumericFormatProps> = ({ value, onChange }) => {
  return (
<div className="field-type text">
  <label className="field-label" for="field-year">
    Letnik<span className="required">*</span>
  </label>
  <div className="input-wrapper">
  <NumericFormat
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      suffix=" €"
      onValueChange={({ value }) => onChange(value)}
      displayType="input"
      type="text"
    />

    </div>
    </div>
  );
};

export default FormattedNumberField;
