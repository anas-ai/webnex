import BreadCrumb from '@/components/common/Breadcrumb'
import PortfolioList from '@/components/portfolio/two/PortfolioList'
import React from 'react'

const GraphicPortfolio = () => {
  return (
     <>
			<BreadCrumb title="Brand & Design" />
			<PortfolioList category='app' />
		</>
  )
}

export default GraphicPortfolio
