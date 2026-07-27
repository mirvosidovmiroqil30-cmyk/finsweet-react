import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = ['Details', 'Requirements', 'Responsibilities'];

const tabContent: Record<string, string[]> = {
  Details: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.',
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.',
    'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
  ],
  Requirements: [
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.',
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia.',
    'Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut.',
    'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.',
  ],
  Responsibilities: [
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.',
    'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni.',
    'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non.',
    'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
    'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.',
  ],
};

export default function JobDetails() {
  const [activeTab, setActiveTab] = useState<string>('Details');

  return (
    <div className="bg-white">
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <section className="px-[120px] py-[80px]">
        <div className="flex justify-between items-start gap-[80px]">

          
          <div className="max-w-[460px]">
            <span className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-4 block">
              CAREER AT ETHER
            </span>
            <h1 className="text-[44px] font-bold leading-[1.2] mb-5 text-[#1d2130]">
              Full Stack Developer
            </h1>
            <p className="text-[14px] leading-relaxed mb-10">
              Through True Rich Attended does no end it his mother since real had half every him case in packages.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-3 bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium no-underline relative"
            >
              <span className="w-3 h-3 bg-[#f58a4b] absolute -top-1.5 -left-1.5" />
              Apply Now &rarr;
            </a>
          </div>

          
          <div className="bg-[#ffe6d5] p-10 w-[400px] relative">
            <div className="absolute top-0 right-0 flex gap-[3px]">
              <span className="w-4 h-4 bg-[#f58a4b]" />
              <span className="w-4 h-4 bg-[#444cf7]" />
            </div>
            <h3 className="text-[18px] font-bold mb-6 text-[#1d2130]">Job Description</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li className="text-[13px] text-[#1d2130]">
                Remote, India . 4 to 5 Years Of Experience
              </li>
              <li className="text-[13px] text-[#1d2130]">
                Department: Product Engineering
              </li>
              <li className="text-[13px] text-[#1d2130]">
                Full Time 5 Position Available.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="px-[120px] pb-[100px]">
        <div className="border-2 border-[#4fc3f7]">

          
          <div className="flex justify-center bg-[#edf6f6] border-b border-[#c8e6e6]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-14 py-5 text-[16px] font-bold border-none bg-transparent cursor-pointer transition-all relative
                  ${activeTab === tab ? 'text-[#444cf7]' : 'text-[#1d2130] hover:text-[#444cf7]'}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#444cf7]" />
                )}
              </button>
            ))}
          </div>

          
          <div className="bg-[#edf6f6] px-[80px] py-[50px]">
            <ul className="list-disc pl-6 m-0 flex flex-col gap-5 text-left">
              {tabContent[activeTab].map((item, i) => (
                <li key={i} className="text-[14px] text-[#1d2130] leading-relaxed text-left">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      
      <section id="apply" className="px-[120px] pb-[100px]">
        <div className="max-w-[800px]">
          <h2 className="text-[38px] font-bold mb-10">Apply Now</h2>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-[#e5e5e5] px-5 py-4 text-[14px] outline-none focus:border-[#444cf7]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 border border-[#e5e5e5] px-5 py-4 text-[14px] outline-none focus:border-[#444cf7]"
              />
            </div>
            <div className="flex gap-5">
              <input
                type="email"
                placeholder="Email Id"
                className="flex-1 border border-[#e5e5e5] px-5 py-4 text-[14px] outline-none focus:border-[#444cf7]"
              />
              <input
                type="tel"
                placeholder="Mobile No"
                className="flex-1 border border-[#e5e5e5] px-5 py-4 text-[14px] outline-none focus:border-[#444cf7]"
              />
            </div>
            <textarea
              rows={6}
              placeholder="Why do you think you are a good fit for Ether?"
              className="border border-[#e5e5e5] px-5 py-4 text-[14px] outline-none resize-none focus:border-[#444cf7]"
            />
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 accent-[#444cf7]" />
              <span className="text-[12px] leading-relaxed">
                I agree to accept the privacy policy. We will add your contact details provided in this form to our system for contacting you regarding your request.
              </span>
            </label>
            <div className="relative self-start">
              <span className="w-3 h-3 bg-[#f58a4b] absolute -top-1.5 -left-1.5" />
              <button
                type="submit"
                className="bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium border-none cursor-pointer"
              >
                Submit Application &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}


