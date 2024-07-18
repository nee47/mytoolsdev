import ItemTool from "./item-tool";

export default function Hero() {
  return (
    <div className="min-h-screen my-10 md:m-12 bg-opacity-10  bg-white">
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ItemTool title="Youtubedownlaoder" />
        <ItemTool />
        <ItemTool />
      </div>
    </div>
  );
}
