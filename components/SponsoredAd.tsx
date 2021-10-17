/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const SponsoredAd = () => {
  return (
    <div
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Not pre-rendered on server</h2>
      <p>but in browser only</p>
    </div>
  );
};

export default SponsoredAd;
