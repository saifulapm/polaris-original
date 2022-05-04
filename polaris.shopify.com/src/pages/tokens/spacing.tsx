import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { tokens } from "@shopify/polaris-tokens";
import Longform from "../../components/Longform";
import Token from "../../components/Token";
import { getTitleTagValue } from "../../utils/various";

const { spacing } = tokens;

const Components: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getTitleTagValue("Spacing tokens")}</title>
      </Head>

      <Longform>
        <h1>Spacing tokens</h1>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        {Object.entries(spacing).map(([name]) => {
          return <SpacingPreview key={name} name={name} />;
        })}
      </Longform>
    </>
  );
};

function SpacingPreview({ name }: { name: string }) {
  const { value } = spacing[name];

  return (
    <Token
      name={name}
      description=""
      value={value}
      bigGap
      renderPreview={() => (
        <div
          style={{
            height: value,
            width: 50,
            background: "#bfd3ed",
          }}
        ></div>
      )}
    ></Token>
  );
}

export default Components;
