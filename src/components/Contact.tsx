import { useRef, useState, useEffect } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const formRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('Email config missing. Check Railway Variables.');
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      alert('Message sent! We will contact you soon.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Send failed. Please call +91 75086 39613');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="hidden" name="current_time" value={new Date().toLocaleString()} />

      {/* Replace these with your actual existing form fields */}
      {/* Just make sure each input has the correct name="" attribute: */}
      {/* name="customer_name"   */}
      {/* name="customer_email"  */}
      {/* name="customer_mobile" */}
      {/* name="hotel_name"      */}
      {/* name="service_type"    */}
      {/* name="message_content" */}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-8 py-4 bg-gradient-to-r from-amber-200 to-yellow-300 text-stone-900 font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
};

export default Booking;
