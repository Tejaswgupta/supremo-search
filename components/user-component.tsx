/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/jvyovczDOYw
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Archivo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExperienceDetail, Person } from "@/lib/types";
import { useRouter } from "next/router";
import { useState } from "react";

type RelatedPeople = {
  name: string;
  identity_no: string;
  experience: ExperienceDetail;
}

export function UserComponent({person}:{person:Person}) {

  const [relatedPeople, setRelatedPeople] = useState<RelatedPeople[] | null>(null);
  const [activeMinistry, setActiveMinistry] = useState<string|null>(null);

  const router = useRouter();

    const handleSearch = async ({ministry,periodFrom,periodTo}) => {
      // Perform API request to the search endpoint
    setActiveMinistry(ministry);
    const response = await fetch('/api/search_by_experience', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ministry, period_from: periodFrom, period_to: periodTo }),
    });

    if (response.ok) {
      const data = await response.json();
      setRelatedPeople(data);

    } else {
      console.error('Error:', response.statusText);
    }
  };

    const parseAndFormatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
    };


       const removeHtmlTags = (htmlString: string): string => {
        return htmlString.replace(/<[^>]+>/g, '');
       };
  
  return (
    <div className="px-4 md:px-6 py-12 flex flex-wrap max-w-full justify-center">
      <div className="w-auto max-w-xl mr-[80px]">
        <div className="flex flex-col items-center gap-6">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold">{ person.name}</h1>
            <div className="text-gray-500 dark:text-gray-400">{person.service}</div>
            <div className="text-gray-500 dark:text-gray-400 underline">Allotment Year: {person.allotment_year}</div>
             <div className="text-gray-500 dark:text-gray-400">Date of Birth: {parseAndFormatDate(person.date_of_birth)}</div>
              <div className="text-gray-500 dark:text-gray-400">Domicile: {person.place_of_domicile}</div>
            <div className="text-gray-500 dark:text-gray-400">Cadre State: {person.cadre_state}</div>
            
          </div>
        </div>
      </div>

          <div className="grid gap-4 max-w-min mr-[80px]">
          <div>
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Designation</TableHead>
                    <TableHead>Ministry</TableHead>
                    <TableHead>Period From</TableHead>
                      <TableHead>Period To</TableHead>
                  </TableRow>
                </TableHeader>
             
                <TableBody>
                     {person.experience_details.map(e => {
                       return <TableRow onClick={async () => {
                    const data = await handleSearch({ministry:e.ministry,periodFrom:e.period_from,periodTo:e.period_to});
                    console.log(data);
                  }}>
                    <TableCell className="font-medium">{e.designation}</TableCell>
                    <TableCell>{removeHtmlTags(e.ministry)}</TableCell>
                    <TableCell>
                     {parseAndFormatDate(e.period_from)}
                    </TableCell>
                       <TableCell>
                     {parseAndFormatDate(e.period_to)}
                    </TableCell>
                  </TableRow>
                })}


                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="grid gap-4 max-w-min">
          <div>
          <h2 className="text-xl font-semibold">Experience Details</h2>
          <h2 className="text-l">Worked at {activeMinistry}</h2>
          
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Period From</TableHead>
                      <TableHead>Period To</TableHead>
                  </TableRow>
                </TableHeader>
             
                <TableBody>
                     {relatedPeople?.filter(f => f.identity_no != person.identity_no)?.map(e => {
                       return <TableRow onClick={async () => {
                         router.push(`/user/${e.identity_no}`)
                  }}>
                    <TableCell className="font-medium">{e.name}</TableCell>
                    <TableCell>{removeHtmlTags(e.experience.designation)}</TableCell>
                    <TableCell>
                     {parseAndFormatDate(e.experience.period_from)}
                    </TableCell>
                       <TableCell>
                     {parseAndFormatDate(e.experience.period_to)}
                    </TableCell>
                  </TableRow>
                })}


                </TableBody>
              </Table>
            </div>
          </div>
        </div>
    </div>
  )
}