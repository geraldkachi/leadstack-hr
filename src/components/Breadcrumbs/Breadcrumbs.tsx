import { Link } from 'react-router-dom'
import { BreadcrumsbProps } from '../../types/types'

interface BreadcrumsbItemsProps {
  bread: Array<BreadcrumsbProps>
}
// const bread: BreadcrumsbProps[] = [
//   {
//     name: 'Dashboard',
//     url: ''
//   },
//   {
//     name: 'Manage Users',
//     url: "manage-users"
//   },
//   {
//     name: 'User Detail',
//     url: "user-detail"
//   }
// ]

const BreadcrumbItems = ({ bread }: BreadcrumsbItemsProps) => {
  const isLast = (index: number) => index === bread.length - 1
  return (
    <>
      {bread.map((item: BreadcrumsbProps, index: number) => {
        const disabled = isLast(index)
        const { name, url } = item
        return (
          <li key={index} className="text-sm py-2">
            <Link to={disabled ? '#' : `/${url}`} className={`${disabled ? 'text-gray-600' : ' text-[#7C8091]  flex items-center hover:text-[#535768]'}`}>{name}
              <span className=' flex items-center'><span className={`${disabled && 'hidden invisible'}text-gray-500 mx-2`}> <img src="/breadangle.svg" alt="" /> </span></span>
            </Link>
          </li>
        )
      })}
    </>
  )
}

const Breadcrumbs = ({ bread }: BreadcrumsbItemsProps) => {
  // https://heroicons.com/

  return (
    <>
      <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex text-sm">
          <BreadcrumbItems {...{ bread }} />
        </ol>
      </nav>

      {/* <nav className="bg-grey-light rounded-md w-full">
        <ol className="list-reset flex text-sm">
          <li><Link to="#" className="text-blue-600 hover:text-blue-700">Home</Link></li>
          <li><span className="text-gray-500 mx-2">{">"}</span></li>
          <li><Link to="#" className="text-blue-600 hover:text-blue-700">Library</Link></li>
          <li><span className="text-gray-500 mx-2">{">"}</span></li>
          <li className="text-gray-500">Data</li>
        </ol>
      </nav> */}
    </>
  )
}

export default Breadcrumbs