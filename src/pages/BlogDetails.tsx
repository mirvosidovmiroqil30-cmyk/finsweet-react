import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const bannerImg = '/BlogInner/assets/Image (29).png';
const AvatarImg = '/BlogInner/assets/Image (14).png'

export default function BlogDetails() {
  return (
    <div>
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <div className="bg-white px-[120px] py-[60px]">
        <div className="max-w-[800px] mx-auto relative">
          
          <div className="w-4 h-4 bg-[#ffd3af] mb-8" />
          
          <div className="absolute top-0 right-0 flex gap-[2px]">
            <span className="w-3 h-3 bg-[#6b48ff]" />
            <span className="w-3 h-3 bg-[#f58a4b]" />
            <span className="w-3 h-3 bg-[#444cf7]" />
          </div>

          <h1 className="text-[40px] font-bold leading-[1.25] text-[#1d2130] mb-5">
            Breaking the code How did we build our Figma plugin
          </h1>
          <p className="text-[14px] leading-relaxed mb-7 max-w-[600px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the greatest satisfaction for our clients
          </p>
          <div className="flex items-center gap-3">
            <img
              src={AvatarImg}
              alt="Andrew Jonson"
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-[13px] font-semibold text-[#1d2130]">Andrew Jonson</span>
            <span className="text-[#8d8e99]">|</span>
            <span className="text-[12px] text-[#6d6e76]">Posted on 27th January 2021</span>
          </div>
        </div>
      </div>

      
      <section className="px-[120px] py-[60px]">
        <div className="relative">
          <img src={bannerImg} alt="Team office" className="w-full object-cover block" />
          <div className="absolute bottom-0 left-0 right-0 h-[6px] flex">
            <div className="w-[35%] bg-[#f58a4b]" />
            <div className="w-[35%] bg-[#ffd3af]" />
            <div className="w-[30%] bg-[#444cf7]" />
          </div>
        </div>
      </section>

      
      <article className="px-[240px] pb-[100px]">
        <h2 className="text-[32px] font-bold leading-[1.3] mb-6">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p className="text-[14px] leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scripta UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for UX copies, we wanted to build a plugin for the design community.
        </p>
        <p className="text-[14px] leading-relaxed mb-4">
          Writing content can be tricky. The plugin is called Ghost UXWriter and has a set of copies cataloged and categorized with voice and tone variation ranging from plain to playful.
        </p>
        <p className="text-[14px] leading-relaxed mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <p className="text-[14px] leading-relaxed mb-10">
          We aim to attain the greatest satisfaction for our clients with our innovative digital product solutions.
        </p>

        <h2 className="text-[32px] font-bold leading-[1.3] mb-6">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-3">
          {[
            'Step 1: Download the plugin from Figma community, search Ghost UXWriter',
            'Step 2: Open the plugin on your artboard',
            'Step 3: Search for your copy or look through the different categories',
            'Step 4: Select the type of error you are looking for. You will get three different options',
            'Step 5: Tap on the cards to insert text in your frames',
          ].map((step) => (
            <li key={step} className="flex items-start gap-3 text-[14px] text-[#1d2130]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#444cf7] mt-2 shrink-0" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <p className="text-[14px] mb-10">And you are all geared up to make your UX copies more fun and exciting 😎</p>

        <h2 className="text-[32px] font-bold leading-[1.3] mb-6">
          Transform Your Idea Into Reality with Ether a Leading Digital Agency
        </h2>
        <p className="text-[14px] leading-relaxed">
          Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for UX copies, we wanted to build a Figma plugin for the larger design community.
        </p>
      </article>

      <Footer />
    </div>
  );
}


