import {
  AppProvider,
  Page,
  Card,
  ResourceList,
  Avatar,
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
        <AppProvider
          i18n={{
            Polaris: {
              ResourceList: {
                sortingLabel: "Sort by",
                defaultItemSingular: "item",
                defaultItemPlural: "items",
                showing: "Showing {itemsCount} {resource}",
                Item: {
                  viewItem: "View details for {itemName}",
                },
              },
              Common: {
                checkbox: "checkbox",
              },
            },
          }}
        >
          <Page>
            <Card>
              <ResourceList
                showHeader
                items={[
                  {
                    id: 341,
                    url: "customers/341",
                    name: "Mae Jemison",
                    location: "Decatur, USA",
                  },
                  {
                    id: 256,
                    url: "customers/256",
                    name: "Ellen Ochoa",
                    location: "Los Angeles, USA",
                  },
                ]}
                renderItem={(item) => {
                  const { id, url, name, location } = item;
                  const media = <Avatar customer size="medium" name={name} />;

                  return (
                    <ResourceList.Item id={id} url={url} media={media}>
                      <h3>
                        <TextStyle variation="strong">{name}</TextStyle>
                      </h3>
                      <div>{location}</div>
                    </ResourceList.Item>
                  );
                }}
              />
            </Card>
          </Page>
        </AppProvider>
      </div>
    </AppProvider>
  );
}

export default Example;
