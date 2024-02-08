import MainContentCard from "@/components/main-content-card";


export default function Home() {
  return (
      <div>
        <div className='py-5 mb-5 flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>Dashboard</h2>
          <button className='text-white text-sm bg-[#476CDA] px-2 py-1 rounded'>Generate Report</button>
        </div>
        <div className='w-full grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4' >
          <MainContentCard/>
          {/*<MainContentCard/>*/}
          {/*<MainContentCard/>*/}
          {/*<MainContentCard/>*/}
        </div>
      </div>
  );
}
