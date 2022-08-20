import {useRoutes,Navigate} from "react-router-dom"
import {RouteObject} from "./interface"
import Login from "../pages/Login"
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