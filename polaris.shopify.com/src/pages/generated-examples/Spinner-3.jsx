import {
  AppProvider,
  Spinner,
  Form,
  FormLayout,
  TextField,
  Button,
  Card,
  Tabs,
} from "@shopify/polaris";
import { useState, useEffect, useCallback, useRef } from "react";
import translations from "@shopify/polaris/locales/en.json";
function SpinnerWithFocusManagement() {
  const tabs = useRef([
    {
      id: "all-customers",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content",
    },
    {
      id: "accepts-marketing",
      content: "Accepts marketing",
      panelID: "accepts-marketing-content",
    },
  ]);

  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [textFieldFocused, setTextFieldFocused] = useState(false);

  useEffect(() => {
    setTextFieldFocused(!loading);
  }, [loading]);

  const handleTabChange = useCallback((selectedTab) => {
    setLoading(true);
    setSelected(selectedTab);
    setTimeout(() => {
      setValue("");
      return setLoading(false);
    }, 1500);
  }, []);

  const handleUrlChange = useCallback((value) => setValue(value), []);

  const handleSubmit = useCallback((_event) => setValue(""), []);

  const label = selected ? "Marketing" : "Customers";
  const sectionMarkup = loading ? (
    <Spinner
      accessibilityLabel="Loading form field"
      hasFocusableParent={false}
    />
  ) : (
    <Form noValidate onSubmit={handleSubmit}>
      <FormLayout>
        <TextField
          value={value}
          focused={textFieldFocused}
          onChange={handleUrlChange}
          label={label}
          autoComplete="off"
        />
        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
  );

  return (
    <Card>
      <Tabs tabs={tabs.current} selected={selected} onSelect={handleTabChange}>
        <Card.Section title={tabs.current[selected].content}>
          {sectionMarkup}
        </Card.Section>
      </Tabs>
    </Card>
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
        <SpinnerWithFocusManagement />
      </div>
    </AppProvider>
  );
}

export default Example;
