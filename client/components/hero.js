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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
        {data.map((item) => (
          <Popover key={item.title}>
            <PopoverTrigger asChild className="relative group cursor-pointer">
              <div>
                <div className="absolute -inset-1 bg-gradient-to-br from-pink-600 to-primary rounded-lg blur opacity-45 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
                <div className=" relative  bg-background  rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="p-4 w-full gap-4  rounded flex flex-col items-center cursor-pointer">
                    <h2>{item.title}</h2>
                    <GenericTool iconProperties={styles[item.style]} />
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-0">
              <ItemTool props={item} />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
