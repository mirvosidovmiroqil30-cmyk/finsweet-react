import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { teamMembers } from '../data/teamData';

const blog1 = '/Team/assets/Image (2).png';
const blog2 = '/Team/assets/Image (3).png';

export default function TeamProfile() {
  const { name } = useParams<{ name: string }>();

  const member = teamMembers.find((m) => m.slug === name);

  if (!member) {
    return <Navigate to="/company" replace />;
  }

  return (
    <div>
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <section className="px-[120px] py-[100px] bg-[#f4f6fc]">
        <div className="flex flex-col items-center text-center max-w-[500px] mx-auto">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 ring-4 ring-white shadow-md">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-[36px] font-bold mb-2">{member.name}</h1>
          <span className="text-[14px] font-medium mb-4">{member.role}</span>
          <p className="text-[14px] leading-relaxed mb-6">
            Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
          </p>
          <div className="flex gap-5">
            {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d2130] hover:text-[#444cf7] shadow-sm"
              >
                <Icon sx={{ fontSize: 16 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      
      <section className="px-[120px] py-[100px]">
        <div className="mb-10">
          <div className="w-3 h-3 bg-[#6b48ff] mb-4" />
          <h2 className="text-[36px] font-bold">Blog posts from {member.name.split(' ')[0]}</h2>
        </div>

        <div className="flex gap-8">
          {[
            { img: blog1, title: "Today's best design trends for digital products" },
            { img: blog2, title: 'A practical guide to building a brand strategy' },
          ].map((post) => (
            <div key={post.title} className="flex-1 bg-white">
              <img src={post.img} alt={post.title} className="w-full h-[220px] object-cover block" />
              <div className="p-6">
                <span className="text-[11px] text-[#8d8e99] mb-2 block">Jan 19, 2021</span>
                <h3 className="text-[17px] font-semibold leading-snug mb-4">{post.title}</h3>
                <Link to="/blog/1" className="text-[#444cf7] font-semibold text-[13px]">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer showNewsletter={false} />
    </div>
  );
}


