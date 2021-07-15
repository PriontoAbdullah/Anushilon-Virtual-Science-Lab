import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import bgBannerFeature from "../../../assets/images/background/features-2.png";
import FeaturesImage1 from "../../../assets/images/features/features-img-1.png";
import FeaturesImage2 from "../../../assets/images/features/features-img-2.png";
import FeaturesImage3 from "../../../assets/images/features/features-img-3.png";
import FeaturesImage4 from "../../../assets/images/features/features-img-4.png";
import PathImage from "../../../assets/images/features/path.png";
import Card from "../MicroComponent/Card";
import SectionTitle from "../MicroComponent/SectionTitle";

function Features() {
  return (
    <section
      className="min-h-auto md:min-h-screen bg-cover bg-no-repeat bg-center"
      id="features"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bgBannerFeature})`,
      }}
    >
      <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Main Content */}
        <Fade top>
          <SectionTitle
            title="আমাদের বৈশিষ্ট্য সমূহ"
            description=" ওয়েব ব্রাউজার ব্যবহার করে শিক্ষার্থীরা প্রত্যন্ত অবস্থান থেকে পরীক্ষা-নিরীক্ষা করতে পারে এবং এই ইন্টারেক্টিভ প্রযুক্তিগুলি শিক্ষার্থীদের অভিনব ও আনন্দায়ক উপায়ে বিজ্ঞান শেখার সম্ভাবনা তৈরী করে।"
            space="mb-12"
          />
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 relative font-body">
          <div
            style={{ zIndex: "-1" }}
            className="hidden xl:block 2xl:hidden path absolute w-full"
          >
            <Zoom bottom>
              <img className="mx-auto" src={PathImage} alt="img" />
            </Zoom>
          </div>
          {/* Feature 1 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8">
                <img className="mx-auto" src={FeaturesImage1} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  সম্পূর্ণ ফ্রীতে ভিডিও ও এনিমেশন দেখে শেখা
                </h4>
                <p className="mt-4 text-gray-800">
                  অনুশীলনে রয়েছে ৫০০টিরও বেশি ভিডিও ও অনিমেশিন টিউটোরিয়াল। যার
                  মধ্যে রয়েছে একাডেমিক (প্রথম শ্রেণি থেকে দ্বাদশ শ্রেণি) বিজ্ঞান
                  শিক্ষা, সফটওয়্যার ও প্রফেশনাল স্কিলস্।
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 2 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8 xl:mt-24">
                <img className="mx-auto" src={FeaturesImage2} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  সিমুলেশনের মাধ্যমে নিজেকে যাচাই করার সুযোগ
                </h4>
                <p className="mt-4 text-gray-800">
                  এটি ব্যবহারকারীদের স্বতন্ত্রভাবে পরীক্ষা-নিরীক্ষা করার এবং
                  প্রয়োজনে একাধিকবার পুনরাবৃত্তি করার এবং উপাত্ত্ব সংরক্ষণের ও
                  লেখচিত্র দেখতে পারে।
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 3 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8">
                <img className="mx-auto" src={FeaturesImage3} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  শিক্ষকদের দ্বারা কার্যকারিতা মূল্যায়নের সুযোগ
                </h4>
                <p className="mt-4 text-gray-800">
                  এই সিস্টেমটি বিজ্ঞান শিক্ষকদের পরীক্ষাগার কার্যভার তৈরী,
                  নির্ধারণ, সংরক্ষণ, উপস্থাপন এবং তাদের শিক্ষার্থীর সমস্ত কার্য
                  সম্পাদন দেখতে পারে ও মূল্যায়নের অনুমতি দেয়।
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 4 */}
          <Slide bottom>
            <Card>
              <div className="text-center mb-24 lg:mb-16 px-5 py-8 xl:mt-24">
                <img className="mx-auto" src={FeaturesImage4} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  ই-লার্নিং বিজ্ঞান কমিউনিটি প্লাটফর্মে অভিজ্ঞতা নেয়া
                </h4>
                <p className="mt-4 text-gray-800">
                  যেখানে শিক্ষার্থীরা তাদের প্রশ্নগুলি বা সন্দেহ জিজ্ঞাসা করতে
                  পারে বা তাদের অভিজ্ঞতা ভাগ করে নিতে পারে, শিক্ষক বা বিশেষজ্ঞরা
                  তাদের প্রশ্নের উত্তর দিতে ও সাহায্য করতে পারেন।
                </p>
              </div>
            </Card>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Features;
