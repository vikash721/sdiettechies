import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft } from "lucide-react"

export default function EventNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-12 h-12 text-gray-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Event Not Found
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The event you're looking for doesn't exist or may have been removed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/events">
            <Button className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
