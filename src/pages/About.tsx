import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Award, 
  Target, 
  Heart,
  BookOpen,
  Globe,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Active Students" },
    { icon: BookOpen, value: "50", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Success Rate" },
    { icon: Globe, value: "25+", label: "Cities Covered" }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former IIT professor with 15+ years in education technology",
      specialization: "EdTech Strategy"
    },
    {
      name: "Priya Sharma",
      role: "Head of Curriculum",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Ex-Google engineer passionate about making tech education accessible",
      specialization: "Technical Content"
    },
    {
      name: "Amit Patel",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Product management expert from leading Indian startups",
      specialization: "User Experience"
    },
    {
      name: "Sneha Reddy",
      role: "Community Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Building India's largest online learning community",
      specialization: "Student Success"
    }
  ];

  const locations = [
    {
      city: "Mumbai",
      state: "Maharashtra",
      students: "12,000+",
      courses: "All Categories",
      highlight: "Financial Capital Hub"
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      students: "15,000+",
      courses: "Tech & Programming",
      highlight: "IT Capital"
    },
    {
      city: "Delhi",
      state: "National Capital",
      students: "10,000+",
      courses: "Business & Marketing",
      highlight: "Government Hub"
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      students: "8,000+",
      courses: "Data Science",
      highlight: "HITEC City"
    },
    {
      city: "Pune",
      state: "Maharashtra",
      students: "6,500+",
      courses: "Engineering",
      highlight: "Education Hub"
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      students: "7,200+",
      courses: "Software Development",
      highlight: "Detroit of India"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Democratizing quality education and making it accessible to every Indian student, regardless of their background or location."
    },
    {
      icon: Heart,
      title: "Student-First",
      description: "Every decision we make is guided by what's best for our students' learning outcomes and career success."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously evolving our platform with the latest technology to provide the best learning experience."
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Maintaining the highest standards in course content, instructor expertise, and student support services."
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded OTC-Study with a vision to transform online education in India" },
    { year: "2021", event: "Launched first 50 courses and reached 5,000 students" },
    { year: "2022", event: "Expanded to 10 major Indian cities with 100+ courses" },
    { year: "2023", event: "Crossed 25,000 students and launched mobile app" },
    { year: "2024", event: "Reached 50,000+ students with 300+ expert courses" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About OTC-Study
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Empowering Indian students with world-class online education since 2020
            </p>
            <a href="#journey">
              <Button variant="accent" size="lg">
                <ArrowRight className="mr-2 h-5 w-5" />
                Our Journey
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To bridge the skill gap in India by providing affordable, high-quality online education that empowers students and professionals to achieve their career goals. We believe that every individual deserves access to world-class learning opportunities, regardless of their geographic location or economic background.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become India's most trusted online learning platform, fostering a community where millions of learners can acquire in-demand skills, advance their careers, and contribute to the digital transformation of our nation. We envision a future where quality education is accessible to every corner of India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at OTC-Study
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate educators and technologists working to revolutionize online learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <Badge variant="secondary" className="mb-4">{member.specialization}</Badge>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Presence Across India
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving students in major cities with localized content and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="border-0 shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{location.city}</h3>
                      <p className="text-muted-foreground">{location.state}</p>
                    </div>
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Active Students</span>
                      <span className="font-semibold text-foreground">{location.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Popular Courses</span>
                      <span className="font-medium text-primary">{location.courses}</span>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      {location.highlight}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="journey" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform education in India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">{milestone.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.year}</h3>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Learning Community
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Become part of India's fastest-growing online learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="accent" size="lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;