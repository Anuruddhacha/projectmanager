import React from 'react'
import { Card } from '../../components/ui/card'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../../components/ui/button'
import { Badge } from "@/components/ui/badge"

const ProjectCard = () => {
  return (
    <Card className='p-5 w-full lg:max-w-3xl bg-black text-white'>
        
     <div className='space-y-5'>
       <div className='space-y-2'>
          <div className='flex justify-between'>
             <div className='flex items-center gap-5'>
               <h1 className='cursor-pointer font-bold text-lg text-violet-500'>
                Create Ecommerce Project
               </h1>
               <DotFilledIcon className='text-violet-500' />
               <p className='text-sm text-gray-400'>fullstack</p>
             </div>

              <div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant={"ghost"} size={"icon"} className='rounded-full'>
                            <DotsVerticalIcon className='text-white' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-black text-white'>
                        <DropdownMenuItem className='hover:bg-violet-500'>
                            Update
                        </DropdownMenuItem>
                        <DropdownMenuItem className='hover:bg-violet-500'>
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>

          </div>

           <p className='text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, porro quod maiores perferendis sed officiis incidunt officia. Ratione, assumenda ex eveniet, magnam odio vel qui aperiam quo aliquid vitae reiciendis.
           </p>
       </div>


       <div className='flex flex-wrap gap-2 items-center'>
        {[1,1,1,1].map((item)=> <Badge key={item} variant="outline" className='border-violet-500 text-violet-500'>{'frontend'}</Badge>)}
       </div>

     </div>


    </Card>
  )
}

export default ProjectCard
