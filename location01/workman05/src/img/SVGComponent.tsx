import * as React from "react";

type Props = {
  size?: number;
  color?: string;
};

const SVGComponent: React.FC<Props> = ({ size, color, ...other }) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      width: size,
      height: size,
    }}
    xmlSpace="preserve"
    {...other}
  >
    <g>
      <path
        className="st0"
        d="M73.146,317.591l47.488-47.487C94.402,270.104,73.146,291.368,73.146,317.591z"
        style={{
          fill: color,
        }}
      />
      <path
        className="st0"
        d="M343.878,317.591l47.488-47.487C365.142,270.104,343.878,291.368,343.878,317.591z"
        style={{
          fill: color,
        }}
      />
      <path
        className="st0"
        d="M498.47,262.231h0.449l-64.32-126.858c-18.993-37.453-57.268-61.204-99.254-61.599H177.112 c-41.986,0.395-80.261,24.146-99.254,61.599l-62.917,124.09C5.44,276.706,0,296.506,0,317.591 c0,66.622,54.005,120.635,120.634,120.635c47.147,0,87.956-27.068,107.794-66.497v0.202c8.075-14.204,15.739-18.994,27.572-18.994 c11.833,0,19.497,4.79,27.572,18.994v-0.217c19.831,39.436,60.639,66.512,107.794,66.512c66.629,0,120.634-54.013,120.634-120.635 C512,297.621,507.064,278.822,498.47,262.231z M120.634,389.971c-39.979,0-72.379-32.4-72.379-72.379 c0-39.971,32.4-72.371,72.379-72.371c39.971,0,72.379,32.4,72.379,72.371C193.013,357.571,160.605,389.971,120.634,389.971z  M256,328.883c-9.718,0-17.591-7.873-17.591-17.591c0-9.718,7.874-17.591,17.591-17.591c9.718,0,17.591,7.874,17.591,17.591 C273.591,321.009,265.718,328.883,256,328.883z M391.366,389.971c-39.971,0-72.379-32.4-72.379-72.379 c0-39.971,32.408-72.371,72.379-72.371s72.379,32.4,72.379,72.371C463.745,357.571,431.337,389.971,391.366,389.971z"
        style={{
          fill: color,
        }}
      />
    </g>
  </svg>
);
export default SVGComponent;
