import React, { useState, useEffect } from 'react';
import axios from "axios";

function AllContactSubmissions() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState({});
  const [fileErrors, setFileErrors] = useState({});
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/contacts", {
        headers: { "Content-Type": "application/json" },
      });
      setContacts(res.data.contacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert("Failed to delete contact");
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewFile = async (url, fileName) => {
    const fileKey = `${url}-${fileName}`;
    try {
      setFileLoading(prev => ({ ...prev, [fileKey]: true }));
      setFileErrors(prev => ({ ...prev, [fileKey]: null }));

      if (url?.endsWith('.pdf') || url?.match(/\.(jpeg|jpg|gif|png)$/)) {
        window.open(url, '_blank');
      } else {
        const response = await axios.get(url, { responseType: 'blob' });
        const href = URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      }
    } catch (error) {
      console.error(`Error loading file ${fileName}:`, error);
      setFileErrors(prev => ({ ...prev, [fileKey]: 'Failed to load file' }));
    } finally {
      setFileLoading(prev => ({ ...prev, [fileKey]: false }));
    }
  };

  const renderFileLink = (url, label) => {
    if (!url) return <span className="text-gray-500 italic">Not provided</span>;

    const fileKey = `${url}-${label}`;
    const isLoading = fileLoading[fileKey];
    const error = fileErrors[fileKey];

    return (
      <div className="inline-flex items-center">
        <button
          onClick={() => handleViewFile(url, label)}
          disabled={isLoading}
          className={`text-blue-600 hover:text-blue-800 hover:underline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {label}
        </button>
        {isLoading && <span className="ml-2 text-sm text-gray-500">Loading...</span>}
        {error && <span className="ml-2 text-sm text-red-500">{error}</span>}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Submitted Contact Info</h1>

      <button
        onClick={fetchContacts}
        disabled={loading}
        className={`mb-6 px-4 py-2 rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
      >
        {loading ? "Refreshing..." : "Refresh List"}
      </button>

      {loading && contacts.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : contacts.length === 0 ? (
        <p className="text-gray-600">No contact submissions found.</p>
      ) : (
        <div className="space-y-6">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white rounded-lg shadow-md p-6 relative">
              <button
                onClick={() => handleDeleteContact(contact._id)}
                disabled={deletingId === contact._id}
                className="absolute top-4 right-4 p-1 text-red-600 hover:text-red-800 disabled:opacity-50"
                title="Delete contact"
              >
                {deletingId === contact._id ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>

              <h2 className="text-xl font-semibold mb-4 pr-6">{contact.companyName || 'Unnamed Company'}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Contact Information</h3>
                  <p><span className="font-semibold">Email:</span> {contact.email || 'N/A'}</p>
                  <p><span className="font-semibold">Phone:</span> {contact.phoneNumber || 'N/A'}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Company Details</h3>
                  <p><span className="font-semibold">MC Number:</span> {contact.mcNumber || 'N/A'}</p>
                  <p><span className="font-semibold">USDOT:</span> {contact.usdotNumber || 'N/A'}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-gray-700 mb-2">Address</h3>
                <p>{contact.streetAddress || 'N/A'}</p>
                {contact.addressLine2 && <p>{contact.addressLine2}</p>}
                <p>{contact.zipCode || 'N/A'}</p>
              </div>

              {contact.preferredStates && Object.values(contact.preferredStates).some(Boolean) && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700 mb-2">Preferred States</h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(contact.preferredStates)
                      .filter(([_, selected]) => selected)
                      .map(([state]) => (
                        <span key={state} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {state}
                        </span>
                      ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t">
                <h3 className="font-medium text-gray-700 mb-3">Uploaded Documents</h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">W9 Form: </span>
                    {renderFileLink(contact.w9, 'W9.pdf')}
                  </li>
                  <li>
                    <span className="font-semibold">Liability Insurance: </span>
                    {renderFileLink(contact.liabilityInsurance, 'Insurance.pdf')}
                  </li>
                  <li>
                    <span className="font-semibold">NDA/Void Check: </span>
                    {renderFileLink(contact.ndaOrVoidCheck, 'NDA_VoidCheck.pdf')}
                  </li>
                  <li>
                    <span className="font-semibold">MC Authority Letter: </span>
                    {renderFileLink(contact.mcAuthorityLetter, 'MC_Authority.pdf')}
                  </li>
                </ul>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Submitted on: {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllContactSubmissions;