import {useRoutes,Navigate,RouteObject} from "react-router-dom"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Main from "../pages/Main"
import Error from "../pages/404"
import Article from "../pages/Article"
import Question from "../pages/Question"
import Achievement from "../pages/Achievement"
import Work from "../pages/Work"
import Thing from "../pages/Thing"
import ArticleUp from "../pages/Article_up"
import QuestionUp from "../pages/QuestionUp"
//导入所有路由
const metaRouters:any= import.meta.globEager("./modules/*.tsx");
const routerArray:RouteObject[]=[]
Object.keys(metaRouters).map(item => {
	Object.keys(metaRouters[item]).map((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});
export const rootRouter:RouteObject[]=[
    {
        path: "/",
		element: <Navigate to="/login" />
    },
    {
        path: "/login",
		element: <Login/>
    },
    {
        path: "/articleUp",
		element: <ArticleUp/>
    },
    {
        path: "/questionUp",
		element: <QuestionUp/>
    },
    {
        path: "/home",
		element: <Home/>,
        children:[ 
            {
            // 默认显示
                index:true,
                element: <Main/>
            },
            {
                path:"/home/article",
                element: <Article/>
            },
            {
                path:"/home/question",
                element: <Question/>
            },
            {
                path:"/home/achievement",
                element: <Achievement/>
            },
            {
                path:"/home/work",
                element: <Work/>
            },
            {
                path:"/home/thing",
                element: <Thing/>
            },
            
        ]
    },
    {
        path: "/404",
		element: <Error/>,
    },
    ...routerArray,
    {
        path: "*",
		element: <Navigate to="/404" />
    }
];
const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;