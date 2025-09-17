import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using OTC-Study, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on OTC-Study for personal, non-commercial transitory viewing only.</p>
            
            <h2>Course Access</h2>
            <p>Course access is granted based on your subscription plan. Unauthorized sharing of course materials is prohibited.</p>
            
            <h2>Payment Terms</h2>
            <p>All payments are processed securely. Refunds are available within 30 days of purchase, subject to our refund policy.</p>
            
            <h2>User Conduct</h2>
            <p>Users must not engage in any activity that disrupts or interferes with the proper functioning of the platform.</p>
            
            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, contact us at legal@otcstudy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

