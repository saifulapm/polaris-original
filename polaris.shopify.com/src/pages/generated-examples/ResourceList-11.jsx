import {
  AppProvider,
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  TextStyle,
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
        <Card>
          <ResourceList
            resourceName={{ singular: "customer", plural: "customers" }}
            items={[
              {
                id: 109,
                url: "customers/341",
                name: "Mae Jemison",
                location: "Decatur, USA",
                latestOrderUrl: "orders/1456",
              },
              {
                id: 209,
                url: "customers/256",
                name: "Ellen Ochoa",
                location: "Los Angeles, USA",
                latestOrderUrl: "orders/1457",
              },
            ]}
            renderItem={(item) => {
              const { id, url, name, location, latestOrderUrl } = item;
              const media = <Avatar customer size="medium" name={name} />;
              const shortcutActions = latestOrderUrl
                ? [
                    {
                      content: "View latest order",
                      accessibilityLabel: `View ${name}’s latest order`,
                      url: latestOrderUrl,
                    },
                  ]
                : null;

              return (
                <ResourceItem
                  id={id}
                  url={url}
                  media={media}
                  accessibilityLabel={`View details for ${name}`}
                  shortcutActions={shortcutActions}
                >
                  <h3>
                    <TextStyle variation="strong">{name}</TextStyle>
                  </h3>
                  <div>{location}</div>
                </ResourceItem>
              );
            }}
          />
        </Card>
      </div>
    </AppProvider>
  );
}

export default Example;
