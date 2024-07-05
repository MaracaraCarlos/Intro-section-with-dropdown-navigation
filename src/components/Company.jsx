import React from 'react'

const Company = ({ showCompany }) => {
  return (
    <div className={showCompany ? 'company_container' : 'hide'}>
      <ul className='list_company'>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
  )
}

export default Company
