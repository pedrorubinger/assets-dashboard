import { SVGIconProps } from 'src/interfaces/icon'
import { Colors } from 'src/styles/tokens/colors'

interface Props extends SVGIconProps {}

export const ChevronRightSVG: React.FC<Props> = ({ color = Colors.black }) => {
  return (
    <svg
      fill={color}
      height="10px"
      width="10px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 404.258 404.258"
    >
      <polygon points="138.331,0 114.331,18 252.427,202.129 114.331,386.258 138.331,404.258 289.927,202.129 " />
    </svg>
  )
}
