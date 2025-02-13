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
        <Card title="Online store dashboard">
          <Card.Section>
            <p>View a summary of your online store’s performance.</p>
          </Card.Section>

          <Card.Section>
            <p>
              View a summary of your online store’s performance, including
              sales, visitors, top products, and referrals.
            </p>
          </Card.Section>
        </Card>
      </div>
    </AppProvider>
  );
}

export default Example;
