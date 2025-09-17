import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  HelpCircle,
  User,
  Building,
  Globe,
  HeadphonesIcon
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical issues or course queries",
      contact: "support@otcstudy.com",
      responseTime: "Within 24 hours",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91 9876543210",
      responseTime: "Immediate",
      available: "9 AM - 9 PM IST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time assistance for urgent queries",
      contact: "Available on website",
      responseTime: "Instant",
      available: "9 AM - 6 PM IST"
    },
    {
      icon: HeadphonesIcon,
      title: "Student Success",
      description: "Career guidance and learning support",
      contact: "success@otcstudy.com",
      responseTime: "Within 48 hours",
      available: "Mon - Fri"
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "Office 301, Tech Tower, Bandra Kurla Complex, Mumbai - 400051",
      phone: "+91 9876543210",
      email: "mumbai@otcstudy.com",
      timing: "9:00 AM - 7:00 PM",
      isHeadquarters: true
    },
    {
      city: "Bangalore",
      address: "Floor 12, Innovation Hub, Electronic City, Bangalore - 560100",
      phone: "+91 9876543211",
      email: "bangalore@otcstudy.com",
      timing: "9:00 AM - 7:00 PM",
      isHeadquarters: false
    },
    {
      city: "Delhi",
      address: "Suite 205, Business Center, Connaught Place, New Delhi - 110001",
      phone: "+91 9876543212",
      email: "delhi@otcstudy.com",
      timing: "9:00 AM - 7:00 PM",
      isHeadquarters: false
    }
  ];

  const faqs = [
    {
      category: "Technical",
      questions: [
        "How do I reset my password?",
        "Why can't I access my courses?",
        "How to download course materials?",
        "Mobile app not working?"
      ]
    },
    {
      category: "Billing",
      questions: [
        "How to get a refund?",
        "Payment methods accepted?",
        "How to upgrade my plan?",
        "Invoice and GST queries?"
      ]
    },
    {
      category: "Courses",
      questions: [
        "Which course is right for me?",
        "How to get certificates?",
        "Course completion requirements?",
        "Can I access courses offline?"
      ]
    }
  ];

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent", description: "We'll get back to you within 24 hours." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're here to help you succeed in your learning journey. Reach out to us anytime!
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={onSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Enter your first name" required minLength={2} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Enter your last name" required minLength={2} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input placeholder="+91 9876543210" pattern="^[0-9+\-()\s]{8,}$" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <select className="w-full border border-input rounded-md px-3 py-2 bg-background" required>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Course Information</option>
                    <option>Partnership Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="newsletter" className="rounded" />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I'd like to receive updates about new courses and features
                  </label>
                </div>

                <Button variant="hero" size="lg" className="w-full" type="submit">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <Card className="border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
                <CardDescription>
                  Choose the best way to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-sm font-medium text-foreground">{method.contact}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {method.responseTime}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {method.available}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {index < contactMethods.length - 1 && <hr className="border-border" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-accent-glow" />
                <h3 className="text-lg font-semibold mb-2">Quick Response Guaranteed</h3>
                <p className="text-primary-foreground/90 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our physical locations across major Indian cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{office.city}</h3>
                      {office.isHeadquarters && (
                        <Badge className="mt-1 bg-accent text-accent-foreground">
                          <Building className="h-3 w-3 mr-1" />
                          Headquarters
                        </Badge>
                      )}
                    </div>
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-foreground">{office.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-foreground">{office.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{office.timing}</p>
                    </div>
                  </div>

                  <a href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {faqs.map((category, index) => (
              <Card key={index} className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    {category.category} Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.questions.map((question, qIndex) => (
                      <div key={qIndex} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        • {question}
                      </div>
                    ))}
                  </div>
                  <Link to="/chat">
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      View All {category.category} FAQs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Our student success team is always ready to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button variant="accent" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Live Chat
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;