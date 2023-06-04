import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='cv w-full min-h-96 bg-white grid grid-rows-1 grid-flow-col gap-4'>
            <div className='col left_cv '>
             
              <div className='portimg  '>
               
               <img className='shadow-lg' src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/1.jpg" />
               
               <br/>
               <h1 className='text-2xl text-white font-semibold'>SENG</h1>
               <p className='text-2xl text-white font-semibold'>SEANG LENG</p>
               <br/>
               <h2 className='text-base text-white font-semibold'>Reference</h2> <br/>
               <p className='text-xs text-white'><storng className=' text-white font-semibold'>Position :</storng>senior core banking </p>
               <p className='text-xs text-white'><storng className=' text-white font-semibold'>Email :</storng>seth.rupp.@rupp.com </p>
               <p className='text-xs text-white'><storng className=' text-white font-semibold'>Telephone :</storng>+855 843 345 44</p>

              </div>

            </div>
            <div className='col right_cv '>
              <h2 className='skill text-black font-semibold'>Experience</h2>
              <p className='bg-black h-1 w-72'></p><br/>
              <p className='texth '>IT Instructor – Position or Specialize (optional)</p>
              
                <li className='ml-5'>
                    <a className='text_li'>Specialize on Blockchain, SQL & Data Modeling, Android, Flutter</a>
                </li>
                <li className='ml-5'>
                     <a className='text_li'>Prepare course syllabus and material</a>
                </li>
                <li className='ml-5'>
                    <a className='text_li'>Support Training Department</a>
                </li>
                <br/>
                <p className='texth '>Senior UI/UX Designer </p>
                
                <li className='ml-5'>
                    <a className='text_li'>Prepare the templates</a>
                </li>
                <li className='ml-5'>
                     <a className='text_li'>Design website template </a>
                </li>
                <li className='ml-5'>
                    <a className='text_li'>Design mobile template</a>
                </li>
                 <li className='ml-5'>
                    <a className='text_li'>Support team with leader of the UI position</a>
                </li>
                <br/>
                <h2 className='skill text-black font-semibold'>Experience</h2>
                <p className='bg-black h-1 w-72'></p>
                <br/>
                <p className='texth '>Royal university of Phnom Penh - RUPP</p>
                <p className='text_li'>2021 - 2024</p>

                <li className='ml-5'>
                    <a className='text_li'>C, C++ , JAVA programming language </a>
                </li>
                <li className='ml-5'>
                     <a className='text_li'>Database management system (SQL, MySQL server )</a>
                </li>
                <li className='ml-5'>
                    <a className='text_li'>Web - development</a>
                </li>
                 <li className='ml-5'>
                    <a className='text_li'>Management information system</a>
                </li>
                <br/>
                <p className='texth'>Art design - Website design</p>
                <p className='text_li'>2021</p>

                <li className='ml-5'>
                     <a className='text_li'>Figma - design</a>
                </li>
                <li className='ml-5'>
                    <a className='text_li'>Front - end design</a>
                </li>
                 <li className='ml-5'>
                    <a className='text_li'>Editing photos</a>
                </li>
                <br/>
                {/* <h2 className='skill text-black font-semibold'>Skills</h2>
                <p className='bg-black h-1 w-72'></p>
                <br/> */}



             
              

            </div>
        </div>
        <br/>

        <div className='cv w-full min-h-96 bg-white grid grid-rows-1 grid-flow-col gap-4'>

            <div className='col left_cv  '>
            <h2 className='text-base ml-6 mt-5 text-white font-semibold'>Contact Us</h2> 
            <br/>
             <p className='text-xs ml-6 text-white'><storng className=' text-white font-semibold'>Email :</storng> mr.leng@gmail.com</p>
               <p className='text-xs ml-6 text-white'><storng className=' text-white font-semibold'>Address :</storng> St 562, Phnom Penh 12151</p>
               <p className='text-xs ml-6 text-white'><storng className=' text-white font-semibold'>Telephone :</storng>+855 843 345 44</p>


            </div>





            <div className='col right_cv '>
            <h2 className='skill text-black mt-3 font-semibold'>Skills</h2>
                <p className='bg-black h-1 w-72'></p>
                <br/>
                <p className='text-xs'>Full stack development ( Pro )</p>

                <li className='ml-5'>
                    <a className='text_li'>Front - end</a>
                </li>
                 <li className='ml-5'>
                    <a className='text_li'>Back - end</a>
                </li>
                <br/>
                <h2 className='skill text-black font-semibold'>Language</h2>
                <p className='bg-black h-1 w-72'></p>
                <br/>
                <p className='text-xs'>English</p>

                <li className='ml-5'>
                    <a className='text_li'>ACE IELTS teacher trainer</a>
                </li>


            </div>
        </div>
    </main>
  )
}
