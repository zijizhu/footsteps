import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={100} height={100} rx={36} fill="#48A9A6" />
      <Path
        d="M49.5 44.451a5.049 5.049 0 100 10.098 5.049 5.049 0 000-10.098zm0 8.813a3.764 3.764 0 110-7.528 3.764 3.764 0 010 7.528z"
        fill="#fff"
      />
      <Path
        d="M51.703 48.857a.642.642 0 00-.643.643 1.569 1.569 0 01-.778 1.35.64.64 0 00-.065 1.066.643.643 0 00.713.044 2.859 2.859 0 001.416-2.46.643.643 0 00-.643-.643z"
        fill="#fff"
      />
      <Path
        d="M66.108 47.998c.234.062.475.093.717.094a2.846 2.846 0 002.013-4.857 2.52 2.52 0 00-.147-.131c.477-1.731.367-3.239-.35-4.482-1.542-2.673-5.592-3.549-11.149-2.443-1.826-5.365-4.61-8.435-7.692-8.435-3.081 0-5.866 3.07-7.694 8.436-5.557-1.107-9.606-.231-11.148 2.442-.695 1.2-.817 2.71-.374 4.384a2.846 2.846 0 002.585 4.962c.381.507.799 1.02 1.248 1.534-3.733 4.261-5 8.206-3.46 10.876 1.108 1.92 3.504 2.915 6.824 2.915a22.465 22.465 0 004.325-.475c1.827 5.367 4.612 8.438 7.694 8.438 1.392 0 2.766-.653 4-1.882a2.845 2.845 0 003.153-4.615c-.046-.047-.096-.09-.145-.132.24-.569.47-1.175.688-1.809 1.422.298 2.87.457 4.323.475 3.32 0 5.716-.996 6.823-2.915 1.542-2.67.275-6.615-3.459-10.875.434-.495.843-.998 1.225-1.505zm1.82-1.647a1.562 1.562 0 01-2.633-.799 1.56 1.56 0 112.634.799zm-.7-7.087c.504.873.6 1.958.298 3.231a2.844 2.844 0 00-2.714 4.765c.046.047.096.089.144.132-.298.388-.613.773-.944 1.155a38.824 38.824 0 00-5.127-4.465 39.304 39.304 0 00-1.3-6.671c4.843-.937 8.424-.261 9.644 1.853zM56.327 61.317a36.809 36.809 0 01-5.243-1.704 49.215 49.215 0 006.38-3.687 36.796 36.796 0 01-1.137 5.39zm-13.652 0a36.78 36.78 0 01-1.138-5.392 49.758 49.758 0 006.381 3.688 36.811 36.811 0 01-5.243 1.704zm0-23.634a36.795 36.795 0 015.243 1.704 49.405 49.405 0 00-6.382 3.69 36.767 36.767 0 011.14-5.394zm-2.72 15.501a36.285 36.285 0 01-4.1-3.684 36.322 36.322 0 014.1-3.684 49.13 49.13 0 000 7.369zm5.348 3.592a47.353 47.353 0 01-3.968-2.562 47.627 47.627 0 010-9.428 48.234 48.234 0 018.167-4.72 48.268 48.268 0 014.199 2.159 47.355 47.355 0 013.968 2.561 47.627 47.627 0 010 9.428 48.218 48.218 0 01-8.167 4.72 48.196 48.196 0 01-4.2-2.159zm11.024-19.094a36.783 36.783 0 011.139 5.391c-1-.681-2.044-1.34-3.121-1.963a50.7 50.7 0 00-3.261-1.723 36.809 36.809 0 015.243-1.704v-.001zm2.72 8.134a36.285 36.285 0 014.1 3.684 36.322 36.322 0 01-4.1 3.684 49.13 49.13 0 000-7.369zM49.5 29.029c2.437 0 4.815 2.765 6.431 7.427a39.404 39.404 0 00-6.431 2.203 39.37 39.37 0 00-6.431-2.203c1.616-4.663 3.994-7.427 6.431-7.427zM30.931 46.351a1.563 1.563 0 112.207-2.213 1.563 1.563 0 01-2.207 2.213zm3.116-3.116a2.846 2.846 0 00-2.58-.774c-.296-1.258-.197-2.332.304-3.195 1.22-2.115 4.801-2.79 9.643-1.854a39.337 39.337 0 00-1.3 6.672 38.801 38.801 0 00-5.127 4.461 25.127 25.127 0 01-1.002-1.23c.02-.02.042-.037.062-.057a2.848 2.848 0 000-4.024v.001zm-2.277 16.5c-1.217-2.112-.012-5.552 3.22-9.28a38.824 38.824 0 005.125 4.463c.24 2.257.674 4.49 1.3 6.671-4.843.936-8.425.261-9.644-1.854h-.001zm23.974 8.14a1.562 1.562 0 11-2.213-2.207 1.562 1.562 0 012.213 2.206zm-1.102-3.95a2.845 2.845 0 00-2.178 4.674c-.955.91-1.95 1.372-2.962 1.372-2.438 0-4.815-2.765-6.431-7.427a39.4 39.4 0 006.431-2.203 39.38 39.38 0 006.433 2.203c-.18.516-.368 1.01-.564 1.478a2.852 2.852 0 00-.73-.096h.002zm12.59-4.19c-1.221 2.115-4.802 2.791-9.645 1.854a39.329 39.329 0 001.3-6.672 38.796 38.796 0 005.124-4.462c3.23 3.728 4.436 7.168 3.218 9.28h.002z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
