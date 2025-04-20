import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sub-component for individual contact cards
const ContactCard = React.memo(({ 
  contact, 
  onDelete, 
  deletingId, 
  isNew,
  toggleCardViewed 
}) => {
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

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 sm:p-6 relative hover:shadow-lg transition-shadow"
      onClick={() => toggleCardViewed(contact._id)}
      aria-label={`Contact details for ${contact.companyName || 'unnamed company'}`}
    >
      {isNew && (
        <div className="absolute left-1/2 -top-2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
          New
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold pr-6">
          {contact.companyName || 'Unnamed Company'}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {['phoneNumber', 'email', 'streetAddress', 'addressLine2', 'address', 'zipCode', 
          'mcNumber', 'usdotNumber', 'ein', 'tNumber', 'numberOfTrucks', 'numberOfDrivers'].map(field => (
          <p key={field} className="text-sm sm:text-base">
            <strong className="text-gray-700">
              {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
            </strong> 
            <span className="ml-1">{contact[field] || 'N/A'}</span>
          </p>
        ))}
      </div>

      {contact.preferredStates && (
        <p className="mt-2">
          <strong>Preferred States:</strong> {Array.isArray(contact.preferredStates)
            ? contact.preferredStates.join(', ')
            : (() => { 
                try { 
                  return JSON.parse(contact.preferredStates).join(', '); 
                } catch { 
                  return 'Invalid format'; 
                } 
              })()}
        </p>
      )}

      <p className="text-sm mt-2">
        <strong>Submitted On:</strong> {new Date(contact.createdAt).toLocaleString()}
      </p>

      <div className="mt-3">
        <h3 className="font-medium text-gray-700 mb-1">Documents:</h3>
        <ul className="mt-2 list-disc ml-5 text-sm">
          {fileFields.map(({ key, label }) => (
            contact[key] ? (
              <li key={key} className="flex items-center gap-2">
                <span>{getFileIcon(contact[key])}</span>
                <a
                  href={contact[key]}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                  aria-label={`Download ${label}`}
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
        onClick={(e) => {
          e.stopPropagation();
          onDelete(contact._id);
        }}
        className="absolute top-4 right-4 text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
        aria-label={`Delete contact for ${contact.companyName}`}
      >
        {deletingId === contact._id ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
});

// Sub-component for pagination controls
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Previous page"
      >
        Prev
      </button>
      
      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
          >
            1
          </button>
          {startPage > 2 && <span className="px-3 py-1">...</span>}
        </>
      )}
      
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <button
          key={startPage + i}
          onClick={() => onPageChange(startPage + i)}
          className={`px-3 py-1 border rounded ${currentPage === startPage + i ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-label={`Page ${startPage + i}`}
        >
          {startPage + i}
        </button>
      ))}
      
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-3 py-1">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
          >
            {totalPages}
          </button>
        </>
      )}
      
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

function AllContactSubmissions() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [viewedCards, setViewedCards] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10;
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fetchContacts = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://info.keyway-dispatch.com/api/contacts`, {
        params: {
          page,
          limit: perPage
        }
      });
      setContacts(res.data.contacts || []);
      setTotalPages(res.data.pagination?.pages || 1);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      toast.error("Failed to load contacts. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [perPage]);

  useEffect(() => {
    if (!isSearching) fetchContacts(currentPage);
  }, [currentPage, isSearching, fetchContacts]);

  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      toast.info("Please enter a phone number to search");
      return;
    }
    
    try {
      setLoading(true);
      const res = await axios.get(`https://info.keyway-dispatch.com/api/contacts`, {
        params: {
          phoneNumber: searchTerm.trim(),
          limit: 100
        }
      });
      setSearchResults(res.data.contacts || []);
      setIsSearching(true);
      toast.success(`Found ${res.data.contacts?.length || 0} matches`);
    } catch (err) {
      console.error("Search failed:", err);
      toast.error("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  const resetSearch = useCallback(async () => {
    setSearchTerm('');
    setIsSearching(false);
    setSearchResults([]);
    await fetchContacts(1);
    setCurrentPage(1);
  }, [fetchContacts]);

  const handleDeleteContact = useCallback(async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    try {
      setDeletingId(id);
      await axios.delete(`https://info.keyway-dispatch.com/api/contacts/${id}`);
      setContacts(prev => prev.filter(c => c._id !== id));
      setSearchResults(prev => prev.filter(c => c._id !== id));
      toast.success("Contact deleted successfully");
    } catch (err) {
      console.error("Error deleting contact:", err);
      toast.error("Failed to delete contact");
    } finally {
      setDeletingId(null);
    }
  }, []);

  const handleExport = useCallback(() => {
    const dataToExport = (isSearching ? searchResults : contacts).map(({
      companyName, phoneNumber, email, streetAddress, addressLine2,
      address, zipCode, mcNumber, usdotNumber, ein, tNumber,
      numberOfTrucks, numberOfDrivers, preferredStates, createdAt
    }) => ({
      'Company Name': companyName,
      'Phone Number': phoneNumber,
      'Email': email,
      'Street Address': streetAddress,
      'Address Line 2': addressLine2,
      'Address': address,
      'Zip Code': zipCode,
      'MC Number': mcNumber,
      'USDOT Number': usdotNumber,
      'EIN': ein,
      'T Number': tNumber,
      'Number of Trucks': numberOfTrucks,
      'Number of Drivers': numberOfDrivers,
      'Preferred States': Array.isArray(preferredStates)
        ? preferredStates.join(', ')
        : (() => { 
            try { 
              return JSON.parse(preferredStates).join(', '); 
            } catch { 
              return 'Invalid format'; 
            } 
          })(),
      'Submitted On': new Date(createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    XLSX.writeFile(workbook, `contacts_export_${new Date().toISOString().slice(0,10)}.xlsx`);
    toast.success("Export started successfully");
  }, [contacts, isSearching, searchResults]);

  const list = isSearching ? searchResults : contacts;

  const toggleCardViewed = useCallback((contactId) => {
    setViewedCards(prev => ({ ...prev, [contactId]: true }));
  }, []);

  const isNewCard = useCallback((contactId, createdAt) => {
    const diff = (new Date() - new Date(createdAt)) / 1000 / 60;
    return diff < 10 && !viewedCards[contactId];
  }, [viewedCards]);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Submitted Contact Info</h1>
      
      <div className="flex flex-wrap items-center mb-4 gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search by phone number"
          className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search contacts by phone number"
        />
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={loading}
          >
            Search
          </button>
          
          {isSearching && (
            <button
              onClick={resetSearch}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Clear
            </button>
          )}
          
          <button
            onClick={() => fetchContacts(currentPage)}
            disabled={loading}
            className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
            }`}
          >
            {loading ? "Refreshing..." : "Refresh List"}
          </button>
          
          <button
            onClick={handleExport}
            disabled={list.length === 0}
            className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              list.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500'
            }`}
          >
            Export to Excel
          </button>
        </div>
      </div>

      {loading && list.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : list.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">No contact submissions found.</p>
          {isSearching && (
            <button
              onClick={resetSearch}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Clear search and show all
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {list.map((contact) => (
              <ContactCard
                key={contact._id}
                contact={contact}
                onDelete={handleDeleteContact}
                deletingId={deletingId}
                isNew={isNewCard(contact._id, contact.createdAt)}
                toggleCardViewed={toggleCardViewed}
              />
            ))}
          </div>

          {!isSearching && (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

export default AllContactSubmissions;