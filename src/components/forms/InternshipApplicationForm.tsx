import React, { useState } from "react";

interface InternshipApplicationFormData {
  fullName: string;
  passportPhoto: File | null;
  gender: string;
  maritalStatus: string;
  dateOfBirth: {
    year: string;
    month: string;
    day: string;
  };
  email: string;
  confirmEmail: string;
  mobileNumber: string;
  permanentAddress: string;
  temporaryAddress: string;
  postApplied: string;
  highestEducation: string;
  cv: File | null;
  agree: boolean;
}

const initialFormData: InternshipApplicationFormData = {
  fullName: "",
  passportPhoto: null,
  gender: "",
  maritalStatus: "",
  dateOfBirth: { year: "", month: "", day: "" },
  email: "",
  confirmEmail: "",
  mobileNumber: "",
  permanentAddress: "",
  temporaryAddress: "",
  postApplied: "",
  highestEducation: "",
  cv: null,
  agree: false,
};

const InternshipApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files && files[0] ? files[0] : null });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      dateOfBirth: {
        ...formData.dateOfBirth,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit logic here
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 700, margin: "0 auto" }}>
      <div>
        <label>Full Name</label>
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Passport Size Photo</label>
        <input
          type="file"
          name="passportPhoto"
          accept="image/*"
          onChange={handleFileChange}
        />
        <small>Maximum file size: 2MB</small>
      </div>
      <div>
        <label>Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Marital Status</label>
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          required
        >
          <option value="">Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>Date of Birth (AD)</label>
        <div style={{ display: "flex", gap: 8 }}>
          <select
            name="year"
            value={formData.dateOfBirth.year}
            onChange={handleDateChange}
            required
          >
            <option value="">Year</option>
            {Array.from({ length: 70 }, (_, i) => 2026 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={formData.dateOfBirth.month}
            onChange={handleDateChange}
            required
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="day"
            value={formData.dateOfBirth.day}
            onChange={handleDateChange}
            required
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Confirm Email</label>
        <input
          name="confirmEmail"
          type="email"
          value={formData.confirmEmail}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile Number</label>
        <input
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Permanent Address</label>
        <input
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Temporary Address</label>
        <input
          name="temporaryAddress"
          value={formData.temporaryAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Post Applied</label>
        <input
          name="postApplied"
          value={formData.postApplied}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Highest Level Education</label>
        <select
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="High School">High School</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>
      </div>
      <div>
        <label>Upload Complete CV *</label>
        <input
          type="file"
          name="cv"
          accept="application/pdf,.doc,.docx"
          onChange={handleFileChange}
          required
        />
        <small>Maximum file size: 2MB</small>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          I hereby affirm that the information provided above is accurate and
          correct to the best of my knowledge and belief.
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InternshipApplicationForm;
