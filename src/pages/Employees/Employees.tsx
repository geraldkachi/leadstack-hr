import { format } from "date-fns";
import { AlignType } from "rc-table/lib/interface";
import { useNavigate } from "react-router-dom";
import { Button as GButton, Tabs } from "../../components"
import { useState } from "react";
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import AllEmployees from "./AllEmployees";
import PendingApproval from "./PendingApproval";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const navItems = [
  {
    name: 'Contact Info',
    step: 0,
  },
  {
    name: 'Emergency Contact',
    step: 1,
  },
  {
    name: 'Next of Kin',
    step: 2,
  },
  {
    name: 'Education',
    step: 3,
  },
  {
    name: 'Job History',
    step: 4,
  },
  {
    name: 'Certifications',
    step: 5,
  },
  {
    name: 'Work',
    step: 6,
  },
]
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const Employees = () => {
  const [activeProfile, setActiveProfile] = useState(0)
  const navigate = useNavigate();
  // const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);


  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const dataSource: ColumnsType<DataType> = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: "Name",
      // dataIndex: 'startTime',
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`${val?.createdAt
          ? format(new Date(val?.createdAt), "dd MMMM yyyy, hh:mm a")
          : "--/--/----"
          }`}</span>
      ),
      width: "10%",
      align: "center" as AlignType,
    },
    {
      title: "Contact",
      dataIndex: "creator",
      width: "10%",
      align: "center" as AlignType,
    },
    {
      title: "Job Role",
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`--/--/----`}</span>
      ),
      width: "20%",
      align: "center" as AlignType,
    },
    {
      title: "Department",
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`--/--/----`}</span>
      ),
      width: "20%",
      align: "center" as AlignType,
    },
    {
      title: "Hire Date",
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`--/--/----`}</span>
      ),
      width: "20%",
      align: "center" as AlignType,
    },
    {
      title: "Status",
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`--/--/----`}</span>
      ),
      width: "20%",
      align: "center" as AlignType,
    },
    {
      title: "Action",
      render: (val: any) => (
        <span
          onClick={() => navigate(`/history/${val?.id}`)}
          className="cursor-pointer capitalize whitespace-nowrap"
        >{`--/--/----`}</span>
      ),
      width: "20%",
      align: "center" as AlignType,
    },
  ];

  // rowSelection object indicates the need for row selection
  // const rowSelection = {
  //   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  //   },
  //   getCheckboxProps: (record: DataType) => ({
  //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };

  const handleGoToStep = (step: any) => {
    setActiveProfile(step)
  }

  return (
    <div className="h-full pt-3 md:mr-20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg md:text-2xl">Employees (20)</div>
          <div className="text-[#98A1B0] text-[13px] ">Track and manage employee information and manage your <br className='hidden md:block' /> organization activities. </div>
        </div>

        <GButton className='flex items-center  rounded-lg !text-white my-5' prefixIcon={<img src="/plusdash.svg" alt="" />} title="Add Employee" />
      </div>

      {/* <div className='nav'>
        <ul className='nav__list'>
          {navItems.map((item) => {
            return (
              <li
                key={item.name}
                className={activeProfile === item.step ? 'nav__active' : 'nav__item'}
                onClick={() => handleGoToStep(item.step)}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div> */}
      <Tabs
        data={[
          {
            label: 'All Employees',
            content: (
              <>
              <AllEmployees />
              </>
            )
          },
          {
            label: 'Pending Approval',
            content: (
              <>
              <PendingApproval />
              </>
            )
          }
        ]}
      />


      <div className="mt-10 mb-20 overflow-x-auto">


        <Table
          size="small"
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          // loading={isLoading || isFetching}
          columns={columns}
          {...{ dataSource }}
          // dataSource={data?.data?.standup}
          // pagination={{
          //   position: ["bottomRight"],
          //   current: page,
          //   total: data?.data?.count,
          // }}
          {...{ rowSelection }}
          style={{ marginTop: "20px" }}
        />
      </div>
    </div>
  )
}

export default Employees
