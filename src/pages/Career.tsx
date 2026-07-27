import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const bannerImg = '/Career/assets/Image (13).png';

const jobs = [
  { title: 'Fullstack Developer', location: 'Bengaluru', type: 'Full Time', salary: '$10K - $18K · No equity' },
  { title: 'Testing Engineer', location: 'Remote', type: 'Full Time', salary: '$08K - $10K · No equity' },
  { title: 'Hr Manager', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K · 4 to 5 hrs/day' },
  { title: 'Product Designer', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K · 4 to 5 hrs/day' },
  { title: 'Wordpress Developer', location: 'Mumbai', type: 'Full Time', salary: '$08K - $10K · 2 to 3 hrs/day' },
  { title: 'Jr. QA Tester', location: 'California, USA', type: 'Full Time', salary: '$14K - $18K · No equity' },
  { title: 'Sr. UX Designer', location: 'California, USA', type: 'Full Time', salary: '$14K - $18K · No equity' },
  { title: 'Social Media Manager', location: 'Kolkata, India', type: 'Fulltime', salary: '$5K - $6K · Medium' },
  { title: 'Golang Developer', location: 'Mumbai', type: 'Fulltime', salary: '$08K - $10K · 4 to 5 hrs/day' },
];

const benefits = [
  { icon: '🩺', title: 'Health Insurance' },
  { icon: '⏱️', title: 'Flexible working time' },
  { icon: '🏠', title: 'Work from home' },
  { icon: '🎉', title: 'Annual events' },
  { icon: '🎓', title: 'Learning stipend' },
  { icon: '🏋️', title: 'Gym membership' },
];

export default function Career() {
  return (
    <div>
      
      <header className="bg-[#1d2130] text-white border-t-4 border-[#3a7bd5] px-[120px] pt-6 pb-6">
        <Navbar dark />
      </header>

      <main className="max-w-[1280px] mx-auto px-[120px]">
        
        <section className="pt-[80px] pb-[60px]">
          <div className="flex gap-1 mb-6">
            <span className="w-3 h-3 bg-[#6b48ff]" />
            <span className="w-3 h-3 bg-[#ffd3af]" />
            <span className="w-3 h-3 bg-[#f58a4b]" />
          </div>
          <span className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-4 block">CAREER AT FINSWEET</span>
          <h1 className="text-[52px] font-bold leading-[1.15] max-w-[700px] mb-5">
            We hired people who are Always Passionate about what they do
          </h1>
          <p className="text-[14px] leading-relaxed max-w-[500px] mb-10">
            Through Process-Driven Development, We Guarantee Highest Quality Standards And Scalability.
          </p>

          <div className="mb-8">
            <img src={bannerImg} alt="Careers" className="w-full object-cover" />
          </div>

          <a
            href="#open-positions"
            className="text-[16px] font-semibold text-[#444cf7] block text-center"
          >
            See Our open positions <br /> 👇
          </a>
        </section>

        
        <section id="open-positions" className="py-[60px] bg-[#f4f6fc] px-10 mb-[80px]">
          <div className="grid grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.title} className="bg-white p-8">
                <h3 className="text-[18px] font-semibold mb-2">{job.title}</h3>
                <p className="text-[13px] mb-1">{job.location} · {job.type}</p>
                <p className="text-[13px] mb-6">{job.salary}</p>
                <Link to="/career/job" className="text-[#444cf7] font-semibold text-[13px]">Apply Now &rarr;</Link>
              </div>
            ))}
          </div>
        </section>

        
        <section className="pb-[80px]">
          <span className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3 block">OUR WORK &amp; CULTURE</span>
          <h2 className="text-[38px] font-bold leading-[1.25] mb-3">Come and join a team of highly skilled professionals.</h2>
          <p className="text-[14px] leading-relaxed max-w-[500px] mb-10">
            Through Process-Driven Development, We Guarantee Highest Quality Standards And Scalability.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-[#f4f6fc] p-8">
                <div className="text-[32px] mb-4">{b.icon}</div>
                <h3 className="text-[17px] font-semibold mb-2">{b.title}</h3>
                <p className="text-[13px] leading-relaxed m-0">
                  Through Process-Driven Development, We Guarantee Highest Quality Standards.
                </p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="pb-[80px]">
          <div className="bg-[#666dff] text-white px-[60px] py-[60px] flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 flex flex-wrap w-[30px] h-[30px]">
              <span className="w-[15px] h-[15px] bg-[#f58a4b]" />
              <span className="w-[15px] h-[15px] bg-[#444cf7]" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#ffd3af]" />
            <div className="max-w-[400px]">
              <span className="text-[11px] tracking-widest opacity-80 uppercase">Newsletter</span>
              <h2 className="text-[28px] font-bold leading-tight mt-2">
                Subscribe our News Letter to get Latest Updates.
              </h2>
            </div>
            <input
              type="email"
              placeholder="Paavan@Gmail.com"
              className="px-6 py-4 w-[280px] border-none outline-none text-[14px] text-[#1d2130] mr-3"
            />
          </div>
        </section>
      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}


