
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";


const Featured = () => {
  
  // const { isLoading, data: getData } = useQuery({
  //   queryKey: ["featured"],
  //   queryFn: async () => {
  //     const res = await fetch("https://blog-hero-server.vercel.app/featured");
  //     return res.json();
  //   },
  // });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://blog-hero-server.vercel.app/featured")
    .then(res => res.json())
    .then(dataF => {
      setData(dataF)
    })
  },[])
  

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("", {
      id: "Serial Number",
      cell: (info) => <span>{info.row.index + 1}</span>,
      header: "Serial Number",
    }),
    columnHelper.accessor("title", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Title",
    }),
    columnHelper.accessor("user_name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Blog Owner Name",
    }),
    columnHelper.accessor("user_pro", {
      cell: (info) => (
        <img src={info?.getValue()} alt="" className="rounded-full w-10 h-10 object-cover" />
      ),
      header: "Owner Profile Pic",
    }),
  ];

  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // if (isLoading) {
  //   return <Spinner aria-label="Default status example" />;
  // }

  return (
    <div className=" mt-10 mb-10">
      <table className="border-2 border-[#4D869C] w-full text-left">
        <thead className="bg-[#4D869C]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup._id}>
              {headerGroup.headers.map((header) => (
                <th key={header._id} className="px-3.5 py-2">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {
            table.getRowModel().rows.length? (
              table.getRowModel().rows.map((row, i) => (
                <tr key={row._id} className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`}>
                  {
                    row.getVisibleCells().map((cell) => (
                      <td key={cell._id} className="px-3.5 py-2">
                        {
                          flexRender(
                            cell.column.columnDef.cell, cell.getContext()
                          )
                        }
                      </td>
                    ))
                  }
                </tr>
              ))
            ) : null
          }
        </tbody>
      </table>
    </div>
  );
};

export default Featured;
