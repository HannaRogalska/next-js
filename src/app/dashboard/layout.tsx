import Link from 'next/link';
import React from 'react'

 const DashboardLayout = async ({
   children,
 }: {
   children: React.ReactNode;
 }) => {
   return (
     <div className="flex min-h-screen">
       <aside className="w-64 bg-gray-900 text-white p-6">
         <h2 className="text-xl font-bold mb-8">TaskFlow</h2>

         <nav className="flex flex-col space-y-4">
           <Link href="/dashboard">Overview</Link>
           <Link href="/dashboard/tasks">Tasks</Link>
           <Link href="/dashboard/settings">Settings</Link>
         </nav>
       </aside>
       <main className="flex-1 p-8 bg-gray-100">{children}</main>
     </div>
   );
 };

export default DashboardLayout;
