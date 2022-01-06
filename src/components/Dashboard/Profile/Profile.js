import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { auth } = useSelector((state) => state);

  const {
    register: registerProfile,
    handleSubmit: handleProfile,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-1 xl:overflow-y-auto font-body">
      <div className="max-w-4xl mx-auto py-6 px-6 lg:px-8">
        <form
          className="space-y-8 divide-y divide-y-blue-gray-200"
          onSubmit={handleProfile(onSubmit)}
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-2xl font-semibold text-brand-900">
                প্রোফাইল
              </h2>
              <p className="mt-1 text-sm text-blue-gray-500">
                এই তথ্যটি সর্বজনীনভাবে প্রদর্শিত হবে তাই আপনি কী তথ্য প্রদান
                করছেন তা সতর্ক থাকুন।
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="photo"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                ছবি
              </label>
              <div className="mt-2 flex items-center">
                <img
                  className="inline-block object-cover object-center w-36 h-36 rounded-full"
                  src={auth?.user?.avatar}
                  alt=""
                />
                <div className="ml-4 flex  cursor-pointer ">
                  <div className="relative py-2 px-4 cursor-pointer border-gray-300 rounded-md shadow-sm flex items-center border border-transparent text-sm sm:text-base font-medium text-white transition-colors duration-300 bg-brand-900 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    <label
                      htmlFor="user-photo"
                      className="relative pointer-events-none"
                    >
                      <span className="text-sm font-semibold text-gray-100 tracking-wide cursor-pointer">
                        পরিবর্তন করুন
                      </span>
                    </label>
                    <input
                      id="user-photo"
                      name="user-photo"
                      type="file"
                      //   onChange={onFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="displayName"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                পুরো নাম
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="আপনার পূর্ণ নাম"
                defaultValue={auth?.user?.name}
                {...registerProfile('name', {
                  required: 'নাম দেয়া আবশ্যক',
                  minLength: {
                    value: 6,
                    message: 'নাম ন্যূনতম ২ শব্দ হতে হবে',
                  },
                })}
                className={`mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm ${
                  errors.name
                    ? 'focus:border-red-500 focus:ring-red-500'
                    : 'focus:border-blue-500 focus:ring-blue-500'
                } `}
              />

              <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
                {errors.name && errors.name.message}
              </span>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                আমার সম্পর্কে
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  placeholder="আপনার সম্পর্কে কিছু লিখুন ...."
                  {...registerProfile('description')}
                  rows={3}
                  className="block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm text-blue-gray-900 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <p className="mt-3 text-sm text-blue-gray-500">
                আপনার প্রোফাইলের জন্য সংক্ষিপ্ত বিবরণ.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="website"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                ওয়েবসাইট
              </label>
              <input
                type="text"
                name="website"
                id="website"
                placeholder="আপনার ওয়েবসাইট"
                {...registerProfile('website')}
                defaultValue={auth?.user?.website}
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="pt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-blue-gray-900">
                ব্যক্তিগত তথ্য
              </h2>
              <p className="mt-1 text-sm text-blue-gray-500">
                এই তথ্য ব্যক্তিগত এবং নিরাপদ হবে তাই এটি সম্পর্কে চিন্তা করবেন
                না.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                ইমেল ঠিকানা
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="আপনার ইমেইল"
                defaultValue={auth?.user?.name}
                disabled
                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                ফোন নম্বর
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="আপনার ফোন নম্বর"
                defaultValue={auth?.user?.phone}
                {...registerProfile('phone', {
                  required: 'ফোন নম্বর দেয়া আবশ্যক',
                  minLength: {
                    value: 11,
                    message: 'ফোন নম্বর সর্বনিম্ন ১১ সংখ্যা হতে হবে',
                  },
                  maxLength: {
                    value: 14,
                    message: 'ফোন নম্বর সর্বোচ্চ ১৪ সংখ্যা দেয়া যাবে',
                  },
                })}
                className={`mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm ${
                  errors.phone
                    ? 'focus:border-red-500 focus:ring-red-500'
                    : 'focus:border-blue-500 focus:ring-blue-500'
                } `}
              />

              <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
                {errors.phone && errors.phone.message}
              </span>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="address"
                className="block text-sm sm:text-base font-medium text-blue-gray-900"
              >
                বর্তমান ঠিকানা
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="আপনার বর্তমান ঠিকানা"
                defaultValue={auth?.user?.address}
                {...registerProfile('address', {
                  required: 'বর্তমান ঠিকানা দেয়া আবশ্যক',
                  minLength: {
                    value: 6,
                    message: 'বর্তমান ঠিকানা ন্যূনতম ২ শব্দ হতে হবে',
                  },
                })}
                className={`mt-2 block w-full border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm ${
                  errors.address
                    ? 'focus:border-red-500 focus:ring-red-500'
                    : 'focus:border-blue-500 focus:ring-blue-500'
                } `}
              />

              <span className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1">
                {errors.address && errors.address.message}
              </span>
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm sm:text-base font-semibold rounded-md text-white transition-colors duration-300 bg-brand-900 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              হালনাগাদ করুন{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-6 w-6 text-sm sm:text-base font-medium text-gray-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
