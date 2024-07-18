import ItemTool from "./item-tool";

export default function Hero() {
  return (
    <div className="min-h-screen w-[45%] m-12 bg-opacity-10  bg-white">
      <div className="gird grid-cols-3">
        <ItemTool title="Youtubedownlaoder" />
        <ItemTool />
        <ItemTool />
      </div>
    </div>
  );
}
