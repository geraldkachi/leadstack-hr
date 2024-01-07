import { SVGProps } from "react";
type Props = {
  theme?: string | null;
} & SVGProps<SVGSVGElement>;

const WhiteCard = ({ theme, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={258}
    height={184}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect width={257.128} height={184} fill="#fff" rx={9.436} />
      <rect
        width={215.846}
        height={173.385}
        x={21.82}
        y={21.82}
        stroke="#D3D3D4"
        strokeWidth={1.179}
        rx={4.128}
      />
      <rect
        width={217.026}
        height={161.59}
        x={21.231}
        y={21.23}
        fill="#D9D9D9"
        opacity={0.3}
        rx={4.718}
      />
      <circle cx={30.667} cy={29.487} r={2.359} fill="#EF847E" />
      <circle cx={38.923} cy={29.487} r={2.359} fill="#EFC558" />
      <circle cx={47.179} cy={29.487} r={2.359} fill="#5DD170" />
      <circle cx={31.846} cy={48.359} r={4.718} fill="#D3D3D4" />
      <circle cx={31.846} cy={48.359} r={4.718} fill="#D3D3D4" />
      <rect
        width={34.205}
        height={5.897}
        x={41.282}
        y={44.82}
        fill="#D9D9D9"
        rx={2.949}
      />
      <rect
        width={34.205}
        height={5.897}
        x={41.282}
        y={44.82}
        fill="#D9D9D9"
        rx={2.949}
      />
      <rect
        width={48.359}
        height={3.538}
        x={27.128}
        y={62.513}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={89.051} r={2.949} fill="#D3D3D4" />
      <rect
        width={75.487}
        height={3.538}
        x={115.59}
        y={87.282}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={98.487} r={2.949} fill="#D3D3D4" />
      <rect
        width={103.795}
        height={3.538}
        x={115.59}
        y={96.718}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={107.923} r={2.949} fill="#D3D3D4" />
      <rect
        width={103.795}
        height={3.538}
        x={115.59}
        y={106.154}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={122.077} r={2.949} fill="#D3D3D4" />
      <rect
        width={103.795}
        height={3.538}
        x={115.59}
        y={120.308}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={131.513} r={2.949} fill="#D3D3D4" />
      <rect
        width={103.795}
        height={3.538}
        x={115.59}
        y={129.744}
        fill="#D9D9D9"
        rx={1.769}
      />
      <circle cx={105.564} cy={145.666} r={2.949} fill="#D3D3D4" />
      <rect
        width={103.795}
        height={3.538}
        x={115.59}
        y={143.897}
        fill="#D9D9D9"
        rx={1.769}
      />
     <rect
        width={48.359}
        height={8.256}
        x={27.128}
        y={71.948}
        fill="#1D8EE6"
        rx={2.949}
      />

      <rect
        width={24.769}
        height={8.256}
        x={194.615}
        y={156.872}
        fill="#1D8EE6"
        rx={2.949}
      />
      <rect
        width={48.359}
        height={3.538}
        x={27.128}
        y={86.103}
        fill="#D9D9D9"
        rx={1.769}
      />
      <rect
        width={48.359}
        height={3.538}
        x={27.128}
        y={96.718}
        fill="#D9D9D9"
        rx={1.769}
      />
      <rect
        width={43.641}
        height={3.538}
        x={27.128}
        y={106.153}
        fill="#D9D9D9"
        rx={1.769}
      />
      <rect
        width={23.59}
        height={3.538}
        x={27.128}
        y={120.308}
        fill="#D9D9D9"
        rx={1.769}
      />
      <path stroke="#EAEAEB" strokeWidth={0.354} d="M85.1 34.205V182.82" />
      <rect
        width={114.41}
        height={14.154}
        x={102.615}
        y={38.923}
        fill="#D9D9D9"
        rx={2.949}
      />
      <rect
        width={88.462}
        height={5.897}
        x={102.615}
        y={57.077}
        fill="#D9D9D9"
        rx={2.949}
      />
      <rect
        width={17.692}
        height={5.897}
        x={193.077}
        y={57.077}
        fill="#D9D9D9"
        rx={2.949}
      />
      <rect
        width={48.359}
        height={5.897}
        x={102.615}
        y={66.975}
        fill="#D9D9D9"
        rx={2.949}
      />
      {theme=== "light" && <rect
        width={28.308}
        height={28.308}
        x={221.744}
        y={148.615}
        fill="#007AF4"
        rx={14.154}
      />}
      <path
        fill="#fff"
        d="M234.5 166.599c-.264 0-.529-.1-.73-.302l-2.799-2.799a1.031 1.031 0 0 1 1.459-1.46l2.07 2.07 4.869-4.869a1.031 1.031 0 1 1 1.459 1.46l-5.598 5.598a1.028 1.028 0 0 1-.73.302Z"
      />
    </g>
    {(theme === 'light') && <rect
      width={254.769}
      height={181.641}
      x={1.179}
      y={1.179}
      stroke="#1D8EE6"
      strokeWidth={2.359}
      rx={8.256}
    />}
    <defs>
      <clipPath id="a">
        <rect width={257.128} height={184} fill="#fff" rx={9.436} />
      </clipPath>
    </defs>
  </svg>
)
export default WhiteCard
