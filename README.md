'use client';

import React, { useState } from 'react';
import { 
  Users, GraduationCap, Calendar, DollarSign, BookOpen, 
  Settings, Bell, Search, Plus, TrendingUp, UserCheck, 
  CheckCircle, XCircle, ChevronRight, FileText, Download,
  Menu, X, Award, Clock, AlertCircle
} from 'lucide-react';

export default function SchoolManagementDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Modal states
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  
  // Notification banner state
  const [notification, setNotification] = useState({ show: false, message: '' });

  const triggerNotification = (msg) => {
    setNotification({ show: true, message: msg });
    setTimeout(() => setNotification({ show: false, message: '' }), 4000);
  };

  // Mock Data states
  const [students, setStudents] = useState([
    { id: 'STU-001', name: 'Alexander Wright', grade: 'Grade 10-A', gender: 'Male', status: 'Active', gpa: '3.8', feeStatus: 'Paid' },
    { id: 'STU-002', name: 'Sophia Martinez', grade: 'Grade 9-B', gender: 'Female', status: 'Active', gpa: '3.9', feeStatus: 'Pending' },
    { id: 'STU-003', name: 'Liam Johnson', grade: 'Grade 11-C', gender: 'Male', status: 'Active', gpa: '3.4', feeStatus: 'Paid' },
    { id: 'STU-004', name: 'Emma Davis', grade: 'Grade 10-A', gender: 'Female', status: 'Inactive', gpa: '3.1', feeStatus: 'Overdue' },
    { id: 'STU-005', name: 'Noah Brown', grade: 'Grade 12-A', gender: 'Male', status: 'Active', gpa: '4.0', feeStatus: 'Paid' },
  ]);

  const [teachers, setTeachers] = useState([
    { id: 'TCH-101', name: 'Dr. Robert Langdon', subject: 'Mathematics', dept: 'Science & Math', status: 'Active', email: 'r.langdon@academy.edu' },
    { id: 'TCH-102', name: 'Prof. Marie Curie', subject: 'Physics', dept: 'Science & Math', status: 'Active', email: 'm.curie@academy.edu' },
    { id: 'TCH-103', name: 'William Shakespeare', subject: 'Literature', dept: 'Humanities', status: 'On Leave', email: 'w.shakespeare@academy.edu' },
    { id: 'TCH-104', name: 'Ada Lovelace', subject: 'Computer Science', dept: 'Technology', status: 'Active', email: 'a.lovelace@academy.edu' },
  ]);

  const [classes, setClasses] = useState([
    { id: 'CLS-01', name: 'Grade 10-A Advanced Math', teacher: 'Dr. Robert Langdon', studentsCount: 28, schedule: 'Mon, Wed, Fri 09:00 AM' },
    { id: 'CLS-02', name: 'Grade 9-B Physics Lab', teacher: 'Prof. Marie Curie', studentsCount: 24, schedule: 'Tue, Thu 10:30 AM' },
    { id: 'CLS-03', name: 'Grade 11-C Computer Science', teacher: 'Ada Lovelace', studentsCount: 30, schedule: 'Mon, Wed 01:00 PM' },
    { id: 'CLS-04', name: 'Grade 12-A World Literature', teacher: 'William Shakespeare', studentsCount: 26, schedule: 'Fri 11:00 AM' },
  ]);

  const [attendance, setAttendance] = useState([
    { id: 'ATT-1', studentName: 'Alexander Wright', grade: 'Grade 10-A', date: '2026-10-26', status: 'Present' },
    { id: 'ATT-2', studentName: 'Sophia Martinez', grade: 'Grade 9-B', date: '2026-10-26', status: 'Present' },
    { id: 'ATT-3', studentName: 'Liam Johnson', grade: 'Grade 11-C', date: '2026-10-26', status: 'Absent' },
    { id: 'ATT-4', studentName: 'Emma Davis', grade: 'Grade 10-A', date: '2026-10-26', status: 'Late' },
    { id: 'ATT-5', studentName: 'Noah Brown', grade: 'Grade 12-A', date: '2026-10-26', status: 'Present' },
  ]);

  // Form states for adding records
  const [newStudent, setNewStudent] = useState({ name: '', grade: 'Grade 10-A', gender: 'Male', gpa: '4.0', feeStatus: 'Paid' });
  const [newTeacher, setNewTeacher] = useState({ name: '', subject: '', dept: 'Science & Math', email: '' });

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name) return;
    const created = {
      id: `STU-00${students.length + 1}`,
      ...newStudent,
      status: 'Active'
    };
    setStudents([created, ...students]);
    setNewStudent({ name: '', grade: 'Grade 10-A', gender: 'Male', gpa: '4.0', feeStatus: 'Paid' });
    setShowAddStudentModal(false);
    triggerNotification(`Successfully registered student: ${created.name}`);
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!newTeacher.name || !newTeacher.subject) return;
    const created = {
      id: `TCH-10${teachers.length + 1}`,
      ...newTeacher,
      status: 'Active'
    };
    setTeachers([created, ...teachers]);
    setNewTeacher({ name: '', subject: '', dept: 'Science & Math', email: '' });
    setShowAddTeacherModal(false);
    triggerNotification(`Successfully onboarded faculty: ${created.name}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased">
      {/* Toast Notification Banner */}
      {notification.show && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3 transition transform animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium text-sm">{notification.message}</span>
        </div>
      )}

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-8">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-md shadow-indigo-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Edusphere OS
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-semibold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                Enterprise v2.4
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search records, students..." 
              className="w-full bg-slate-100 pl-9 pr-4 py-2 text-sm rounded-xl border border-transparent focus:border-indigo-500 focus:bg-white focus:outline-none transition"
            />
          </div>
          <button 
            onClick={() => triggerNotification('No new system notifications')}
            className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"></span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3 border-l pl-4 border-slate-200">
            <div className="w-9 h-9 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow">
              AD
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-semibold text-slate-700">Administrator</p>
              <p className="text-xs text-slate-500">admin@edusphere.edu</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 z-20 md:hidden backdrop-blur-sm"
          ></div>
        )}

        {/* Sidebar Navigation */}
        <aside className={`
          fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">Main Navigation</p>
            <nav className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
                { id: 'students', label: 'Students Directory', icon: Users },
                { id: 'teachers', label: 'Faculty & Teachers', icon: Award },
                { id: 'classes', label: 'Classes & Curriculum', icon: BookOpen },
                { id: 'attendance', label: 'Daily Attendance', icon: UserCheck },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition
                      ${isActive 
                        ? 'bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100 font-semibold' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-8 mb-3 px-3">System & Settings</p>
            <nav className="space-y-1">
              <button 
                onClick={() => triggerNotification('Financial module reports generated.')}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                <DollarSign className="w-5 h-5 text-slate-400" />
                <span>Fees & Revenue</span>
              </button>
              <button 
                onClick={() => triggerNotification('System settings updated successfully.')}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition"
              >
                <Settings className="w-5 h-5 text-slate-400" />
                <span>Configurations</span>
              </button>
            </nav>
          </div>

          <div className="mt-auto p-4 m-4 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl text-white shadow-xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200">Active Term</span>
            </div>
            <p className="text-sm font-bold">Fall Semester 2026</p>
            <p className="text-xs text-indigo-300 mt-1">Week 12 of 18 • Examination prep active</p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {/* Dashboard Tab Content */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 max-w-xl">
                  <span className="bg-white/10 text-indigo-100 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Academic Year 2026-2027
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold mt-3 tracking-tight">
                    Welcome back, Administrator
                  </h1>
                  <p className="text-indigo-100 mt-2 text-sm leading-relaxed">
                    Here is the live telemetry and operational summary for your institution. All campuses operating normally.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 flex space-x-3 relative z-10">
                  <button 
                    onClick={() => setShowAddStudentModal(true)}
                    className="bg-white text-indigo-700 px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg hover:bg-indigo-50 transition flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Student</span>
                  </button>
                  <button 
                    onClick={() => triggerNotification('Exporting comprehensive system report...')}
                    className="bg-indigo-800/80 text-white border border-indigo-400/30 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-800 transition flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Metrics Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  { title: 'Total Students', value: '2,482', change: '+12% this year', icon: Users, color: 'bg-blue-50 text-blue-600' },
                  { title: 'Active Teachers', value: '164', change: '+4 new joined', icon: Award, color: 'bg-purple-50 text-purple-600' },
                  { title: 'Attendance Rate', value: '96.4%', change: '+1.2% vs yesterday', icon: UserCheck, color: 'bg-emerald-50 text-emerald-600' },
                  { title: 'Revenue Collected', value: '$842,500', change: '92% fee target met', icon: DollarSign, color: 'bg-amber-50 text-amber-600' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500">{stat.title}</span>
                        <div className={`p-3 rounded-xl ${stat.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-3xl font-extrabold text-slate-800">{stat.value}</h3>
                        <p className="text-xs font-semibold text-emerald-600 mt-1 flex items-center space-x-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{stat.change}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Actions & Recent Activities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions Panel */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Register New Student', action: () => setShowAddStudentModal(true), icon: Users },
                      { label: 'Onboard Faculty Member', action: () => setShowAddTeacherModal(true), icon: Award },
                      { label: 'Record Daily Attendance', action: () => setActiveTab('attendance'), icon: UserCheck },
                      { label: 'Schedule Class Session', action: () => setActiveTab('classes'), icon: BookOpen },
                      { label: 'Generate Financial Audit', action: () => triggerNotification('Financial audit report generated.'), icon: FileText },
                    ].map((act, i) => {
                      const Icon = act.icon;
                      return (
                        <button
                          key={i}
                          onClick={act.action}
                          className="w-full flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-indigo-50/60 hover:border-indigo-100 text-left transition group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-white shadow-sm text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-indigo-900">{act.label}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition transform group-hover:translate-x-0.5" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Recent System Activity */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-800">Recent Campus Activity</h3>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Log</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { user: 'Dr. Robert Langdon', action: 'submitted midterm grades for Grade 10-A Math', time: '12 mins ago', icon: BookOpen, bg: 'bg-blue-100 text-blue-700' },
                      { user: 'Sophia Martinez', action: 'paid tuition fee installment ($1,250)', time: '45 mins ago', icon: DollarSign, bg: 'bg-emerald-100 text-emerald-700' },
                      { user: 'System Bot', action: 'automated daily attendance sync completed successfully', time: '2 hours ago', icon: UserCheck, bg: 'bg-purple-100 text-purple-700' },
                      { user: 'Admin Portal', action: 'enrolled new student Alexander Wright into Grade 10', time: '3 hours ago', icon: Users, bg: 'bg-amber-100 text-amber-700' },
                    ].map((log, index) => {
                      const Icon = log.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50 transition">
                          <div className={`p-2.5 rounded-xl shrink-0 ${log.bg}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-800">
                              <span className="font-bold">{log.user}</span> {log.action}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5 flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{log.time}</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Students Module Tab */}
          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-800">Students Directory</h1>
                  <p className="text-sm text-slate-500">Manage all active and enrolled students across grades</p>
                </div>
                <button
                  onClick={() => setShowAddStudentModal(true)}
                  className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Register Student</span>
                </button>
              </div>

              {/* Students Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                        <th className="p-4 sm:px-6">Student ID</th>
                        <th className="p-4 sm:px-6">Full Name</th>
                        <th className="p-4 sm:px-6">Grade / Section</th>
                        <th className="p-4 sm:px-6">Gender</th>
                        <th className="p-4 sm:px-6">GPA</th>
                        <th className="p-4 sm:px-6">Fee Status</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {students.map((stu) => (
                        <tr key={stu.id} className="hover:bg-slate-50/70 transition">
                          <td className="p-4 sm:px-6 font-mono text-xs font-semibold text-indigo-600">{stu.id}</td>
                          <td className="p-4 sm:px-6 font-bold text-slate-800">{stu.name}</td>
                          <td className="p-4 sm:px-6 text-slate-600">{stu.grade}</td>
                          <td className="p-4 sm:px-6 text-slate-600">{stu.gender}</td>
                          <td className="p-4 sm:px-6 font-semibold text-slate-700">{stu.gpa}</td>
                          <td className="p-4 sm:px-6">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              stu.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                              stu.feeStatus === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
                            }`}>
                              {stu.feeStatus}
                            </span>
                          </td>
                          <td className="p-4 sm:px-6">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                              stu.status === 'Active' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'
                            }`}>
                              {stu.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Teachers Module Tab */}
          {activeTab === 'teachers' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-800">Faculty & Teachers</h1>
                  <p className="text-sm text-slate-500">Manage teaching staff, department assignments, and contact details</p>
                </div>
                <button
                  onClick={() => setShowAddTeacherModal(true)}
                  className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Onboard Faculty</span>
                </button>
              </div>

              {/* Teachers Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teachers.map((tch) => (
                  <div key={tch.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold text-lg">
                          {tch.name.charAt(3) || 'T'}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-lg">{tch.name}</h3>
                          <p className="text-xs font-semibold text-indigo-600">{tch.subject} • {tch.dept}</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1 text-xs text-slate-500">
                        <p>ID: <span className="font-mono font-medium text-slate-700">{tch.id}</span></p>
                        <p>Email: <span className="text-slate-700">{tch.email}</span></p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tch.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {tch.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Classes Module Tab */}
          {activeTab === 'classes' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-800">Classes & Curriculum</h1>
                  <p className="text-sm text-slate-500">Scheduled sessions, course syllabi, and instructor assignments</p>
                </div>
                <button
                  onClick={() => triggerNotification('Class scheduling wizard opened.')}
                  className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Schedule Class</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {classes.map((cls) => (
                  <div key={cls.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                        {cls.id}
                      </span>
                      <h3 className="font-bold text-slate-800 text-lg mt-3">{cls.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">Instructor: <span className="font-semibold">{cls.teacher}</span></p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{cls.studentsCount} Students Enrolled</span>
                      <span className="text-indigo-600">{cls.schedule.split(' ')[0]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attendance Module Tab */}
          {activeTab === 'attendance' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-800">Daily Attendance Registry</h1>
                  <p className="text-sm text-slate-500">Monitor daily student attendance logs and generate summaries</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => triggerNotification('Attendance report exported successfully.')}
                    className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition"
                  >
                    Export Sheet
                  </button>
                  <button
                    onClick={() => triggerNotification('Attendance saved successfully.')}
                    className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                        <th className="p-4 sm:px-6">Student Name</th>
                        <th className="p-4 sm:px-6">Grade</th>
                        <th className="p-4 sm:px-6">Date</th>
                        <th className="p-4 sm:px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {attendance.map((att) => (
                        <tr key={att.id} className="hover:bg-slate-50/70 transition">
                          <td className="p-4 sm:px-6 font-bold text-slate-800">{att.studentName}</td>
                          <td className="p-4 sm:px-6 text-slate-600">{att.grade}</td>
                          <td className="p-4 sm:px-6 text-slate-500 font-mono text-xs">{att.date}</td>
                          <td className="p-4 sm:px-6">
                            <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                              att.status === 'Present' ? 'bg-emerald-100 text-emerald-700' :
                              att.status === 'Absent' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                            }`}>
                              {att.status === 'Present' && <CheckCircle className="w-3.5 h-3.5" />}
                              {att.status === 'Absent' && <XCircle className="w-3.5 h-3.5" />}
                              {att.status === 'Late' && <AlertCircle className="w-3.5 h-3.5" />}
                              <span>{att.status}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add Student Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">Register New Student</h3>
              <button onClick={() => setShowAddStudentModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Doe"
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Grade Level</label>
                <select 
                  value={newStudent.grade}
                  onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                >
                  <option>Grade 9-B</option>
                  <option>Grade 10-A</option>
                  <option>Grade 11-C</option>
                  <option>Grade 12-A</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Gender</label>
                <select 
                  value={newStudent.gender}
                  onChange={(e) => setNewStudent({...newStudent, gender: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex space-x-3 pt-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddStudentModal(false)}
                  className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
                >
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Teacher Modal */}
      {showAddTeacherModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800">Onboard Faculty Member</h3>
              <button onClick={() => setShowAddTeacherModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddTeacher} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Dr. Alan Turing"
                  value={newTeacher.name}
                  onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Computer Science"
                  value={newTeacher.subject}
                  onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. a.turing@academy.edu"
                  value={newTeacher.email}
                  onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition"
                />
              </div>
              <div className="flex space-x-3 pt-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddTeacherModal(false)}
                  className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold text-sm hover:bg-slate-200 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
                >
                  Add Faculty
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
