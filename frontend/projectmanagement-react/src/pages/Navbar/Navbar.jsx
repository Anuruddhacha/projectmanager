import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../../components/ui/button'
import CreateProjectForm from '../project/CreateProjectForm'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PersonIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between bg-black text-white'>
        
        <div className='flex items-center gap-3'>
             <p className='cursor-pointer text-violet-500 hover:text-violet-300'>Project Management</p>
             <Dialog>
               <DialogTrigger>
                <Button variant={"ghost"} className='text-violet-500 hover:text-violet-300'>New Project</Button>
               </DialogTrigger>
               <DialogContent className='bg-white'>
                <DialogHeader className='text-black'>
                    Create New Project
                </DialogHeader>
                <CreateProjectForm />
               </DialogContent>
             </Dialog>
             <Button variant={"ghost"} className='text-violet-500 hover:text-violet-300'>Upgrade Plan</Button>
        </div>

        <div className='flex gap-3 items-center'>
           <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant={"outline"} size={"icon"} className='rounded-full border-2 border-violet-500'>
                  <PersonIcon className='text-violet-500' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-white'>
              <DropdownMenuItem className='text-black hover:bg-violet-100'>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
           </DropdownMenu>
           <p className='text-violet-500'>Anuruddha</p>
        </div>
    </div>
  )
}

export default Navbar
