import BreadCrumb from '@/components/common/Breadcrumb'
import PortfolioList from '@/components/portfolio/two/PortfolioList'
import React from 'react'

const WebPortfolio = () => {
  return (
  <>
			<BreadCrumb title="Web Experiences" />
			<PortfolioList category='web'/>
		</>
  )
}

export default WebPortfolio
