import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { Users, Clock, CalendarDays, Eye } from "lucide-react";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Attendance = () => {
  const stats = [
    { title: "Present Today", value: "38", change: "+2 from yesterday", icon: <Users size={24} />, color: "text-green-400" },
    { title: "Absent", value: "4", change: "-1 from yesterday", icon: <Eye size={24} />, color: "text-red-400" },
    { title: "Late Arrivals", value: "3", change: "Same as yesterday", icon: <Clock size={24} />, color: "text-yellow-400" },
  ];

  const checkInTrends = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
    datasets: [
      {
        label: "Check-ins",
        data: [5, 12, 18, 25, 27, 24],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const weeklyAttendance = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Present",
        data: [40, 42, 39, 41, 38],
        backgroundColor: "#10B981",
      },
      {
        label: "Absent",
        data: [5, 3, 6, 4, 2],
        backgroundColor: "#EF4444",
      },
    ],
  };

  const checkIns = [
    { name: "Sarah Johnson", role: "Sales Representative", status: "Checked In", time: "09:00 AM", color: "text-green-400" },
    { name: "Michael Chen", role: "Security Officer", status: "Late Check-in", time: "09:15 AM", color: "text-yellow-400" },
    { name: "Emily Davis", role: "Store Manager", status: "Checked In", time: "08:45 AM", color: "text-green-400" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#1F1F1F] p-5 rounded-lg shadow-md flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-all"
          >
            <div>
              <p className="text-gray-400">{stat.title}</p>
              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
              <p className={`text-sm ${stat.color}`}>{stat.change}</p>
            </div>
            <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="bg-[#262626] p-2 rounded-md">
              {stat.icon}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Employee Check-in Trends</h2>
          <div className="h-64">
            <Line data={checkInTrends} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Weekly Attendance Overview</h2>
          <div className="h-64">
            <Bar data={weeklyAttendance} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </motion.div>

      {/* Recent Check-ins */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Check-ins</h2>
          <button className="text-gray-400 hover:text-white text-sm transition">View All</button>
        </div>
        <div className="space-y-3">
          {checkIns.map((check, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex justify-between items-center bg-[#262626] p-4 rounded-md shadow border border-[#333333] hover:border-[#404040] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <p className="text-white font-semibold">{check.name}</p>
                  <p className="text-gray-400 text-sm">{check.role}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`${check.color} font-semibold`}>{check.status}</p>
                <p className="text-gray-400 text-sm">{check.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Attendance;
