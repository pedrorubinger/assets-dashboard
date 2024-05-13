import Logo from 'src/assets/logo-tractian.svg'
import GoldIcon from 'src/assets/gold-icon.svg'
import { Box, ButtonBox } from 'src/components/Header/styles'
import { Button } from 'src/components/Button'
import { SkeletonLoader } from 'src/components/Skeleton/styles'
import { Company } from 'src/interfaces/company'
import { useCompanyStore } from 'src/store/company'
import { ButtonVariant } from 'src/interfaces/button'

interface Props {
  isLoading?: boolean
  companies?: Company[]
}

export const Header: React.FC<Props> = ({
  companies = [],
  isLoading = false,
}) => {
  const { company, setCompany } = useCompanyStore()

  const onSelectCompany = (company: Company) => setCompany(company)

  return (
    <Box>
      <div>
        <img src={Logo} />
      </div>

      <ButtonBox>
        {!!isLoading && <SkeletonLoader />}
        {!isLoading &&
          companies.map(({ id, name }) => {
            const isSelected = id === company?.id
            const variant: ButtonVariant = isSelected ? 'secondary' : 'primary'

            return (
              <Button
                key={id}
                variant={variant}
                iconSrc={GoldIcon}
                title="Clique para selecionar esta empresa"
                onClick={() => onSelectCompany({ id, name })}
              >
                {name} unit
              </Button>
            )
          })}
      </ButtonBox>
    </Box>
  )
}
