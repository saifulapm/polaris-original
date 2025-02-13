import { AppProvider, Button } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

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
        <div style={{ height: "100px" }}>
          <Button
            disclosure="select"
            onClick={() => console.log("Open Popover")}
          >
            Select options
          </Button>
        </div>
      </div>
    </AppProvider>
  );
}

export default Example;
