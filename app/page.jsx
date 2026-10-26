import React, { useState, useMemo } from "react";
import {
  Users,
  UserCheck,
  CreditCard,
  TrendingUp,
  Bell,
  Search,
  Plus,
  Trash2,
  Edit,
  FileText,
  DollarSign,
  Calendar,
  School,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function SchoolDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initial States for United English Boarding School
  const [students, setStudents] = useState([
    { id: 1, name: "Aarav Sharma", grade: "10", roll: 12, guardian: "Ram Sharma", status: "Paid" },
    { id: 2, name: "Sita Thapa", grade: "9", roll: 5, guardian: "Hari Thapa", status: "Pending" },
    { id: 3, name: "Bipin Karki", grade: "10", roll: 18, guardian: "Shiva Karki", status: "Paid" }
  ]);

  const [notices, setNotices] = useState([
    { id: 1, title: "First Terminal Examination Notice", date: "2026-10-15", desc: "Exams will commence from next week. Clear dues accordingly." },
    { id: 2, title: "Extra-Curricular Activities (ECA)", date: "2026-10-20", desc: "Inter-house football tournament scheduled for Friday." }
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", grade: "", roll: "", guardian: "", status: "Pending" });
  const [newNotice, setNewNotice] = useState({ title: "", date: "", desc: "" });

  // Add Student Handler
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.grade) return;
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setNewStudent({ name: "", grade: "", roll: "", guardian: "", status: "Pending" });
  };

  // Delete Student Handler
  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  // Add Notice Handler
  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newNotice.title || !newNotice.desc) return;
    setNotices([...notices, { id: Date.now(), ...newNotice }]);
    setNewNotice({ title: "", date: "", desc: "" });
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-indigo-900 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col`}>
        <div className="p-5 flex items-center space-x-3 border-b border-indigo-800">
          <School className="w-8 h-8 text-indigo-400" />
          <div>
            <h1 className="font-bold text-lg leading-tight">UEBS Manahari</h1>
            <p className="text-xs text-indigo-300">School Management</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab("overview")} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium ${activeTab === "overview" ? "bg-indigo-700 text-white" : "text-indigo-200 hover:bg-indigo-800"}`}>
            <TrendingUp className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button onClick={() => setActiveTab("students")} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium ${activeTab === "students" ? "bg-indigo-700 text-white" : "text-indigo-200 hover:bg-indigo-800"}`}>
            <Users className="w-5 h-5" />
            <span>Students</span>
          </button>
          <button onClick={() => setActiveTab("fees")} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium ${activeTab === "fees" ? "bg-indigo-700 text-white" : "text-indigo-200 hover:bg-indigo-800"}`}>
            <CreditCard className="w-5 h-5" />
            <span>Fee Tracking</span>
          </button>
          <button onClick={() => setActiveTab("notices")} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium ${activeTab === "notices" ? "bg-indigo-700 text-white" : "text-indigo-200 hover:bg-indigo-800"}`}>
            <Bell className="w-5 h-5" />
            <span>Notice Board</span>
          </button>
        </nav>

        <div className="p-4 border-t border-indigo-800">
          <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm font-medium text-red-300 hover:bg-indigo-800">
            <LogOut className="w-5 h-5" />
            <span>System Secure</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6 z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-gray-600 focus:outline-none">
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{activeTab} Portal</h2>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-600">Admin (UEBS)</span>
            <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">A</div>
          </div>
        </header>

        {/* Dynamic Body Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-8 h-8" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Total Students</p>
                    <h3 className="text-2xl font-bold text-gray-800">{students.length}</h3>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-lg"><DollarSign className="w-8 h-8" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Fee Collection Status</p>
                    <h3 className="text-2xl font-bold text-gray-800">Active</h3>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-lg"><Bell className="w-8 h-8" /></div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Notices Published</p>
                    <h3 className="text-2xl font-bold text-gray-800">{notices.length}</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Welcome to United English Boarding School System</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manage student profiles, monitor institutional announcements, and trace monthly financial records seamlessly with this secure Next.js dashboard panel configured for Manahari, Makwanpur.
                </p>
              </div>
            </div>
          )}

          {activeTab === "students" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Register New Student</h3>
                <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <input type="text" placeholder="Full Name" value={newStudent.name} onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} className="border rounded-lg px-3 py-2 text-sm" required />
                  <input type="text" placeholder="Grade / Class" value={newStudent.grade} onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})} className="border rounded-lg px-3 py-2 text-sm" required />
                  <input type="text" placeholder="Guardian Name" value={newStudent.guardian} onChange={(e) => setNewStudent({...newStudent, guardian: e.target.value})} className="border rounded-lg px-3 py-2 text-sm" />
                  <button type="submit" className="bg-indigo-600 text-white font-medium text-sm rounded-lg py-2 hover:bg-indigo-700 transition">Add Student</button>
                </form>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b text-xs font-semibold text-gray-500 uppercase">
                      <th className="p-4">Name</th>
                      <th className="p-4">Grade</th>
                      <th className="p-4">Guardian</th>
                      <th className="p-4">Fee Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {students.map((s) => (
                      <tr key={s.id} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-800">{s.name}</td>
                        <td className="p-4 text-gray-600">{s.grade}</td>
                        <td className="p-4 text-gray-600">{s.guardian}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${s.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {s.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button onClick={() => handleDeleteStudent(s.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "fees" && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Financial & Fee Ledger</h3>
              <p className="text-sm text-gray-600 mb-4">Track clearance records and payment statuses across all student sections.</p>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse text-sm">
                  <thead className="bg-gray-50 border-b text-gray-500">
                    <tr>
                      <th className="p-3">Student Name</th>
                      <th className="p-3">Grade</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {students.map((s) => (
                      <tr key={s.id}>
                        <td className="p-3">{s.name}</td>
                        <td className="p-3">{s.grade}</td>
                        <td className="p-3 font-semibold text-indigo-600">{s.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "notices" && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Broadcast Notice</h3>
                <form onSubmit={handleAddNotice} className="space-y-4">
                  <input type="text" placeholder="Notice Title" value={newNotice.title} onChange={(e) => setNewNotice({...newNotice, title: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" required />
                  <input type="date" value={newNotice.date} onChange={(e) => setNewNotice({...newNotice, date: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" required />
                  <textarea placeholder="Notice Description..." value={newNotice.desc} onChange={(e) => setNewNotice({...newNotice, desc: e.target.value})} className="w-full border rounded-lg px-3 py-2 text-sm" rows="3" required></textarea>
                  <button type="submit" className="bg-indigo-600 text-white font-medium text-sm rounded-lg px-4 py-2 hover:bg-indigo-700 transition">Publish Notice</button>
                </form>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {notices.map((n) => (
                  <div key={n.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">{n.title}</h4>
                      <span className="text-xs text-gray-400">{n.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
