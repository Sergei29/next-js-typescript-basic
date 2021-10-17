/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

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
    </div>
  );
};

export default IndexPage;
