import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const feature1 = '/Service/assets/Feature 1 Image.svg';
const img8 = '/Service/assets/Image (8).png';
const img9 = '/Service/assets/Image (9).png';
const img10 = '/Service/assets/Image (10).png';
const img11 = '/Service/assets/Image (11).png';

const processes = [
  { num: '01', icon: '💡', title: 'Discover', hasBottomBar: true },
  { num: '02', icon: '📝', title: 'Designing' },
  { num: '03', icon: '</>', title: 'Development' },
  { num: '04', icon: '⭐', title: 'Testing' },
  { num: '05', icon: '🚀', title: 'Deployment' },
  { num: '06', icon: '🛡️', title: 'Maintenance', hasTopBar: true },
];

const serviceDetails = [
  { id: 'technical-support', subtitle: 'Technical Support', title: 'Best in class tech support for your company. We become your tech backbone', img: feature1, reverse: false, bg: 'bg-white' },
  { id: 'development', subtitle: 'Development', title: 'Bring your ideas to reality with certified team of developers, working with latest technologies', img: img8, reverse: true, bg: 'bg-[#f4f6fc]' },
  { id: 'aws-azure', subtitle: 'AWS/Azure', title: 'We help you deploy, manage and secure your application on leading web services', img: img9, reverse: false, bg: 'bg-white' },
  { id: 'consulting', subtitle: 'Consulting', title: 'Get advice from world class professionals', img: img10, reverse: true, bg: 'bg-[#f9fafe]' },
  { id: 'information-technology', subtitle: 'Information Technology', title: 'We want to get local identification in every corner of the world in this era of global citizenship', img: img11, reverse: false, bg: 'bg-white' },
];

export default function Service() {
  return (
    <div>
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <div className="bg-[#ffe6d5] px-[120px] pb-[100px] pt-[60px]">
        <div className="flex justify-between items-start gap-20">
          <div className="max-w-[580px]">
            <span className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3 block text-[#1d2130]">OUR SERVICES</span>
            <h1 className="text-[48px] font-bold leading-[1.2] mb-6 text-[#1d2130]">
              We Build Software Solution that Solve Clients Business Challenges
            </h1>
            <p className="text-[14px] leading-relaxed mb-9">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.
            </p>
            <div className="inline-flex items-center relative">
              <div className="w-3 h-3 bg-[#f58a4b] absolute -top-1.5 -left-1.5" />
              <Link to="/contact" className="bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium no-underline">
                Request A Quote &rarr;
              </Link>
            </div>
          </div>

          
          <ul className="list-none p-0 m-0 flex flex-col gap-4 mt-8">
            {[
              { id: 'technical-support', label: 'Technical support' },
              { id: 'development', label: 'Development', active: true },
              { id: 'aws-azure', label: 'AWS/Azure' },
              { id: 'consulting', label: 'Consulting' },
              { id: 'information-technology', label: 'Information Technology' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-[22px] font-bold no-underline ${item.active ? 'text-[#1d2130]' : 'text-[#1d2130] hover:text-[#444cf7]'}`}
                >
                  {item.label} {item.active && '→'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <section className="px-[120px] py-[100px]">
        <div className="flex justify-between items-start mb-5">
          <div className="max-w-[580px]">
            <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">OUR PROCESS</div>
            <h2 className="text-[38px] font-bold leading-[1.25] mb-4">
              The process we are working With Our client Worldwide
            </h2>
            <p className="text-[13px] leading-relaxed m-0">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
            </p>
          </div>
          <div className="flex gap-1 mt-8">
            <div className="w-[10px] h-[10px] bg-[#f58a4b]" />
            <div className="w-[10px] h-[10px] bg-[#444cf7]" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">
          {processes.map((p) => (
            <div key={p.num} className="border border-[#e5e5e5] p-8 relative bg-white">
              {p.hasTopBar && (
                <div className="absolute -top-px -left-px -right-px h-1 flex">
                  <div className="w-[35%] bg-[#f58a4b]" /><div className="w-[35%] bg-[#ffd3af]" /><div className="w-[30%] bg-[#444cf7]" />
                </div>
              )}
              <span className="absolute top-6 right-6 text-[18px] text-[#d0d0d0] font-bold">{p.num}</span>
              <div className="text-[20px] mb-4">{p.icon}</div>
              <h4 className="text-[16px] font-semibold mb-2.5">{p.title}</h4>
              <p className="text-[12px] leading-relaxed m-0">
                We aim to attain the greatest satisfaction for our clients and be one of the prominent.
              </p>
              {p.hasBottomBar && (
                <div className="absolute -bottom-px -left-px -right-px h-1 flex">
                  <div className="w-[35%] bg-[#f58a4b]" /><div className="w-[35%] bg-[#ffd3af]" /><div className="w-[30%] bg-[#444cf7]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      
      {serviceDetails.map((s) => (
        <section key={s.id} id={s.id} className={`px-[120px] py-[100px] ${s.bg}`}>
          <div className={`flex items-center gap-[80px] ${s.reverse ? 'flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[#444cf7] mb-3 block">{s.subtitle}</span>
              <h2 className="text-[36px] font-bold leading-[1.25] mb-5">{s.title}</h2>
              <p className="text-[13px] leading-relaxed">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
              </p>
            </div>
            <div className="flex-1">
              <img src={s.img} alt={s.subtitle} className="w-full object-cover" />
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}


