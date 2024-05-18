export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 p-12">
        <div className="bg-black w-40 h-40" />
        <p className="pt-8 text-4xl font-bold">Abraham Oh</p>
        <p>Contact Info</p>
        <p>More info here</p>
      </div>
      <div className="col-span-2 p-12">
        <div className="w-full h-40 bg-iron">
          <p>CONTENT</p>
          <p>CONTENT 2</p>
        </div>
      </div>
    </div>
  );
}
