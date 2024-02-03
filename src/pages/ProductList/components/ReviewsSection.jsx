import React from "react";

const ReviewItem = ({ rating, percentage, count }) => {
  return (
    <li className="flex items-center text-sm font-medium">
      <span className="w-3">{rating}</span>
      <span className="mr-4 text-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
      <div className="mr-4 h-2 w-96 overflow-hidden rounded-full bg-gray-300">
        <div className={`h-full w-${percentage}/12 text-neutral-800`}></div>
      </div>
      <span className="w-3">{count}</span>
    </li>
  );
};

const ReviewsSection = () => {
  return (
    <div id="reviews">
      <div className="max-w-screen-md ">
        <div className="flex w-full flex-col">
          <div className="flex flex-col">
            <h1 className="max-w-sm text-lg font-medium text-neutral-800">
              Reviews
            </h1>
            <div className="my-4 rounded-xl bg-white py-2 px-4 shadow">
              <div className="flex h-16 items-center text-2xl font-medium text-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-neutral-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                4.7
              </div>
              <p className="text-sm text-gray-500">Average User Rating</p>
            </div>
          </div>
          <div className="text-gray-700">
            <p className="font-medium">Reviews</p>
            <ul className="mb-6 mt-2 space-y-2">
              <ReviewItem rating={5} percentage={56} count={56} />
              <ReviewItem rating={4} percentage={8} count={12} />
              <ReviewItem rating={3} percentage={1} count={4} />
              <ReviewItem rating={2} percentage={0} count={0} />
              <ReviewItem rating={1} percentage={1} count={5} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
