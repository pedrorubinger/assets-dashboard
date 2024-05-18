import {
  Box,
  ContentBox,
  HeaderBox,
} from 'src/components/ContentSection/styles'

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children: React.ReactNode
  header?: React.ReactNode
  headerStyle?: React.CSSProperties
  contentStyle?: React.CSSProperties
  width?: string
}

export const ContentSection: React.FC<Props> = ({
  children,
  header,
  width,
  headerStyle,
  contentStyle,
  ...rest
}) => {
  return (
    <Box width={width} {...rest}>
      {!!header && <HeaderBox style={headerStyle}>{header}</HeaderBox>}
      <ContentBox style={contentStyle}>{children}</ContentBox>
    </Box>
  )
}
