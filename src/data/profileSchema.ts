// Profile field schema for each role
export const profileSchema = {
  Member: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel" },
    { name: "location", label: "Location", type: "text" },
    { name: "bio", label: "Bio", type: "textarea" },
    { name: "education", label: "Education", type: "text" },
    { name: "interests", label: "Interests", type: "text" },
    // Add more fields as needed
  ],
  // Add other roles as needed
};
