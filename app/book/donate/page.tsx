import Link from 'next/link'
import React from 'react'

const page = () => {
    
  return (
    <div className='items-center justify-center h-screen'>
    <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
  <h2 className="text-3xl font-bold mb-6 text-gray-800">Donate Books</h2>
  <label className="block text-sm font-medium text-gray-700 mb-2">Please submit the photos and videos of the book for verification</label><br/>
  
  
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Photos</label>
    <div className="flex items-center justify-center w-full">
      <label htmlFor="photoUpload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
        <input id="photoUpload" type="file" className="hidden required:" multiple accept="image/*" />
      </label>
    </div>
  </div>
  
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-800 mb-2">Videos</label>
    <div className="flex items-center justify-center w-full">
      <label htmlFor="videoUpload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500">MP4, WebM, Ogg up to 100MB</p>
        </div>
        <input id="videoUpload" type="file" className="hidden" multiple accept="video/*" />
      </label>
    </div>
  </div>
  
  
  <div className="flex justify-end">
    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"><Link href='/book/donate/verify'>
      Verify Book
      </Link>
    </button>
  </div>
</form>

    </div>
  )
}

export default page