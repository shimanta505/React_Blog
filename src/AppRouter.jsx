import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";


const AppRouter = () => {

    const router = createBrowserRouter(
        [
            {
                path: '/',
                Component: Layout,
                children:
                    [
                        {
                            index: true,                           
                            Component: Home
                        },
                        {
                            path: "about",
                            Component: About,
                        }
                    ],
            }
        ]
    );

    //     const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route path='/' element={<Layout />}>
    //       <Route path='' element={<Home />} />
    //       <Route path='about' element={<About />} />
    //       <Route 
    //      // loader={githubInfoLoader}
    //      // path='github' 
    //      // element={<Github />}
    //        />
    //     </Route>
    //   )
    // )
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRouter;