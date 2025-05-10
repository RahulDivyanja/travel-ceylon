import React, { useState } from 'react';
import { Star } from 'lucide-react';
import reviews from '../src/data/reviews';

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className=" mx-auto px-4 py-5">
      <h2 className="text-2xl font-bold text-left mb-2">What People Say About Us</h2>
      <p className="text-gray-600 text-lg text-left mb-10">What people say about our facilities and services</p>

      {/* Review Cards - Horizontal Scroll */}
      <div className="overflow-x-scroll pb-6 mt-7 scrollbar-hide">
        <div className="flex space-x-6 min-w-max">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-72 max-w-[300px] bg-gray-50 p-6 rounded-xl drop-shadow-[5px_7px_1px_#8DD3BB]  flex-shrink-0 transition-all hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.country}</p>
                </div>
              </div>
              <div className="h-28 mb-4 overflow-ellipsis">
                <p className="text-gray-700 text-sm text-left">
                  {review.review}
                </p>
              </div>
              <div className="text-yellow-400 flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    stroke="none"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Button */}
      <div className="flex justify-center sm:justify-end mt-8">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#8DD3BB] hover:bg-teal-400 text-black font-medium py-2 px-6 rounded-full transition"
        >
          Add Review
        </button>
      </div>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Add Your Review</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Country</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Your country"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Review</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  placeholder="Share your experience"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      onClick={() => setSelectedRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className={`w-6 h-6 cursor-pointer transition-colors duration-150 ${
                        star <= (hoveredRating || selectedRating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#8DD3BB] hover:bg-teal-400 text-black px-4 py-2 rounded"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
