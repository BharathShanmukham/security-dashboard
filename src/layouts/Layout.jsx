import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import { Search, Bell, UserCircle } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex bg-[#181818] min-h-screen">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content (Scrollable) */}
      <div className="ml-64 flex-1 flex flex-col overflow-y-auto h-screen">
        {/* Fixed Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-[#222222] text-white flex items-center justify-between px-6 py-4 shadow-md fixed w-[calc(100%-16rem)] left-64 top-0 z-50 h-14"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xl font-semibold"
          >
            Security Dashboard
          </motion.h1>

          <div className="flex items-center gap-6">
            <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.3 }}>
              <Search className="text-gray-300 hover:text-white transition cursor-pointer" size={22} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.3 }}>
              <Bell className="text-gray-300 hover:text-white transition cursor-pointer" size={22} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <UserCircle className="text-gray-400 hover:text-white transition cursor-pointer" size={30} />
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content (Padding to avoid header overlap) */}
        <motion.main
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 p-6 bg-[#202020] text-white mt-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-[#303030] p-6 rounded-lg shadow-lg"
          >
            <Outlet />
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
