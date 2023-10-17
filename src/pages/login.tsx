import {useState} from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (username === '' || password === '') {
            alert('用户名或密码不可以为空.');
            return;
        }
        location.href = "/";
    }

    return (
        <div>
            <h2>欢迎登录系统</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" onChange={e => setUsername(e.target.value)} placeholder="请输入用户名"/>
                <input name="password" type="password" onChange={e => setPassword(e.target.value)}
                       placeholder="请输入密码"/>
                <button type="submit">登录</button>
            </form>

        </div>
    );
}