import { CreateNewForm, PostNewJob } from ".."
import { Breadcrumbs, Tabs } from "../../components"
import { BreadcrumsbProps } from "../../types"

const bread: BreadcrumsbProps[] = [
  {
    name: 'Home',
    url: 'dashboard'
  },
  {
    name: 'Recruitment & Hiring',
    url: "hiring/overview"
  },
  {
    name: 'Jobs',
    url: "/hiring/create-new-job"
  },
]
const CreateNewJob = () => {
  return (
    <div className="h-full pt-3 ">
      <div className="px-4 md:px-8">
        <Breadcrumbs {...{ bread }} />

        <div className="flex items-center justify-between gap-x-3">
          <div>
            <div className="text-lg md:text-2xl my-4">Create New Job</div>
          </div>

          <div className="flex items-center gap-3">
          </div>                </div>
        <div className="bg-[#F5F6FA] px-4 md:px-8"></div>
      </div>

      <Tabs data={[
        {
          label: 'Post New Job',
          content: (
            <>
              <PostNewJob />
            </>
          )
        },
        {
          label: 'Create New form',
          content: (
            <>
              <CreateNewForm />
            </>
          )
        },
      ]} />
    </div>
  )
}

export default CreateNewJob