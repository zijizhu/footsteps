import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M11.746 14.59v12.512c0 .556-.351 1.05-.875 1.234-.74.26-1.635.398-2.586.398-2.737 0-5.681-1.123-5.681-3.59V9.137c-.062-1.1.322-3.042 2.163-4.094.855-.488 5.344-3.374 7.598-4.832.402-.26.915-.28 1.336-.052.422.23.684.672.684 1.151v1.896a1.31 1.31 0 01-2.537.454C9.81 4.968 6.81 6.889 6.066 7.315c-.67.383-.816 1.088-.844 1.47 0 .43.093.767.26.951.465.507 2.013.192 3.703-.823 1.623-.974 9.63-6.304 9.71-6.358a1.308 1.308 0 012.035 1.09v.15c0 .437-.219.846-.582 1.089 0 0-5.558 3.71-6.05 4.025-1.883 1.212-2.552 2.7-2.552 5.681zm19.656-6.317v16.993c0 .45-.232.868-.613 1.108 0 0-7.632 5.927-9.18 6.868-.814.496-1.85.758-2.996.758-2.722 0-5.537-1.472-5.537-3.935V13.822c0-.005.003-.01.003-.017.027-.958.25-2.326 2.032-3.64 1.068-.789 7.43-5.127 7.7-5.31a1.307 1.307 0 012.046 1.081v1.896a1.309 1.309 0 01-2.514.513c-2.03 1.389-5.01 3.435-5.678 3.926-.843.623-.956 1.034-.97 1.561.002.392.109.69.323.886.668.612 2.465.355 4.238-.708 1.311-.788 6.963-5.152 9.029-6.767.397-.307.93-.363 1.381-.144.45.218.736.673.736 1.174zm-2.618 5.833l-6.545 5.077v2.619l6.545-5.078v-2.618z"
          fill="#fa6a46"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h34v34H0z" />
        </ClipPath>
    </Defs>
    </Svg>
  )
}

export default SvgComponent
