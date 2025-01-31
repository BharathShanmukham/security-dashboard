import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, Clock, Activity } from "lucide-react";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [selectedRange, setSelectedRange] = useState("Last Hour");

  const stats = [
    { title: "Current Visitors", value: "47", change: "Live", icon: <Users size={24} />, color: "text-green-400" },
    { title: "Today's Total", value: "523", change: "+12%", icon: <Activity size={24} />, color: "text-green-400" },
    { title: "Peak Hours", value: "2-4 PM", change: "Busy", icon: <Clock size={24} />, color: "text-yellow-400" },
    { title: "Avg. Visit Duration", value: "23min", change: "+3min", icon: <Clock size={24} />, color: "text-blue-400" },
  ];

  const footTraffic = {
    labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM"],
    datasets: [
      {
        label: "Foot Traffic",
        data: [40, 80, 150, 190, 160, 100],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const visitDistribution = {
    labels: ["Morning", "Afternoon", "Evening"],
    datasets: [
      {
        label: "Visits",
        data: [110, 190, 160],
        backgroundColor: "#3B82F6",
      },
    ],
  };

  const dataSets = {
    "Last Hour": [
      { name: "Jewelry Display", intensity: "bg-red-500" },
      { name: "Main Counter", intensity: "bg-yellow-500" },
      { name: "Storage Area", intensity: "bg-green-500" },
      { name: "Entrance", intensity: "bg-red-400" },
      { name: "Waiting Area", intensity: "bg-yellow-400" },
      { name: "Exit", intensity: "bg-green-400" },
    ],
    Today: [
      { name: "Jewelry Display", intensity: "bg-yellow-500" },
      { name: "Main Counter", intensity: "bg-orange-500" },
      { name: "Storage Area", intensity: "bg-green-600" },
      { name: "Entrance", intensity: "bg-red-600" },
      { name: "Waiting Area", intensity: "bg-yellow-600" },
      { name: "Exit", intensity: "bg-green-500" },
    ],
    "This Week": [
      { name: "Jewelry Display", intensity: "bg-green-500" },
      { name: "Main Counter", intensity: "bg-green-400" },
      { name: "Storage Area", intensity: "bg-yellow-400" },
      { name: "Entrance", intensity: "bg-red-500" },
      { name: "Waiting Area", intensity: "bg-orange-500" },
      { name: "Exit", intensity: "bg-green-600" },
    ],
  };

  const insights = [
    { title: "High activity detected at Jewelry Display Section", time: "2 min ago", icon: <Eye size={20} />, color: "bg-green-500" },
    { title: "Extended dwell time at Main Counter", time: "5 min ago", icon: <Clock size={20} />, color: "bg-yellow-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
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
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Daily Foot Traffic</h2>
          <div className="h-64">
            <Line data={footTraffic} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Visit Distribution by Time</h2>
          <div className="h-64">
            <Bar data={visitDistribution} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </motion.div>

      {/* Heatmap Section */}
      <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Customer Dwell Time Heatmap</h2>
          <select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            className="bg-[#262626] text-white p-2 rounded-md border border-[#404040] hover:bg-[#333333] transition"
          >
            <option>Last Hour</option>
            <option>Today</option>
            <option>This Week</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dataSets[selectedRange].map((section) => (
            <motion.div key={section.name} className={`h-64 rounded-md flex items-center justify-center text-white font-medium ${section.intensity}`}>
              {section.name}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Live Customer Insights */}
      <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
        <h2 className="text-lg font-semibold text-white mb-4">Live Customer Insights</h2>
        {insights.map((insight) => (
          <motion.div key={insight.title} className="flex justify-between items-center bg-[#262626] p-4 rounded-md shadow border border-[#333333]">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-md ${insight.color} text-white`}>{insight.icon}</div>
              <p className="text-white font-semibold">{insight.title}</p>
            </div>
            <p className="text-gray-400 text-sm">{insight.time}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Analytics;
