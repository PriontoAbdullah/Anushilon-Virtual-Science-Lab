import React from 'react';
import Image9 from '../../../assets/images/simulation/che/12/01/che9.jpg';

const CheProcedureTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      {/* Main Content */}
      <div className="mb-1">
        <h2 className="font-semibold"> প্রয়োজনীয় যন্ত্রপাতি:: </h2>
        <img src={Image9} alt="simulation-theory" className="py-1" />
      </div>

      {/* Procedure 1 */}
      <div className="mb-2 mt-6">
        <h2 className="font-semibold mb-2"> ল্যাব এর কার্যধারা </h2>
        <p className="mb-2">
          {' '}
          অক্সালিক অ্যাসিডের স্ট্যান্ডার্ড দ্রবণ তৈরি [250 মিলি M/10 (0.1 M)
          দ্রবণ]{' '}
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>
            একটি ইলেকট্রনিক ব্যালেন্স ব্যবহার করে, প্রথমে একটি ওজনের বোতলে ঠিক
            3.15 গ্রাম অক্সালিক অ্যাসিড স্ফটিক ওজন করি।
          </li>
          <li>এগুলিকে একটি 250 মিলি বিকারে স্থানান্তর করি।</li>
          <li>
            তারপর ওজনের বোতলটি পাতিত জল দিয়ে 2 বা 3 বার ধুয়ে নিন এবং সমস্ত
            ধোয়া বীকারে স্থানান্তর করি।
          </li>
          <li>
            একটি পরিষ্কার কাচের রড দিয়ে মৃদু নাড়তে বীকারে অক্সালিক অ্যাসিড
            স্ফটিকগুলি দ্রবীভূত করি।
          </li>
          <li>
            বীকারে থাকা অক্সালিক অ্যাসিড স্ফটিকগুলি সম্পূর্ণরূপে দ্রবীভূত হয়ে
            গেলে, একটি ফানেল এবং একটি কাচের রডের মাধ্যমে বীকার থেকে সম্পূর্ণ
            দ্রবণটিকে একটি 250ml স্ট্যান্ডার্ড ফ্লাস্কে স্থানান্তর করি।
          </li>
          <li>
            পাতিত জল দিয়ে বীকারটি 2 থেকে 3 বার ধুয়ে নিন এবং সমস্ত ওয়াশিং
            স্ট্যান্ডার্ড ফ্লাস্কে স্থানান্তর করি।
          </li>
          <li>
            অবশেষে ফানেলের পাশের দ্রবণের ফোঁটা স্ট্যান্ডার্ড ফ্লাস্কে স্থানান্তর
            করতে পাতিত জল দিয়ে ফানেলটিকে ভালভাবে ধুয়ে ফেলি।
          </li>
          <li>
            স্ট্যান্ডার্ড ফ্লাস্কে পর্যাপ্ত পাতিত জল যোগ করি যাতে স্তরটি এটির
            ক্রমাঙ্কন চিহ্নের ঠিক নীচে থাকে।
          </li>
          <li>
            একটি পাইপেট দিয়ে শেষ কয়েক ফোঁটা পাতিত জল যোগ করি যতক্ষণ না
            মেনিস্কাসের নীচের স্তরটি স্ট্যান্ডার্ড ফ্লাস্কের চিহ্নটিকে স্পর্শ
            করে।
          </li>
          <li>
            পরিমাপের ফ্লাস্ক বন্ধ করি এবং দ্রবণটিকে সর্বত্র অভিন্ন করতে আলতো করে
            ঝাকাই।
          </li>
        </ul>
      </div>
      {/* Procedure 2 */}
      <div className="mb-12 mt-8">
        <h2 className="font-semibold mb-1">প্রদত্ত KMnO4 এর শক্তি নির্ণয়</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>একটি বুরেট নিন এবং পাতিত জল দিয়ে ধুয়ে ফেলি।</li>
          <li>
            প্রদত্ত KMnO4 দ্রবণ দিয়ে বুরেটটি ধুয়ে ফেলি এবং পূরণ করি এবং
            প্রাথমিক বুরেট রিডিং শূন্য হিসাবে সেট করি।
          </li>
          <li>বুরেট স্ট্যান্ডে এটি উল্লম্বভাবে ক্ল্যাম্প করি।</li>
          <li>
            পাইপেটটি জল দিয়ে এবং তারপরে দেওয়া অক্সালিক অ্যাসিড দ্রবণ দিয়ে
            ধুয়ে ফেলি।
          </li>
          <li>
            তারপরে প্রদত্ত অক্সালিক অ্যাসিডের 20 মিলি দ্রবণটি একটি শঙ্কুযুক্ত
            ফ্লাস্কে পিপেট করি এবং এতে পাতলা H2SO4 পূর্ণ একটি টেস্ট টিউব (~20ml)
            যোগ করি।
          </li>
          <li>
            শঙ্কু ফ্লাস্কের বিষয়বস্তু 60-70 ডিগ্রি সেলসিয়াসে গরম করি। এটিকে
            বুরেটে নেওয়া KMnO4 দ্রবণের বিপরীতে টাইট্রেট করি যতক্ষণ না শঙ্কু
            ফ্লাস্কে দ্রবণের রঙ বর্ণহীন থেকে হালকা গোলাপীতে পরিবর্তিত হয়।
          </li>
          <li>শেষ বুরেট রিডিং নোট করি।</li>
          <li>
            সঙ্গতিপূর্ণ মান প্রাপ্ত না হওয়া পর্যন্ত টাইট্রেশন পুনরাবৃত্তি করি।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheProcedureTemplate;
