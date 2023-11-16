import StepFourForm from "./StepFour";
import StepThreeForm from "./StepThree";
import StepTwoForm from "./StepTwo";
import StepFiveForm from "./StepFive";
import StepOneForm from "./StepOne";
import { useState } from "react";


const FormComponent = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      // Clinic Basic Information
      name: '',
      responsible_person: '',
      email: '',
      phone: '',
      logo_url: '', // This will be the path to the logo after upload
    
      // Clinic Detailed Information
      philosophy: '',
      operating_hours: '',
      services: [], // This can be an array of service objects if more detail is needed
    
      // Insurance and Payment Information
      payment_info: '',
      insurance_info: '',
    
      // Staff Information
      staffMembers: [
        // Add a default empty staff member object or start with an empty array
        {
          name: '',
          position: '',
          bio: '',
          specialty: '',
          qualifications: '',
          picture_url: '', // This will be the path to the picture after upload
        },
      ],
    
      // Social Media, Languages, and Certifications
      social_media: [], // Could be an array of URLs
      languages_spoken: [], // Array of languages
      certifications: '', // Could be plain text or structured data if necessary
    });
    
    const nextStep = () => {
      setCurrentStep(currentStep + 1);
    };
    
    const prevStep = () => {
      setCurrentStep(currentStep - 1);
    };
    const submitForm = () => {
      alert('Form Submitted');
    };

    return (
        <div className="flex justify-center items-center  mx-auto sm:w-full md:w-3/4">
        {currentStep === 1 && <StepOneForm client:load formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {currentStep === 2 && <StepTwoForm client:load formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>}
        {currentStep == 3 && <StepThreeForm client:load formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>}
        {currentStep == 4 && <StepFourForm client:load formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>}
        {currentStep == 5 && <StepFiveForm client:load formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep}/>}
        </div>
    )
}

export default FormComponent;