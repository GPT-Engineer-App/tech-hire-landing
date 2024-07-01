import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Find Your Dream Tech Job</h1>
        <p className="text-xl text-muted-foreground">
          Connecting top tech talent with leading companies
        </p>
        <Button size="lg" className="mt-4">
          Get Started
        </Button>
      </section>

      {/* About Us Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="text-muted-foreground">
          We are a leading tech recruiting company dedicated to connecting top
          tech talent with leading companies. Our mission is to help you find
          your dream job in the tech industry.
        </p>
      </section>

      {/* Services Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Job Placement</CardTitle>
            </CardHeader>
            <CardContent>
              We help you find the best job opportunities in the tech industry.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Career Counseling</CardTitle>
            </CardHeader>
            <CardContent>
              Our experts provide personalized career advice to help you
              succeed.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resume Building</CardTitle>
            </CardHeader>
            <CardContent>
              We assist you in creating a professional resume that stands out.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="space-y-4">
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                "Tech Recruiters helped me land my dream job at a top tech
                company. I couldn't be happier!"
              </p>
              <p className="mt-2 font-semibold">- John Doe, Software Engineer</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <p className="text-muted-foreground">
                "The career counseling sessions were incredibly helpful. I feel
                more confident in my career path now."
              </p>
              <p className="mt-2 font-semibold">- Jane Smith, Data Scientist</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
        <div className="space-y-2">
          <p>Email: contact@techrecruiters.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-2">
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Facebook
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
        </div>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Tech Recruiters. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;