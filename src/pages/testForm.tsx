// components/FormComponent.tsx

import { useState } from "react";

const FormComponent = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/myApiRoute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        setMessage("Form data submitted successfully");
      } else {
        setMessage("Error occurred while processing the form data");
      }
    } catch (error) {
      setMessage("Error occurred while submitting the form");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center gap-1 p-1">
      <div className="no-scrollbar flex h-24 w-full justify-center overflow-y-scroll rounded-xl"></div>

      <h1>Welcome to the Form Page</h1>
      <FormComponent />
    </div>
  );
};

export default HomePage;
