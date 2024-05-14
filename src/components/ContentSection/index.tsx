import {
  Box,
  ContentBox,
  Title,
  TitleBox,
} from 'src/components/ContentSection/styles'

interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children: React.ReactNode
  title?: string
  width?: string
}

export const ContentSection: React.FC<Props> = ({
  children,
  title,
  width,
  ...rest
}) => {
  return (
    <Box width={width} {...rest}>
      {!!title && (
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
      )}
      <ContentBox>{children}</ContentBox>
    </Box>
  )
}
