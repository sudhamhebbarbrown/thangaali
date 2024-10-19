'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface CheckAvailabilityProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CheckAvailability({ isOpen, onOpenChange }: CheckAvailabilityProps) {
  const [checkInDate, setCheckInDate] = useState<Date>()
  const [checkOutDate, setCheckOutDate] = useState<Date>()
  const [availability, setAvailability] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckAvailability = () => {
    if (checkInDate && checkOutDate) {
      setIsLoading(true)
      // Simulating a backend call
      setTimeout(() => {
        setAvailability("Available")
        setIsLoading(false)
      }, 1500)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800">
        <DialogHeader>
          <DialogTitle className='text-green-600 dark:text-green-400'>Check Availability</DialogTitle>
          <DialogDescription>
            Select your check-in and check-out dates to check room availability.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkInDate ? format(checkInDate, "PPP") : <span>Check-in Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOutDate ? format(checkOutDate, "PPP") : <span>Check-out Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOutDate}
                  onSelect={setCheckOutDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCheckAvailability} disabled={!checkInDate || !checkOutDate || isLoading}>
            {isLoading ? "Checking..." : "Check Availability"}
          </Button>
        </DialogFooter>
        {availability && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
            {availability}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}