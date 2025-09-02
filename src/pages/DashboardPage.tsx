import React from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart3, MessageSquare, Zap, Users, TrendingUp, Activity } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'API Calls',
      value: '12,847',
      change: '+12%',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Models',
      value: '8',
      change: '+2',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Chat Sessions',
      value: '1,234',
      change: '+18%',
      icon: MessageSquare,
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Team Members',
      value: '5',
      change: '+1',
      icon: Users,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const recentActivity = [
    { action: 'API call to NLP model', time: '2 minutes ago', status: 'success' },
    { action: 'New chat session started', time: '5 minutes ago', status: 'success' },
    { action: 'Model training completed', time: '1 hour ago', status: 'success' },
    { action: 'Team member invited', time: '2 hours ago', status: 'pending' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-400">
            Here's what's happening with your AI projects today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="glassmorphism rounded-xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="glassmorphism rounded-xl p-6 border border-white/10 mb-8">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="glassmorphism hover:bg-white/10 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-left">
                  <MessageSquare className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-white font-semibold mb-1">Start Chat Session</div>
                  <div className="text-gray-400 text-sm">Begin a new AI conversation</div>
                </button>
                <button className="glassmorphism hover:bg-white/10 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-left">
                  <BarChart3 className="w-8 h-8 text-purple-400 mb-3" />
                  <div className="text-white font-semibold mb-1">Analyze Data</div>
                  <div className="text-gray-400 text-sm">Upload and analyze your data</div>
                </button>
                <button className="glassmorphism hover:bg-white/10 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-left">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                  <div className="text-white font-semibold mb-1">View Analytics</div>
                  <div className="text-gray-400 text-sm">Check your usage statistics</div>
                </button>
                <button className="glassmorphism hover:bg-white/10 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-left">
                  <Users className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-white font-semibold mb-1">Manage Team</div>
                  <div className="text-gray-400 text-sm">Invite and manage team members</div>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glassmorphism rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{activity.action}</div>
                    <div className="text-gray-400 text-xs">{activity.time}</div>
                  </div>
                  <Activity className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;