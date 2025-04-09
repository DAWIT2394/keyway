import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Formfill = () => {
  const [formData, setFormData] = useState({});
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        preferredStates: {
          ...(formData.preferredStates || {}),
          [value]: checked,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]);
    setFormData({});
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const downloadFile = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
  };

  return (
    <div className="p-8 bg-white text-black">
      <h1 className="text-center text-2xl font-bold">Get In Touch</h1>

      <Card className="bg-white text-black p-6">
        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {[
              { name: "companyName", placeholder: "Company Name" },
              { name: "streetAddress", placeholder: "Street Address" },
              { name: "address", placeholder: "Address" },
              { name: "zipCode", placeholder: "ZIP Code" },
              { name: "address2", placeholder: "Address Line 2" },
              { name: "email", placeholder: "Email" },
              { name: "phone", placeholder: "Phone Number" },
              { name: "mc", placeholder: "MC#" },
              { name: "usdot", placeholder: "USDOT#" },
              { name: "ein", placeholder: "EIN#" },
              { name: "tn", placeholder: "TN#" },
              { name: "numberOfTrucks", placeholder: "Number of trucks?" },
              { name: "numberOfDrivers", placeholder: "Number of drivers?" }
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                className="p-2 bg-gray-100 text-black rounded-md border border-gray-300"
              />
            ))}

            <div className="col-span-2">
              <h2 className="text-lg mt-4">What states do you prefer to drive in?</h2>
              <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto p-2">
                {states.map((state) => (
                  <label key={state} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="preferredStates"
                      value={state}
                      checked={formData.preferredStates?.[state] || false}
                      onChange={handleChange}
                    />
                    {state}
                  </label>
                ))}
              </div>
            </div>

            <div className="col-span-2 grid gap-4">
  {[
    { name: "mcAuthority", label: "Upload MC Authority Letter:" },
    { name: "ndaOrVoidCheck", label: "NDA or Void Check:" },
    { name: "liabilityInsurance", label: "Certificate of Liability Insurance:" },
    { name: "w9", label: "W9:" },
  ].map((fileInput) => (
    <div key={fileInput.name} className="flex flex-col">
      <label htmlFor={fileInput.name} className="text-sm font-medium text-gray-700 mb-1">
        {fileInput.label}
      </label>
      <input
        type="file"
        name={fileInput.name}
        id={fileInput.name}
        onChange={handleChange}
        className="file:px-4 file:py-2 file:border file:border-gray-300 file:rounded-md file:bg-white file:text-sm file:text-gray-700 hover:file:bg-gray-100"
      />
    </div>
  ))}
</div>


            <Button type="submit" className="col-span-2 mt-4 bg-green-600 text-white">Submit</Button>
          </form>
        </CardContent>
      </Card>

    
    </div>
  );
};

export default Formfill;
