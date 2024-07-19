import ItemTool from "./item-tool";
import Search from "./search";

export default function Hero() {
  return (
    <div className="flex flex-col gap-y-4 min-h-screen bg-opacity-10  bg-white">
      <Search></Search>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ItemTool title="Youtubedownlaoder" />
        <ItemTool />
        <ItemTool />
      </div>
    </div>
  );
}
