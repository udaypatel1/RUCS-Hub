"use client";

import React from "react";
import { Input } from "../shadcn/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { useDebounce } from "use-debounce";

export default function NavSearchBar() {
  const [search, setSearch] = React.useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  return (
    <div className="flex place-items-center w-full">
      <div className="max-sm:hidden relative place-items-center w-full">
        <IoSearchSharp
          size={24}
          className="sm:absolute sm:left-2 sm:top-1/2 sm:transform sm:-translate-y-1/2"
        />
        <Input
          className="max-w-md max-sm:hidden pl-10 focus:border-2 focus:border-primary-red transition-all duration-150 ease-out hover:ease-in"
          placeholder="Search for a course or a professor..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Dialog>
        <DialogTrigger className="sm:hidden">
          <IoSearchSharp
            size={24}
            className="sm:absolute sm:left-2 sm:top-1/2 sm:transform sm:-translate-y-1/2"
          />
        </DialogTrigger>
        <DialogContent className="w-10/12 bg-primary-black pt-12 rounded">
          <DialogHeader>
            <DialogTitle>Search courses and professors</DialogTitle>
          </DialogHeader>
          <Input className="focus:border-2 focus:border-primary-red" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
