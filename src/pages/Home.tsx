import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const heroImg = '/Home/assets/Image (4).png';
const about1 = '/Home/assets/Image 1.png';
const about2 = '/Home/assets/Image 2.png';
const about3 = '/Home/assets/Image 3.png';
const avatar1 = '/Home/assets/Image 3 (1).png';
const avatar2 = '/Home/assets/Image 2 (1).png';
const avatar3 = '/Home/assets/Image 1 (1).png';
const blog1 = '/Home/assets/Image (6).png';
const blog2 = '/Home/assets/Image (7).png';

const stats = [
  { value: '1560+', label: 'Project Delivered', color: 'bg-[#444cf7]' },
  { value: '100+', label: 'Professional', color: 'bg-[#f58a4b]' },
  { value: '950+', label: 'Happy Client', color: 'bg-[#444cf7]' },
  { value: '10 yrs', label: 'Experience', color: 'bg-[#f58a4b]' },
];

const services = [
  { title: 'Technical support', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service' },
  { title: 'Testing Management', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service' },
  { title: 'Development', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service' },
];

const processes = [
  { num: '01', icon: '💡', title: 'Discover', hasBottomBar: true },
  { num: '02', icon: '📝', title: 'Designing' },
  { num: '03', icon: '💻', title: 'Development' },
  { num: '04', icon: '⚙️', title: 'Testing' },
  { num: '05', icon: '🚀', title: 'Deployment' },
  { num: '06', icon: '🛡️', title: 'Maintenance', hasTopBar: true },
];

export default function Home() {
  return (
    <div>
      
      <header className="bg-[#1d2130] text-white border-t-4 border-[#3a7bd5] px-[120px] pt-6 pb-[60px]">
        <div className="mb-[70px]">
          <Navbar dark />
        </div>

        <div className="flex justify-between items-center gap-10 mb-[70px]">
          
          <div className="max-w-[580px]">
            <div className="w-4 h-4 bg-white/15 mb-6" />
            <h1 className="text-[52px] font-bold leading-[1.15] mb-6">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-[#a7a9b7] text-[14px] leading-relaxed mb-9 max-w-[480px]">
              The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.
            </p>
            <div className="inline-flex items-center relative">
              <div className="w-3 h-3 bg-[#f58a4b] absolute -top-1.5 -left-1.5" />
              <Link
                to="/contact"
                className="bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium no-underline"
              >
                Request Quote &rarr;
              </Link>
            </div>
          </div>

          
          <div className="relative">
            <img src={heroImg} alt="Team working" className="w-[520px] h-[420px] object-cover block" />
            <div className="w-[18px] h-[80px] bg-[#f58a4b] absolute top-0 -right-[18px]" />
            <div className="w-[18px] h-[50px] bg-[#444cf7] absolute bottom-10 -right-[18px]" />
          </div>
        </div>

        
        <div className="flex items-center gap-10 pt-5">
          <div className="min-w-[180px]">
            <span className="block text-[12px] text-[#8d8e99]">Our Clients</span>
            <strong className="text-[15px]">We've Worked with</strong>
          </div>
          <div className="flex justify-between flex-1 items-center opacity-60 font-bold text-[18px]">
            {['logoipsum', 'logoipsum', 'logoipsum', 'logoipsum', 'logoipsum'].map((l, i) => (
              <span key={i}>{l}</span>
            ))}
          </div>
        </div>
      </header>

      
      <section className="px-[120px] py-[100px]">
        <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">ABOUT US</div>

        <div className="flex justify-between items-start gap-[60px] mb-[50px]">
          <h2 className="text-[38px] font-bold leading-[1.25] max-w-[580px] m-0">
            The company leads entire webdesign process from concept to delivery.
          </h2>
          <div className="max-w-[460px]">
            <h3 className="text-[18px] font-semibold mb-3">The Era Of Technology.</h3>
            <p className="text-[13px] leading-relaxed m-0">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>
        </div>

        
        <div className="flex gap-6 mb-[60px]">
          <img src={about1} alt="Meeting 1" className="w-[32%] h-[320px] object-cover" />
          <img src={about2} alt="Meeting 2" className="w-[32%] h-[320px] object-cover" />
          <div className="relative w-[32%]">
            <img src={about3} alt="Meeting 3" className="w-full h-[320px] object-cover block" />
            <div className="w-3 h-[100px] bg-[#f58a4b] absolute top-0 -right-3" />
            <div className="w-3 h-[80px] bg-[#444cf7] absolute bottom-0 -right-3" />
          </div>
        </div>

        
        <div className="flex justify-between items-center border-t border-[#e5e5e5] pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <h2 className="text-[36px] font-bold m-0">{s.value}</h2>
              <div className={`w-6 h-[3px] my-1.5 ${s.color}`} />
              <p className="text-[13px] m-0">{s.label}</p>
            </div>
          ))}
          <Link to="/company" className="text-[#444cf7] font-semibold text-[14px]">Read about us &rarr;</Link>
        </div>
      </section>

      
      <section className="px-[120px] py-[100px] bg-[#f4f6fc]">
        <div className="flex justify-between items-center gap-[60px]">
          <div className="max-w-[520px]">
            <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">OUR EXPERTISE</div>
            <h2 className="text-[36px] font-bold leading-[1.25] mb-5">
              We want to get local identification in every corner of the world in this era of global citizenship
            </h2>
            <p className="text-[13px] leading-relaxed m-0">
              Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
            </p>
          </div>

          <div className="relative bg-white w-[500px] shadow-sm">
            <div className="w-[14px] h-[14px] bg-[#444cf7] absolute -top-[14px] left-0" />
            <div className="p-10 flex flex-col gap-[30px]">
              {[
                { icon: '★', title: 'On Time Delivery' },
                { icon: '☆', title: 'Best Quality' },
                { icon: '♡', title: 'Support Assist' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#ffe0d2] flex items-center justify-center shrink-0 text-[#f58a4b] font-bold text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold m-0 mb-1.5">{item.title}</h4>
                    <p className="text-[12px] m-0 leading-relaxed">
                      Through True Rich Attended does no end it his mother since real had half every him.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex h-[6px] w-full">
              <div className="w-[35%] bg-[#f58a4b]" />
              <div className="w-[35%] bg-[#ffd3af]" />
              <div className="w-[30%] bg-[#444cf7]" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-[120px] py-[100px] bg-[#ffe6d5]">
        <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">OUR SERVICES</div>
        <div className="flex justify-between items-start mb-[50px]">
          <h2 className="text-[38px] font-bold leading-[1.25] max-w-[600px] m-0">
            We build software solutions that solve client's business challenges
          </h2>
          <div className="inline-flex items-center relative mt-2">
            <div className="w-3 h-3 bg-[#f58a4b] absolute -top-1.5 -left-1.5" />
            <Link to="/service" className="bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium no-underline">
              Start a Project &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-[30px]">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-10 flex-1">
              <div className="w-7 h-7 rounded-full bg-[#ffe0d2] mb-5" />
              <h3 className="text-[18px] font-semibold mb-3">{s.title}</h3>
              <p className="text-[12px] leading-relaxed mb-6">{s.desc}</p>
              <Link to="/service" className="text-[#444cf7] font-semibold text-[13px]">Read more &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-[120px] py-[100px]">
        <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">OUR PROCESS</div>
        <div className="flex justify-between items-start mb-5">
          <h2 className="text-[38px] font-bold leading-[1.25] max-w-[550px] m-0">
            The process we are working With Our client Worldwide
          </h2>
          <div className="flex gap-1 mt-2">
            <div className="w-[10px] h-[10px] bg-[#f58a4b]" />
            <div className="w-[10px] h-[10px] bg-[#444cf7]" />
          </div>
        </div>
        <p className="text-[13px] leading-relaxed max-w-[500px] mb-[50px]">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
        </p>

        <div className="grid grid-cols-3 gap-6">
          {processes.map((p) => (
            <div key={p.num} className="border border-[#e5e5e5] p-8 relative bg-white">
              {p.hasTopBar && (
                <div className="absolute -top-px -left-px -right-px h-1 flex">
                  <div className="w-[70%] bg-[#f58a4b]" />
                  <div className="w-[30%] bg-[#444cf7]" />
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
                  <div className="w-[70%] bg-[#f58a4b]" />
                  <div className="w-[30%] bg-[#444cf7]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-[120px] py-[100px] bg-[#f9fafe]">
        <div className="flex justify-between gap-[60px] items-start">
          <div className="max-w-[420px]">
            <div className="w-3 h-3 bg-[#444cf7] mb-4" />
            <h2 className="text-[38px] font-bold leading-[1.25] mb-4">Our customers love what we do</h2>
            <p className="font-semibold text-[14px] mb-2.5">Transform your idea into reality with finsweet</p>
            <p className="text-[12px] leading-relaxed mb-6">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[avatar1, avatar2, avatar3].map((av, i) => (
                  <img
                    key={i}
                    src={av}
                    alt="user"
                    className={`w-8 h-8 rounded-full object-cover border-2 border-white ${i > 0 ? '-ml-2.5' : ''}`}
                  />
                ))}
              </div>
              <strong className="text-[12px]">30+ Customer Reviews</strong>
            </div>
          </div>

          <div className="flex-1 max-w-[580px]">
            <div className="bg-white p-12 relative shadow-sm">
              <div className="absolute top-0 bottom-0 left-0 w-1.5 flex flex-col">
                <div className="h-[70%] bg-[#f58a4b]" />
                <div className="h-[30%] bg-[#444cf7]" />
              </div>
              <div className="absolute top-5 right-7 text-[32px] font-serif font-bold">"</div>
              <h3 className="text-[18px] font-semibold leading-relaxed mb-8">
                Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
              </h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={avatar1} alt="Johnny" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <strong className="block text-[14px]">Johnny Andro</strong>
                    <span className="text-[11px]">Director, Company</span>
                  </div>
                </div>
                <span className="font-bold text-[#a7a9b7] text-[16px]">logoipsum</span>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-5">
              {[true, false, false].map((active, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${active ? 'bg-[#1d2130]' : 'bg-[#cccccc]'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-[120px] py-[100px] bg-[#f4f6fc]">
        <div className="w-3 h-3 bg-[#444cf7] mb-4" />
        <h2 className="text-[36px] font-bold mb-10">Read our latest blogs &amp; news</h2>
        <div className="flex gap-[30px]">
          {[
            { img: blog1, title: "Today's best design trends for digital products" },
            { img: blog2, title: 'A practical guide to building a brand strategy' },
          ].map((b) => (
            <div key={b.title} className="bg-white flex flex-1">
              <img src={b.img} alt={b.title} className="w-[220px] h-[180px] object-cover" />
              <div className="p-6 flex flex-col justify-center">
                <span className="text-[11px] text-[#8d8e99] mb-2">Jan 19, 2021</span>
                <h4 className="text-[16px] font-semibold mb-4 leading-snug">{b.title}</h4>
                <Link to="/blog" className="text-[#444cf7] font-semibold text-[13px]">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}


