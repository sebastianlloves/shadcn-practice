import { Button } from '@/components/ui/button'
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons'

export default function ButtonDemo () {
  return (
    <div className='grid grid-cols-7 gap-3'>
      <Button>Botón</Button>
      <Button size='default' variant='secondary'>botón</Button>
      <Button size='sm' variant='ghost'>botón</Button>
      <Button size='icon' variant='link'>botón</Button>
      <Button size='lg' variant='destructive'>botón</Button>
      <Button size='default' variant='outline'>botón</Button>
      <Button size='default' variant='success' capitalize>botón</Button>
      <Button variant='outline' size='icon' className='rounded-full'>
        <ChevronRightIcon className='h-4 w-4' />
      </Button>
      <Button className='gap-x-3' variant='secondary'>
        <EnvelopeOpenIcon />Login with Email
      </Button>
      <Button disabled variant='outline'>
        <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> Please wait
      </Button>
    </div>
  )
}
