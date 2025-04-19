// Optional Formfill Component
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Formfill = () => {
  const [formData, setFormData] = useState({});
  const [preferredStates, setPreferredStates] = useState({});
  const [files, setFiles] = useState({});

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const allFields = [
    "companyName", "streetAddress", "address", "zipCode", "addressLine2", "email", "phoneNumber",
    "mcNumber", "usdotNumber", "ein", "tNumber", "numberOfTrucks", "numberOfDrivers"
  ];

  const allFiles = [
    "mcAuthorityLetter", "ndaOrVoidCheck", "liabilityInsurance", "w9"
  ];

  const handleChange = (e) => {
    const { name, value, type, files: fileInput, checked } = e.target;
    if (type === "file") {
      setFiles({ ...files, [name]: fileInput[0] });
    } else if (type === "checkbox") {
      setPreferredStates({ ...preferredStates, [value]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const resetForm = () => {
    setFormData({});
    setPreferredStates({});
    setFiles({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedStates = Object.entries(preferredStates)
      .filter(([_, checked]) => checked)
      .map(([state]) => state);

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    data.append("preferredStates", JSON.stringify(selectedStates));
    Object.entries(files).forEach(([key, file]) => {
      if (file) data.append(key, file);
    });

    try {
      const res = await axios.post("http://localhost:4000/api/contacts", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Submitted successfully!");
      console.log(res.data);
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error("Submission failed.");
    }
  };

  return (
    <div className="p-8 bg-white text-black">
      <Toaster position="top-right" />

      <h1 className="text-center text-2xl font-bold mb-4">Get In Touch</h1>

      <Card className="bg-white text-black p-6">
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {allFields.map((name) => (
              <div key={name}>
                <input
                  name={name}
                  placeholder={name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  className="p-2 bg-gray-100 text-black rounded-md border border-gray-300 w-full"
                />
              </div>
            ))}

            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-2 text-center">What states do you prefer to drive in?</h2>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto p-2">
                {states.map((state) => (
                  <label key={state} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={state}
                      checked={preferredStates[state] || false}
                      onChange={handleChange}
                    />
                    {state}
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-2 grid gap-4">
              {allFiles.map((name) => (
                <div key={name} className="flex flex-col">
                  <label className="text-sm font-medium mb-1">{name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}:</label>
                  <input
                    type="file"
                    name={name}
                    onChange={handleChange}
                    className="file:px-4 file:py-2 file:border file:border-gray-300 file:rounded-md file:bg-white file:text-sm file:text-gray-700 hover:file:bg-gray-100"
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="col-span-2 mt-4 bg-green-600 text-white">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Formfill;
