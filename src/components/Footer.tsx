import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FooterProps {
  showNewsletter?: boolean;
}

export default function Footer({ showNewsletter = true }: FooterProps) {
  return (
    <footer className="bg-white pt-[60px]">
      <div className="max-w-[1280px] mx-auto px-5">
        
        
        {showNewsletter && (
          <div className="bg-[#666dff] text-white px-12 py-[60px] flex justify-between items-center mb-24 relative overflow-hidden">
            
            
            <div className="absolute top-0 left-0 flex flex-wrap w-12 h-12">
              <span className="w-6 h-6 bg-[#f58a4b]" />
              <span className="w-6 h-6 bg-[#ffd3af]" />
              <span className="w-6 h-6 bg-[#ffd3af]" />
              <span className="w-6 h-6 bg-[#666dff]" />
            </div>

            
            <div className="absolute top-0 right-0 w-4 h-12 bg-[#f58a4b]" />
            <div className="absolute bottom-0 right-0 w-4 h-12 bg-[#444cf7]" />

            
            <div className="max-w-[480px]">
              <span className="text-[12px] font-semibold tracking-[2px] opacity-90 uppercase block mb-3">
                Newsletter
              </span>
              <h2 className="text-[36px] font-bold leading-[1.2] m-0">
                Subscribe our News Letter to get Latest Updates.
              </h2>
            </div>

            
            <div className="relative">
              <input
                type="email"
                placeholder="Paresh@Pixeto.com"
                className="w-[380px] px-6 py-4 bg-white text-[#232536] text-[14px] outline-none border-none placeholder:text-[#232536]/60"
              />
            </div>
          </div>
        )}

        
        <div className="flex justify-between pb-16">
          
          
          <div className="max-w-[380px]">
            
            <div className="flex gap-[2px] mb-6">
              <span className="w-3 h-3 bg-[#f58a4b]" />
              <span className="w-3 h-3 bg-[#ffd3af]" />
              <span className="w-3 h-3 bg-[#666dff]" />
            </div>

            <h2 className="text-[44px] font-bold leading-[1.15] text-[#232536] mb-8">
              Let's make something special
            </h2>
            
            <p className="font-bold text-[16px] text-[#232536] mb-4">
              Let's talk! 👍
            </p>

            <div className="mb-8">
              <p className="text-[14px] font-medium text-[#232536] mb-1">020 7993 2905</p>
              <p className="text-[14px] font-medium text-[#232536]">hi@finsweet.com</p>
            </div>

            <address className="not-italic text-[13px] text-[#232536]/70 leading-relaxed pt-4 border-t border-[#e5e5e5] max-w-[240px]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </address>
          </div>

          
          <div className="flex gap-24 pt-4">
            
            
            <div className="flex flex-col gap-4">
              <Link to="/" className="font-bold text-[14px] text-[#232536] hover:text-[#444cf7]">Home</Link>
              <Link to="/service" className="font-bold text-[14px] text-[#232536] hover:text-[#444cf7]">Service</Link>
              <Link to="/company" className="font-bold text-[14px] text-[#232536] hover:text-[#444cf7]">Company</Link>
              <Link to="/career" className="font-bold text-[14px] text-[#232536] hover:text-[#444cf7]">Career</Link>
              <Link to="/blog" className="font-bold text-[14px] text-[#232536] hover:text-[#444cf7]">News</Link>
            </div>

            
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[#232536] mb-1">Service</h4>
              {['Technical support', 'Testing', 'Development', 'AWS/Azure', 'Consulting', 'Information Technology'].map((item) => (
                <Link key={item} to="/service" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">
                  {item}
                </Link>
              ))}
            </div>

            
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[#232536] mb-1">Resourses</h4>
              <Link to="/company" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">About Us</Link>
              <Link to="#" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">Testimonial</Link>
              <Link to="/privacy" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">Privacy Policy</Link>
              <Link to="#" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">Terms of use</Link>
              <Link to="/blog" className="text-[13px] text-[#232536]/80 font-medium hover:text-[#444cf7]">Blog</Link>
            </div>

          </div>
        </div>

        
        <div className="flex justify-end items-center gap-3 mb-10">
          <div className="flex gap-[2px]">
            <span className="w-5 h-3 bg-[#ffd3af]" />
            <span className="w-8 h-3 bg-[#444cf7]" />
          </div>
          <Link to="/contact" className="text-[14px] font-bold text-[#232536] hover:text-[#444cf7]">
            Contact Us &rarr;
          </Link>
        </div>

      </div>

      
      <div className="bg-[#ffe6d5] py-6">
        <div className="max-w-[1280px] mx-auto px-5 flex justify-between items-center">
          
          
          <div className="flex items-center gap-8">
            <span className="text-[20px] font-bold text-[#232536]">{'{'}Finsweet</span>
            <span className="text-[13px] font-medium text-[#232536]">©2021 Finsweet</span>
          </div>

          
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#232536] hover:text-[#444cf7]">
              <FacebookIcon sx={{ fontSize: 18 }} />
            </a>
            <a href="#" className="text-[#232536] hover:text-[#444cf7]">
              <TwitterIcon sx={{ fontSize: 18 }} />
            </a>
            <a href="#" className="text-[#232536] hover:text-[#444cf7]">
              <InstagramIcon sx={{ fontSize: 18 }} />
            </a>
            <a href="#" className="text-[#232536] hover:text-[#444cf7]">
              <LinkedInIcon sx={{ fontSize: 18 }} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

