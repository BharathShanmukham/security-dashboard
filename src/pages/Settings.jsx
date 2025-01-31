import { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";

const Settings = () => {
  const [faceRecognition, setFaceRecognition] = useState(true);
  const [peopleCounting, setPeopleCounting] = useState(true);
  const [intrusionDetection, setIntrusionDetection] = useState(true);

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const [nightMode, setNightMode] = useState(true);
  const [resolution, setResolution] = useState("4K (3840 × 2160)");
  const [frameRate, setFrameRate] = useState("60 FPS");

  const [crowdDensity, setCrowdDensity] = useState(50);
  const [loiteringTime, setLoiteringTime] = useState(15);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Security System Settings</h2>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* System Settings */}
        <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h3 className="text-lg font-semibold text-white mb-4">System Settings</h3>
          <div className="space-y-4">
            {[["Enable Face Recognition", faceRecognition, setFaceRecognition], 
              ["People Counting", peopleCounting, setPeopleCounting], 
              ["Intrusion Detection", intrusionDetection, setIntrusionDetection]
            ].map(([label, enabled, setEnabled]) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-300">{label}</span>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-500" : "bg-gray-600"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notification Settings */}
        <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h3 className="text-lg font-semibold text-white mb-4">Notification Settings</h3>
          <div className="space-y-4">
            {[["Email Alerts", emailAlerts, setEmailAlerts], 
              ["SMS Notifications", smsNotifications, setSmsNotifications], 
              ["Push Notifications", pushNotifications, setPushNotifications]
            ].map(([label, enabled, setEnabled]) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-300">{label}</span>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-blue-500" : "bg-gray-600"
                  } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Alert Thresholds */}
        <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h3 className="text-lg font-semibold text-white mb-4">Alert Thresholds</h3>
          <div className="space-y-6">
            {/* Crowd Density Threshold */}
            <div>
              <label className="text-gray-300">Crowd Density Threshold (%)</label>
              <input
                type="range"
                min="0"
                max="100"
                value={crowdDensity}
                onChange={(e) => setCrowdDensity(e.target.value)}
                className="w-full mt-2"
              />
              <p className="text-gray-400 text-sm mt-1">{crowdDensity}%</p>
            </div>

            {/* Loitering Time */}
            <div>
              <label className="text-gray-300">Loitering Time (minutes)</label>
              <input
                type="range"
                min="0"
                max="30"
                value={loiteringTime}
                onChange={(e) => setLoiteringTime(e.target.value)}
                className="w-full mt-2"
              />
              <p className="text-gray-400 text-sm mt-1">{loiteringTime} min</p>
            </div>
          </div>
        </motion.div>

        {/* Camera Settings */}
        <motion.div className="bg-[#1F1F1F] p-6 rounded-lg shadow-md border border-[#262626]">
          <h3 className="text-lg font-semibold text-white mb-4">Camera Settings</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Night Mode</span>
              <Switch
                checked={nightMode}
                onChange={setNightMode}
                className={`${
                  nightMode ? "bg-blue-500" : "bg-gray-600"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    nightMode ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>

            <div>
              <label className="text-gray-300">Resolution</label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full mt-2 p-2 bg-[#262626] text-white rounded-md border border-[#404040] hover:bg-[#333333] transition"
              >
                <option>4K (3840 × 2160)</option>
                <option>1080p (1920 × 1080)</option>
                <option>720p (1280 × 720)</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300">Frame Rate</label>
              <select
                value={frameRate}
                onChange={(e) => setFrameRate(e.target.value)}
                className="w-full mt-2 p-2 bg-[#262626] text-white rounded-md border border-[#404040] hover:bg-[#333333] transition"
              >
                <option>60 FPS</option>
                <option>30 FPS</option>
                <option>24 FPS</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save Settings Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md transition"
      >
        Save Settings
      </motion.button>
    </div>
  );
};

export default Settings;
