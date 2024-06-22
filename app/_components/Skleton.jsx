"use client"
import { Skeleton } from "@/components/ui/skeleton"

export  function SkletonCom() {
  return (
  <div className="text-center my-8">
      <div className="flex flex-col space-y-3 w-fit mx-auto">
   
      <div className="space-y-2">
        <Skeleton className="h-4 w-[650px] py-3 rounded-sm" />
        <Skeleton className="h-4 w-[600px] py-4" />
        <Skeleton className="h-4 w-[650px]" />
        <Skeleton className="h-4 w-[500px]" />
        <Skeleton className="h-4 w-[400px]" />
        <Skeleton className="h-4 w-[700px]" />
      </div>
    </div>
  </div>
  )
}
