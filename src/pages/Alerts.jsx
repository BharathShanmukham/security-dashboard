import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck, Bell, Eye, Trash2 } from "lucide-react";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Alerts = () => {
  const alertsSummary = [
    { title: "High Priority Alerts", value: "12", active: "3 Active", color: "bg-red-900", badge: "bg-red-500" },
    { title: "Medium Priority", value: "8", active: "5 Active", color: "bg-yellow-700", badge: "bg-yellow-500" },
    { title: "Resolved Alerts", value: "42", active: "15 Today", color: "bg-green-900", badge: "bg-green-500" },
  ];

  const alertDistribution = {
    labels: ["Unauthorized Access", "Loitering", "Theft Attempt"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#EF4444", "#D97706", "#3B82F6"],
      },
    ],
  };

  const alertTrends = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Alerts",
        data: [14, 11, 18, 7, 19, 15, 13],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const liveAlerts = [
    { title: "Unauthorized Access Detected", location: "Vault Room - Camera #4", priority: "High Priority", time: "2 minutes ago", color: "bg-red-900", badge: "bg-red-500" },
    { title: "Suspicious Behavior", location: "Display Area - Camera #2", priority: "Medium Priority", time: "5 minutes ago", color: "bg-yellow-700", badge: "bg-yellow-500" },
    { title: "Motion Detected", location: "Storage Area - Camera #6", priority: "Low Priority", time: "15 minutes ago", color: "bg-blue-900", badge: "bg-blue-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Alert Summary Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alertsSummary.map((alert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`p-5 rounded-lg shadow-md flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-all ${alert.color}`}
          >
            <div>
              <p className="text-gray-200">{alert.title}</p>
              <h2 className="text-3xl font-bold text-white">{alert.value}</h2>
              <span className={`text-sm text-white px-2 py-1 rounded ${alert.badge}`}>{alert.active}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Section */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Alert Type Distribution</h2>
          <div className="h-64">
            <Pie data={alertDistribution} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h2 className="text-lg font-semibold text-white mb-4">Alert Trends Timeline</h2>
          <div className="h-64">
            <Line data={alertTrends} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </motion.div>

      {/* Live Security Alerts */}
      <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">Live Security Alerts</h2>
          <button className="text-gray-400 hover:text-white text-sm transition flex items-center gap-1">
            <Trash2 size={16} /> Clear All
          </button>
        </div>
        <div className="space-y-3">
          {liveAlerts.map((alert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`flex justify-between items-center p-4 rounded-md shadow border border-[#333333] hover:border-[#404040] transition-all ${alert.color}`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-md text-white ${alert.badge}`}>
                  {alert.priority === "High Priority" ? <AlertTriangle size={20} /> : alert.priority === "Medium Priority" ? <Eye size={20} /> : <Bell size={20} />}
                </div>
                <div>
                  <p className="text-white font-semibold">{alert.title}</p>
                  <p className="text-gray-300 text-sm">{alert.location}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm text-white px-2 py-1 rounded ${alert.badge}`}>{alert.priority}</span>
                <p className="text-gray-400 text-sm">{alert.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Alerts;
