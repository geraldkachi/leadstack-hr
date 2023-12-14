
const CreateNewForm = () => {
  return (
    <div className="grid md:grid-cols-5 gap-4">
      <div className="md:col-span-3">
      <div className="bg-white p-4">
        
      </div>
      </div>


      <div className="md:col-span-2">
        <div className="bg-white p-4">
          <div className="break-words text-[#0D1227]">
            <div className="text-lg md:text-2xl"> Configuration</div>
            <div className="text-[#0D1227] text-[13px] my-2">Drag and Drop on the form area  </div>

            <div className="flex items-center flex-wrap text-sm gap-2 text-[10px] text-[#AFB1B6]">
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Text Field</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Paragraph</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Video</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Hyper Link</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Images</span>
              {/* <span className="border p-2"></span> */}
            </div>
          </div>

          <div className="break-words text-[#0D1227]">
            <div className="text-[#0D1227] text-[13px] my-2">Drag and Drop on the form area  </div>

            <div className="flex items-center flex-wrap text-sm gap-2 text-[10px] text-[#AFB1B6]">
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Text Field</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Paragraph</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Video</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Hyper Link</span>
              <span className="border border-[#AFB1B63D] p-2 rounded-lg">Add Images</span>
              {/* <span className="border p-2"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNewForm