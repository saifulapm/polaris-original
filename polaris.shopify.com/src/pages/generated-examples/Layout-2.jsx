import { AppProvider, Page, Layout, Card } from "@shopify/polaris";
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
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <Card title="Order details" sectioned>
                <p>
                  Use to follow a normal section with a secondary section to
                  create a 2/3 + 1/3 layout on detail pages (such as individual
                  product or order pages). Can also be used on any page that
                  needs to structure a lot of content. This layout stacks the
                  columns on small screens.
                </p>
              </Card>
            </Layout.Section>
            <Layout.Section secondary>
              <Card title="Tags" sectioned>
                <p>Add tags to your order.</p>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      </div>
    </AppProvider>
  );
}

export default Example;
