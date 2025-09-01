import { Skeleton } from "@/components/ui/skeleton"

export default function EventLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Skeleton */}
      <div className="relative h-96 bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="w-20 h-20 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-12 w-96" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
              <div className="flex gap-3 mb-6">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <Skeleton className="w-10 h-10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Skeleton */}
      <div className="bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-20" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-8 w-64 mb-8" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-32" />
                <div className="space-y-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="w-4 h-4" />
                      <Skeleton className="h-4 flex-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
