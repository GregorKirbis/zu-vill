// src/components/AutocompleteInput.tsx
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './index.scss'; // Optional: for custom styling

interface AutocompleteInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, newValue: string) => void;
  options: string[];
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  value = '', // Default parameter
  onChange = () => {}, // Default parameter
  options = [], // Default parameter
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSuggestionsFetchRequested = ({ value }: { value: string }) => {
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.trim().toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string) => (
    <div>
      {suggestion}
    </div>
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, { newValue }: { newValue: string }) => {
    onChange(event, newValue);
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        value,
        onChange: handleChange,
      }}
    />
  );
};

export default AutocompleteInput;
