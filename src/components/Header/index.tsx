import Logo from 'src/assets/logo-tractian.svg'
import GoldIcon from 'src/assets/gold-icon.svg'
import { Box, ButtonBox } from 'src/components/Header/styles'
import { Button } from 'src/components/Button'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { Company } from 'src/interfaces/company'

interface Props {
  isLoading?: boolean
  companies?: Company[]
}

export const Header: React.FC<Props> = ({
  companies = [],
  isLoading = false,
}) => {
  return (
    <Box>
      <div>
        <img src={Logo} />
      </div>

      <ButtonBox>
        {!!isLoading && <SkeletonLoader />}
        {!isLoading &&
          companies.map((company) => (
            <Button key={company.id} iconSrc={GoldIcon}>
              {company.name} unit
            </Button>
          ))}
      </ButtonBox>
    </Box>
  )
}
