import { create } from 'zustand'

import { Company } from 'src/interfaces/company'

interface CompanyState {
  company: Company | null | undefined
  setCompany: (company: Company) => void
}

export const useCompanyStore = create<CompanyState>()((set) => ({
  company: null,
  setCompany: (company: Company) => set(() => ({ company })),
}))
