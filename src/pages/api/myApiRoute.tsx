// pages/api/submit.ts

import { NextApiRequest, NextApiResponse } from "next";
import { spawn } from "child_process";

type FormData = {
  url: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const formData: FormData = req.body;

  // Spawn a Python process and pass the form data as arguments
  const pythonScript = spawn("python", [
    "../Script/transcribe.py",
    formData.url,
  ]);

  pythonScript.stdout.on("data", (data) => {
    // Handle the output from the Python script if needed
    console.log(`Python script output: ${data}`);
  });

  pythonScript.stderr.on("data", (data) => {
    // Handle any error output from the Python script
    console.error(`Error from Python script: ${data}`);
  });

  pythonScript.on("close", (code) => {
    if (code === 0) {
      res.status(200).json({ message: "Form data submitted successfully" });
    } else {
      res
        .status(500)
        .json({ message: "Error occurred while processing the form data" });
    }
  });
}
