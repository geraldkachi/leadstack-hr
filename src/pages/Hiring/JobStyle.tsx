import { useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Hybrid', 'Remote', 'Onsite'];
const defaultCheckedList = ['Hybrid', 'Onsite'];

const JobStyle = () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    return (
        <div>
            <div className="bg-white rounded-md p-4">
                <div className="border rounded-md p-4 space-y-2 text-sm text-[#7C8091]">
                    <div className="flex items-center justify-between gap-4">
                        <span className='text-[#0D1227] font-semibold text-sm'>FILTER</span>
                        <span className='text-[#1D8EE6] font-semibold text-sm cursor-pointer' onClick={() => setCheckedList([])}>Clear</span>
                    </div>
                    <>
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            Job Style
                        </Checkbox>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                    </>
                    {/* <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} > */}
                    <div className="flex items-center justify-between">
                        <span>Hybrid</span>
                        <Checkbox value={checkedList} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Remote</span>
                        <Checkbox value={checkedList} />
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Onsite</span>
                        <Checkbox value={checkedList} />
                    </div>
                    {/* </CheckboxGroup> */}
                </div>
            </div>
        </div>
    )
}

export default JobStyle