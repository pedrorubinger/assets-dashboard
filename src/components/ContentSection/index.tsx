import {
  Box,
  ContentBox,
  HeaderBox,
} from 'src/components/ContentSection/styles'

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children: React.ReactNode
  header?: React.ReactNode
  width?: string
}

export const ContentSection: React.FC<Props> = ({
  children,
  header,
  width,
  ...rest
}) => {
  return (
    <Box width={width} {...rest}>
      {!!header && <HeaderBox>{header}</HeaderBox>}
      <ContentBox>{children}</ContentBox>
    </Box>
  )
}
