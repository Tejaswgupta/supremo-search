/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/AZsE24Ncjho
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Judson } from 'next/font/google'
import { Chivo } from 'next/font/google'

judson({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Component() {



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center rounded-md bg-white shadow-sm dark:bg-gray-950">
          <Input
            className="flex-1 rounded-l-md border-0 bg-transparent py-2 pl-4 pr-2 text-gray-900 focus:ring-0 dark:text-gray-50"
            placeholder="Search..."
            type="search"
          />
          <Button className="rounded-r-md px-4 py-2">
            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Search Result 1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is a description of the first search result.
              </p>
            </div>
            <Button size="icon" variant="ghost">
              <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Search Result 2</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is a description of the second search result.
              </p>
            </div>
            <Button size="icon" variant="ghost">
              <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
          <div className="flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm dark:bg-gray-950">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Search Result 3</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is a description of the third search result.
              </p>
            </div>
            <Button size="icon" variant="ghost">
              <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
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