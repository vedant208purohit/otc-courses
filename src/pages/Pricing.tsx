import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Check, 
  Star, 
  Crown, 
  Zap,
  BookOpen,
  Users,
  Award,
  Clock,
  Download,
  MessageCircle,
  Video,
  FileText
} from "lucide-react";

const Pricing = () => {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const handlePlanSelect = (planName: string) => {
    if (user) {
      setSelectedPlan(planName);
      setShowPaymentModal(true);
    } else {
      // Redirect to signup if not logged in
      window.location.href = "/signup";
    }
  };

  const plans = [
    {
      name: "Basic",
      description: "Perfect for beginners starting their learning journey",
      price: "₹999",
      period: "per month",
      icon: BookOpen,
      popular: false,
      features: [
        "Access to 50+ basic courses",
        "HD video quality",
        "Mobile app access",
        "Basic community support",
        "Course completion certificates",
        "30-day money back guarantee"
      ],
      limitations: [
        "Limited to 2 downloads per month",
        "No offline access",
        "No live sessions"
      ]
    },
    {
      name: "Premium",
      description: "Most popular choice for serious learners",
      price: "₹1,999",
      period: "per month",
      icon: Star,
      popular: true,
      features: [
        "Access to 200+ premium courses",
        "Full HD video quality",
        "Mobile & desktop apps",
        "Priority community support",
        "Verified certificates",
        "Unlimited downloads",
        "Offline access",
        "Monthly live Q&A sessions",
        "Personal learning dashboard",
        "Progress tracking",
        "30-day money back guarantee"
      ],
      limitations: []
    },
    {
      name: "Pro",
      description: "For professionals seeking advanced skills",
      price: "₹3,999",
      period: "per month",
      icon: Crown,
      popular: false,
      features: [
        "Access to all 300+ courses",
        "4K video quality",
        "All device access",
        "24/7 priority support",
        "Industry-recognized certificates",
        "Unlimited everything",
        "Advanced offline features",
        "Weekly live sessions",
        "One-on-one mentorship",
        "Career guidance",
        "Job placement assistance",
        "Custom learning paths",
        "90-day money back guarantee"
      ],
      limitations: []
    }
  ];

  const yearlyDiscount = 20; // 20% discount for yearly plans

  const getPrice = (monthlyPrice: string) => {
    if (!isYearly) return monthlyPrice;
    const price = parseInt(monthlyPrice.replace(/[₹,]/g, ''));
    const yearlyPrice = Math.round(price * 12 * (1 - yearlyDiscount / 100));
    return `₹${yearlyPrice.toLocaleString()}`;
  };

  const getPeriod = () => isYearly ? "per year" : "per month";

  const testimonials = [
    {
      name: "Rahul Gupta",
      role: "Software Developer",
      company: "TCS",
      content: "OTC-Study helped me transition from mechanical engineering to software development. The courses are well-structured and practical.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Data Analyst",
      company: "Wipro",
      content: "The Python for Data Science course was exactly what I needed. Got promoted within 6 months of completing it!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Digital Marketing Manager",
      company: "Startup",
      content: "Amazing value for money. The digital marketing course helped me start my own consulting business.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 7-day free trial for the Premium plan so you can explore all features before committing."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes, our certificates are industry-recognized and accepted by major companies across India and globally."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets like Paytm and PhonePe."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Learning Plan
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Affordable pricing designed for Indian students. Start your journey today!
            </p>
            <div className="inline-flex items-center bg-white/10 rounded-lg p-1">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  !isYearly ? "bg-white text-primary" : "text-white hover:bg-white/10"
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  isYearly ? "bg-white text-primary" : "text-white hover:bg-white/10"
                }`}
              >
                Yearly 
                <Badge className="ml-2 bg-accent text-accent-foreground">Save 20%</Badge>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-large transition-all duration-300 ${
                  plan.popular 
                    ? "border-primary shadow-medium scale-105" 
                    : "border-border shadow-soft"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-accent text-accent-foreground px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{getPrice(plan.price)}</span>
                    <span className="text-muted-foreground ml-2">{getPeriod()}</span>
                    {isYearly && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="line-through">{plan.price}/month</span>
                        <span className="ml-2 text-accent font-medium">Save 20%</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button 
                    variant={plan.popular ? "hero" : "default"} 
                    size="lg" 
                    className="w-full"
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    {plan.popular ? (
                      <>
                        <Zap className="h-5 w-5 mr-2" />
                        Start Free Trial
                      </>
                    ) : (
                      "Get Started"
                    )}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="font-medium text-muted-foreground text-sm">Limitations:</h4>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                            <div className="w-3 h-3 bg-muted-foreground/30 rounded-full mt-1"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Students Choose OTC-Study?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful learners across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">High-Quality Content</h3>
              <p className="text-muted-foreground">HD/4K videos with clear audio and professional production</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from industry professionals with real-world experience</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Learning</h3>
              <p className="text-muted-foreground">Study at your own pace with lifetime access to content</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Recognized Certificates</h3>
              <p className="text-muted-foreground">Industry-accepted certificates to boost your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              See how OTC-Study has transformed careers across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join over 50,000 students who have already started their journey with OTC-Study
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => handlePlanSelect("Premium")}
              >
                <Zap className="mr-2 h-5 w-5" />
                Start 7-Day Free Trial
              </Button>
              <a href="/chat">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Our Team
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
            <DialogDescription>
              We'll send payment details to your email: {user?.email}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold">{selectedPlan} Plan</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive payment instructions and access details via email within 24 hours.
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => setShowPaymentModal(false)} 
                variant="outline" 
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  setShowPaymentModal(false);
                  // Here you would typically integrate with a payment gateway
                  alert("Payment details sent to your email!");
                }} 
                className="flex-1"
              >
                Confirm
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pricing;