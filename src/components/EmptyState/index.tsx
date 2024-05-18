import { NoDataVector } from 'src/components/Vector/NoDataVector'
import { Box, Message, Title } from 'src/components/EmptyState/styles'

interface Props {
  title?: string
  message?: string
}

export const EmptyState: React.FC<Props> = ({
  title = 'Sem dados',
  message = 'Não há informações para serem exibidas neste momento.',
}) => {
  return (
    <Box>
      <NoDataVector />
      <Title>{title}</Title>
      <Message>{message}</Message>
    </Box>
  )
}
