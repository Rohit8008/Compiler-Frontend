import { Phone, Mail, Building2 } from 'lucide-react';

const ContactCard = ({ icon, title, primary, secondary }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-8 text-center transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-gradient-to-r from-blue-600 to-purple-600">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-blue-600 font-medium mb-1">{primary}</p>
      <p className="text-gray-500 text-sm">{secondary}</p>
    </div>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      primary: "+91 62839-30283",
      secondary: "Mon-Fri, 9am-9pm IST"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      primary: "mittalrohit701@gmail.com",
      secondary: "24/7 Support Available"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Office",
      primary: "Sector 69 ",
      secondary: "Gurgaon, Haryana"
    }
  ];

  return (
    <div id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-blue-50/30 to-white"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Let's discuss how we can help optimize your property management business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 