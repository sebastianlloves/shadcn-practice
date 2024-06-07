import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tab1 from './ui/tab1'
import Tab2 from './ui/tab2'
import Tab3 from './ui/tab3'

function TabsPage () {
  return (
    <div className='w-4/6'>
      <Tabs orientation='vertical' defaultValue='account'>
        <TabsList className='grid w-full gap-3 grid-cols-3'>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='password'>Password</TabsTrigger>
          <TabsTrigger value='card3'>Card 3</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Tab1 />
        </TabsContent>
        <TabsContent value='password'>
          <Tab2 />
        </TabsContent>
        <TabsContent value='card3'>
          <Tab3 />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TabsPage
