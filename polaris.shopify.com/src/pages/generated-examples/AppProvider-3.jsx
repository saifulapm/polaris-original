import { AppProvider, Page } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
function AppProviderLinkExample() {
  const CustomLinkComponent = ({ children, url, ...rest }) => {
    return (
      <a
        href={url}
        onClick={() => console.log("Custom link clicked")}
        {...rest}
      >
        {children}
      </a>
    );
  };

  return (
    <AppProvider
      linkComponent={CustomLinkComponent}
      i18n={{
        Polaris: {
          Page: {
            Header: {
              rollupButton: "Actions",
            },
          },
        },
      }}
    >
      <Page
        breadcrumbs={[{ content: "Products", url: "#" }]}
        title="Jar With Lock-Lid"
        primaryAction={{ content: "Save", disabled: true }}
        secondaryActions={[
          { content: "Duplicate", url: "#" },
          { content: "View on your store", url: "#" },
        ]}
      >
        <p>Page content</p>
      </Page>
    </AppProvider>
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
        <AppProviderLinkExample />
      </div>
    </AppProvider>
  );
}

export default Example;
