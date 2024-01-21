import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <ConstructionIcon className="h-6 w-6" />
          <span className="sr-only">BuildCo</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Materials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-200 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  BuildCo: Quality Construction and Materials
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  We provide top-notch construction services and high-quality materials for all your building needs.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="services">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <BuildingIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Construction</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer construction services for residential and commercial buildings.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <BookTemplateIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Design & Planning</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our team of architects and engineers can help design and plan your dream project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <RedoIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Renovation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We provide renovation services to give your old buildings a new life.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <PaintbrushIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Painting</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We offer professional painting services for both interior and exterior projects.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <LandmarkIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Landscaping</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our landscaping services can transform your outdoor space into a beautiful oasis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="materials">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Materials</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <TreesIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Wood</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We provide high-quality wood for all your construction needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <HandMetalIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Steel</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our steel materials are strong and durable, perfect for any construction project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <ToyBrickIcon className="h-10 w-10" />
                  <h3 className="text-xl font-bold">Bricks</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our bricks are made from high-quality clay, ensuring a strong and sturdy construction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="projects">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <img
                    alt="Project 1"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A modern residential building in the heart of the city.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <img
                    alt="Project 2"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A commercial building with state-of-the-art facilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <img
                    alt="Project 3"
                    className="w-full h-64 object-cover"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A renovated heritage building with a blend of old and new.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=100&width=100" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "BuildCo did an amazing job with our construction project. Their team was professional and the
                    materials used were of high quality."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=100&width=100" />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Mary Davis</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    "I was impressed with the level of detail and planning that went into our project. The end result
                    was fantastic!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
            <form className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BuildCo. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BookTemplateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 22h-2" />
      <path d="M20 15v2h-2" />
      <path d="M4 19.5V15" />
      <path d="M20 8v3" />
      <path d="M18 2h2v2" />
      <path d="M4 11V9" />
      <path d="M12 2h2" />
      <path d="M12 22h2" />
      <path d="M12 17h2" />
      <path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" />
      <path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
    </svg>
  )
}


function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function ConstructionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}


function HandMetalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
      <path d="M14 11V9a2 2 0 1 0-4 0v2" />
      <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
      <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </svg>
  )
}


function LandmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}


function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function RedoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function ToyBrickIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}
