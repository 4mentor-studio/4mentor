import { useState } from "react";
const StepThreeForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [errors, setErrors] = useState({});
    const [staffMembers, setStaffMembers] = useState(formData.staffMembers || []);
  
    // Function to handle validation of Step 3
    const validateStepThree = () => {
      let tempErrors = {};
      let staffErrors = {};
      // Basic validation rules
      if (!formData.payment_info.trim()) tempErrors.payment_info = 'Payment information is required.';
      if (!formData.insurance_info.trim()) tempErrors.insurance_info = 'Insurance information is required.';
      
      // Validate each staff member's information
      staffMembers.forEach((member, index) => {
        if (!member.name.trim()) {
          staffErrors[index] = staffErrors[index] || {};
          staffErrors[index].name = 'Staff name is required.';
        }
        // Add further staff member validations here as necessary
      });
  
      setErrors({ ...tempErrors, staff: staffErrors });
      return Object.keys(tempErrors).length === 0 && Object.keys(staffErrors).length === 0;
    };
  
    const handleNext = () => {
      if (validateStepThree()) {
        // Update formData with staff members before proceeding
        setFormData({ ...formData, staffMembers });
        nextStep();
      }
    };
  
    const handlePrevious = () => {
      // Update formData with staff members before going back
      setFormData({ ...formData, staffMembers });
      prevStep();
    };
  
    // Function to handle adding a new staff member
    const addStaffMember = () => {
      setStaffMembers([...staffMembers, { name: '', position: '', bio: '', specialty: '', qualifications: '', picture_url: '' }]);
    };
  
    // Function to handle removing a staff member
    const removeStaffMember = (index) => {
      const updatedStaffMembers = staffMembers.filter((_, i) => i !== index);
      setStaffMembers(updatedStaffMembers);
    };
  
    // Function to handle staff member detail changes
    const handleStaffChange = (index, field, value) => {
      const updatedStaffMembers = [...staffMembers];
      updatedStaffMembers[index][field] = value;
      setStaffMembers(updatedStaffMembers);
    };
  
    // Function to render error messages
    const renderError = (fieldName, index) => {
      if (index !== undefined) {
        if (errors.staff && errors.staff[index] && errors.staff[index][fieldName]) {
          return <p className="text-red-500 text-xs">{errors.staff[index][fieldName]}</p>;
        }
      } else {
        if (errors[fieldName]) {
          return <p className="text-red-500 text-xs">{errors[fieldName]}</p>;
        }
      }
      return null;
    };
  
    return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold pb-4">Clinic Information</h2>
        <div className='flex flex-col space-y-4'>
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.payment_info ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Payment Information"
          value={formData.payment_info}
          onChange={(e) => setFormData({ ...formData, payment_info: e.target.value })}
        />
        {renderError('payment_info')}
  
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.insurance_info ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Insurance Information"
          value={formData.insurance_info}
          onChange={(e) => setFormData({ ...formData, insurance_info: e.target.value })}
        />
        {renderError('insurance_info')}
  
        {staffMembers.map((member, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <input
              className={`border-2 rounded-lg p-2 text-lg`}
              type="text"
              placeholder="Staff Name"
              value={member.name}
              onChange={(e) => handleStaffChange(index, 'name', e.target.value)}
            />
            {renderError('name', index)}
            {/* Repeat for other staff member fields */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg transition duration-200"
              onClick={() => removeStaffMember(index)}
            >
              Remove Staff Member
            </button>
          </div>
        ))}
        <button
className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
onClick={addStaffMember}
>
Add Staff Member
</button>

<div className="flex justify-between">
<button
  className="bg-gray-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
  onClick={handlePrevious}
>
  Previous
</button>
<button
  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
  onClick={handleNext}
>
  Next
</button>
</div>
</div>
</div>
);
};

export default StepThreeForm;
