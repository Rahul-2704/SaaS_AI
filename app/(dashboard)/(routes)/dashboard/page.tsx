"use client"
import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs/app-beta";
import { ArrowRight, MessageSquare,ImageIcon,VideoIcon,Music,Code,Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const tools=[
    {
        label:"Conversation",
        icon:MessageSquare,
        color:"text-violet-500",
        bgColor:"bg-violet-500/10",
        href:"/conversation"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        href:"/image",
        bgColor:"text-pink-700/10",
        color:'text-pink-700'
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        href:"/video",
        bgColor:"text-orange-700/10",
        color:'text-orange-700'
    },
    {
        label:"Code",
        icon:Code,
        href:"/code",
        bgColor:"text-green-500/10",
        color:'text-green-700'
    },
    {
        label:"Music Generation",
        icon:Music,
        href:"/music",
        bgColor:"text-emerald-500/10",
        color:'text-emerald-500'
    },
]
const DashboardPage=()=>{
    const router=useRouter();
    return(
        <div>
            <div className="mb-8 space-y-4">
                <div className="text-2xl md:text-4xl font-bold text-center">
                    Explore the power of AI
                </div>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with the smarets AI Experience the power of AI
                </p>
            </div>
            <div className="px-4 md:px-2- lg:px-32 space-y-4">
                    {
                        tools.map((tool)=>(
                            <Card key={tool.href}
                            onClick={()=>router.push(tool.href)}
                            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
                            <div className="flex items-center gap-x-4">
                                <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                                    <tool.icon className={cn("w-8 h-8",tool.color)}/>
                                </div>
                                <div className="font-semibold">
                                    {tool.label}
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5"/>
                            </Card>
                        ))
                    }
            </div>
        </div>
    )
}
export default DashboardPage