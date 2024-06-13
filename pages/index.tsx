/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AZsE24Ncjho
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Person } from "@/lib/types";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Component() {

  const [person, setPerson] = useState<Person[]>([]);
  const [name, setName] = useState('');

  const router = useRouter();

  const handleSearch = async (name:string) => {
    const response = await fetch('/api/search_by_name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      const data = await response.json();
        console.log(`Data`, data)
        if (data) {
        setPerson(data);    
        }

    } else {
      console.error('Error:', response.statusText);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center rounded-md bg-white shadow-sm dark:bg-gray-950">
          <Input
            type="search"
            placeholder="Search..."
            className="flex-1 rounded-l-md border-0 bg-transparent py-2 pl-4 pr-2 text-gray-900 focus:ring-0 dark:text-gray-50"
            onChange={(e)=> setName(e.target.value)}
          />
          <Button className="rounded-r-md px-4 py-2" onClick={()=> handleSearch(name)}>
            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>
        <div className="space-y-2">
          {person.map(n => {
      return           <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
            <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-50">{n.name}</h3>
            </div>
            <Button className="rounded-r-md px-4 py-2" onClick={()=>{
              router.push(`/user/${n.identity_no}`)
            }}>
              <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 ml-10" />
            </Button>
          </div>
    })}
      
        </div>
      </div>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}