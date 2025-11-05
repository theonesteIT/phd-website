import React, { useState } from 'react';
import { Menu, X, Home, FileText, Calendar, Image, Users, Mail, Settings, LogOut, Plus, Edit2, Trash2, Eye, EyeOff, Save, Search } from 'lucide-react';

function AdminDasboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Sample data states
  const [news, setNews] = useState([
    { id: 1, title: 'Welcome to PHDM Ministry', status: 'published', date: '2025-10-15', author: 'Admin' },
    { id: 2, title: 'Upcoming Revival Service', status: 'draft', date: '2025-10-20', author: 'Editor' }
  ]);
  
  const [events, setEvents] = useState([
    { id: 1, title: 'Sunday Worship Service', date: '2025-11-03', status: 'Upcoming', location: 'Main Church' },
    { id: 2, title: 'Youth Conference 2025', date: '2025-10-28', status: 'Completed', location: 'Conference Hall' }
  ]);
  
  const [messages, setMessages] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'I would like to know about service times', status: 'unread', date: '2025-10-30' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Prayer request for healing', status: 'resolved', date: '2025-10-29' }
  ]);
  
  const [users, setUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@phdm.org', role: 'Admin' },
    { id: 2, name: 'John Editor', email: 'editor@phdm.org', role: 'Editor' }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'news', icon: FileText, label: 'Manage News' },
    { id: 'events', icon: Calendar, label: 'Manage Events' },
    { id: 'media', icon: Image, label: 'Media Manager' },
    { id: 'users', icon: Users, label: 'User Management' },
    { id: 'messages', icon: Mail, label: 'Contact Messages' },
    { id: 'settings', icon: Settings, label: 'System Settings' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">PM</span>
            </div>
            <h1 className="text-3xl font-bold text-black">PHDM Ministry</h1>
            <p className="text-gray-600 mt-2">Admin Dashboard Login</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="admin@phdm.org"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Sign In
            </button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-orange-600 hover:text-orange-700">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-black text-white transition-all duration-300 fixed h-full z-20 overflow-hidden`}>
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PM</span>
              </div>
              <div>
                <h2 className="font-bold text-lg">PHDM</h2>
                <p className="text-xs text-gray-400">Ministry Admin</p>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === item.id ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-900'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-900 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-black">
                {menuItems.find(item => item.id === currentPage)?.label || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg">
                <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Admin User</p>
                  <p className="text-xs text-gray-600">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {currentPage === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total News</p>
                      <p className="text-3xl font-bold text-black mt-2">{news.length}</p>
                    </div>
                    <FileText size={40} className="text-orange-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-black">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total Events</p>
                      <p className="text-3xl font-bold text-black mt-2">{events.length}</p>
                    </div>
                    <Calendar size={40} className="text-black" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Unread Messages</p>
                      <p className="text-3xl font-bold text-black mt-2">
                        {messages.filter(m => m.status === 'unread').length}
                      </p>
                    </div>
                    <Mail size={40} className="text-orange-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-black">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Total Users</p>
                      <p className="text-3xl font-bold text-black mt-2">{users.length}</p>
                    </div>
                    <Users size={40} className="text-black" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-bold text-black mb-4">Recent News</h3>
                  <div className="space-y-3">
                    {news.slice(0, 3).map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-semibold text-black">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-bold text-black mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    {events.filter(e => e.status === 'Upcoming').map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="font-semibold text-black">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.date} - {item.location}</p>
                        </div>
                        <Calendar size={20} className="text-orange-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'news' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search news..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Add News</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Title</th>
                      <th className="px-6 py-4 text-left font-semibold">Status</th>
                      <th className="px-6 py-4 text-left font-semibold">Date</th>
                      <th className="px-6 py-4 text-left font-semibold">Author</th>
                      <th className="px-6 py-4 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {news.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-black">{item.title}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-gray-600">{item.author}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                              <Edit2 size={18} className="text-orange-600" />
                            </button>
                            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                              <Trash2 size={18} className="text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 'events' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Add Event</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <Calendar size={48} className="text-gray-400" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'Upcoming' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-black mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-600 mb-4">{event.location}</p>
                      <div className="flex items-center space-x-2">
                        <button className="flex-1 bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                          Edit
                        </button>
                        <button className="px-3 py-2 border border-red-600 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-black">Media Library</h2>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Upload Media</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="h-40 bg-gray-200 flex items-center justify-center">
                        <Image size={40} className="text-gray-400" />
                      </div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-black truncate">Image {i}.jpg</p>
                        <p className="text-xs text-gray-600">2.4 MB</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPage === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  />
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                  <Plus size={20} />
                  <span>Add User</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Email</th>
                      <th className="px-6 py-4 text-left font-semibold">Role</th>
                      <th className="px-6 py-4 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-black">{user.name}</td>
                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            user.role === 'Admin' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                              <Edit2 size={18} className="text-orange-600" />
                            </button>
                            <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                              <Trash2 size={18} className="text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentPage === 'messages' && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold">All</button>
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg font-semibold hover:bg-gray-50">Unread</button>
                <button className="px-4 py-2 bg-white text-black border border-gray-300 rounded-lg font-semibold hover:bg-gray-50">Resolved</button>
              </div>

              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-bold text-black">{message.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            message.status === 'unread' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {message.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                        <p className="text-sm text-gray-600">{message.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-4">{message.message}</p>
                    <div className="flex items-center space-x-2">
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
                        Reply
                      </button>
                      <button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                        Mark as Resolved
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-black mb-6">General Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website Title</label>
                    <input
                      type="text"
                      defaultValue="PHDM Ministry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website Logo</label>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Image size={32} className="text-gray-400" />
                      </div>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                        Upload Logo
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
                    <textarea
                      rows={3}
                      defaultValue="© 2025 PHDM Ministry. All rights reserved."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold text-black mb-6">Social Media Links</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
                    <input
                      type="url"
                      placeholder="https://facebook.com/phdmministry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
                    <input
                      type="url"
                      placeholder="https://twitter.com/phdmministry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
                    <input
                      type="url"
                      placeholder="https://instagram.com/phdmministry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">YouTube</label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/@phdmministry"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2">
                    <Save size={20} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminDasboard;