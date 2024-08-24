import React from "react";
import { AppBar, Toolbar, Tabs, Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import DashboardSection from "./DashboardSection";

const NavigationBar = () => {
	const [value, setValue] = React.useState("Leave");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<AppBar
			position="static"
			className="bg-white shadow-none border-b border-gray-200"
		>
			<Box sx={{ width: "100%", typography: "body1" }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab
								label="Attendance"
								value={"Attendance"}
								// className="text-gray-700 font-semibold primary-color"
								className={`text-gray-700 font-semibold ${
									value === "Attendance" ? "primary-color" : ""
								}`}
							/>
							<Tab
								label="Leave"
								value={"Leave"}
								className={`text-gray-700 font-semibold ${
									value === "Leave" ? "primary-color" : ""
								}`}
							/>
							<Tab
								label="Remote"
								value={"Remote"}
								className={`text-gray-700 font-semibold ${
									value === "Remote" ? "primary-color" : ""
								}`}
							/>
							<Tab
								label="Others"
								value={"Others"}
								className={`text-gray-700 font-semibold ${
									value === "Others" ? "primary-color" : ""
								}`}
							/>
						</TabList>
					</Box>
					<TabPanel value="Attendance">Attendance</TabPanel>
					<TabPanel value="Leave">
						<DashboardSection />
					</TabPanel>
					<TabPanel value="Remote">Remote</TabPanel>
					<TabPanel value="Others">Others</TabPanel>
				</TabContext>
			</Box>
		</AppBar>
	);
};

export default NavigationBar;
