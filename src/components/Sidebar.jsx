import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Users, BarChart, Shield, Bell, LogOut, Settings } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Attendance", path: "/attendance", icon: <Users size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart size={20} /> },
    { name: "Security", path: "/security", icon: <Shield size={20} /> },
    { name: "Alerts", path: "/alerts", icon: <Bell size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#202020] text-white flex flex-col shadow-xl">
      {/* Sidebar Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 p-5 border-b border-[#2a2a2a]"
      >
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-yellow-500 w-8 h-8 rounded-md"
        ></motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold tracking-wide"
        >
          GoldGuard
        </motion.span>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-3 space-y-2">
        {menuItems.map((item) => (
          <motion.div key={item.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[#b3b3b3] font-medium transition-all ${
                location.pathname === item.path ? "bg-[#303030] text-white shadow-md" : "hover:bg-[#383838] hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Push Profile to Bottom */}
      <div className="flex-1"></div>

      {/* User Profile & Logout */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="p-5 border-t border-[#2a2a2a] flex flex-col gap-4"
      >
        <div className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-10 h-10 bg-[#404040] rounded-full"></motion.div>
          <div>
            <p className="text-sm font-semibold text-white">Admin User</p>
            <p className="text-xs text-[#b3b3b3]">admin@goldguard.com</p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center gap-2 px-4 py-2 bg-[#333333] hover:bg-[#404040] text-[#b3b3b3] hover:text-white rounded-lg transition-all"
        >
          <LogOut size={18} />
          Logout
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Sidebar;
