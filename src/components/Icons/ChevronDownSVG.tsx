import { SVGIconProps } from 'src/interfaces/icon'
import { Colors } from 'src/styles/tokens/colors'

interface Props extends SVGIconProps {}

export const ChevronDownSVG: React.FC<Props> = ({ color = Colors.black }) => {
  return (
    <svg
      fill={color}
      height="10px"
      width="10px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 407.437 407.437"
    >
      <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
    </svg>
  )
}
