import { Box } from 'src/components/ContentBox/styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ContentBox: React.FC<Props> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>
}
