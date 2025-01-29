import BreadCrumb from '@/components/common/BreadCrumb'
import React from 'react'
import TeamDetailsArea from './TeamDetailsArea'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'

const TeamDetails = () => {
   return (
      <>
         <HeaderOne headerTop={false} />
         <BreadCrumb title="Team Details" />
         <TeamDetailsArea />
         <FooterOne />
      </>
   )
}

export default TeamDetails
