import React from 'react'
import {Card, CardContent} from '../../components/ui/card'
import {ScrollArea} from '../../components/ui/scroll-area'
import { Button } from '../../components/ui/button'
import { Icon } from 'lucide-react'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const tags = [
  "all",
  "react",
  "nextjs",
  "springboot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django"]

const ProjectList = () => {

  const handleFilterChanged = (section, value) =>{
    console.log(value, section);
  }
  return (
     <div className='relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5'>
      <section className='filterSection'>
        <Card className='p-5 sticky top-10'>
  <div className='flex justify-between lg:w-[20rem]'>
        <p className='text-xl -tracking-wider'>filters</p>
        <Button size={"icon"} variant={"ghost"}>
          <MixerHorizontalIcon/>
        </Button>
  </div>

   <CardContent className='mt-5'>
    <ScrollArea className='space-y-7 h-[70vh]'>
     <div>
          <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
          <div className='pt-5'>
            <RadioGroup
            className="space-y-7 pt-5"
             defaultValue="all" onValueChange={(value)=>handleFilterChanged("category", value)}>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='all' id='r1'/>
                <Label htmlFor='r1'>all</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='fullstack' id='r2'/>
                <Label htmlFor='r2'>fullstack</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='frontend' id='r3'/>
                <Label htmlFor='r3'>frontend</Label>
              </div>
              <div className='flex items-center gap-2'>
                <RadioGroupItem value='backend' id='r4'/>
                <Label htmlFor='r4'>backend</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className='pt-9'>
          <h1 className='pb-3 text-gray-400 border-b'>Tag</h1>
          <div className='pt-5'>
            <RadioGroup
            className="space-y-7 pt-5"
             defaultValue="all" onValueChange={(value)=>handleFilterChanged("tag", value)}>
              {tags.map((item)=><div key={item} div className='flex items-center gap-2'>
                <RadioGroupItem value={item} id={`r1-${item}`}/>
                <Label htmlFor={`r1-${item}`}>item</Label>
              </div>)}
            </RadioGroup>
          </div>
        </div>
    </ScrollArea>
   </CardContent>
        </Card>
      </section>
      <section className='projectListSection w-full lg:w-[48rem]'>
        
      </section>
    </div>
  )
}

export default ProjectList