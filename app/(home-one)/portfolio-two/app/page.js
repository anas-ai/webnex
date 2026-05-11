import BreadCrumb from '@/components/common/Breadcrumb'
import PortfolioList from '@/components/portfolio/two/PortfolioList'
import React from 'react'

const AppPortfolio = () => {
  return (
     <>
			<BreadCrumb title="Mobile Applications" />
			<PortfolioList category='app'/>
		</>
  )
}

export default AppPortfolio
