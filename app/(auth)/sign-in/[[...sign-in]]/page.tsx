import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold'>Welcome to the app</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <SignIn />
        </div>
    </div>
  >
}