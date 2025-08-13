import { useState } from "react";
import songsData from "./data/cbbfmpoc.json";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import "./App.css";
import "./index.css";

type Song = {
  episodeNumber: number;
  title: string;
  artist: string;
  episodeGuest: string;
};

const columnnHelper = createColumnHelper<Song>();

const columns = [
  columnnHelper.accessor("episodeNumber", { cell: (info) => info.getValue() }),
  columnnHelper.accessor("title", { cell: (info) => info.getValue() }),
  columnnHelper.accessor("artist", { cell: (info) => info.getValue() }),
  columnnHelper.accessor("episodeGuest", { cell: (info) => info.getValue() }),
];

function App() {
  const table = useReactTable({
    data: songsData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-4">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
