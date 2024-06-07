import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return Array.from({ length: 9 })
}

async function SkeletonPage () {
  const data = await getData()
  return (
    <div className='grid grid-cols-4 gap-8'>
      {data.map((_, index) => (
        <Card key={index}>
          <CardHeader className='flex-row justify-evenly gap-x-4'>
            <Avatar className='justify-evenly items-center'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className='w-2/3 h-5'>{`Usuario ${index + 1}`}</CardTitle>
              <CardDescription className='w-full h-4'>{`Tarjeta del usuario ${index + 1}`}</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className='justify-end'>
            <Button className='w-16' variant='outline'>Info</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default SkeletonPage
