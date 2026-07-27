import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const authorImg = '/Blog/assets/Image (14).png';
const authorImg2 = '/Blog/assets/Image (16).png';
const authorImg3 = '/Blog/assets/Image (18).png';
const featured = '/Blog/assets/Image (17).png';
const recent1 = '/Blog/assets/Image (19).png';
const recent2 = '/Blog/assets/Image (20).png';
const recent3 = '/Blog/assets/Image (21).png';
const recent4 = '/Blog/assets/Image (22).png';
const post1 = '/Blog/assets/Image (23).png';
const post2 = '/Blog/assets/Image (24).png';
const post3 = '/Blog/assets/Image (25).png';
const post4 = '/Blog/assets/Image (26).png';
const post5 = '/Blog/assets/Image (27).png';
const post6 = '/Blog/assets/Image (28).png';

const recentPosts = [
  { img: recent1, title: "Today's best design trends for digital products", author: 'Andrew Jonson', date: 'Jan 19, 2021', avatar: authorImg },
  { img: recent2, title: "Today's best design trends for digital products", author: 'Andrew Jonson', date: 'Jan 19, 2021', avatar: authorImg },
  { img: recent3, title: "Today's best design trends for digital products", author: 'Andrew Jonson', date: 'Jan 19, 2021', avatar: authorImg },
  { img: recent4, title: "Today's best design trends for digital products", author: 'Andrew Jonson', date: 'Jan 19, 2021', avatar: authorImg },
];

const allPosts = [
  { img: post1 }, { img: post2 }, { img: post3 },
  { img: post4 }, { img: post5 }, { img: post6 },
];

const sidebarPosts = [
  { author: 'Andrew Jonson', avatar: authorImg, date: 'Jan 19, 2021' },
  { author: 'Mathew Jasele', avatar: authorImg2, date: 'Jan 19, 2021' },
  { author: 'Hussen Abakas', avatar: authorImg3, date: 'Jan 19, 2021' },
];

export default function Blog() {
  return (
    <div>
      
      <div className="bg-[#1d2130] px-[120px] py-6 border-t-4 border-[#3a7bd5]">
        <Navbar dark />
      </div>

      
      <div className="bg-white px-[120px] pb-[80px] pt-[60px]">
        <div className="flex gap-[60px]">
          
          <div className="flex-1">
            <div className="w-3 h-3 bg-[#f58a4b] mb-4" />
            <span className="text-[12px] font-semibold tracking-[1.5px] uppercase text-[#1d2130] mb-3 block">TRENDING</span>
            <h1 className="text-[42px] font-bold leading-[1.2] mb-5 text-[#1d2130]">
              Breaking the code How did we build our Figma plugin
            </h1>
            <p className="text-[14px] leading-relaxed mb-6 max-w-[520px]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <Link to="/blog/1" className="text-[#444cf7] font-semibold text-[13px] mb-6 block">Read More &rarr;</Link>

            <div className="flex items-center gap-3 mb-8">
              <img src={authorImg} alt="Andrew" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-[13px] font-medium">Andrew Jonson</span>
              <span className="text-[#8d8e99]">|</span>
              <span className="text-[12px] text-[#8d8e99]">Posted on 27th January 2021</span>
            </div>

            <div className="relative">
              <img src={featured} alt="Featured" className="w-full object-cover block" />
              <div className="absolute bottom-0 right-0 flex flex-col">
                <span className="w-3 h-3 bg-[#444cf7]" />
                <span className="w-3 h-3 bg-[#f58a4b]" />
              </div>
            </div>
          </div>

          
          <aside className="w-[320px] bg-[#ffe6d5] p-8 relative self-start mt-8">
            <div className="absolute top-0 right-0 flex gap-1">
              <span className="w-3 h-3 bg-[#6b48ff]" />
              <span className="w-3 h-3 bg-[#f58a4b]" />
              <span className="w-3 h-3 bg-[#444cf7]" />
            </div>
            {sidebarPosts.map((p, i) => (
              <div key={i} className={`pb-5 ${i < sidebarPosts.length - 1 ? 'border-b border-[#e5e5e5] mb-5' : ''}`}>
                <h3 className="text-[14px] font-semibold leading-snug mb-3">
                  Great design expectations prejudice in digital products in Next Year
                </h3>
                <div className="flex items-center gap-2">
                  <img src={p.avatar} alt={p.author} className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <strong className="block text-[12px]">{p.author}</strong>
                    <span className="text-[11px] text-[#8d8e99]">{p.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>

      
      <section className="px-[120px] py-[100px]">
        <h2 className="text-[36px] font-bold mb-10">Read Recent Post</h2>
        <div className="grid grid-cols-2 gap-6">
          {recentPosts.map((p, i) => (
            <div key={i} className="flex gap-5 bg-white border border-[#e5e5e5]">
              <img src={p.img} alt={p.title} className="w-[160px] h-[130px] object-cover shrink-0" />
              <div className="p-5 flex flex-col justify-center">
                <h3 className="text-[15px] font-semibold leading-snug mb-3">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <img src={p.avatar} alt={p.author} className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <strong className="block text-[12px]">{p.author}</strong>
                    <span className="text-[11px] text-[#8d8e99]">{p.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-[120px] pb-[100px]">
        <h2 className="text-[36px] font-bold mb-10">All posts</h2>
        <div className="grid grid-cols-3 gap-8">
          {allPosts.map((p, i) => (
            <article key={i} className="bg-white">
              <img src={p.img} alt="Post" className="w-full h-[200px] object-cover block" />
              <div className="p-6">
                <h3 className="text-[16px] font-semibold leading-snug mb-3">
                  We aim to attain the greatest satisfaction for our clients
                </h3>
                <p className="text-[12px] leading-relaxed mb-4">
                  It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>
                <div className="flex items-center gap-2">
                  <img src={authorImg} alt="Andrew" className="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <strong className="block text-[12px]">Andrew Jonson</strong>
                    <span className="text-[11px] text-[#8d8e99]">Jan 19, 2021</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}


