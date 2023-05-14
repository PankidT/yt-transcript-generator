import { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [output, setOutput] = useState("");

  const runPythonScript = async () => {
    try {
      console.log("start running runPythonScript in testForm2.tsx");

      const response = await axios.get("api/testApi");
      console.log("response", response);
      const scriptOutput = response.data.output;
      setOutput(scriptOutput);
    } catch (error) {
      console.error("Error executing script:", error);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center gap-1 p-1">
      <div className="no-scrollbar flex h-24 w-full justify-center overflow-y-scroll rounded-xl"></div>
      <button onClick={runPythonScript}>Run Python Script</button>
      {output && <p>Output: {output}</p>}
    </div>
  );
};

export default MyComponent;
