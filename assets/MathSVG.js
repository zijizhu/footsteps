import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
  <Svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
    d="M54.833 26.833c.654 0 1.167.514 1.167 1.167s-.513 1.167-1.167 1.167h-1.166v-2.334h1.166zM29.167 26.833h24.5v2.334h-24.5v-2.334z"
    fill="#fff"
    />
    <Path
    d="M50.167 56H28c.653 0 1.167-.513 1.167-1.167v-1.166h21c1.936 0 3.5-1.564 3.5-3.5v-21h1.166c.654 0 1.167-.514 1.167-1.167v22.167A5.835 5.835 0 0150.167 56zM56 5.833V28c0-.653-.513-1.167-1.167-1.167h-1.166v-21c0-1.936-1.564-3.5-3.5-3.5h-21V1.167C29.167.513 28.653 0 28 0h22.167A5.835 5.835 0 0156 5.833z"
    fill="#fff"
    />
    <Path
    d="M46.667 14c.653 0 1.166.513 1.166 1.167 0 .653-.513 1.166-1.166 1.166h-9.334a1.155 1.155 0 01-1.166-1.166c0-.654.513-1.167 1.166-1.167h9.334zM46.667 37.333c.653 0 1.166.514 1.166 1.167s-.513 1.167-1.166 1.167h-9.334a1.155 1.155 0 01-1.166-1.167c0-.653.513-1.167 1.166-1.167h9.334zM46.667 44.333c.653 0 1.166.514 1.166 1.167s-.513 1.167-1.166 1.167h-9.334a1.155 1.155 0 01-1.166-1.167c0-.653.513-1.167 1.166-1.167h9.334zM29.167 53.667v1.166c0 .654-.514 1.167-1.167 1.167a1.155 1.155 0 01-1.167-1.167v-1.166h2.334zM26.833 29.167h2.334v24.5h-2.334v-24.5zM26.833 26.833h2.334v2.334h-2.334v-2.334zM26.833 2.333h2.334v24.5h-2.334v-24.5z"
    fill="#fff"
    />
    <Path
    d="M29.167 1.167v1.166h-2.334V1.167C26.833.513 27.347 0 28 0s1.167.513 1.167 1.167zM2.333 26.833h24.5v2.334h-24.5v-2.334zM18.667 14c.653 0 1.166.513 1.166 1.167 0 .653-.513 1.166-1.166 1.166h-3.5V14h3.5zM18.317 44.683c.466.444.466 1.19 0 1.634-.21.233-.514.35-.817.35-.303 0-.607-.117-.817-.35L14 43.633 15.633 42l2.684 2.683zM16.683 37.683a1.128 1.128 0 011.634 0c.466.444.466 1.19 0 1.634L15.633 42 14 40.367l2.683-2.684zM12.36 41.998l1.633-1.634 1.634 1.634-1.634 1.633-1.633-1.633zM15.167 16.333v3.5c0 .654-.514 1.167-1.167 1.167a1.155 1.155 0 01-1.167-1.167v-3.5h2.334zM12.833 14h2.334v2.333h-2.334V14zM15.167 10.5V14h-2.334v-3.5c0-.653.514-1.167 1.167-1.167s1.167.514 1.167 1.167z"
    fill="#fff"
    />
    <Path
    d="M14 40.367L12.367 42l-2.684-2.683a1.128 1.128 0 010-1.634 1.128 1.128 0 011.634 0L14 40.367zM12.833 14v2.333h-3.5a1.155 1.155 0 01-1.166-1.166c0-.654.513-1.167 1.166-1.167h3.5zM11.317 46.317c-.21.233-.514.35-.817.35-.303 0-.607-.117-.817-.35a1.128 1.128 0 010-1.634L12.367 42 14 43.633l-2.683 2.684zM2.333 26.833v2.334H1.167A1.155 1.155 0 010 28c0-.653.513-1.167 1.167-1.167h1.166z"
    fill="#fff"
    />
    <Path
    d="M0 5.833A5.835 5.835 0 015.833 0H28c-.653 0-1.167.513-1.167 1.167v1.166h-21a3.495 3.495 0 00-3.5 3.5v21H1.167C.513 26.833 0 27.347 0 28V5.833zM2.333 50.167c0 1.936 1.564 3.5 3.5 3.5h21v1.166c0 .654.514 1.167 1.167 1.167H5.833A5.835 5.835 0 010 50.167V28c0 .653.513 1.167 1.167 1.167h1.166v21z"
    fill="#fff"
    />
  </Svg>
  )
}

export default SvgComponent