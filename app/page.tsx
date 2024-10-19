
'use client'

import { useState } from 'react'
import { StickyNavbar } from "@/components/sticky-navbar"
import { ActivitiesSection } from "@/components/activities-section"
import CheckAvailability from "@/components/check-availability"
import { ContactUs } from "@/components/contact-us"
import HeroGreen from "@/components/hero-green"
import { RoomCarousel } from "@/components/room-carousel"
import { GalleryCarouselComponent } from "@/components/gallery-carousel"
// export default function Page() {
//   return (
//     <div>
//       <StickyNavbar />
//       <HeroGreen />
//       <ActivitiesSection />
//       <CheckAvailability />
//     </div>
//   )
// }



// import Hero from './hero'
// import CheckAvailability from './check-availability'

export default function HomePage() {
  const [isAvailabilityModalOpen, setIsAvailabilityModalOpen] = useState(false)

  const handleOpenAvailabilityModal = () => {
    setIsAvailabilityModalOpen(true)
  }

  return (
    <main>
      <StickyNavbar />
      <HeroGreen onCheckAvailability={handleOpenAvailabilityModal} />
      <CheckAvailability
        isOpen={isAvailabilityModalOpen}
        onOpenChange={setIsAvailabilityModalOpen}
      />
      <ActivitiesSection />
      <RoomCarousel />
      <GalleryCarouselComponent />
      <ContactUs />
    </main>
  )
}
