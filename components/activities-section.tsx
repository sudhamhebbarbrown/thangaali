'use client'

import { GiCampfire, GiWaterfall, GiMountainRoad, GiForest} from "react-icons/gi";


const activities = [
  {
    icon: GiCampfire,
    title: "Firecamp",
    description: "Experience the warmth and camaraderie of a traditional firecamp under the starry sky."
  },
  {
    icon: GiWaterfall,
    title: "Waterfall",
    description: "Discover breathtaking waterfalls nestled in lush forests, perfect for a refreshing adventure."
  },
  {
    icon: GiMountainRoad,
    title: "Trekking",
    description: "Embark on exciting trekking trails that offer stunning views and unforgettable experiences."
  },
  {
    icon: GiForest,
    title: "Tea Estate",
    description: "Explore picturesque tea estates and learn about the art of tea cultivation and processing."
  }
]

export function ActivitiesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Our Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 flex flex-col items-center">
            <activity.icon className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">{activity.title}</h3>
            <p className="text-gray-600 text-center">{activity.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}