import React from 'react'
import  AllCustomerstable  from '@/app/component/admin/customers/allCustomerstable'
import CustomerSummeryCard from '@/app/component/admin/customers/customerSummeryCard'
import CustomerFilttersection from '@/app/component/admin/customers/customeerfiltersection'

const Customers = () => {
  return (
    <div>
         <CustomerSummeryCard/>
         <CustomerFilttersection/>
       <AllCustomerstable/>
    </div>
  )
}

export default Customers
