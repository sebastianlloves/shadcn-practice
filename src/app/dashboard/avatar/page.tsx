import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function AvatarPage () {
  return (
    <div className='flex justify-center h-64 items-center'>
      <Avatar>
        <AvatarImage src='/* https://github.com/shadcn.png */' />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
      <p className='ml-3'>@seballoves</p>
    </div>
  )
}

export default AvatarPage
