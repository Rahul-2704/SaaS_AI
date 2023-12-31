import React from 'react'
import Heading from '@/components/Heading'
"use client"
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
const ConversationPage = () => {
    const form=useForm({
        defaultValues:{
            prompt:""
        }
    });

  return (
    <div>
        <Heading 
        title='Conversation'
        description='Our most advanced conversation model'
        Icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        />
        <div className='px-4 lg:px-8'>

        </div>
    </div>
  )
}

export default ConversationPage