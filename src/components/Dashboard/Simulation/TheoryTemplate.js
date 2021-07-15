import React from "react";
import Image02 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory1.png";
import Image05 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory3.png";
import Image06 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory4.png";
import Image07 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory5.png";
import Image03 from "../../../assets/images/simulation/phy/12/01/Untitled-1.jpg";
import Image04 from "../../../assets/images/simulation/phy/12/01/Untitled-2.jpg";
import Image01 from "../../../assets/images/simulation/phy/12/01/Wheatstone-Bridge.jpeg";

const TheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> পরীক্ষণের নাম: </h2>
        <p> মিটার ব্রিজ ব্যবহার করে কোন তারের আপেক্ষিক রোধ নির্ণয়। </p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold"> পরীক্ষণের উদ্দেশ্য: </h2>
        <p>
          একটি মিটার ব্রিজ ব্যবহার করে প্রদত্ত তারের প্রতিরোধের সন্ধান করতে এবং
          তার উপাদানগুলির নির্দিষ্ট প্রতিরোধের নির্ধারণ করতে হবে।
        </p>
      </div>
      {/* Content 2 */}
      <div className="mb-4">
        <h2 className="font-semibold"> মূলতত্ত্ব: </h2>
        <p> হুইটস্টোন এর নীতি অনুসারে </p>
        <img src={Image01} alt="simulation-theory" className="py-1" />
        <p>
          মিটার ব্রিজটি হুইটস্টনের নীতির অধীনে পরিচালিত হয়। এখানে, চারটি
          প্রতিরোধক P, Q, R, এবং S নেটওয়ার্ক ABCD গঠনের জন্য সংযুক্ত রয়েছে।
          টার্মিনাল A এবং C একটি ব্যাটারির সাথে সংযুক্ত এবং C এবং D
          টার্মিনালগুলি যথাক্রমে K1 এবং K2 কীগুলির মাধ্যমে একটি গ্যালভানোমিটারের
          সাথে সংযুক্ত থাকে। ভারসাম্যহীন অবস্থায় গ্যালভানোমিটারের কোনও
          প্রতিচ্ছবি নেই। অতঃপর,
        </p>
        <img src={Image02} alt="simulation-theory" className="py-2 ml-2" />
      </div>
      {/* Content 3 */}
      <div className="mb-2 mt-2">
        <h2 className="font-semibold"> মিটার ব্রিজ মেশিন: </h2>
        <p>
          স্লাইড ওয়্যার ব্রিজ নামে পরিচিত মিটার ব্রিজটি কাঠের ব্লকের উপর স্থিত
          ইউনিফর্ম ক্রস-বিভাগীয় অঞ্চলের এক মিটার দীর্ঘ তারের সমন্বয়ে গঠিত।
          একটি স্কেল ব্লকের সাথে সংযুক্ত থাকে। গমের পাথরের ব্রিজটি তৈরি করার
          জন্য ঘন ধাতব স্ট্রিপগুলি ব্যবহার করে এর উপর দুটি ফাঁক তৈরি হয়।
          ফাঁকগুলির মধ্যে টার্মিনাল B গ্যালভানোমিটার এবং জকি সংযোগ করতে ব্যবহৃত
          হয়।
        </p>
        <div className="flex flex-wrap my-5">
          <img src={Image03} alt="simulation-theory" className="py-1 mr-5" />
          <img src={Image04} alt="simulation-theory" className="py-2" />
        </div>
        <p>
          ফাঁক S তে একটি প্রতিরোধের তারের প্রবর্তন করা হয় এবং প্রতিরোধের
          বাক্সটি ফাঁক R এ থাকে। যখন জকি তারের AC উপরের দিকে স্লাইড হয়, এটি
          ভারসাম্য বিন্দুতে নাল পয়েন্ট দেখায়।
        </p>
      </div>
      {/* Content 4 */}
      <div className="mb-4">
        <p className="my-2">দৈর্ঘ্য যদি AB হয়, তবে BC দৈর্ঘ্য (100-l) হয়।</p>
        <p>তারপরে, হুইটস্টনের নীতি অনুসারে:</p>
        <img src={Image05} alt="simulation-theory" className="py-2" />
        <p className="mt-2">এখন, অজানা প্রতিরোধ হিসাবে গণনা করা যেতে পারে,</p>
        <img src={Image06} alt="simulation-theory" className="py-2" />
        <p className="mt-2">
          তারের উপাদানের নির্দিষ্ট প্রতিরোধ বা প্রতিরোধের পরে সম্পর্কটি ব্যবহার
          করে গণনা করা যেতে পারে,
        </p>
        <img src={Image07} alt="simulation-theory" className="py-2" />
        <p className="mt-2">যেখানে L তারের দৈর্ঘ্য হবে এবং R ব্যাসার্ধ হবে। </p>
      </div>
      {/* Content 5 */}
      <div className="pb-5">
        <h2 className="font-semibold mb-1"> শেখার ফলাফল: </h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            শিক্ষার্থীরা হুইটস্টোন ব্রিজ এবং হুইটস্টোন এর নীতিটি বুঝতে পারবে।
          </li>
          <li>শিক্ষার্থীরা হুইটস্টোন এর নীতি যাচাই করতে পারবে।</li>
          <li>
            শিক্ষার্থীরা মিটার ব্রিজ পরীক্ষার মাধ্যমে হুইটসটনের ব্রিজের নীতিটি
            বুঝতে সক্ষম হবে।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheoryTemplate;
