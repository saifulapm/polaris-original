import { AppProvider, Select } from "@shopify/polaris";
import { useState, useCallback } from "react";
import translations from "@shopify/polaris/locales/en.json";
function InlineLabelExample() {
  const [selected, setSelected] = useState("newestUpdate");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Newest update", value: "newestUpdate" },
    { label: "Oldest update", value: "oldestUpdate" },
    { label: "Most spent", value: "mostSpent" },
    { label: "Most orders", value: "mostOrders" },
    { label: "Last name A–Z", value: "lastNameAlpha" },
    { label: "Last name Z–A", value: "lastNameReverseAlpha" },
  ];

  return (
    <Select
      label="Sort by"
      labelInline
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
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
        <InlineLabelExample />
      </div>
    </AppProvider>
  );
}

export default Example;
