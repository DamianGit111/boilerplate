import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, MapPin, Users, Award, Mail, Gift, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Event Details", href: "#event-details" },
    { name: "Speakers", href: "#speakers" },
    { name: "Judges", href: "#judges" },
    { name: "FAQ", href: "#faq" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsorship", href: "#sponsorship" },
  ]

  return (
    <nav className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg p-4 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL_E_2024-09-07_13.24.12_-_A_minimalistic_yet_vibrant_logo_for_the__Hackasun__hackathon_at_Helios_School._The_design_features_a_sleek_sun_symbol_with_rays_in_a_modern__geometric-removebg-preview-AFJNVWbEFpqmbpgL5cwRiVDBW8iC11.png"
            alt="HackaSun Logo"
            width={150}
            height={75}
            className="max-h-12 w-auto"
          />
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 md:top-auto md:left-auto w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <NavBar />
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">HackaSun: Games for the Greater Good</h1>
            <p className="text-xl text-blue-300">5th Through 12th Grade Hackathon</p>
          </header>

          <Card id="about" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">What is HackaSun?</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-blue-100">
              <p>
                HackaSun is an exciting event where 5th through 12th grade aspiring programmers come together
                to create games that make a positive impact on the world. Hosted by the Helios coding club, a student-run
                programming club, this hackathon aims to spark passion and spread coding and STEM throughout the Bay Area.
              </p>
            </CardContent>
          </Card>

          <Card id="event-details" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 text-blue-100">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-blue-300" />
                <span><strong>When:</strong> November 16th, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-300" />
                <span><strong>Time:</strong> 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-300" />
                <span>
                  <strong>Where:</strong> Helios School in Sunnyvale (597 Central Ave, Sunnyvale, CA 94086)
                  <Link href="https://goo.gl/maps/YOUR_MAP_LINK_HERE" className="ml-2 text-blue-400 hover:underline">
                    View on Map
                  </Link>
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-300" />
                <span><strong>Who:</strong> 5th through 12th grade aspiring programmers</span>
              </div>
            </CardContent>
          </Card>

          <Card id="speakers" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Guest Speakers</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-blue-100">
              <ul className="list-disc list-inside space-y-2">
                <li>Jane Doe - CEO of Tech Innovators</li>
                <li>John Smith - Game Developer at Awesome Games Studio</li>
                <li>Dr. Emily Johnson - Computer Science Professor at Bay Area University</li>
              </ul>
            </CardContent>
          </Card>

          <Card id="judges" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Guest Judges</CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-blue-900 border-blue-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Michael Brown</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-200">
                  <p>Founder of Educational Games Inc.</p>
                  <p className="mt-2 text-sm">Expert in gamification for education</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-900 border-blue-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Sarah Lee</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-200">
                  <p>Lead Designer at Social Impact Games</p>
                  <p className="mt-2 text-sm">Specializes in games for social change</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-900 border-blue-700">
                <CardHeader>
                  <CardTitle className="text-lg text-white">David Wilson</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-200">
                  <p>STEM Education Coordinator for Sunnyvale School District</p>
                  <p className="mt-2 text-sm">Advocate for tech in schools</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card id="faq" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">What should I bring to the hackathon?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    Bring your laptop, charger, water bottle, and any other devices you might need. All code must be open source, however, and all programming must be done within the event. Don't forget to bring your creativity and enthusiasm!
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Do I need to have coding experience?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    While some coding experience is helpful, it's not required. We welcome participants of all skill levels and will have mentors available to help you learn and create your project.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Will food be provided?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    Yes, we will provide lunch and snacks throughout the day to keep you energized and focused on your projects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Will this cost money?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    No! The hackathon is free to attend and all food is included.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Who can participate?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    Anybody in grades 5-10, and no prior coding experience is required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Can I work in a team?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    Totally! Teams are up to 4 people, but you can go solo if you would like. Teams must fit within an age bucket: Everyone on your team must be either 5th and 6th graders, 7th and 8th graders, 9th and 10th graders, or 11th and 12th graders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">What if I have dietary restrictions?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    No problem! Mention them in the signup form, and they will be taken into account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">Where can I check in?</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    At the front of the school.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9" className="border-blue-800">
                  <AccordionTrigger className="text-blue-100">I have another question...</AccordionTrigger>
                  <AccordionContent className="text-blue-200">
                    You can send us an email at helioshackathon@gmail.com!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card id="sponsors" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Our Sponsors</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Gold Sponsors</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="TechCorp Logo" width={150} height={75} />
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="InnovatEd Logo" width={150} height={75} />
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="FutureTech Logo" width={150} height={75} />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Silver Sponsors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="CodeCraft Logo" width={100} height={50} />
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="ByteWise Logo" width={100} height={50} />
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="DataDreams Logo" width={100} height={50} />
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <Image src="/placeholder.svg" alt="AIFuture Logo" width={100} height={50} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="prizes" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Prizes</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-4">High School (9th-10th and 11th-12th)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">First Place</h4>
                      <p className="text-blue-200">Airpods</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-gray-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">Second Place</h4>
                      <p className="text-blue-200">Gaming Controllers (of your team's choice)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">Third Place</h4>
                      <p className="text-blue-200">$25 Starbucks gift card</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-100 mb-4">Middle School (5th-6th and 7th-8th)</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">First Place</h4>
                      <p className="text-blue-200">Gaming Keyboard</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-gray-400" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">Second Place</h4>
                      <p className="text-blue-200">$20 Amazon Gift Card</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-100">Third Place</h4>
                      <p className="text-blue-200">1 Month of ChatGPT 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card id="sponsorship" className="bg-blue-950 border-blue-800">
            <CardHeader className="bg-blue-900">
              <CardTitle className="text-2xl text-white">Sponsorship Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4 text-blue-100">
              <h3 className="text-xl font-semibold">Why be a sponsor?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>To support youth engagement in STEM</li>
                <li>To help young people make their community a better place</li>
                <li>To gain community visibility for your business</li>
                <li>To spark a fascination with computer science</li>
              </ul>
              <h3 className="text-xl font-semibold">How will funds be used?</h3>
              <p>Donations will be used for prizes, materials, and food for the participants.</p>
              <h3 className="text-xl font-semibold">Sponsorship Tiers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">Silver Tier ($150-$200)</h4>
                  <ul className="list-disc list-inside">
                    <li>Display your logo on our HackaSun website</li>
                    <li>Provide an official certificate of sponsorship</li>
                    <li>Mention your business at the opening and closing ceremony</li>
                    <li>Give you the opportunity to encourage STEM and computer science education locally</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Gold Tier ($200+)</h4>
                  <p>All benefits of Silver Tier, plus:</p>
                  <ul className="list-disc list-inside">
                    <li>Display your logo on HackaSun t-shirts</li>
                    <li>Send promotional emails of your business to all participants</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">How to sponsor</h3>
                <p>To become a sponsor or for more information, please contact us:</p>
                <div className="flex items-center mt-2">
                  <Mail className="w-6 h-6 mr-2 text-blue-300" />
                  <a href="mailto:sponsorhelioshacks@gmail.com" className="text-blue-400 hover:underline">
                    sponsorhelioshacks@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="https://forms.gle/unt6zTrqDhgAQozL7" passHref>
              <Button className="text-lg py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a target="_blank" rel="noopener noreferrer">
                  Register Now and Start Your Coding Adventure!
                </a>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
