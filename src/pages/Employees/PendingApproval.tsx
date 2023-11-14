import { Table } from "antd"
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from 'antd/es/table';
import { AlignType } from "rc-table/lib/interface";
import type { TableRowSelection } from 'antd/es/table/interface';
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const PendingApproval = () => {
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
    return (
        <div className="mt- mb-20 overflow-x-auto bg-[#F5F6FA]">

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
    )
}

export default PendingApproval