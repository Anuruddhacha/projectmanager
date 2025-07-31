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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        This is your public display name.
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
      </form>
      </Form>
    </div>
  )
}

export default CreateProjectForm