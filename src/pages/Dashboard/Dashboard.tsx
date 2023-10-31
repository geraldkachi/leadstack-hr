import './styles.css'
import { Table } from "../../components"
import Cards from './Cards'
import { ReactNode } from 'react'
// import Graph from './Graph'

const renderOrderHead = (item: ReactNode, index: number) => (
  <th className="hidden" key={index}>{item}</th>
)

const renderOrderBody = (item: { id: string, user: string, price: string, date: string }, index: number) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      {/* <Badge type={orderStatus[item.status]} content={item.status}/> */}
    </td>
  </tr>
)


const latestOrders = {
  header: [
    "order id",
    "user",
    "total price",
    "date",
    "status"
  ],
  body: [
    {
      id: "#OD1711",
      user: "john doe",
      date: "17 Jun 2021",
      price: "$900",
      status: "shipping"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "pending"
    },
    {
      id: "#OD1712",
      user: "frank iva",
      date: "1 Jun 2021",
      price: "$400",
      status: "paid"
    },
    {
      id: "#OD1713",
      user: "anthony baker",
      date: "27 Jun 2021",
      price: "$200",
      status: "refund"
    }
  ]
}


const Dashboard = () => {
  return (
    <div className="h-full pt-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Dashboard</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>
        <div className='flex items-center gap-2 p-3 bg-[#EEF5FC] rounded-lg'>
          <img src="/plusdash.svg" alt="" />
          <p>Add Employee</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-2 mb-2 mt-5 bg-[#FFF7E7] rounded-md">
        <img src="/caution.svg" alt="caution" />
        <div>
          <div className='text-[#3F4254] font-bold text-base'>We need your attention!</div>
          <div className='text-[#7E8299] text-sm md:text-base'>To start adding employees & doing the cool stuffs, please Complete Onboarding</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/* <Graph / */}

      <div className="card__body mb-20">
        <Table
          headData={latestOrders.header}
          renderHead={(item: any, index: number) => renderOrderHead(item, index)}
          bodyData={latestOrders.body}
          renderBody={(item: any, index: number) => renderOrderBody(item, index)}
        />
      </div>
    </div>
  )
}

export default Dashboard
