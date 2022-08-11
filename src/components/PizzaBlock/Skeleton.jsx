import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#cecfcf"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="292" rx="10" ry="10" width="280" height="27" />
    <rect x="171" y="124" rx="0" ry="0" width="3" height="3" />
    <circle cx="140" cy="140" r="125" />
    <rect x="0" y="331" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="437" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="434" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
