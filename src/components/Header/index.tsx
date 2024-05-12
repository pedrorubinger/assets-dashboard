import Logo from 'src/assets/logo-tractian.svg'
import GoldIcon from 'src/assets/gold-icon.svg'
import { Box, ButtonBox } from 'src/components/Header/styles'
import { Button } from 'src/components/Button'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <Box>
      <div>
        <img src={Logo} />
      </div>

      <ButtonBox>
        <Button iconSrc={GoldIcon}>Apex unit</Button>
        <Button iconSrc={GoldIcon} variant="secondary">
          Tobias unit
        </Button>
        <Button iconSrc={GoldIcon} variant="secondary">
          Jaguar unit
        </Button>
      </ButtonBox>
    </Box>
  )
}
