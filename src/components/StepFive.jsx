const StepFiveForm = ({ formData, prevStep, submitForm }) => {
    const handlePrevious = () => {
      prevStep();
    };
  
    const handleSubmit = () => {
      // Perform final validation if necessary
      submitForm(); // This function should handle the actual data submission to Supabase
    };
  
    // Function to render each section for review
    const renderReviewSection = (title, data) => {
      return (
        <>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="border p-4 rounded-lg">{data}</p>
        </>
      );
    };
  
    return (
      <div className="transition-all duration-500 ease-in-out">
        {renderReviewSection('Clinic Name', formData.name)}
        {renderReviewSection("Responsible Person's Name", formData.responsible_person)}
        {renderReviewSection('Email Address', formData.email)}
        {renderReviewSection('Phone Number', formData.phone)}
        {/* ... Render other sections similarly ... */}
        <div className="flex flex-col space-y-4">
          {/* Include a section to display staff member information */}
          <h3 className="text-lg font-semibold">Staff Members</h3>
          {formData.staffMembers.map((member, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <p>Name: {member.name}</p>
              <p>Position: {member.position}</p>
              {/* ... Include other staff details ... */}
            </div>
          ))}
          {/* ... Repeat for other details ... */}
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default StepFiveForm;
  