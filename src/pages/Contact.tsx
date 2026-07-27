import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const mapImg = '/Contact/assets/Map.png';

export default function Contact() {
  return (
    <div>
      
      <header className="bg-[#1d2130] text-white border-t-4 border-[#3a7bd5] px-[120px] pt-6 pb-6">
        <Navbar dark />
      </header>

      
      <section className="px-[120px] py-[100px]">
        <div className="flex gap-[80px] items-start">
          
          <div className="flex-1">
            <div className="w-3 h-3 bg-[#f58a4b] mb-4" />
            <span className="text-[12px] font-semibold tracking-[1.5px] uppercase mb-3 block">CONTACT US</span>
            <h1 className="text-[42px] font-bold leading-[1.2] mb-3">
              Have a Question ?<br />Let's Get in Touch with us 👋
            </h1>
            <p className="text-[14px] leading-relaxed mb-8">
              Fill up the Form and our team will get back to within 24 hrs
            </p>

            <form className="flex flex-col gap-5">
              {[
                { label: 'Name', type: 'text', value: 'Paresh Srichandan', placeholder: 'Your Name' },
                { label: 'E-mail', type: 'email', value: 'Paresh@pixeto.com', placeholder: 'Your Email' },
                { label: 'Subject', type: 'text', value: 'For web design work Enquire', placeholder: 'Subject' },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    placeholder={field.placeholder}
                    className="border border-[#e5e5e5] px-5 py-3.5 text-[14px] outline-none focus:border-[#444cf7]"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold">Message</label>
                <textarea
                  rows={3}
                  defaultValue="Type your Message"
                  className="border border-[#e5e5e5] px-5 py-3.5 text-[14px] outline-none resize-none focus:border-[#444cf7]"
                />
              </div>

              <button
                type="submit"
                className="self-start bg-[#444cf7] text-white px-8 py-4 text-[14px] font-medium border-none cursor-pointer mt-2"
              >
                Send Message &rarr;
              </button>
            </form>
          </div>

          
          <div className="w-[380px] bg-[#f4f6fc] p-10 relative self-start">
            
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="flex-1 bg-[#ffd3af]" />
              <div className="flex-1 bg-[#444cf7]" />
              <div className="flex-1 bg-[#f58a4b]" />
            </div>
            
            <div className="absolute top-0 bottom-0 left-0 w-1.5 flex flex-col">
              <div className="flex-1 bg-[#f58a4b]" />
              <div className="flex-1 bg-[#ffd3af]" />
              <div className="flex-1 bg-[#444cf7]" />
            </div>

            <div className="pl-4">
              <div className="mb-8">
                <span className="text-[11px] tracking-widest uppercase text-[#8d8e99] block mb-2">Location</span>
                <p className="font-bold text-[14px] leading-relaxed m-0">DLF Cybercity, Bhubaneswar,<br />India, 751024</p>
              </div>

              <div className="mb-8">
                <span className="text-[11px] tracking-widest uppercase text-[#8d8e99] block mb-2">Working Hour</span>
                <p className="font-bold text-[14px] m-0">Monday To Friday</p>
                <p className="font-bold text-[14px] mb-1">9:00 AM to 8:00 PM</p>
                <p className="text-[12px] text-[#8d8e99] m-0">Our Support Team is available 24Hrs</p>
              </div>

              <div className="mb-8">
                <span className="text-[11px] tracking-widest uppercase text-[#8d8e99] block mb-2">Contact Us</span>
                <p className="font-bold text-[14px] m-0">020 7993 2905</p>
                <p className="text-[13px] text-[#8d8e99] m-0">Hello@ether.com</p>
              </div>

              <div className="flex gap-4">
                {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                  <a key={i} href="#" className="text-[#1d2130] hover:text-[#444cf7]">
                    <Icon sx={{ fontSize: 18 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-[120px] pb-[100px]">
        <img src={mapImg} alt="Map Location" className="w-full object-cover" />
      </section>

      <Footer showNewsletter={false} />
    </div>
  );
}


