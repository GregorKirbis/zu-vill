import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface FormattedNumberFieldProps extends Omit<NumericFormatProps, 'onValueChange' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

const FormattedNumberField: React.FC<FormattedNumberFieldProps> = ({ value, onChange, ...rest }) => {
  return (
    <div className="field-type text">
      <label className="field-label" htmlFor="field-year">
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
          {...rest}
        />
      </div>
    </div>
  );
};

export default FormattedNumberField;
