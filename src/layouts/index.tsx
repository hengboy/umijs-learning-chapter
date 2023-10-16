import {Link, Outlet, useLocation} from 'umi';
import styles from './index.less';
import Login from "@/pages/login";

export default function Layout() {
    const location = useLocation();
    // 根据location.pathname判断跳转到不同的Layout
    return (
        <div className={styles.navs}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/docs">Docs</Link>
                </li>
                <li>
                    <a href="https://github.com/umijs/umi">Github</a>
                </li>
                <li>
                    <a href="/login">Login Page</a>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}
