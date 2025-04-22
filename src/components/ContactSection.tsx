import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const contactInfo = [
    { icon: <Mail size={24} />, label: 'Email', value: 'thaman.me@gmail.com' },
    { icon: <Phone size={24} />, label: 'Phone', value: '+358442105570' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Vantaa, Finland' },
  ];

  return (
    <section id="contact" className="section bg-gradient-to-b from-background to-secondary/20 relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-secondary p-8 rounded-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={64} className="text-primary mb-6" />
                <h4 className="text-xl font-medium mb-2">Message Sent Successfully!</h4>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <motion.button
                  className="mt-6 px-6 py-2 rounded-full bg-primary text-primary-foreground"
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-hover="true"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-muted text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-hover="true"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <motion.div
            className="flex flex-col justify-between"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.label}</h4>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div
              className="mt-12 bg-secondary p-6 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <h4 className="text-lg font-medium mb-2">Available for Freelance</h4>
              <p className="text-muted-foreground">I'm currently accepting new projects and would love to hear about yours. Let's create something amazing together.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;