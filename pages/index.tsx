/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import dynamic from "next/dynamic";

/**
 * @description Sometimes you just need to skip rendering some component on the server because: it depends on the DOM API, it depends on client-side data, something else
 * Next.js supports dynamic imports that, when used with components, will opt out of SSR.
 */
const SponsoredAd = dynamic(() => import("../components/SponsoredAd"), {
  ssr: false,
});

type Props = {
  content: Record<string, any>;
};

const IndexPage = ({
  content = { title: "This is my app" },
}: Props): JSX.Element => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: "containers.page",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>
          {content.title || "This is a really dope note taking app."}
          <small sx={{ fontSize: 2, ml: 2 }}>SSR pre-rendered</small>
        </h1>
      </div>
      {/* But this is not server pre-rendered */}
      <SponsoredAd />
    </div>
  );
};

export default IndexPage;
