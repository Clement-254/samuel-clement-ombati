
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-ocean-800 dark:text-ocean-100">Contact</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-ocean-800 rounded-lg p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="mt-1"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full mt-1 min-h-[150px] rounded-md border border-ocean-200 dark:border-ocean-700 bg-white dark:bg-ocean-800 px-3 py-2 text-sm ring-offset-background placeholder:text-ocean-400 dark:placeholder:text-ocean-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-ocean-600 hover:bg-ocean-700 text-white">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="mt-8 space-y-4">
            <div className="flex items-center text-ocean-600 dark:text-ocean-300">
              <Mail className="w-5 h-5 mr-3" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center text-ocean-600 dark:text-ocean-300">
              <MessageSquare className="w-5 h-5 mr-3" />
              <span>Available for consultations and collaborations</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
