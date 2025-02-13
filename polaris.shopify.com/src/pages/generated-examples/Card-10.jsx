import { AppProvider, Card } from "@shopify/polaris";
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
        <Card title="Customer">
          <Card.Section>
            <p>John Smith</p>
          </Card.Section>
          <Card.Section title="Addresses">
            <Card.Subsection>
              123 First St
              <br />
              Somewhere
              <br />
              The Universe
            </Card.Subsection>
            <Card.Subsection>
              123 Second St
              <br />
              Somewhere
              <br />
              The Universe
            </Card.Subsection>
          </Card.Section>
          <Card.Section>
            <Card.Subsection>
              A single subsection without a sibling has no visual appearance
            </Card.Subsection>
          </Card.Section>
        </Card>
      </div>
    </AppProvider>
  );
}

export default Example;
