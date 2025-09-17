import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCourseById } from "@/lib/courses";
import { useAuth } from "@/lib/auth";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CourseDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = useMemo(() => getCourseById(String(params.id)), [params.id]);
  const { user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-16">
        <p className="mb-4">Course not found.</p>
        <Link to="/courses" className="text-primary">Back to courses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="h-56 w-full overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <Badge className="mb-4">{course.level}</Badge>
            <p className="text-muted-foreground mb-6">{course.descriptionLong}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {course.topics.map((t, i) => (
                <Badge key={i} variant="secondary">{t}</Badge>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {course.outcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {course.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Syllabus</h3>
              <div className="space-y-4">
                {course.syllabus.map((m, i) => (
                  <Card key={i} className="border">
                    <CardContent className="p-4">
                      <div className="font-medium mb-2">{m.module}</div>
                      <div className="flex flex-wrap gap-2">
                        {m.topics.map((t, j) => (
                          <Badge key={j} variant="secondary">{t}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-3xl font-bold">{course.price}</div>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    if (user) navigate(`/courses/${params.id}/enroll`);
                    else setShowLogin(true);
                  }}
                >
                  Enroll Now
                </Button>
                <Link to="/pricing" className="block text-center text-sm text-muted-foreground">Compare plans</Link>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">Instructor</h3>
                <div className="text-sm text-muted-foreground">{course.instructor.name} — {course.instructor.bio}</div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">Student Reviews</h3>
                <div className="space-y-3">
                  {course.reviews.map((r, i) => (
                    <div key={i} className="text-sm">
                      <div className="font-medium">{r.name} — {"★".repeat(r.rating)}</div>
                      <div className="text-muted-foreground">{r.comment}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Please login to enroll in this course.</p>
            <Link to="/login" className="underline text-primary">Go to Login</Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseDetails;


