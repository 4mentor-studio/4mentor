import React, { useState } from 'react';

const StepOneForm = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  // Function to handle validation of Step 1
  const validateStepOne = () => {
    let tempErrors = {};
    // Basic validation rules
    if (!formData.name.trim()) tempErrors.name = 'Clinic name is required.';
    if (!formData.responsible_person.trim()) tempErrors.responsible_person = 'Responsible person name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid.';
    if (!formData.phone.trim()) tempErrors.phone = 'Phone number is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStepOne()) {
      nextStep();
    }
  };

  // Function to render error messages
  const renderError = (fieldName) => {
    if (errors[fieldName]) {
      return <p className="text-red-500 text-xs">{errors[fieldName]}</p>;
    }
    return null;
  };

  return (
    <div className="transition-all duration-500 ease-in-out">
      <input
        className={`border-2 rounded-lg p-4 text-lg ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
        type="text"
        placeholder="Clinic Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {renderError('name')}

      <input
        className={`border-2 rounded-lg p-4 text-lg ${errors.responsible_person ? 'border-red-500' : 'border-gray-200'}`}
        type="text"
        placeholder="Responsible Person's Name"
        value={formData.responsible_person}
        onChange={(e) => setFormData({ ...formData, responsible_person: e.target.value })}
      />
      {renderError('responsible_person')}

      <input
        className={`border-2 rounded-lg p-4 text-lg ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {renderError('email')}

      <input
        className={`border-2 rounded-lg p-4 text-lg ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {renderError('phone')}

      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default StepOneForm;
