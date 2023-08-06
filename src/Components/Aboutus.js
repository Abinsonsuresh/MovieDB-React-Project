import React from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from './context'

const Aboutus = () => {
  const {mode, setMode} = useGlobalContext()
  return (
    <>
    
    <Navbar/>
    <div className={mode === "dark" ? "bg-black text-white" : "bg-white text-black"}>
    <div className='pt-4 h-[100vh]'>
        <div className='flex items-center justify-center'>
        <h1 className='font-bold text-2xl underline'>About us</h1>
        </div>
        {/* <h2>MovieDB</h2> */}
        <div className='pl-16 pr-16 pt-10'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aliquid, possimus quas, soluta doloremque tenetur praesentium consectetur neque ea officiis aut cumque sed sequi repudiandae blanditiis rem necessitatibus suscipit maiores. Repellendus ut dolorem totam corrupti! A eaque ullam, architecto consectetur provident omnis. Laboriosam et minus, accusamus alias porro quae ullam facilis veritatis, maxime id eligendi dolorem nobis enim asperiores aspernatur assumenda soluta ut, deserunt minima doloremque quod nesciunt rerum. Natus dicta asperiores quae animi, amet harum dolores vitae nihil! Dolorum soluta molestias et unde molestiae veritatis itaque eaque earum dolorem quia? Reprehenderit iusto eligendi quod repellat pariatur ipsam explicabo, autem necessitatibus minus repellendus ducimus commodi deserunt odit officiis debitis minima? Inventore odio dolorem accusantium nesciunt, et eos! Saepe porro nemo quis vero obcaecati. Aspernatur eum iste quis dignissimos perspiciatis, quos numquam! Temporibus facilis voluptatum ipsum obcaecati labore eum? Incidunt, quisquam nesciunt. Quisquam hic tempora eum eius fuga possimus impedit iste modi praesentium maxime. Distinctio, corporis. Obcaecati officia doloremque eveniet nostrum dolore quia aspernatur asperiores enim accusantium quod, quaerat tempore minus error debitis dolor facilis. Atque consectetur commodi qui quaerat quia sequi ipsum laborum nemo dolores, saepe magnam possimus assumenda explicabo ipsa eos cum repudiandae enim molestias dolor obcaecati sed harum deserunt natus. Nesciunt, consequuntur voluptatibus ad aperiam, voluptatem similique labore voluptas placeat, dignissimos harum perspiciatis architecto dolorem eaque quibusdam suscipit quo mollitia praesentium veritatis quos corporis optio? Voluptatibus inventore, maxime officiis ducimus quam obcaecati sunt odio animi atque, aliquam repellendus! Expedita ea ullam saepe odio illo ab cumque omnis quaerat doloribus, sapiente dolor? Sunt provident doloribus dolor perspiciatis quis voluptas sapiente cupiditate deserunt facilis culpa quia, a doloremque, minima odit veritatis vel? Praesentium, tenetur. Reiciendis similique vero eius dicta, architecto eligendi molestias debitis ipsum beatae ipsam, autem laudantium nulla quibusdam libero? Laborum et exercitationem voluptates provident delectus expedita explicabo ipsa.</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Aboutus