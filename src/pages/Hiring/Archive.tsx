
const Archive = () => {
  return (
    <div>

<a href="#" className="flex flex-col gap-2 items p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md">
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/cardi.svg" alt="" />
                  <div className="flex flex-col  p-4 leading-normal">
                    <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900">Full Stack Developer...</h5>
                    <div className="flex items-center justify-between whitespace-nowrap">
                      <p className="mb-3 font-normal text-gray-700 text-sm">20 Applicants</p>
                      <p className="mb-3 font-normal text-gray-700 text-sm">Expiry Date: Oct 31, 2023</p>
                    </div>
                  </div>
                </a>
    </div>
  )
}

export default Archive