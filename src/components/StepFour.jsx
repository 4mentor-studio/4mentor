import { useState } from "react";
const StepFourForm = ({ formData, setFormData, nextStep, prevStep }) => {
    const [errors, setErrors] = useState({});
  
    // Function to handle validation of Step 4
    const validateStepFour = () => {
      let tempErrors = {};
      // Basic validation rules
      if (!formData.social_media.length) tempErrors.social_media = 'At least one social media link is required.';
      if (!formData.languages_spoken.length) tempErrors.languages_spoken = 'At least one language is required.';
      if (!formData.certifications.trim()) tempErrors.certifications = 'Certification information is required.';
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  
    const handleNext = () => {
      if (validateStepFour()) {
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
  
    // Function to handle changes in text inputs for social media and languages
    const handleArrayChange = (field, value) => {
      setFormData({ ...formData, [field]: value.split(',').map(item => item.trim()) });
    };
  
    return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold pb-4">Clinic Information</h2>
        <div className='flex flex-col space-y-4'>
        <input
          className={`border-2 rounded-lg p-4 text-lg ${errors.social_media ? 'border-red-500' : 'border-gray-200'}`}
          type="text"
          placeholder="Social Media Links (comma separated)"
          value={formData.social_media.join(', ')}
          onChange={(e) => handleArrayChange('social_media', e.target.value)}
        />
        {renderError('social_media')}
  
        <input
          className={`border-2 rounded-lg p-4 text-lg ${errors.languages_spoken ? 'border-red-500' : 'border-gray-200'}`}
          type="text"
          placeholder="Languages Spoken (comma separated)"
          value={formData.languages_spoken.join(', ')}
          onChange={(e) => handleArrayChange('languages_spoken', e.target.value)}
        />
        {renderError('languages_spoken')}
  
        <textarea
          className={`border-2 rounded-lg p-4 text-lg ${errors.certifications ? 'border-red-500' : 'border-gray-200'}`}
          placeholder="Certifications and Accreditations"
          value={formData.certifications}
          onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
        />
        {renderError('certifications')}
  
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
  
  export default StepFourForm;
  