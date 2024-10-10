// app/page.js
import dbConnect from '../lib/mongodb';

export default async function Home({ searchParams }) {
  // Call the dbConnect function to establish the database connection
  await dbConnect();

  // Extract the name from searchParams
  const name = searchParams?.name || 'World';

  // Render the component with the greeting message
  return (
    <div>
      {/* Correctly escape single quotes */}
      <h1>Hello, it&#39;s {name}!</h1>
    </div>
  );
}
