import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable';

const UpdateJobs = () => {
    const {id}=useParams();
    //console.log(id)
    const{_id,jobTitle,companyName,minPrice,maxPrice,salaryType
        ,jobLocation,postingDate,experienceLevel,companyLogo,
        employmentType,description,postedBy,skills
    }= useLoaderData();


    const [selectedOption,setSelectedOption]= useState(null);

    const {
        register,reset,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills =selectedOption;
        //console.log(data)
        fetch(`http://localhost:5000/update-job/${id}`,{
       method: "PATCH",
       headers: {"content-type" : "application/json"},
       body: JSON.stringify(data)
 })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if(result.acknowledged === true ){
            alert("Job Updated Successfully")
          }
          reset()
        });
      };
    
      const options = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'C++', label: 'C++' },
        { value: 'Python', label: 'Python' },
        { value: 'React', label: 'React' },
        { value: 'Node', label: 'Node' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'Express', label: 'Express' },
        { value: 'MongoDB', label: 'MongoDB' },
        { value: 'Spring Boot', label: 'Spring Boot' },
        { value: 'Flutter', label: 'Flutter' }
      ]


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
      {/*form*/}
      <div className='bg-[rgb(250,250,250)] py-10 px-4 lg:px-16 '>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

        {/*1st Row*/}

      <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Title</label>
                <input type="text" defaultValue={jobTitle} {...register("jobTitle")}
                 className='create-job-input' />
            </div>
             
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input type="text" defaultValue={companyName}
                 placeholder='Ex: Amazon' {...register("companyName")}
                 className='create-job-input' />
            </div>
      </div>

      {/*2nd Row*/}

      <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type="text" defaultValue={minPrice} placeholder='$20k' {...register("minPrice")}
                 className='create-job-input' />
            </div> 
             
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary</label>
                <input type="text" defaultValue={maxPrice} placeholder='$120k' {...register("maxPrice")}
                 className='create-job-input' />
            </div>
      </div>

       {/*3rd Row*/}

      <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
               <select {...register("salaryType")} className='create-job-input'>
           <option value={salaryType}>{salaryType}</option>
           <option value="Hourly">Hourly</option>
           <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
           </select>
            </div> 
             
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Locations</label>
                <input type="text" defaultValue={jobLocation} placeholder='Ex: Hyderabad' {...register("jobLocation")}
                 className='create-job-input' />
            </div>
      </div>

        {/*4th Row*/}

      <div className='create-job-flex'>
                  <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type="date" defaultValue={postingDate}  {...register("postingDate")}
                 className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Experience Level</label>
               <select {...register("experienceLevel")} className='create-job-input'>
           <option value={experienceLevel}>{experienceLevel}</option>
           <option value="Work remotely">Work remotely</option>
           <option value="Internship">Internship</option>
            <option value="Any experience">Any experience</option>
           </select>
            </div> 
             

      </div>

      {/*5th Row*/}

      <div>
      <label className='block mb-2 text-lg'>Required Skill Sets: </label>
      <CreatableSelect className="create-job-input"
       defaultValue={skills}
       onChange={setSelectedOption}
      options={options}
      isMulti
      />
      </div>

      {/*6th Row*/}

        
      <div className='create-job-flex'>
                  <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input type="url" defaultValue={companyLogo} placeholder='Paste your company logo URL: https://google.com/img4' {...register("companyLogo")}
                 className='create-job-input' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Employment Type</label>
               <select {...register("employmentType")} className='create-job-input'>
           <option value={employmentType}>{employmentType}</option>
           <option value="Part-time">Part-time</option>
           <option value="Temporary">Temporary</option>
          <option value="Full-time">Full-time</option>
           </select>
            </div> 
             

      </div>

      {/*7th Row*/}
      <div className='w-full'>
      <label className='block mb-2 text-lg'>Job Description</label>
      <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700'
      rows={6}
      defaultValue={description} 
         placeholder='Job Description'
      {...register("description")}/>
      </div>

      {/*Last Row*/}
      <div className='w-full'>
      <label className='block mb-2 text-lg'>Job Posted By</label>
       <input type="email" defaultValue={postedBy} placeholder='your email'  {...register("postedBy")}
         className='create-job-input' />
      </div>




      <input type='submit' className=' block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer ' />
    </form>
      </div>
    </div>
  )
}

export default UpdateJobs
