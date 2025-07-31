import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DialogClose, DialogContent } from "@radix-ui/react-dialog"
import { Button } from "../../components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { tags } from "../ProjectList/ProjectList"
import { CrossIcon } from "lucide-react"
import { Cross1Icon } from "@radix-ui/react-icons"


const CreateProjectForm = () => {
   const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags: ["Javascripts", "react"],
    },
  })

   const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Input
          type="text"
          placeholder="project name"
          {...field}
          className='border w-full border-gray-700 py-5 px-5'
        />
      </FormControl>
      <FormDescription>
        This is your project name.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>


<FormField
  control={form.control}
  name="description"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Input
          type="text"
          placeholder="project description"
          {...field}
          className='border w-full border-gray-700 py-5 px-5'
        />
      </FormControl>
      <FormDescription>
        This is your project description.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>



<FormField
  control={form.control}
  name="category"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Select
        defaultValue="fullstack"
        value={field.value}
        onValueChange={(value)=>{field.onChange(value)}}
       // className='border w-full border-gray-700 py-5 px-5'
        >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="fullstack">Full Stack</SelectItem>
    <SelectItem value="frontend">Frontend</SelectItem>
    <SelectItem value="backend">Backend</SelectItem>
  </SelectContent>
</Select>
      </FormControl>
      <FormDescription>
        This is your project category.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="tags"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Select
        onValueChange={(value)=>{field.onChange(value)}}
       // className='border w-full border-gray-700 py-5 px-5'
        >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Tags" />
  </SelectTrigger>
  <SelectContent>
    {tags.map((item)=><SelectItem key={item} value={item}>{item}</SelectItem>)}
  </SelectContent>
</Select>
      </FormControl>
      <div className="flex gap-1 flex-wrap">
        <div className="cursor-pointer flex rounded-full py-1 px-4 gap-2 border items-center">
          <span className="text-sm">
            django
          </span>
          <Cross1Icon className="h-3 w-3"/>
        </div>
      </div>
      <FormDescription>
        This is your project tags.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>

 <DialogClose>
    {false?<div><p>you can create only 3 projects with free plan. Please upgrade</p></div> : <Button type="submit" className="w-full my-5">Create Project</Button>}
 </DialogClose>


      </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm