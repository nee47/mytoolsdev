"use client";
import { Input } from "./ui/input";

export default function Search() {
  function handleSearch(item) {
    console.log(item);
  }
  return (
    <div>
      <Input
        placeholder="search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="w-[300px] "
      ></Input>
    </div>
  );
}
