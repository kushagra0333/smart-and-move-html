const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow CORS from your new frontend URL
app.use(cors({
    origin: "https://kushagra0333.github.io/smart-and-move-html/",
    methods: ["GET"]
}));

// List of Indian states
const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", 
    "Tamil Nadu", "Uttar Pradesh", "West Bengal"
];

// Generate random buses for all state-to-state routes
const generateBuses = () => {
    let busData = [];
    statesOfIndia.forEach(fromState => {
        statesOfIndia.forEach(toState => {
            if (fromState !== toState) {
                let numBuses = Math.floor(Math.random() * 3) + 1; // 1 to 3 buses per route
                for (let i = 0; i < numBuses; i++) {
                    busData.push({
                        from: fromState,
                        to: toState,
                        name: `${fromState} Express Bus ${i + 1}`,
                        time: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? "AM" : "PM"}`,
                        seats: Math.floor(Math.random() * 30) + 10, // Random seats between 10-40
                        price: Math.floor(Math.random() * 1000) + 500 // Random price between ₹500-₹1500
                    });
                }
            }
        });
    });
    return busData;
};

// Generate and store bus data
const buses = generateBuses();

// API to get buses for a specific route
app.get("/api/buses", (req, res) => {
    const { from, to } = req.query;
    if (!from || !to) {
        return res.status(400).json({ error: "Missing 'from' or 'to' query parameters" });
    }

    const filteredBuses = buses.filter(bus => bus.from === from && bus.to === to);
    
    if (filteredBuses.length === 0) {
        return res.status(404).json({ message: "No buses available for this route." });
    }

    res.json(filteredBuses);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
