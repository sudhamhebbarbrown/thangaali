'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactUs() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input type="text" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Your Phone (optional)" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" required />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Resort Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-green-600" />
                  <span>Thangaali Home Stay, Gaaligandi village, near Kalasa, Chikkamagalur Dist, 577 124.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" />
                  <span>(+91) 7204373337, (+91) 9481378100, (+91) 9880025578, (+91) 9845496385</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-600" />
                  <span>thangaali.bookings@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-green-600" />
                  <div>
                    <p>Check-in: 3:00 PM</p>
                    <p>Check-out: 11:00 AM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                  
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15538.690465607306!2d75.3662399!3d13.1830301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb3622f80311df%3A0x81beff0bd55616e4!2sThangaali%20Homestay!5e0!3m2!1sen!2sus!4v1725825998450!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )

}