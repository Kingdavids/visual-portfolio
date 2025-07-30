import React, { useState } from 'react';
import { BookPageLayout } from '../components/BookPageLayout';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        name: formData.name,
        from_email: formData.email,
        project_type: formData.project,
        budget_range: formData.budget,
        message: formData.message,
        to_email: 'rashydavids@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
        budget: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSections = [
    {
      id: 'connect',
      title: 'Let\'s Connect',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Begin Your Story
            </motion.h2>
            <p className="text-slate-300 text-lg">
              Every great story starts with a conversation. Let's craft your narrative together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '✉️',
                title: 'Email',
                detail: 'rashydavids@gmail.com',
                description: 'For detailed project discussions',
                action: 'mailto:rashydavids@gmail.com'
              },
              {
                icon: '📸',
                title: 'Instagram',
                detail: '@lordsnta10ment',
                description: 'See behind-the-scenes content',
                action: 'https://instagram.com/lords_nta10ment',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              {
                icon: '💬',
                title: 'WhatsApp',
                detail: 'Quick Chat',
                description: 'Fast response for urgent projects',
                action: 'https://wa.me/14375526807?text=Hello%20I%20am%20interested%20in%20your%20services',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 text-center group cursor-pointer"
              >
                <a href={method.action} target={method.target} rel={method.rel}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-amber-400 mb-2">{method.detail}</p>
                  <p className="text-sm text-slate-400">{method.description}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'inquiry',
      title: 'Project Inquiry',
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tell Me About Your{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Project Type</label>
              <select
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
                required
              >
                <option value="">Select project type</option>
                <option value="corporate">Corporate Video</option>
                <option value="commercial">Commercial</option>
                <option value="event">Event Coverage</option>
                <option value="personal">Personal Story</option>
                <option value="documentary">Documentary</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
                <option value="discuss">Let's Discuss</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-300 font-semibold mb-2">Tell Me Your Story</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your vision, goals, and what story you want to tell..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending Your Story...' : 'Start Our Creative Journey'}
            </motion.button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center mt-4">Your message has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center mt-4">Failed to send your message. Please try again.</p>
            )}
          </form>
        </div>
      )
    },
    {
      id: 'process',
      title: 'Creative Process',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Creative{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We explore your vision, goals, and the story you want to tell.'
              },
              {
                step: '02',
                title: 'Creative Development',
                description: 'I craft a unique narrative approach tailored to your brand and audience.'
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional filming with cinematic techniques and storytelling focus.'
              },
              {
                step: '04',
                title: 'Post & Delivery',
                description: 'Expert editing and color grading to bring your story to life.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.div
              className="inline-flex items-center space-x-3 text-amber-400"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-lg font-semibold">Your story starts here</span>
              <span className="text-2xl">→</span>
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  return (
    <BookPageLayout
      title="Epilogue: Begin Your Story"
      subtitle="Where your vision becomes visual narrative"
      sections={contactSections}
      layout="tabs"
      defaultSection="connect"
    />
  );
};
