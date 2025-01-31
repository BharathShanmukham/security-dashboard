import { AlertTriangle, Users, Shield, Eye, CheckCircle, Lock, Bell, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const stats = [
    { title: "Total Employees", value: "42", change: "+2 this week", icon: <Users size={24} />, color: "text-green-400" },
    { title: "Current Visitors", value: "28", change: "Active now", icon: <Users size={24} />, color: "text-yellow-400" },
    { title: "Security Alerts", value: "5", change: "3 high priority", icon: <AlertTriangle size={24} />, color: "text-red-400" },
    { title: "Risk Level", value: "Medium", change: "Elevated", icon: <Shield size={24} />, color: "text-orange-400 font-semibold" },
  ];

  const events = [
    { title: "Unauthorized Access Attempt", location: "Vault Room", time: "2 min ago", icon: <AlertTriangle size={20} />, color: "bg-red-500" },
    { title: "Suspicious Activity", location: "Jewelry Display Area", time: "15 min ago", icon: <Eye size={20} />, color: "bg-yellow-500" },
    { title: "System Check Complete", location: "All Systems Normal", time: "1 hour ago", icon: <CheckCircle size={20} />, color: "bg-green-500" },
  ];

  const actions = [
    { label: "Lock Down Facility", icon: <Lock size={18} />, bg: "bg-red-600 hover:bg-red-700" },
    { label: "Sound Alarm", icon: <Bell size={18} />, bg: "bg-yellow-500 hover:bg-yellow-600 text-black" },
    { label: "Emergency Contact", icon: <Phone size={18} />, bg: "bg-blue-500 hover:bg-blue-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="bg-[#1F1F1F] p-5 rounded-lg shadow-md flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-all"
          >
            <div>
              <p className="text-gray-400">{stat.title}</p>
              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
              <p className={`text-sm ${stat.color}`}>{stat.change}</p>
            </div>
            <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="bg-[#262626] p-2 rounded-md">
              {stat.icon}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Security Events */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]"
      >
        <h2 className="text-lg font-semibold text-white mb-4">Recent Security Events</h2>
        <div className="space-y-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex justify-between items-center bg-[#262626] p-4 rounded-md shadow border border-[#333333] hover:border-[#404040] transition-all"
            >
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.35, ease: "easeInOut" }} className={`p-2 rounded-md ${event.color} text-white`}>
                  {event.icon}
                </motion.div>
                <div>
                  <p className="text-white font-semibold">{event.title}</p>
                  <p className="text-gray-400 text-sm">{event.location}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{event.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`flex items-center justify-center gap-3 ${action.bg} text-white py-3 rounded-lg shadow-md transition-all`}
          >
            {action.icon}
            <span>{action.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
