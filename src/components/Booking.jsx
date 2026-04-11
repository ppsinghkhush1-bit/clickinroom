import { useRef, useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Railway ENV VARS
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      alert('✅ Message sent! Check support.clickinroom@gmail.com');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ Send failed. Try again or call +91 75086 39613');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Your existing JSX
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="hidden" name="current_time" value={new Date().toLocaleString()} />
      {/* Your existing fields with names: */}
      {/* name="customer_name" */}
      {/* name="customer_email" */}
      {/* name="customer_mobile" */}
      {/* name="hotel_name" */}
      {/* name="service_type" */}
      {/* name="message_content" */}
    </form>
  );
};
