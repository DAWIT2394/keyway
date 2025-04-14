// File: components/AllContactSubmissions.jsx
import React, { useState, useEffect } from 'react';
import axios from "axios";

function AllContactSubmissions() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [viewedCards, setViewedCards] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 5;

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!isSearching) fetchContacts(currentPage);
  }, [currentPage, isSearching]);

  const fetchContacts = async (page = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/api/contacts?page=${page}&limit=${perPage}`);
      setContacts(res.data.contacts || []);
      setTotalPages(res.data.pagination?.pages || 1);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/api/contacts?phoneNumber=${searchTerm.trim()}&limit=100`);
      setSearchResults(res.data.contacts || []);
      setIsSearching(true);
    } catch (err) {
      console.error("Search failed:", err);
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = async () => {
    setSearchTerm('');
    setIsSearching(false);
    setSearchResults([]);
    await fetchContacts(1);
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:4000/api/contacts/${id}`);
      setContacts(prev => prev.filter(c => c._id !== id));
      setSearchResults(prev => prev.filter(c => c._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
      alert("Failed to delete contact");
    } finally {
      setDeletingId(null);
    }
  };

  const list = isSearching ? searchResults : contacts;

  const fileFields = [
    { key: 'mcAuthorityLetter', label: 'MC Authority Letter' },
    { key: 'ndaOrVoidCheck', label: 'NDA or Void Check' },
    { key: 'liabilityInsurance', label: 'Liability Insurance' },
    { key: 'w9', label: 'W9 Form' },
  ];

  const getFileIcon = (url) => {
    if (url?.endsWith('.pdf')) return '📄';
    if (url?.match(/\.(jpg|jpeg|png|gif)$/i)) return '🖼️';
    return '📎';
  };

  const toggleCardViewed = (contactId) => {
    setViewedCards(prev => ({ ...prev, [contactId]: true }));
  };

  const isNewCard = (contactId, createdAt) => {
    const diff = (new Date() - new Date(createdAt)) / 1000 / 60;
    return diff < 10 && !viewedCards[contactId];
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Submitted Contact Info</h1>
      <div className="flex items-center mb-4 gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by phone number"
          className="border rounded px-3 py-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >Search</button>
        {isSearching && (
          <button
            onClick={resetSearch}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >Clear</button>
        )}
        <button
          onClick={() => fetchContacts(currentPage)}
          disabled={loading}
          className={`ml-auto px-4 py-2 rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >{loading ? "Refreshing..." : "Refresh List"}</button>
      </div>

      {loading && list.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : list.length === 0 ? (
        <p className="text-gray-600">No contact submissions found.</p>
      ) : (
        <>
          <div className="space-y-6">
            {list.map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-lg shadow-md p-6 relative cursor-pointer"
                onClick={() => toggleCardViewed(contact._id)}
              >
                {isNewCard(contact._id, contact.createdAt) && (
                  <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
                    New
                  </div>
                )}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold pr-6">
                    {contact.companyName || 'Unnamed Company'}
                  </h2>
                </div>
                <p><strong>Phone:</strong> {contact.phoneNumber}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Address:</strong> {contact.streetAddress}, {contact.addressLine2}, {contact.address}, {contact.zipCode}</p>
                <p><strong>MC Number:</strong> {contact.mcNumber}</p>
                <p><strong>USDOT Number:</strong> {contact.usdotNumber}</p>
                <p><strong>EIN:</strong> {contact.ein}</p>
                <p><strong>T Number:</strong> {contact.tNumber}</p>
                <p><strong>Trucks:</strong> {contact.numberOfTrucks}</p>
                <p><strong>Drivers:</strong> {contact.numberOfDrivers}</p>
                <p><strong>Submitted On:</strong> {new Date(contact.createdAt).toLocaleString()}</p>

                <div className="mt-4">
                  <ul className="mt-2 list-disc ml-5 text-sm">
                    {fileFields.map(({ key, label }) => (
                      contact[key] ? (
                        <li key={key} className="flex items-center gap-2">
                          <span>{getFileIcon(contact[key])}</span>
                          <a
                            href={contact[key]}
                            download
                            className="text-blue-600 underline"
                          >
                            {label}
                          </a>
                        </li>
                      ) : (
                        <li key={key} className="text-gray-400">{label}: Not uploaded</li>
                      )
                    ))}
                  </ul>
                </div>

                <button
                  disabled={deletingId === contact._id}
                  onClick={() => handleDeleteContact(contact._id)}
                  className="absolute top-4 right-4 text-red-600 hover:text-red-800"
                >Delete</button>
              </div>
            ))}
          </div>

          {!isSearching && (
            <div className="flex justify-center space-x-2 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >Prev</button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                >{i + 1}</button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >Next</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AllContactSubmissions;
