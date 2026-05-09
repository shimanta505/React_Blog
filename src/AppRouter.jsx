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


    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRouter;