import { Badge } from '@/components/ui/badge'

export default function BadgePage () {
  return (
    <div className='flex gap-6'>
      <Badge>Default</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='outline'>outline</Badge>
      <Badge variant='success'>success</Badge>
      <Badge variant='destructive'>destructive</Badge>
      <Badge capitalize variant='warning'>warning</Badge>
    </div>
  )
}
