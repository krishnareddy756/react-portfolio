import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "../../utils/constants";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  });

  // EmailJS configuration - Updated with correct credentials
  const EMAILJS_CONFIG = {
    serviceId: "service_zc782hd",
    templateId: "template_d4tbg1k", 
    publicKey: "hFlS2-XfYJ599_3Ag",
  };



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear any previous status when user starts typing
    if (formStatus.isSuccess || formStatus.isError) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: "Please fill in all required fields.",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: "Please enter a valid email address.",
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: "",
    });

    try {
      // Initialize EmailJS with public key first
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Template parameters with multiple naming conventions for compatibility
      const templateParams = {
        // Standard EmailJS variables
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        
        // Alternative common names
        name: formData.name,
        email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_message: formData.message,
        subject: formData.subject || "Portfolio Contact Form",
        
        // Additional context
        to_name: "Sai Krishna Reddy",
        to_email: "krishnareddy1604k@gmail.com",
        timestamp: new Date().toLocaleString()
      };

      console.log("Attempting to send email...");
      console.log("Service ID:", EMAILJS_CONFIG.serviceId);
      console.log("Template ID:", EMAILJS_CONFIG.templateId);
      console.log("Template params:", templateParams);

      // Send email using EmailJS with explicit public key
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log("Email sent successfully:", result);

      // Check if the result indicates success
      if (result.status === 200 || result.text === 'OK') {
        // Set success state
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          errorMessage: "",
        });

        // Clear form data
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => ({ ...prev, isSuccess: false }));
        }, 5000);
      } else {
        throw new Error(`Unexpected response: ${result.text || 'Unknown error'}`);
      }

    } catch (error) {
      console.error("Email sending failed:", error);
      console.error("Error details:", error.text || error.message || error);

      let errorMessage = "Failed to send message. Please try again or contact me directly.";
      
      // Provide more specific error messages based on error type
      if (error.text) {
        const errorText = error.text.toLowerCase();
        if (errorText.includes("invalid service id") || errorText.includes("service_id")) {
          errorMessage = "Email service configuration error. Please contact me directly at krishnareddy1604k@gmail.com";
        } else if (errorText.includes("invalid template id") || errorText.includes("template_id")) {
          errorMessage = "Email template error. Please contact me directly at krishnareddy1604k@gmail.com";
        } else if (errorText.includes("invalid public key") || errorText.includes("public_key")) {
          errorMessage = "Email authentication error. Please contact me directly at krishnareddy1604k@gmail.com";
        } else if (errorText.includes("network") || errorText.includes("fetch")) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else if (errorText.includes("rate limit") || errorText.includes("quota")) {
          errorMessage = "Service temporarily unavailable. Please try again later or contact me directly.";
        }
      } else if (error.message) {
        if (error.message.includes("Failed to fetch")) {
          errorMessage = "Network error. Please check your internet connection and try again.";
        }
      }

      // Set error state
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: errorMessage,
      });

      // Auto-hide error message after 10 seconds (longer for error messages)
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          isError: false,
          errorMessage: "",
        }));
      }, 10000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      copyable: true,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:+91${PERSONAL_INFO.phone}`,
      copyable: true,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: PERSONAL_INFO.location,
      href: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: PERSONAL_INFO.socialLinks.github,
      color: "hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: PERSONAL_INFO.socialLinks.linkedin,
      color: "hover:bg-blue-600",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: PERSONAL_INFO.socialLinks.email,
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Ready to collaborate? Let's discuss your next project and create
            something amazing together.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="modern-card">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-description">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-detail-item">
                    <div className="contact-detail-icon">{item.icon}</div>
                    <div className="contact-detail-content">
                      <span className="contact-detail-label">{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="contact-detail-value contact-detail-link"
                          target={
                            item.href.startsWith("http") ? "_blank" : "_self"
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : ""
                          }
                        >
                          {item.value}
                          {item.href.startsWith("http") && (
                            <ExternalLink className="h-3 w-3 ml-1" />
                          )}
                        </a>
                      ) : (
                        <span className="contact-detail-value">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <h4 className="contact-social-title">Follow Me</h4>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`contact-social-link ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="modern-card">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    required
                  ></textarea>
                </div>

                {/* Status Messages */}
                {formStatus.isSuccess && (
                  <div className="form-status form-status-success">
                    <CheckCircle className="h-5 w-5" />
                    <span>
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </div>
                )}

                {formStatus.isError && (
                  <div className="form-status form-status-error">
                    <AlertCircle className="h-5 w-5" />
                    <span>{formStatus.errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-modern btn-modern-primary contact-submit-btn"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <Loader className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
