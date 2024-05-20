import { SVGIconProps } from 'src/interfaces/icon'

interface Props extends SVGIconProps {}

export const GreenBadgeIcon: React.FC<Props> = () => {
  return (
    <svg
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4.5" r="4" fill="#52C41A" />
    </svg>
  )
}
