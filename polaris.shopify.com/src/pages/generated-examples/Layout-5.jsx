import {
  AppProvider,
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
} from "@shopify/polaris";
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
            <Layout.AnnotatedSection
              id="storeDetails"
              title="Store details"
              description="Shopify and your customers will use this information to contact you."
            >
              <Card sectioned>
                <FormLayout>
                  <TextField
                    label="Store name"
                    onChange={() => {}}
                    autoComplete="off"
                  />
                  <TextField
                    type="email"
                    label="Account email"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </FormLayout>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </div>
    </AppProvider>
  );
}

export default Example;
