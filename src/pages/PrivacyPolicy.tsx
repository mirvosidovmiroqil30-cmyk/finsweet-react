import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div>
      
      <header className="bg-[#1d2130] text-white border-t-4 border-[#3a7bd5] px-[120px] pt-6 pb-6">
        <Navbar dark />
      </header>

      <main className="px-[120px]">
        
        <section className="py-[80px] flex justify-between items-start">
          <div className="relative">
            <div className="w-4 h-4 bg-[#ffd3af] mb-5" />
            <h1 className="text-[52px] font-bold leading-[1.15] mb-3">Privacy Policy</h1>
            <p className="text-[13px] text-[#8d8e99]">Last Updated on 27th January 2021</p>
          </div>
          <div className="flex gap-1 mt-8">
            <span className="w-3 h-3 bg-[#6b48ff]" />
            <span className="w-3 h-3 bg-[#ffd3af]" />
            <span className="w-3 h-3 bg-[#f58a4b]" />
          </div>
        </section>

        
        <section className="pb-[100px]">
          <div className="bg-[#f4f6fc] p-[60px] relative">
            <h2 className="text-[28px] font-bold leading-[1.3] mb-6">
              Transform Your Idea Into Reality with Ether a Leading Digital Agency
            </h2>

            {[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel metus at elit hendrerit varius. Proin tristique porta velit, at vulputate nibh porta in. Phasellus ut semper sem, vel accumsan ligula.',
              'Fusce porta facilisis quam, ac tempor ligula viverra non. Ut sodales purus in nulla imperdiet, ac posuere elit scelerisque. Aliquam id facilisis elit, vitae vulputate nisi.',
              'Sed tristique erat at diam bibendum, eu aliquet sem pulvinar. Etiam vitae felis nec ante sodales vulputate. Quisque ac magna euismod, finibus nunc vel, aliquet lacus.',
              'Proin tristique porta velit, at vulputate nibh porta in. Phasellus ut semper sem, vel accumsan ligula. Ut sodales purus in nulla imperdiet, ac posuere elit scelerisque.',
            ].map((p, i) => (
              <p key={i} className="text-[14px] leading-relaxed mb-4">{p}</p>
            ))}

            <h3 className="text-[20px] font-semibold mt-8 mb-5">We disclose your information in the following manner:</h3>

            {[
              { bold: 'Business partners, suppliers and sub-contractors ("Affiliates"):', text: ' Affiliates may use this information to help provide, understand, and improve our services and Affiliate\'s own services for the performance of any contract we enter into.' },
              { bold: 'Financial Institutions and Auditors:', text: ' In order to complete third party financial, technical and legal audits of our operations to help us operate our business, we may need to share your information with financial institutions and auditors.' },
              { bold: 'Advertisers and Advertising Networks:', text: ' To provide you with select and serve relevant advertisements to you and others, we may share your data with advertisers and advertising networks. We do not disclose your Personal Information or Sensitive Personal Information to our advertisers.' },
            ].map((item, i) => (
              <p key={i} className="text-[14px] leading-relaxed mb-4">
                <strong className="text-[#1d2130]">{item.bold}</strong>{item.text}
              </p>
            ))}

            
            <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
              <div className="flex-1 bg-[#444cf7]" />
              <div className="flex-1 bg-[#ffd3af]" />
              <div className="flex-1 bg-[#f58a4b]" />
            </div>
          </div>
        </section>
      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}


