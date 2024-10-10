import Image from "next/image";

// app/page.js
import dbConnect from '../lib/mongodb';

export default async function Home({ searchParams }) {
  // Call the dbConnect function to establish the database connection
  await dbConnect();

  // Retrieve the `name` parameter from the URL's search parameters
  const name = searchParams?.name || 'World';

  // Render the component with the greeting message
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}


// export default function Home({ params, searchParams }) {
//   console.debug(params, searchParams);
//   const name = searchParams['name'] || 'World';
//   return <h1>Hello {name}</h1>;
// }
