import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ArrowRight, AlertTriangle, ArrowDown, FileDown, Plus, Download, Eye } from "lucide-react";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Security = () => {
    // Risk Summary Data
    const riskSummary = [
        { title: "Jewelry Display", risk: "High Risk", value: "80%", color: "bg-red-900", progress: "bg-red-500", trend: <ArrowUp size={18} className="text-red-500" /> },
        { title: "Cash Counter", risk: "Medium Risk", value: "60%", color: "bg-yellow-700", progress: "bg-yellow-500", trend: <ArrowRight size={18} className="text-yellow-500" /> },
        { title: "Storage Room", risk: "Low Risk", value: "40%", color: "bg-green-900", progress: "bg-green-500", trend: <ArrowDown size={18} className="text-green-500" /> },
    ];

    const theftTrends = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Theft Attempts",
                data: [2, 5, 2, 4, 6, 3, 4],
                backgroundColor: "#EF4444",
            },
        ],
    };

    const storeRiskZones = [
        { name: "Display 1", risk: "High Risk", color: "bg-red-900" },
        { name: "Counter", risk: "Medium Risk", color: "bg-yellow-700" },
        { name: "Storage", risk: "Low Risk", color: "bg-green-900" },
        { name: "Display 2", risk: "Medium Risk", color: "bg-yellow-700" },
        { name: "Main Area", risk: "High Risk", color: "bg-red-900" },
        { name: "Exit", risk: "Low Risk", color: "bg-green-900" },
        { name: "Display 3", risk: "Medium Risk", color: "bg-yellow-700" },
        { name: "Entrance", risk: "Low Risk", color: "bg-green-900" },
        { name: "Vault", risk: "High Risk", color: "bg-red-900" },
    ];

    // Theft Prevention Alerts
    const theftAlerts = [
        { title: "Attempted Theft Prevention", location: "Jewelry Display Section - Camera #2", time: "2 min ago", color: "bg-red-900", icon: <AlertTriangle size={20} className="text-red-500" /> },
        { title: "Suspicious Behavior", location: "Main Counter Area - Camera #1", time: "5 min ago", color: "bg-yellow-700", icon: <Eye size={20} className="text-yellow-500" /> },
    ];


    const reports = [
        {
            title: "Monthly Security Summary",
            date: "Oct 15, 2023",
            metrics: [
                { label: "Security Incidents", value: "24" },
                { label: "Average Response Time", value: "2.5 min" },
                { label: "Resolution Rate", value: "95%" },
            ],
        },
        {
            title: "Attendance & Traffic Analysis",
            date: "Oct 14, 2023",
            metrics: [
                { label: "Total Visitors", value: "1,245" },
                { label: "Peak Hours", value: "2 PM - 4 PM" },
                { label: "Staff Attendance", value: "98%" },
            ],
        },
        {
            title: "Anomaly Detection Report",
            date: "Oct 13, 2023",
            metrics: [
                { label: "Total Anomalies", value: "15" },
                { label: "False Positives", value: "3" },
                { label: "Critical Incidents", value: "2" },
            ],
        },
    ];

    return (
        <div className="space-y-6">
            {/* Risk Summary Cards */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {riskSummary.map((risk, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-[#1F1F1F] p-5 rounded-lg shadow-md flex flex-col gap-2 border border-[#262626] hover:border-[#404040] transition-all"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-gray-200">{risk.title}</p>
                            <span className={`text-sm font-bold ${risk.color === "bg-red-900" ? "text-red-400" : risk.color === "bg-yellow-700" ? "text-yellow-400" : "text-green-400"}`}>
                                {risk.risk}
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                            {risk.value} {risk.trend}
                        </h2>
                        <div className="w-full bg-gray-700 h-2 rounded-full">
                            <div className={`h-2 rounded-full ${risk.progress}`} style={{ width: risk.value }}></div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Existing Security Dashboard Content */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
                    <h2 className="text-lg font-semibold text-white mb-4">Daily Theft Attempts</h2>
                    <div className="h-64">
                        <Bar data={theftTrends} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>

                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
                    <h2 className="text-lg font-semibold text-white mb-4">Store Risk Heatmap</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {storeRiskZones.map((zone, index) => (
                            <div key={index} className={`h-24 rounded-md flex flex-col justify-center items-center text-white font-medium ${zone.color}`}>
                                <p>{zone.name}</p>
                                <p className="text-sm">{zone.risk}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Theft Prevention Alerts */}
            <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
                <h2 className="text-lg font-semibold text-white mb-4">Recent Theft Prevention Alerts</h2>
                <div className="space-y-3">
                    {theftAlerts.map((alert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="flex justify-between items-center p-4 rounded-md shadow border border-[#333333] hover:border-[#404040] transition-all"
                            style={{ backgroundColor: alert.color }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-md bg-black bg-opacity-20">{alert.icon}</div>
                                <div>
                                    <p className="text-white font-semibold">{alert.title}</p>
                                    <p className="text-gray-300 text-sm">{alert.location}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">{alert.time}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 🔹 Title for Security Reports & Analytics */}
            <h2 className="text-2xl font-bold text-white">Security Reports & Analytics</h2>
            {/* Filter & Report Section */}
            <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626] flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4">
                    <select className="bg-[#262626] text-white p-2 rounded-md border border-[#404040] hover:bg-[#333333] transition">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Custom Range</option>
                    </select>
                    <select className="bg-[#262626] text-white p-2 rounded-md border border-[#404040] hover:bg-[#333333] transition">
                        <option>All Reports</option>
                        <option>Security Incidents</option>
                        <option>Attendance</option>
                        <option>Anomaly Detection</option>
                    </select>
                    <select className="bg-[#262626] text-white p-2 rounded-md border border-[#404040] hover:bg-[#333333] transition">
                        <option>All Locations</option>
                        <option>Main Entrance</option>
                        <option>Jewelry Section</option>
                        <option>Cash Counter</option>
                    </select>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow transition">Generate Report</button>
            </motion.div>

            {/* Security Reports Section */}
            {reports.map((report, index) => (
                <motion.div key={index} className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-white">{report.title}</h2>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-md flex items-center gap-2 transition">
                            <Download size={16} /> Download PDF
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">Generated on {report.date}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {report.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-[#262626] p-4 rounded-lg text-center">
                                <p className="text-gray-400">{metric.label}</p>
                                <h2 className="text-2xl font-bold text-white">{metric.value}</h2>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* Export & New Report Buttons */}
            <div className="flex justify-between">
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
                    <FileDown size={16} /> Export All
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
                    <Plus size={16} /> New Report
                </button>
            </div>
        </div>
    );
};

export default Security;
