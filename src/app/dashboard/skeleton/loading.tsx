import { Avatar } from '@/components/ui/avatar'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

function Loading () {
  const data = Array.from({ length: 9 })
  return (
    <div className='grid grid-cols-4 gap-8'>
      {data.map((_, index) => (
        <Card key={index}>
          <CardHeader className='flex-row justify-evenly gap-x-4'>
            <Avatar className='justify-evenly items-center w-1/3'>
              <Skeleton className='h-10 w-10 rounded-full' />
            </Avatar>
            <div className='w-full flex-grow-0'>
              <CardTitle className='w-2/3 h-5'><Skeleton className='mx-6' /></CardTitle>
              <CardDescription className='w-full h-4'><Skeleton className='mx-6 h-4' /></CardDescription>
            </div>
          </CardHeader>
          <CardFooter className='justify-end'>
            <Skeleton className='h-9 w-16' />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Loading
