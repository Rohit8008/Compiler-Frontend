import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Building, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart2, 
  FileText, 
  DollarSign, 
  Settings, 
  Bell, 
  Search, 
  Filter, 
  PlusCircle, 
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  ChevronRight,
  Menu,
  X,
  LayoutDashboard,
  Building2,
  User
} from 'lucide-react';
import NavItem from './NavItem';
import StatCard from './StatCard';
import PropertyCard from './PropertyCard';
import ProfileDropdown from './ProfileDropdown';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function PropertyDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  
  // Mock user data - in a real app, this would come from your auth context or API
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    isAccountVerified: false,
    avatar: '/api/placeholder/40/40'
  };
  
  // Store visit data from the CSV
  const storeVisits = [
    {
      id: "1587-19363-storeconnect-wed-apr-09-00:07:20-utc-2025",
      outletName: "[19363] ABARROTES LA LUPITA",
      location: "77535 > QUINTANA ROO",
      startTime: "2025-04-09 00:07:20",
      inRange: "No",
      latitude: 21.1706949,
      longitude: -86.8289986,
      status: "VISITED"
    },
    {
      id: "1587-28932-storeconnect-tue-apr-08-23:36:20-utc-2025",
      outletName: "[28932] ABARROTES BETTY",
      location: "77507 > QUINTANA ROO",
      startTime: "2025-04-08 23:36:20",
      inRange: "Yes",
      latitude: 21.1498531,
      longitude: -86.8541517,
      status: "VISITED"
    },
    {
      id: "1587-21964-storeconnect-tue-apr-08-23:11:13-utc-2025",
      outletName: "[21964] ABARROTES EL MIRADOR",
      location: "77560 > QUINTANA ROO",
      startTime: "2025-04-08 23:11:13",
      inRange: "No",
      latitude: 21.1453616,
      longitude: -86.8592035,
      status: "VISITED"
    },
    {
      id: "1587-126516-storeconnect-tue-apr-08-19:44:00-utc-2025",
      outletName: "[126516] CREMERIA Y SALCHICHONERIA LECHERIA Y MIEL",
      location: "77560 > QUINTANA ROO",
      startTime: "2025-04-08 19:44:00",
      inRange: "Yes",
      latitude: 21.0838656,
      longitude: -86.8513127,
      status: "VISITED"
    },
    {
      id: "1587-467524-storeconnect-tue-apr-08-19:06:51-utc-2025",
      outletName: "[467524] SIX JUNIOR RANGEL BONFIL 2025",
      location: "77560 > QUINTANA ROO",
      startTime: "2025-04-08 19:06:51",
      inRange: "Yes",
      latitude: 21.0921959,
      longitude: -86.8585474,
      status: "VISITED"
    },
    {
      id: "1587-146989-storeconnect-tue-apr-08-18:22:24-utc-2025",
      outletName: "[146989] ABARROTES 2 HERMANOS",
      location: "77540 > QUINTANA ROO",
      startTime: "2025-04-08 18:22:24",
      inRange: "Yes",
      latitude: 21.133938,
      longitude: -86.9002499,
      status: "VISITED"
    }
  ];

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Listen for sidebar state changes from Navbar
  useEffect(() => {
    const handleSidebarToggle = (e) => {
      if (e.detail && typeof e.detail.isOpen === 'boolean') {
        setIsSidebarOpen(e.detail.isOpen);
      }
    };

    window.addEventListener('sidebarToggle', handleSidebarToggle);
    return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const result = await logout();
      if (result.success) {
        setIsProfileOpen(false);
        navigate('/');
      } else {
        console.error('Logout failed:', result.message);
      }
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Function to render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Active Listings" 
                value="24" 
                icon={<Building size={24} className="text-blue-500" />} 
              />
              <StatCard 
                title="Total Clients" 
                value="156" 
                icon={<Users size={24} className="text-green-500" />} 
              />
              <StatCard 
                title="Appointments Today" 
                value="8" 
                icon={<Calendar size={24} className="text-purple-500" />} 
              />
              <StatCard 
                title="Revenue MTD" 
                value="$125,000" 
                icon={<DollarSign size={24} className="text-yellow-500" />} 
              />
            </div>

            {/* Featured Properties */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Featured Properties</h2>
                <div className="flex space-x-3">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                    <Filter size={18} className="mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <PlusCircle size={18} className="mr-2" />
                    Add Property
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PropertyCard 
                  image="/api/placeholder/400/250"
                  title="Modern Villa with Pool"
                  price="$1,250,000"
                  location="Beverly Hills, CA"
                  beds={4}
                  baths={3}
                  sqft={2800}
                  agent="John Smith"
                  agentInitials="JS"
                  agentColor="bg-red-500"
                  lastUpdate="2 days ago"
                  status="For Sale"
                  statusColor="bg-green-100 text-green-800"
                />

                <PropertyCard 
                  image="/api/placeholder/400/250"
                  title="Luxury Penthouse"
                  price="$2,500,000"
                  location="Manhattan, NY"
                  beds={3}
                  baths={2}
                  sqft={2200}
                  agent="Sarah Johnson"
                  agentInitials="SJ"
                  agentColor="bg-red-500"
                  lastUpdate="5 days ago"
                  status="Under Contract"
                  statusColor="bg-yellow-100 text-yellow-800"
                />

                <PropertyCard 
                  image="/api/placeholder/400/250"
                  title="Waterfront Estate"
                  price="$3,750,000"
                  location="Miami Beach, FL"
                  beds={5}
                  baths={4}
                  sqft={4500}
                  agent="Michael Brown"
                  agentInitials="MB"
                  agentColor="bg-purple-500"
                  lastUpdate="1 week ago"
                  status="For Sale"
                  statusColor="bg-green-100 text-green-800"
                />
              </div>
            </div>

            {/* Recent Store Visits */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Recent Store Visits</h2>
                <button 
                  className="flex items-center text-blue-600 hover:text-blue-800"
                  onClick={() => setActiveTab('storeVisits')}
                >
                  View All <ChevronRight size={18} className="ml-1" />
                </button>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visit Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Range</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {storeVisits.slice(0, 3).map((visit) => (
                      <tr key={visit.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{visit.outletName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{visit.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 flex items-center">
                            <Clock size={16} className="mr-1 text-gray-400" />
                            {visit.startTime}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {visit.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {visit.inRange === "Yes" ? (
                            <CheckCircle size={18} className="text-green-500" />
                          ) : (
                            <XCircle size={18} className="text-red-500" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case 'properties':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Properties</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  Add Property
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PropertyCard 
                image="/api/placeholder/400/250"
                title="Modern Villa with Pool"
                price="$1,250,000"
                location="Beverly Hills, CA"
                beds={4}
                baths={3}
                sqft={2800}
                agent="John Smith"
                agentInitials="JS"
                agentColor="bg-red-500"
                lastUpdate="2 days ago"
                status="For Sale"
                statusColor="bg-green-100 text-green-800"
              />

              <PropertyCard 
                image="/api/placeholder/400/250"
                title="Luxury Penthouse"
                price="$2,500,000"
                location="Manhattan, NY"
                beds={3}
                baths={2}
                sqft={2200}
                agent="Sarah Johnson"
                agentInitials="SJ"
                agentColor="bg-red-500"
                lastUpdate="5 days ago"
                status="Under Contract"
                statusColor="bg-yellow-100 text-yellow-800"
              />

              <PropertyCard 
                image="/api/placeholder/400/250"
                title="Waterfront Estate"
                price="$3,750,000"
                location="Miami Beach, FL"
                beds={5}
                baths={4}
                sqft={4500}
                agent="Michael Brown"
                agentInitials="MB"
                agentColor="bg-purple-500"
                lastUpdate="1 week ago"
                status="For Sale"
                statusColor="bg-green-100 text-green-800"
              />
            </div>
          </div>
        );
      case 'clients':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Clients</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  Add Client
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Client management functionality coming soon.</p>
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Schedule</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  Add Appointment
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Calendar functionality coming soon.</p>
            </div>
          </div>
        );
      case 'storeVisits':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Store Visits</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  New Visit
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visit Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">In Range</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {storeVisits.map((visit) => (
                    <tr key={visit.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{visit.outletName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{visit.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock size={16} className="mr-1 text-gray-400" />
                          {visit.startTime}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {visit.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {visit.inRange === "Yes" ? (
                          <CheckCircle size={18} className="text-green-500" />
                        ) : (
                          <XCircle size={18} className="text-red-500" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Messages</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  New Message
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Messaging functionality coming soon.</p>
            </div>
          </div>
        );
      case 'documents':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Documents</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  Upload Document
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Document management functionality coming soon.</p>
            </div>
          </div>
        );
      case 'transactions':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Transactions</h2>
              <div className="flex space-x-3">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50">
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  <PlusCircle size={18} className="mr-2" />
                  New Transaction
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Transaction management functionality coming soon.</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Settings</h2>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-500">Settings functionality coming soon.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Notifications dropdown component
  const NotificationsDropdown = () => {
    if (!notificationsOpen) return null;
    
    return (
      <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
        <div className="px-4 py-2 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Bell size={16} className="text-blue-600" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">New property listing</p>
              <p className="text-xs text-gray-500">A new property has been added to your listings</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center px-4 py-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle size={16} className="text-green-600" />
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Store visit completed</p>
              <p className="text-xs text-gray-500">You've successfully completed a store visit</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
          </a>
        </div>
        
        <div className="px-4 py-2 border-t border-gray-100">
          <a href="#" className="text-xs text-blue-600 hover:text-blue-800">View all notifications</a>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div className={`hidden md:flex fixed inset-y-0 left-0 z-30 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}>
        <div className="flex flex-col w-full">
          <div className={`flex items-center justify-between p-4 border-b ${!isSidebarOpen && 'justify-center'}`}>
            {isSidebarOpen && <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>}
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isSidebarOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <NavItem
              icon={<LayoutDashboard className="w-5 h-5" />}
              text="Dashboard"
              active={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<Building2 className="w-5 h-5" />}
              text="Properties"
              active={activeTab === 'properties'}
              onClick={() => setActiveTab('properties')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<Users className="w-5 h-5" />}
              text="Clients"
              active={activeTab === 'clients'}
              onClick={() => setActiveTab('clients')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<Calendar className="w-5 h-5" />}
              text="Schedule"
              active={activeTab === 'schedule'}
              onClick={() => setActiveTab('schedule')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<MessageSquare className="w-5 h-5" />}
              text="Messages"
              active={activeTab === 'messages'}
              onClick={() => setActiveTab('messages')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<BarChart2 className="w-5 h-5" />}
              text="Store Visits"
              active={activeTab === 'storeVisits'}
              onClick={() => setActiveTab('storeVisits')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              text="Documents"
              active={activeTab === 'documents'}
              onClick={() => setActiveTab('documents')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<DollarSign className="w-5 h-5" />}
              text="Transactions"
              active={activeTab === 'transactions'}
              onClick={() => setActiveTab('transactions')}
              showText={isSidebarOpen}
            />
            <NavItem
              icon={<Settings className="w-5 h-5" />}
              text="Settings"
              active={activeTab === 'settings'}
              onClick={() => setActiveTab('settings')}
              showText={isSidebarOpen}
            />
          </nav>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <NavItem
              icon={<LayoutDashboard className="w-5 h-5" />}
              text="Dashboard"
              active={activeTab === 'dashboard'}
              onClick={() => {
                setActiveTab('dashboard');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<Building2 className="w-5 h-5" />}
              text="Properties"
              active={activeTab === 'properties'}
              onClick={() => {
                setActiveTab('properties');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<Users className="w-5 h-5" />}
              text="Clients"
              active={activeTab === 'clients'}
              onClick={() => {
                setActiveTab('clients');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<Calendar className="w-5 h-5" />}
              text="Schedule"
              active={activeTab === 'schedule'}
              onClick={() => {
                setActiveTab('schedule');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<MessageSquare className="w-5 h-5" />}
              text="Messages"
              active={activeTab === 'messages'}
              onClick={() => {
                setActiveTab('messages');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<BarChart2 className="w-5 h-5" />}
              text="Store Visits"
              active={activeTab === 'storeVisits'}
              onClick={() => {
                setActiveTab('storeVisits');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<FileText className="w-5 h-5" />}
              text="Documents"
              active={activeTab === 'documents'}
              onClick={() => {
                setActiveTab('documents');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<DollarSign className="w-5 h-5" />}
              text="Transactions"
              active={activeTab === 'transactions'}
              onClick={() => {
                setActiveTab('transactions');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
            <NavItem
              icon={<Settings className="w-5 h-5" />}
              text="Settings"
              active={activeTab === 'settings'}
              onClick={() => {
                setActiveTab('settings');
                setIsSidebarOpen(false);
              }}
              showText={true}
            />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {/* Top Navigation */}
        <div className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {user?.email}
                </span>
              </button>
              <ProfileDropdown
                isOpen={isProfileOpen}
                onClose={() => setIsProfileOpen(false)}
                user={user}
                onLogout={handleLogout}
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
} 