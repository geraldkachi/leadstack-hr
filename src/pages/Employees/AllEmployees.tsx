import { Table } from "antd"
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from 'antd/es/table';
import { AlignType } from "rc-table/lib/interface";
import type { TableRowSelection } from 'antd/es/table/interface';
import { Input } from "../../components";
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const AllEmployees = () => {
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
        {
            key: '3',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
        {
            key: '4',
            name: 'John',
            age: 42,
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
                    : "Gerald Kachi"
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
            render: () => "Samuel Ikoojo"
        },
        {
            title: "Job Role",
            render: (val: any) => (
                <span
                    onClick={() => navigate(`/history/${val?.id}`)}
                    className="cursor-pointer capitalize whitespace-nowrap"
                >{`Frontend`}</span>
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
                >{`Engineering`}</span>
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
                >{`${''} 24 2023 18:16:46`}</span>
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
                >{`Active`}</span>
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
                >{``}</span>
            ),
            width: "20%",
            align: "center" as AlignType,
        },
    ];
    return (
        <div className="mb-20 overflow-x-auto">
              <Input LeadingIcon={() => <>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5034 13.2383L11.2118 10.9979L11.1581 10.9162C11.0582 10.8168 10.9217 10.7608 10.7791 10.7608C10.6366 10.7608 10.5 10.8168 10.4002 10.9162C8.45266 12.7029 5.45177 12.8 3.38768 11.1431C1.32358 9.48627 0.836787 6.58956 2.25013 4.3741C3.66348 2.15863 6.53839 1.31188 8.96824 2.39541C11.3981 3.47894 12.6289 6.15651 11.8444 8.65238C11.7879 8.83269 11.834 9.02877 11.9655 9.16676C12.097 9.30475 12.2937 9.36369 12.4817 9.32138C12.6697 9.27906 12.8203 9.14192 12.8768 8.96161C13.8146 5.99975 12.3982 2.81235 9.54375 1.46136C6.68934 0.110359 3.25357 1.0012 1.45904 3.5576C-0.335479 6.11399 0.0497939 9.56875 2.36563 11.687C4.68146 13.8052 8.23286 13.9512 10.7224 12.0306L12.7514 14.0143C12.961 14.2183 13.2998 14.2183 13.5093 14.0143C13.7187 13.8075 13.7187 13.4744 13.5093 13.2675L13.5034 13.2383Z" fill="#667085" />
                </svg>
            </>}
                TrailingIcon={() => <><img className="cursor-pointer" src="/filtersearch.svg" alt="" /></>}
                type="search"
                placeholder="Search Employee by name, role, ID or any related keywords" />


            <Table
                size="large"
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
                // style={{ marginTop: "20px" }}
            />
        </div>
    )
}

export default AllEmployees