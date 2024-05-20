import { SVGIconProps } from 'src/interfaces/icon'

interface Props extends SVGIconProps {}

export const RedBadgeIcon: React.FC<Props> = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="4" fill="#ED3833" />
    </svg>
  )
}
