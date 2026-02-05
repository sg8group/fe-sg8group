export const MENU = [
    { 
        name: "Home", 
        path: "/" 
    },
    {
        name: "Company Profile",
        children: [
            { label: "Overview", path: "/company-profile" },
            { label: "Corporate Value", path: "/company-profile/corporate-value" },
            { label: "Employee Branding", path: "/company-profile/employee-branding" },
            { label: "Logo Philosophy", path: "/company-profile/logo-philosophy" },
        ],
    },
    {
        name: "Our Service",
        children: [
            { label: "Manpower Supply", path: "/services/manpower-supply" },
            { label: "Consulting", path: "/services/consulting" },
            { label: "Export-Import Messenger", path: "/services/export-import" },
        ],
    },
    {
        name: "Recruitment",
        path: "/recruitment",
        children: [
            { label: "Agent of Change", path: "/recruitment/agent-of-change" },
            { label: "People Development", path: "/recruitment/people-development" },
        ],
    },
    { name: "Article", path: "/articles" },
];
