import { SVGIconProps } from 'src/interfaces/icon'
import { Colors } from 'src/styles/tokens/colors'

interface Props extends SVGIconProps {}

export const GoldIcon: React.FC<Props> = ({ color = Colors.white }) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.34381 4.37402H9.68756C9.69381 4.37402 9.70162 4.37402 9.70787 4.37246C9.77662 4.36152 9.82194 4.29746 9.811 4.22871L9.18287 0.353711C9.1735 0.292773 9.12037 0.249023 9.05944 0.249023H4.97194C4.911 0.249023 4.85787 0.292773 4.8485 0.353711L4.22037 4.22871C4.21881 4.23496 4.21881 4.24277 4.21881 4.24902C4.21881 4.31777 4.27506 4.37402 4.34381 4.37402ZM5.76881 1.31152H8.261L8.58444 3.31152H5.44381L5.76881 1.31152ZM5.80787 5.72871C5.7985 5.66777 5.74537 5.62402 5.68444 5.62402H1.59694C1.536 5.62402 1.48287 5.66777 1.4735 5.72871L0.845374 9.60371C0.843811 9.60996 0.843811 9.61777 0.843811 9.62402C0.843811 9.69277 0.900061 9.74902 0.968811 9.74902H6.31256C6.31881 9.74902 6.32662 9.74902 6.33287 9.74746C6.40162 9.73652 6.44694 9.67246 6.436 9.60371L5.80787 5.72871ZM2.07037 8.68652L2.39381 6.68652H4.886L5.20944 8.68652H2.07037ZM13.1548 9.60371L12.5266 5.72871C12.5173 5.66777 12.4641 5.62402 12.4032 5.62402H8.31569C8.25475 5.62402 8.20162 5.66777 8.19225 5.72871L7.56412 9.60371C7.56256 9.60996 7.56256 9.61777 7.56256 9.62402C7.56256 9.69277 7.61881 9.74902 7.68756 9.74902H13.0313C13.0376 9.74902 13.0454 9.74902 13.0516 9.74746C13.1188 9.73652 13.1657 9.67246 13.1548 9.60371ZM8.78912 8.68652L9.11256 6.68652H11.6047L11.9282 8.68652H8.78912Z"
        fill={color}
      />
    </svg>
  )
}