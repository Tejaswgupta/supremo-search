import { UserComponent } from "@/components/user-component";
import { Person } from "@/lib/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




export default function HomePage(){
    const router = useRouter();
  

    const [person, setPerson] = useState<Person | null>(null);

    const handleSearch = async (identity_no:string) => {

    const response = await fetch('/api/search_by_id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identity_no }),
    });

    if (response.ok) {
      const data = await response.json();
        console.log(`Data`, data)
        if (data) {
        setPerson(data[0]);    
        }

    } else {
      console.error('Error:', response.statusText);
    }
  };

    useEffect(() => {
        // const data = sessionStorage.getItem('person')
        // console.log(JSON.parse(data!))
        // const person: Person = jsonToPerson(JSON.parse(data!));
        // console.log(person)
        // setPerson(person)
          console.log(`out`,router.query.slug);
        if (router.query.slug) {
        console.log(router.query.slug);
            handleSearch(router.query.slug as string);
        }

    },[router.query.slug])

    if (!person){
        return <></>
    }

    console.log(`PERSON`,person)

    return <UserComponent person={person}>

    </UserComponent>

}