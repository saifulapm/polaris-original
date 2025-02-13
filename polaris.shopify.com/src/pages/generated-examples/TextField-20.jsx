import { AppProvider, TextField } from "@shopify/polaris";
import { useState, useEffect, useCallback } from "react";
import translations from "@shopify/polaris/locales/en.json";
function TextFieldWithSuggestionExample() {
  const suggestions = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Minor Outlying Islands",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "U.S. Virgin Islands",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSuggestion = useCallback((nextValue) => {
    const nextSuggestion = suggestions.find((suggestion) =>
      suggestion.toLowerCase().startsWith(nextValue.toLowerCase())
    );

    if (nextSuggestion) setSuggestion(nextSuggestion);
  }, []);

  useEffect(() => {
    if (value !== suggestion) handleSuggestion(value);
  }, [value]);

  const handleChange = useCallback((value) => {
    setValue(value);
    setSuggestion("");
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleChange(suggestion);
      }
    },
    [suggestion, handleChange]
  );

  return (
    <div onKeyDown={handleKeyDown}>
      <TextField
        type="text"
        label="State"
        value={value}
        onChange={handleChange}
        suggestion={suggestion}
      />
    </div>
  );
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"
      />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <TextFieldWithSuggestionExample />
      </div>
    </AppProvider>
  );
}

export default Example;
