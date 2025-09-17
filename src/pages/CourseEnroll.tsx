import { useParams, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";

const enrollSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
});

const CourseEnroll = () => {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = enrollSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setDone(true);
  };

  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold mb-2">Enroll in Course #{id}</h1>
      <p className="text-sm text-muted-foreground mb-6">Enter your details to proceed.</p>
      {done ? (
        <div className="border rounded-lg p-6 bg-muted/20">
          <p className="mb-2">Thanks! We have received your enrollment.</p>
          <Link to={`/courses/${id}`} className="text-primary">Back to course</Link>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="you@example.com" />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <Button type="submit">Confirm Enrollment</Button>
        </form>
      )}
    </div>
  );
};

export default CourseEnroll;



