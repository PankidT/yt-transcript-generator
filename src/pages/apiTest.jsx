import React, { useEffect, useState } from "react";

export default function apiTest() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const response = await fetch("/api/myApiRoute");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    const type = typeof data;
    console.log("data", data, type);
  }, [data]);

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-1 p-1">
      <div className="no-scrollbar flex h-24 w-full justify-center overflow-y-scroll rounded-xl"></div>
      <button onClick={handleClick}>Click me</button>
      {data !== null ? <div>{data.result}</div> : <div>null</div>}
    </div>
  );
}
