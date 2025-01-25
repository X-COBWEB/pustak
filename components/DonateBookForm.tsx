"use client"
import Image from 'next/image';
import React, { useState } from 'react';

export default function DonateBookForm() {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-800 rounded-2xl shadow-lg mt-14">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Donate a Book</h2>
      <form 
        action="/api/donate-book" 
        method="POST" 
        encType="multipart/form-data" 
        className="space-y-6"
      >
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title of the Book
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue="Sample Book Title"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            defaultValue="This is a sample description of the book."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          ></textarea>
        </div>

        <div>
          <label htmlFor="credits" className="block text-lg font-semibold mb-2">
            Equivalent Credits
          </label>
          <input
            type="number"
            id="credits"
            name="credits"
            min="0"
            required
            defaultValue="10"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="photo" className="block text-lg font-semibold mb-2">
            Photo of the Book
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="block w-full text-sm text-gray-500 rounded-lg cursor-pointer border border-gray-300 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {photoPreview && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
              <Image src={photoPreview} alt="Book Preview" width={200} height={300} className="rounded-lg shadow-md" />
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            List Book for Donation
          </button>
        </div>
      </form>
    </div>
  );
}
