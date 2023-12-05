import { useEffect, useState } from "react"
import { Breadcrumbs, Tabs } from "../../components"
import { useAuth } from "../../hooks"
import Biodata from "./Biodata"
import Education from "./Education"
import Emergency from "./Emergency"
import Employment from "./Employment"
import { BreadcrumsbProps } from "../../types"

const bread: BreadcrumsbProps[] = [
    {
        name: 'Dashboard',
        url: 'dashboard'
    },
    {
        name: 'Employee',
        url: "employees"
    },
    {
        name: 'Overview',
        url: "overview"
    }
]
const data = [
    {
        label: 'Biodata',
        content: (
            <>
                <Biodata />
            </>
        )
    },
    {
        label: 'Employment',
        content: (
            <>
                <Employment />
            </>
        )
    },
    {
        label: 'Education',
        content: (
            <>
                <Education />
            </>
        )
    },
    {
        label: 'Emergency',
        content: (
            <>
                <Emergency />
            </>
        )
    }
]
const AddEmployees = () => {
    const activeTab = useAuth(state => state.activeTab)
    const noOfSteps = 4
    // const arrayOfSteps = [...Array(noOfSteps)];
    const completedSteps = activeTab + 1;

    const handleStepClick = (index: number) => {
        useAuth.setState({ activeTab: index })
    };


    useEffect(() => {
        return () => {
            useAuth.setState({ activeTab: 0 })
        }
    }, [])

    return (
        <div className="h-full pt-3">
            <div className="px-4 md:px-8">
                <Breadcrumbs {...{ bread }} />
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-lg md:text-2xl">Add Employees</div>
                        <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-8 flex items-center justify-end">
                <div className="text-[#94A0B4] flex flex-row items-center justify-end mx-2 md:mx-10 mt-8">
                    <div className="stepper-div flex items-center">
                        {data.map((_, index) => {
                            const isStepCompleted = index <= activeTab
                            return (
                                <div
                                    key={index}
                                    className={`step rounded-sm h-1 w-10 mr-2 bg-[#DEDFEC]  ${isStepCompleted && 'step--completed cursor-pointer !bg-[#1D8EE6]'}`}
                                    {...(isStepCompleted
                                        ? { onClick: () => handleStepClick(index) }
                                        : {})}
                                ></div>
                            );
                        })}
                    </div>
                    <p className="stepper-count text-[#94A0B4] text-xs">
                        Step <span className={`completed-count text-[#272848]`}>{completedSteps}</span> of {noOfSteps}
                    </p>
                </div>
            </div>
            <div className="mt-5  pb-36">
                <Tabs data={data} {...{ activeTab }} />
            </div>
        </div>
    )
}

export default AddEmployees