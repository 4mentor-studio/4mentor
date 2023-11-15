import { useState } from "react";
const StepTwoForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [errors, setErrors] = useState({});
  
    // Function to handle validation of Step 2
    const validateStepTwo = () => {
      let tempErrors = {};
      // Basic validation rules
      if (!formData.philosophy.trim()) tempErrors.philosophy = 'Clinic philosophy is required.';
      if (!formData.operating_hours.trim()) tempErrors.operating_hours = 'Operating hours are required.';
      // Services could be a complex field, so adjust validation as necessary
      if (!formData.services.trim()) tempErrors.services = 'Services are required.';
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  
    const handleNext = () => {
      if (validateStepTwo()) {
        nextStep();
      }
    };
  
    const handlePrevious = () => {
      prevStep();
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
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.philosophy ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Clinic Philosophy"
          value={formData.philosophy}
          onChange={(e) => setFormData({ ...formData, philosophy: e.target.value })}
        />
        {renderError('philosophy')}
  
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.operating_hours ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Operating Hours"
          value={formData.operating_hours}
          onChange={(e) => setFormData({ ...formData, operating_hours: e.target.value })}
        />
        {renderError('operating_hours')}
  
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.services ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Services Offered"
          value={formData.services}
          onChange={(e) => setFormData({ ...formData, services: e.target.value })}
        />
        {renderError('services')}
  
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
    );
  };
  
  export default StepTwoForm;
  