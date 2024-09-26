import ItemTool from "./item-tool";
import Search from "./search";
import CategoryBar from "./category-bar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import GenericTool from "./generic-tool";

async function getData() {
  const res = await fetch("http://localhost:8080/api/publicTools");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Hero() {
  let data;

  try {
    data = await getData();
  } catch (error) {
    console.log(error);
    return (
      <div className="absolute top-[50%] text-destructive text-4xl">
        {" "}
        SERVER ERROR
      </div>
    );
  }

  const styles = {
    style1: {
      background: "#8c5ad6",
      border: "#532e78",
    },
  };

  return (
    <div className="p-4 flex flex-col gap-y-4 min-h-screen items-center">
      <Search></Search>

      <CategoryBar />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Popover key={item.title}>
            <PopoverTrigger asChild className="relative group cursor-pointer">
              <div>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                <div className="relative  bg-background ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="p-4 border border-secondary rounded flex items-center cursor-pointer">
                    <GenericTool iconProperties={styles[item.style]} />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <ItemTool props={item} />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
