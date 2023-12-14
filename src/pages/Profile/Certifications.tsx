const assets = [
  '/certification.svg',
  '/certification2.svg',

] as const 


const Certifications = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="w-max bg-white rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={assets[0]} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-base font-medium tracking-tight text-[#0D1227]">Product Design Certificate</h5>
          </a>
          <p className="mb-3 font-normal text-sm">Utiva</p>
  
        <div className="flex items-center justify-end text-[#535768] text-xs">18th May, 2021</div>
        </div>
      </div>

      <div className="w-max bg-white rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={assets[1]} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-base font-medium tracking-tight text-[#0D1227]">Product Design Certificate</h5>
          </a>
          <p className="mb-3 font-normal text-sm">Utiva</p>
  
        <div className="flex items-center justify-end text-[#535768] text-xs">18th May, 2021</div>
        </div>
      </div>

    </div>
  )
}

export default Certifications