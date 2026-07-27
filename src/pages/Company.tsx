import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { teamMembers } from '../data/teamData';

const img12 = '/Company/assets/Image (12).png';
const gallery1 = '/Company/assets/Image 1 (2).png';
const gallery2 = '/Company/assets/Image 2 (2).png';
const gallery3 = '/Company/assets/Image 3 (2).png';

const stats = [
  { value: '1560+', label: 'Project Delivered' },
  { value: '100+', label: 'Professional' },
  { value: '950+', label: 'Happy Client' },
  { value: '10 yrs', label: 'Experience' },
];

export default function Company() {
  return (
    <div>
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <div className="bg-white px-[120px] pb-0 pt-[60px]">
        <div className="relative">
          
          <div className="w-3 h-3 bg-[#f58a4b] mb-8" />
          
          <div className="absolute top-0 right-0 flex gap-1">
            <span className="w-3 h-3 bg-[#6b48ff]" />
            <span className="w-3 h-3 bg-[#f58a4b]" />
            <span className="w-3 h-3 bg-[#444cf7]" />
          </div>

          <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[#1d2130] mb-3 block">COMPANY</span>
          <h1 className="text-[52px] font-bold leading-[1.15] max-w-[700px] mb-5 text-[#1d2130]">
            Award-winning Company seen and used by millions around the world.
          </h1>
          <p className="text-[14px] leading-relaxed max-w-[500px] mb-12">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          
          <div className="relative flex gap-4">
            {[gallery1, gallery2, gallery3].map((img, i) => (
              <div key={i} className="flex-1">
                <img src={img} alt={`Office ${i + 1}`} className="w-full h-[340px] object-cover block" />
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <section className="px-[120px] py-[100px]">
        <div className="flex justify-between items-start gap-[60px] mb-16">
          <div className="max-w-[500px]">
            <div className="w-3 h-3 bg-[#444cf7] mb-4" />
            <span className="text-[14px] font-semibold mb-3 block">Our Story ⚡</span>
            <h2 className="text-[38px] font-bold leading-[1.25] mb-5">From Startups to Titans of Industry</h2>
            <p className="text-[13px] leading-relaxed">
              Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up
            </p>
          </div>

          <div className="bg-[#ffe6d5] p-[50px] grid grid-cols-2 gap-x-[60px] gap-y-[40px]">
            {stats.map((s) => (
              <div key={s.label}>
                <h3 className="text-[36px] font-bold m-0 mb-2">{s.value}</h3>
                <div className="flex gap-[3px] mb-2">
                  <div className="w-4 h-[3px] bg-[#444cf7]" />
                  <div className="w-8 h-[3px] bg-[#f58a4b]" />
                </div>
                <p className="text-[13px] text-[#1d2130] font-medium m-0">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-between items-center py-6 border-t border-[#e5e5e5] opacity-60 font-bold text-[18px]">
          {['logoipsum', 'logoipsum', 'logoipsum', 'logoipsum', 'logoipsum'].map((l, i) => (
            <span key={i}>{l}</span>
          ))}
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
            <div className="p-10 flex flex-col gap-6">
              {[
                { icon: <RocketLaunchIcon />, title: 'On Time Delivery', bg: 'bg-[#f58a4b]' },
                { icon: <SettingsIcon />, title: 'Best Quality', bg: 'bg-[#ffd3af]' },
                { icon: <HeadsetMicIcon />, title: 'Support Assist', bg: 'bg-[#444cf7]' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className={`w-9 h-9 rounded-sm ${item.bg} flex items-center justify-center text-white shrink-0`}>
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

      
      <section className="px-[120px] py-[100px]">
        <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">OUR VISION</div>
        <h2 className="text-[38px] font-bold leading-[1.25] max-w-[700px] mb-4">
          We want to get local identification in every corner of the world in this era of global citizenship.
        </h2>
        <p className="text-[13px] leading-relaxed max-w-[600px] mb-10">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
        </p>
        <img src={img12} alt="Vision" className="w-full object-cover" />
      </section>

      
      <section className="px-[120px] py-[100px] bg-[#f4f6fc]">
        <div className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3">MEET OUR TEAM</div>
        <h2 className="text-[38px] font-bold leading-[1.25] mb-3">Teamwork is the only way we work</h2>
        <p className="text-[13px] leading-relaxed max-w-[500px] mb-10">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
        </p>

        <div className="grid grid-cols-4 gap-4">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              to={`/team/${member.slug}`}
              className="relative overflow-hidden group cursor-pointer block no-underline"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[260px] object-cover block"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1d2130]/90 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h4 className="font-semibold text-[15px] m-0">{member.name}</h4>
                <p className="text-[12px] text-[#a7a9b7] m-0 mb-2">{member.role}</p>
                <div className="flex gap-3">
                  {[TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, j) => (
                    <span key={j} className="text-white hover:text-[#444cf7]">
                      <Icon sx={{ fontSize: 14 }} />
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}


