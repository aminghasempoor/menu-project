import { Input } from "@/components/ui/input";

export function Banner (){
    return(
        <div className={"flex flex-col justify-center items-center gap-y-3 px-5"}>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                هر انتخاب ،<br/>یک تجربه خوشمزه
            </p>
            <Input type="email" placeholder="جستجو..." />
        </div>
    )
}